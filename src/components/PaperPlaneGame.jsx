import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  AnimatePresence,
  animate,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { FaCheck, FaEnvelope, FaRedo, FaExternalLinkAlt } from 'react-icons/fa';
import { contactData } from '../data/content';
import { assetUrl } from '../utils/assetUrl';
import { gameMailbox, gameSkyBg, gameSlingshot } from '../assets/images';

/* ---------------------------------------------------------------------------
   Constants and helpers
   ------------------------------------------------------------------------ */
const G = 360; // paper planes glide; use a lighter effective gravity (px/s²)
const PULL_K = 6.5; // launch speed per px of pull
const AIR_DRAG = 0.16; // horizontal air resistance per second
const HIT_R = 46; // px: how close the plane must pass to the mailbox centre
const SKY_IMAGE = { width: 1672, height: 941 };
// Slingshot fork center and mailbox envelope center in game-sky-bg.png coordinates.
const SLING_FORKS = { x: 302, y: 548, halfWidth: 84 };
const MAILBOX_TARGET = { x: 1328, y: 555 };
const PROP_IMAGE = { width: 1312, height: 1199 };
const PROP_ART = {
  slingForkCenter: { x: 656, y: 8 },
  mailboxEnvelopeCenter: { x: 390, y: 420 },
};

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const seeded = (seed) => () => (seed = (seed * 16807) % 2147483647) / 2147483647;

function simulate(x, y, vx, vy, n = 16, dt = 0.06) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    vx *= Math.exp(-AIR_DRAG * dt);
    vy += G * dt;
    x += vx * dt;
    y += vy * dt;
    pts.push({ x, y });
  }
  return pts;
}

/* One shared AudioContext (browsers cap how many can exist) */
let audioCtx;
function getAudio() {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  audioCtx ||= new Ctx();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}
function tone(freq, at, dur, type, vol, endFreq) {
  try {
    const ctx = getAudio();
    if (!ctx) return;
    const t = ctx.currentTime + at;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, t + dur);
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t);
    osc.stop(t + dur);
  } catch {
    /* audio is optional */
  }
}
const playSwoosh = () => tone(320, 0, 0.35, 'triangle', 0.05, 140);
const playChime = () =>
  [587.33, 739.99, 880, 1174.66].forEach((f, i) => tone(f, i * 0.08, 0.45, 'sine', 0.06));

function useStageSize(ref) {
  const [size, setSize] = useState({ w: 1200, h: 760 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(([e]) =>
      setSize({ w: e.contentRect.width, h: e.contentRect.height })
    );
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  return size;
}

/* ---------------------------------------------------------------------------
   Small visual pieces
   ------------------------------------------------------------------------ */
function Plane({ w = 48 }) {
  return (
    <svg width={w} height={w * (32 / 48)} viewBox="0 0 48 32" fill="none">
      <path d="M2 4 L46 16 L14 16 Z" fill="#fff6d8" />
      <path d="M2 28 L46 16 L14 16 Z" fill="#f1c46a" />
      <path d="M14 16 L46 16" stroke="#d29a3a" strokeWidth="1" />
    </svg>
  );
}

/* Canvas starfield: stars twinkle, and the ones near the cursor light up,
   drift toward it and connect to it (and to each other) with thin lines. */
function StarField({ pointerRef, reduce }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W = 0;
    let H = 0;
    let stars = [];
    let frame = 0;
    let visible = true;
    const RADIUS = 150;

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const r = seeded(42);
      const count = clamp(Math.round((W * H) / 7000), 60, 190);
      stars = Array.from({ length: count }, () => ({
        x: r() * W,
        y: r() * H * 0.74,
        s: 0.6 + r() * 1.5,
        o: 0.45 + r() * 0.55,
        sp: 0.6 + r() * 1.8,
        ph: r() * 6.28,
        vx: (r() - 0.5) * 0.05,
      }));
    };

    const draw = (now) => {
      const t = now / 1000;
      ctx.clearRect(0, 0, W, H);
      const ptr = pointerRef.current;
      const near = [];
      for (const st of stars) {
        if (!reduce) {
          st.x += st.vx;
          if (st.x < -5) st.x = W + 5;
          if (st.x > W + 5) st.x = -5;
        }
        let x = st.x;
        let y = st.y;
        let glow = 0;
        if (ptr) {
          const d = Math.hypot(ptr.x - x, ptr.y - y);
          if (d < RADIUS) {
            glow = 1 - d / RADIUS;
            x += (ptr.x - x) * 0.05 * glow;
            y += (ptr.y - y) * 0.05 * glow;
            near.push({ x, y, glow });
          }
        }
        const tw = reduce ? 1 : 0.6 + 0.4 * Math.sin(t * st.sp + st.ph);
        ctx.globalAlpha = clamp(st.o * tw + glow * 0.5, 0, 1);
        ctx.fillStyle = '#fff6dc';
        ctx.beginPath();
        ctx.arc(x, y, st.s * (1 + glow * 0.9), 0, 6.283);
        ctx.fill();
        if (st.s > 1.6 || glow > 0.5) {
          ctx.globalAlpha *= 0.25;
          ctx.beginPath();
          ctx.arc(x, y, st.s * 3.2, 0, 6.283);
          ctx.fill();
        }
      }
      if (ptr && near.length) {
        ctx.lineWidth = 1;
        for (const a of near) {
          ctx.globalAlpha = a.glow * 0.7;
          ctx.strokeStyle = '#ffe9b8';
          ctx.beginPath();
          ctx.moveTo(ptr.x, ptr.y);
          ctx.lineTo(a.x, a.y);
          ctx.stroke();
        }
        for (let i = 0; i < near.length; i++) {
          for (let j = i + 1; j < near.length; j++) {
            const d = Math.hypot(near[i].x - near[j].x, near[i].y - near[j].y);
            if (d < 85) {
              ctx.globalAlpha = (1 - d / 85) * Math.min(near[i].glow, near[j].glow) * 0.5;
              ctx.strokeStyle = '#cfd2ff';
              ctx.beginPath();
              ctx.moveTo(near[i].x, near[i].y);
              ctx.lineTo(near[j].x, near[j].y);
              ctx.stroke();
            }
          }
        }
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = '#fff3cf';
        ctx.beginPath();
        ctx.arc(ptr.x, ptr.y, 2.2, 0, 6.283);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const loop = (now) => {
      if (visible) draw(now);
      frame = requestAnimationFrame(loop);
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);
    frame = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
    };
  }, [pointerRef, reduce]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}

function CloudBank({ id, seed, n, base, amp, stops, rim, className, drift, parallax }) {
  const blobs = useMemo(() => {
    const r = seeded(seed);
    return Array.from({ length: n }, (_, i) => ({
      cx: (i / (n - 1)) * 1700 - 50 + (r() - 0.5) * 90,
      cy: base - r() * amp,
      rx: 130 + r() * 150,
      ry: 60 + r() * 90,
    }));
  }, [seed, n, base, amp]);
  const shapes = blobs.map((b, i) => <ellipse key={i} cx={b.cx} cy={b.cy} rx={b.rx} ry={b.ry} />);
  return (
    <motion.div className={`absolute inset-x-[-5%] ${className}`} style={{ y: parallax }}>
      <motion.div
        className="h-full w-full will-change-transform"
        animate={drift ? { x: [0, -34, 0] } : undefined}
        transition={{ duration: drift, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 1600 520" preserveAspectRatio="xMidYMax slice" className="h-full w-full">
          <defs>
            <linearGradient id={`g-${id}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor={stops[0]} />
              <stop offset="0.55" stopColor={stops[1]} />
              <stop offset="1" stopColor={stops[2]} />
            </linearGradient>
          </defs>
          <g filter="url(#pp-cloud)">
            <g fill={rim} opacity=".85" transform="translate(0,18)" style={{ filter: 'blur(12px)' }}>
              {shapes}
            </g>
            <g fill={`url(#g-${id})`}>
              {shapes}
              <rect x="-100" y={base} width="1900" height="400" />
            </g>
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* ---------------------------------------------------------------------------
   Main component
   ------------------------------------------------------------------------ */
export default function PaperPlaneGame({
  skyImage = gameSkyBg,
  credit = 'Dnyandip Katkar, computer engineering student. Designed and coded by me, 2026.',
  className = '',
}) {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const planeRef = useRef(null);
  const trailRef = useRef(null);
  const raf = useRef(0);
  const timers = useRef([]);
  const dragging = useRef(false);
  const pointer = useRef(null);

  const { w, h } = useStageSize(stageRef);
  const [phase, setPhase] = useState('idle'); // idle | aiming | flying | delivered | missed
  const [pull, setPull] = useState(null); // pouch position while aiming / snapping back
  const [preview, setPreview] = useState([]);
  const [hits, setHits] = useState(0);
  const [modal, setModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [seen, setSeen] = useState(false);

  const geo = useMemo(() => {
    const small = w < 640;
    // Keep the landscape art as a cropped backdrop on phones, while laying
    // the playable props across the portrait stage. Fitting the full image
    // made both targets tiny and clustered near the center.
    const scale = Math.max(w / SKY_IMAGE.width, h / SKY_IMAGE.height);
    const renderedWidth = SKY_IMAGE.width * scale;
    const renderedHeight = SKY_IMAGE.height * scale;
    const offsetX = (w - renderedWidth) / 2;
    // The background uses object-position: center bottom for both fit modes.
    const offsetY = h - renderedHeight;
    const atArtworkPoint = ({ x, y }) => ({
      x: offsetX + x * scale,
      y: offsetY + y * scale,
    });
    const sling = small ? { x: w * 0.17, y: h * 0.73 } : atArtworkPoint(SLING_FORKS);
    const mail = small ? { x: w * 0.82, y: h * 0.64 } : atArtworkPoint(MAILBOX_TARGET);
    const imageScale = small ? clamp(w / 850, 0.38, 0.62) : scale;
    const forkHalfWidth = SLING_FORKS.halfWidth * imageScale;
    return {
      sling,
      rest: { x: sling.x, y: sling.y + (small ? 34 : 58) * imageScale },
      mail,
      forkHalfWidth,
      targetSize: clamp((small ? 150 : 160) * imageScale, small ? 72 : 48, 180),
      targetRingSize: clamp((small ? 180 : 190) * imageScale, small ? 88 : 60, 220),
      imageScale,
      handle: {
        left: sling.x - Math.max(small ? 38 : 55, 110 * imageScale),
        top: sling.y - 18 * imageScale,
        width: Math.max(small ? 100 : 110, 220 * imageScale),
        height: Math.max(small ? 140 : 150, 270 * imageScale),
      },
      maxPull: clamp(w * (small ? 0.16 : 0.12), 64, 140),
    };
  }, [w, h]);
  const { sling, rest, mail, maxPull, forkHalfWidth, handle, targetSize, targetRingSize, imageScale } = geo;
  const propHeight = w < 640 ? clamp(w * 0.43, 140, 210) : 260 * imageScale;
  const propScale = propHeight / PROP_IMAGE.height;
  const propWidth = PROP_IMAGE.width * propScale;

  /* ---- scroll-driven dusk -> night ---- */
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'start 0.25'] });
  const night = useTransform(scrollYProgress, (v) => (reduce ? 1 : clamp((v - 0.15) / 0.75, 0, 1)));
  const starsOpacity = useTransform(night, [0.3, 1], [0, 1]);
  const moonOpacity = useTransform(night, [0.5, 1], [0, 1]);
  const cloudShift = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [50, 0]);
  const cloudShiftSlow = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [24, 0]);

  const trackPointer = (e) => {
    const r = sectionRef.current.getBoundingClientRect();
    pointer.current = { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const clearTrail = () => trailRef.current?.setAttribute('points', '');
  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));

  useEffect(
    () => () => {
      cancelAnimationFrame(raf.current);
      timers.current.forEach(clearTimeout);
    },
    []
  );

  const snapBack = useCallback(
    (from) => {
      if (!from) return setPull(null);
      animate(0, 1, {
        type: 'spring',
        stiffness: 700,
        damping: 9,
        onUpdate: (t) => setPull({ x: lerp(from.x, rest.x, t), y: lerp(from.y, rest.y, t) }),
        onComplete: () => setPull(null),
      });
    },
    [rest.x, rest.y]
  );

  const reset = useCallback(() => {
    cancelAnimationFrame(raf.current);
    timers.current.forEach(clearTimeout);
    timers.current = [];
    clearTrail();
    setModal(false);
    setPreview([]);
    setPull(null);
    setPhase('idle');
  }, []);

  const fly = useCallback(
    (x, y, vx, vy, from) => {
      cancelAnimationFrame(raf.current);
      setPhase('flying');
      setPreview([]);
      playSwoosh();
      snapBack(from);
      const pts = [];
      const t0 = performance.now();
      let last = t0;

      const step = (now) => {
        const dt = Math.min((now - last) / 1000, 0.03);
        last = now;
        vx *= Math.exp(-AIR_DRAG * dt);
        vy += G * dt;
        x += vx * dt;
        y += vy * dt;
        const ang = (Math.atan2(vy, vx) * 180) / Math.PI;
        if (planeRef.current) {
          planeRef.current.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%) rotate(${ang}deg)`;
        }
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
        if (pts.length > 46) pts.shift();
        trailRef.current?.setAttribute('points', pts.join(' '));

        if (Math.hypot(x - mail.x, y - mail.y) < HIT_R) {
          clearTrail();
          setPhase('delivered');
          setHits((n) => n + 1);
          playChime();
          later(() => setModal(true), 450);
          return;
        }
        if (x > w + 60 || x < -60 || y > h + 80 || now - t0 > 3500) {
          clearTrail();
          setPhase('missed');
          later(() => setPhase('idle'), 1800);
          return;
        }
        raf.current = requestAnimationFrame(step);
      };
      raf.current = requestAnimationFrame(step);
    },
    [mail.x, mail.y, w, h, snapBack]
  );

  /* ---- pointer handling (on the slingshot only, so the page still scrolls) ---- */
  const toPull = (e) => {
    const r = stageRef.current.getBoundingClientRect();
    // A sling only loads backward. This keeps the pouch behind the fork and
    // sends every released plane forward toward the mailbox.
    let dx = clamp(e.clientX - r.left - rest.x, -maxPull, 0);
    let dy = e.clientY - r.top - rest.y;
    const d = Math.hypot(dx, dy);
    if (d > maxPull) {
      dx *= maxPull / d;
      dy *= maxPull / d;
    }
    return { dx, dy };
  };
  const onDown = (e) => {
    if (phase !== 'idle') return;
    e.currentTarget.setPointerCapture(e.pointerId);
    getAudio();
    dragging.current = true;
    setSeen(true);
    setPhase('aiming');
    onMove(e, true);
  };
  const onMove = (e, force) => {
    if (!dragging.current && !force) return;
    const { dx, dy } = toPull(e);
    setPull({ x: rest.x + dx, y: rest.y + dy });
    setPreview(simulate(rest.x + dx, rest.y + dy, -dx * PULL_K, -dy * PULL_K));
  };
  const onUp = (e) => {
    if (!dragging.current) return;
    dragging.current = false;
    const { dx, dy } = toPull(e);
    const from = { x: rest.x + dx, y: rest.y + dy };
    if (Math.hypot(dx, dy) < 22) {
      snapBack(from);
      setPreview([]);
      setPhase('idle');
      return;
    }
    fly(from.x, from.y, -dx * PULL_K, -dy * PULL_K, from);
  };
  const autoV = useMemo(() => {
    const T = 1.25;
    const horizontalFactor = (1 - Math.exp(-AIR_DRAG * T)) / AIR_DRAG;
    return {
      T,
      vx: (mail.x - rest.x) / horizontalFactor,
      vy: (mail.y - rest.y - 0.5 * G * T * T) / T,
    };
  }, [mail.x, mail.y, rest.x, rest.y]);
  const hintArc = useMemo(
    () => simulate(rest.x, rest.y, autoV.vx, autoV.vy, 36, autoV.T / 36),
    [rest.x, rest.y, autoV]
  );
  const autoLaunch = () => {
    if (phase !== 'idle') return;
    getAudio();
    setSeen(true);
    fly(rest.x, rest.y, autoV.vx, autoV.vy, null);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactData.email);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = contactData.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    setCopied(true);
    later(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (!modal) return undefined;
    const onKey = (e) => e.key === 'Escape' && reset();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modal, reset]);

  /* ---- derived render values ---- */
  const pouch = pull ?? rest;
  const tip = (side) => {
    return { x: sling.x + side * forkHalfWidth, y: sling.y };
  };
  const tipL = tip(-1);
  const tipR = tip(1);
  const aimAngle = pull ? (Math.atan2(-(pull.y - rest.y), -(pull.x - rest.x)) * 180) / Math.PI : -18;
  const linkedin = contactData.linkedin ?? 'https://www.linkedin.com/in/dnyandipkatkar';

  return (
    <div className="pp-game-shell w-full bg-[#f9f8f5] p-3 sm:p-5">
      <section
        ref={sectionRef}
        onPointerMove={trackPointer}
        onPointerLeave={() => (pointer.current = null)}
        onPointerUp={(e) => e.pointerType !== 'mouse' && (pointer.current = null)}
        className={`relative isolate min-h-[calc(100svh-1.5rem)] w-full select-none overflow-hidden rounded-[32px] bg-[#0a1130] text-white shadow-[0_30px_80px_-30px_rgba(10,17,48,0.6)] ring-1 ring-black/5 sm:min-h-[calc(100svh-2.5rem)] sm:rounded-[48px] ${className}`}
        aria-label="Contact"
      >
        {/* shared cloud filter */}
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <filter id="pp-cloud" x="-10%" y="-40%" width="120%" height="180%">
            <feTurbulence type="fractalNoise" baseFrequency="0.008 0.016" numOctaves="5" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="140" xChannelSelector="R" yChannelSelector="G" result="d" />
            <feGaussianBlur in="d" stdDeviation="1.6" />
          </filter>
        </svg>

        {/* ============================ SKY ============================ */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {skyImage ? (
            <img
              src={skyImage}
              alt=""
              className="absolute inset-0 h-full w-full"
              style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
            />
          ) : (
            <>
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(180deg,#5a55b5 0%,#8a66b8 34%,#e9809a 62%,#ffaa7a 82%,#ffd09a 100%)' }}
              />
              <motion.div
                className="absolute inset-0"
                style={{
                  opacity: night,
                  background:
                    'linear-gradient(180deg,#1f1f6e 0%,#2d2a8c 30%,#4a3a9e 52%,#a2559f 66%,#e58a9a 78%,#f4b184 90%,#f6c38e 100%)',
                }}
              />
              <motion.div
                className="absolute inset-0"
                style={{
                  opacity: starsOpacity,
                  background:
                    'linear-gradient(160deg, transparent 30%, rgba(170,170,255,.22) 48%, transparent 66%), radial-gradient(40% 30% at 30% 12%, rgba(120,120,240,.2), transparent 70%)',
                }}
              />
            </>
          )}

          <motion.div className="absolute inset-0" style={{ opacity: starsOpacity }}>
            <StarField pointerRef={pointer} reduce={reduce} />
          </motion.div>

          <motion.div
            className="absolute right-[10%] top-[14%] h-[42px] w-[42px] rounded-full"
            style={{
              opacity: moonOpacity,
              boxShadow: 'inset -12px -5px 0 0 #fbefc8',
              rotate: -20,
              filter: 'drop-shadow(0 0 16px rgba(255,236,190,.75))',
            }}
          />

          {!reduce &&
            [
              { top: '12%', left: '18%', delay: 1, every: 7 },
              { top: '8%', left: '48%', delay: 4, every: 9 },
              { top: '24%', left: '70%', delay: 6.5, every: 11 },
            ].map((s, i) => (
              <motion.span
                key={i}
                className="absolute h-px w-24 -rotate-[28deg] bg-gradient-to-r from-transparent via-white to-transparent"
                style={{ top: s.top, left: s.left }}
                animate={{ x: [0, 180], y: [0, 95], opacity: [0, 1, 0] }}
                transition={{ duration: 1.1, delay: s.delay, repeat: Infinity, repeatDelay: s.every, ease: 'easeOut' }}
              />
            ))}

          {!skyImage && (
            <>
              <CloudBank
                id="far" seed={11} n={9} base={300} amp={90}
                stops={['#a79be0', '#6a59b8', '#d98aa5']} rim="#ffc3a0"
                className="bottom-[10%] h-[42%] opacity-90" drift={reduce ? 0 : 46} parallax={cloudShift}
              />
              <CloudBank
                id="mid" seed={23} n={8} base={320} amp={110}
                stops={['#9a8ee0', '#5a4cb0', '#c97aa8']} rim="#ffb08a"
                className="bottom-[-4%] h-[46%]" drift={reduce ? 0 : 34} parallax={cloudShiftSlow}
              />
            </>
          )}
        </div>

        
{/* ===================== HEADLINE ===================== */}
<div className="pointer-events-none relative z-20 px-6 pt-10 sm:px-[6%] sm:pt-14">
  <div className="max-w-xl">

    <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ffd9c4] ring-1 ring-white/20 backdrop-blur-md">
      Contact
    </span>

    <h2 className="font-display mt-4 text-[clamp(2.6rem,6.2vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-[#fbf0e0] drop-shadow-[0_2px_18px_rgba(0,0,0,.35)]">
      Send me a paper plane.
    </h2>

    <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
      Write to me at{' '}
      <a
        href={`mailto:${contactData.email}`}
        className="pointer-events-auto font-bold underline decoration-[#e07a50] decoration-2 underline-offset-4 hover:text-[#ffd9c4]"
      >
        {contactData.email}
      </a>
      . Or, if you have a minute, pull the plane back and land it in the mailbox.
    </p>

  </div>
</div>


        {/* ========================= GAME STAGE ========================= */}
        <div ref={stageRef} className="absolute inset-0 z-10">
          <img
            src={gameMailbox}
            alt=""
            draggable="false"
            className="pointer-events-none absolute max-w-none select-none"
            style={{
              width: propWidth,
              height: propHeight,
              left: mail.x - PROP_ART.mailboxEnvelopeCenter.x * propScale,
              top: mail.y - PROP_ART.mailboxEnvelopeCenter.y * propScale,
            }}
          />

          {/* mailbox */}
          <div
            key={hits}
            className="pointer-events-none absolute"
            style={{
              left: mail.x - targetSize / 2,
              top: mail.y - targetSize / 2,
              width: targetSize,
              height: targetSize,
            }}
          >
            <div
              className="absolute left-1/2 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,170,130,.5),transparent)]"
              style={{ bottom: -12 * imageScale, width: targetSize * 1.8, height: targetSize * 0.65 }}
            />
            <motion.span
              className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#e07a50] px-3 py-1 text-[11px] font-bold text-white shadow-md"
              style={{ top: -34 * imageScale }}
            >
              My mailbox
              <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#e07a50]" />
            </motion.span>
            <div
              className="transition-opacity duration-500"
              style={{ opacity: phase === 'aiming' || phase === 'flying' ? 1 : 0 }}
            >
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/50"
                style={{ width: targetSize, height: targetSize }}
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25"
                style={{ width: targetRingSize, height: targetRingSize }}
                animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.15, 0.5] }}
                transition={{ duration: 3.2, repeat: Infinity }}
              />
            </div>
            {hits > 0 && (
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#ffd98a]"
                style={{ width: targetSize, height: targetSize }}
                initial={{ scale: 0.6, opacity: 1 }}
                animate={{ scale: 2.4, opacity: 0 }}
                transition={{ duration: 0.9 }}
              />
            )}
          </div>

          <img
            src={gameSlingshot}
            alt=""
            draggable="false"
            className="pointer-events-none absolute max-w-none select-none"
            style={{
              width: propWidth,
              height: propHeight,
              left: sling.x - PROP_ART.slingForkCenter.x * propScale,
              top: sling.y - PROP_ART.slingForkCenter.y * propScale,
            }}
          />

          {/* bands, aim dots, trail */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
            {phase === 'idle' && !seen &&
              hintArc.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="1.8" fill="#fff" opacity=".9" />)}
            {preview.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r={3.2 - i * 0.12} fill="#fff0bd" opacity={0.85 - i * 0.05} />
            ))}
            <polyline
              ref={trailRef}
              fill="none"
              stroke="#fff0bd"
              strokeWidth="2.5"
              strokeDasharray="2 7"
              strokeLinecap="round"
              opacity=".9"
            />
            {phase !== 'delivered' && (
              <>
                <line x1={tipL.x} y1={tipL.y} x2={pouch.x} y2={pouch.y} stroke="#e8631a" strokeWidth={pull ? 4 : 3} strokeLinecap="round" />
                <line x1={tipR.x} y1={tipR.y} x2={pouch.x} y2={pouch.y} stroke="#ff8a2b" strokeWidth={pull ? 4 : 3} strokeLinecap="round" />
              </>
            )}
          </svg>

          {/* plane resting / being pulled */}
          {(phase === 'idle' || phase === 'aiming') && (
            <div
              className="pointer-events-none absolute drop-shadow-[0_4px_10px_rgba(0,0,0,.45)]"
              style={{
                left: pouch.x,
                top: pouch.y,
                transform: `translate(-50%,-50%) rotate(${aimAngle}deg)`,
              }}
            >
              <Plane />
            </div>
          )}

          {/* plane in flight (moved directly by the animation loop) */}
          {phase === 'flying' && (
            <div
              ref={planeRef}
              className="pointer-events-none absolute left-0 top-0 drop-shadow-[0_0_14px_rgba(255,240,189,.8)]"
              style={{ transform: `translate(${rest.x}px,${rest.y}px) translate(-50%,-50%)` }}
            >
              <Plane />
            </div>
          )}

          {phase === 'idle' && !seen && (
            <span
              className="pointer-events-none absolute whitespace-nowrap rounded-full bg-[#2b2b3d]/90 px-3 py-1.5 text-xs font-semibold text-white"
              style={{
                left: rest.x - Math.max(34, 90 * imageScale),
                top: rest.y - Math.max(42, 82 * imageScale),
              }}
            >
              Drag me back
              <span className="absolute -bottom-1 right-6 h-2 w-2 rotate-45 bg-[#2b2b3d]/90" />
            </span>
          )}

          {/* drag handle: only the slingshot area captures pointers */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Slingshot. Drag back and release to throw the paper plane, or press Enter to launch it at the mailbox."
            onPointerDown={onDown}
            onPointerMove={(e) => onMove(e)}
            onPointerUp={onUp}
            onPointerCancel={onUp}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), autoLaunch())}
            className="absolute cursor-grab touch-none rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#ffd98a] active:cursor-grabbing"
            style={handle}
          />

          <AnimatePresence>
            {phase === 'missed' && (
              <motion.p
                role="status"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute rounded-full bg-[#0a1130]/75 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md"
                style={{ left: sling.x - 20, top: sling.y - 90 }}
              >
                Just missed. Pull back and try again.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* foreground cloud lip */}
        <div className="pointer-events-none absolute inset-0 z-[15]">
          {!skyImage && (
            <CloudBank
              id="front" seed={5} n={10} base={380} amp={50}
              stops={['#6a5cc0', '#40368f', '#6a55b0']} rim="#c79ae0"
              className="bottom-[-9%] h-[28%]" drift={reduce ? 0 : 28} parallax={cloudShift}
            />
          )}
        </div>

        {/* ======================= DELIVERED MODAL ======================= */}
        <AnimatePresence>
          {modal && (
            <motion.div
              className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                role="dialog"
                aria-modal="false"
                aria-labelledby="pp-title"
                initial={{ scale: 0.85, y: 18 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 10 }}
                transition={{ type: 'spring', stiffness: 380, damping: 26 }}
                className="pointer-events-auto w-full max-w-sm rounded-[28px] bg-[#fff8ea] p-7 text-center text-[#1a1f3c] shadow-2xl"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#e07a50] text-white">
                  <FaCheck />
                </div>
                <h3 id="pp-title" className="font-display text-2xl font-extrabold tracking-tight">
                  Delivered under the stars.
                </h3>
                <p className="mt-1 text-sm text-[#1a1f3c]/70">
                  Write to me at <span className="font-semibold">{contactData.email}</span>
                </p>
                <div className="mt-5 flex items-center justify-center gap-2">
                  <a
                    href={`mailto:${contactData.email}`}
                    autoFocus
                    className="inline-flex items-center gap-2 rounded-full bg-[#e07a50] px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.03] active:scale-95"
                  >
                    <FaEnvelope size={13} /> Write to me
                  </a>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-2 rounded-full bg-[#1a1f3c]/8 px-5 py-2.5 text-sm font-bold text-[#1a1f3c] transition-colors hover:bg-[#1a1f3c]/15"
                  >
                    <FaRedo size={11} /> Throw another
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========================== DOCK + CREDIT =========================== */}
        <div className="pp-game-dock pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-2 px-3 pb-4 sm:pb-5">
          <div className="pointer-events-auto flex max-w-full items-center gap-1 rounded-full bg-[#2a2a78]/70 p-1.5 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur-md sm:text-sm">
            <span className="flex min-w-0 items-center gap-2 truncate rounded-full bg-white px-3 py-1.5 text-[#1a1f3c]">
              <FaEnvelope size={12} className="shrink-0 text-[#e07a50]" />
              <span className="truncate">{contactData.email}</span>
            </span>
            <button type="button" onClick={copyEmail} className="rounded-full px-3 py-1.5 transition-colors hover:bg-white/10">
              {copied ? 'Copied' : 'Copy'}
            </button>
            <span className="h-4 w-px bg-white/25" aria-hidden="true" />
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors hover:bg-white/10"
            >
              LinkedIn <FaExternalLinkAlt size={9} />
            </a>
            <a
              href={assetUrl('documents/Resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-colors hover:bg-white/10"
            >
              CV <FaExternalLinkAlt size={9} />
            </a>
          </div>
          <p className="px-4 text-center text-[11px] text-white/70">{credit}</p>
        </div>
      </section>
    </div>
  );
}
