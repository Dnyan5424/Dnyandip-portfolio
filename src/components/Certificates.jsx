import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import { certificationsData } from '../data/content';
import { assetUrl } from '../utils/assetUrl';

const GAP = 72;    // gap between cards
const EASE = 0.14; // glide smoothing (lower = floatier)
const PLANE_SIZE = 60;

// Your icons8 paper plane (64px), embedded so no asset path is needed.
// Native heading of the icon is up-right (-45deg), the trail points down-left.
const PLANE_SRC =
  'data:image/png;base64,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';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

export default function Certificates() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const pathRef = useRef(null);
  const planeBackRef = useRef(null);
  const planeFrontRef = useRef(null);
  const clipBackRef = useRef(null);
  const clipFrontRef = useRef(null);

  const maxXRef = useRef(0);
  const segXsRef = useRef([]); // x of each segment boundary, to know which segment the plane is on
  const targetRef = useRef(0);
  const curRef = useRef(0);
  const loopRef = useRef(0);

  const [geo, setGeo] = useState({ w: 0, h: 0, d: '', nodes: [], segs: [] });
  const [maxX, setMaxX] = useState(0);

  // Wave path split into segments. Even segments pass BEHIND cards, odd segments pass IN FRONT.
  const measure = useCallback(() => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    if (!track || !wrap) return;

    const w = track.offsetWidth;
    const h = track.offsetHeight;
    const topY = 26;
    const botY = h - 26;

    const nodes = cardRefs.current.filter(Boolean).map((el, i) => ({
      x: el.offsetLeft + el.offsetWidth / 2,
      y: i % 2 === 0 ? botY : topY,
    }));
    if (!nodes.length) return;

    const pts = [{ x: 0, y: nodes[0].y }, ...nodes, { x: w, y: nodes[nodes.length - 1].y }];

    let d = `M ${pts[0].x} ${pts[0].y}`;
    const segs = [];
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1];
      const b = pts[i];
      const mx = (a.x + b.x) / 2;
      d += ` C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`;
      segs.push({
        d: `M ${a.x} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${b.x} ${b.y}`,
        layer: (i - 1) % 2, // 0 = behind cards, 1 = in front of cards
      });
    }
    segXsRef.current = pts.map((p) => p.x);

    const mxScroll = Math.max(0, w - wrap.clientWidth);
    maxXRef.current = mxScroll;
    setMaxX(mxScroll);
    setGeo({ w, h, d, nodes, segs });
  }, []);

  const readTarget = () => {
    const s = sectionRef.current;
    const st = stickyRef.current;
    if (!s || !st) return 0;
    const range = s.offsetHeight - st.offsetHeight;
    if (range <= 0) return 0;
    return clamp(-s.getBoundingClientRect().top / range, 0, 1);
  };

  const render = useCallback(() => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    if (!track || !wrap) return false;

    const target = targetRef.current;
    let cur = curRef.current + (target - curRef.current) * EASE;
    if (Math.abs(target - cur) < 0.0004) cur = target;
    curRef.current = cur;

    const shift = cur * maxXRef.current;
    track.style.transform = `translate3d(${-shift}px,0,0)`;
    const center = shift + wrap.clientWidth / 2;

    cardRefs.current.forEach((el) => {
      if (!el) return;
      const c = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(c - center) / (el.offsetWidth + GAP);
      const t = Math.max(0, 1 - dist);
      const e = t * t * (3 - 2 * t);
      el.style.transform = `translateY(${-12 * e}px) scale(${0.93 + 0.07 * e})`;
      el.dataset.focus = e.toFixed(3);
    });

    const path = pathRef.current;
    const total = path ? path.getTotalLength() : 0;
    if (total) {
      let lo = 0;
      let hi = total;
      for (let i = 0; i < 22; i++) {
        const mid = (lo + hi) / 2;
        if (path.getPointAtLength(mid).x < center) lo = mid;
        else hi = mid;
      }
      const p = path.getPointAtLength(hi);
      const a = path.getPointAtLength(Math.max(hi - 8, 0));
      const b = path.getPointAtLength(Math.min(hi + 8, total));
      const angle = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
      const tf = `translate(${p.x} ${p.y}) rotate(${angle + 45})`; // icon heads up-right natively

      // Which segment is the plane on? Even = behind cards, odd = in front.
      const xs = segXsRef.current;
      let k = 0;
      while (k < xs.length - 2 && center >= xs[k + 1]) k++;
      const behind = k % 2 === 0;

      const pb = planeBackRef.current;
      const pf = planeFrontRef.current;
      if (pb && pf) {
        pb.setAttribute('transform', tf);
        pf.setAttribute('transform', tf);
        pb.style.display = behind ? '' : 'none';
        pf.style.display = behind ? 'none' : '';
      }

      clipBackRef.current?.setAttribute('width', Math.max(p.x, 0));
      clipFrontRef.current?.setAttribute('width', Math.max(p.x, 0));
    }
    return cur !== target;
  }, []);

  const startLoop = useCallback(() => {
    if (loopRef.current) return;
    const tick = () => {
      const more = render();
      loopRef.current = more ? requestAnimationFrame(tick) : 0;
    };
    loopRef.current = requestAnimationFrame(tick);
  }, [render]);

  const onScroll = useCallback(() => {
    targetRef.current = readTarget();
    startLoop();
  }, [startLoop]);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.fonts?.ready.then(measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(loopRef.current);
      loopRef.current = 0;
    };
  }, [measure, onScroll]);

  useEffect(() => {
    const t = readTarget();
    targetRef.current = t;
    curRef.current = t;
    render();
  }, [geo, maxX, render]);

  const goToCard = (i) => {
    const s = sectionRef.current;
    const st = stickyRef.current;
    const wrap = wrapRef.current;
    const el = cardRefs.current[clamp(i, 0, cardRefs.current.length - 1)];
    if (!s || !st || !wrap || !el || maxXRef.current <= 0) return;
    const progress = clamp(
      (el.offsetLeft + el.offsetWidth / 2 - wrap.clientWidth / 2) / maxXRef.current,
      0,
      1
    );
    const range = s.offsetHeight - st.offsetHeight;
    const top = window.scrollY + s.getBoundingClientRect().top + progress * range;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const focusedIndex = () => {
    let best = 0;
    let bestV = -1;
    cardRefs.current.forEach((el, i) => {
      const v = Number(el?.dataset.focus || 0);
      if (v > bestV) {
        bestV = v;
        best = i;
      }
    });
    return best;
  };

  const Segs = ({ layer, stroke }) =>
    geo.segs
      .filter((s) => s.layer === layer)
      .map((s, i) => (
        <path key={i} d={s.d} stroke={stroke} strokeWidth="3" strokeDasharray="0.1 9" />
      ));

  const Nodes = ({ stroke }) =>
    geo.nodes.map((n, i) => (
      <g key={i} transform={`translate(${n.x} ${n.y})`}>
        <circle r="8" fill="#f9f8f5" stroke={stroke} strokeWidth="2" />
        <circle r="2.8" fill={stroke} />
      </g>
    ));

  const planeImg = (
    <image
      href={PLANE_SRC}
      x={-PLANE_SIZE / 2}
      y={-PLANE_SIZE / 2}
      width={PLANE_SIZE}
      height={PLANE_SIZE}
      style={{ filter: 'drop-shadow(0 8px 6px rgba(90,70,130,0.28))' }}
    />
  );

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="relative border-t border-[#e6e3da] bg-[#f9f8f5]"
      style={{ height: `calc(100svh + ${maxX}px)` }}
    >
      {/* Pinned stage */}
      <div
        ref={stickyRef}
        className="sticky top-0 flex flex-col overflow-hidden pt-8 pb-4"
        style={{ height: '100svh' }}
      >
        {/* Header */}
        <div className="mx-auto w-full max-w-7xl shrink-0 px-6 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#ea4335] font-bold">
                {certificationsData.sectionLabel} (06)
              </span>
              <h2 className="mt-2 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 max-w-3xl">
                {certificationsData.heading}
              </h2>
              <p className="mt-2 hidden lg:block text-neutral-600 max-w-2xl text-base">
                {certificationsData.subheading}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => goToCard(focusedIndex() - 1)}
                aria-label="Previous certificate"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 shadow-sm transition-all hover:bg-neutral-950 hover:text-white hover:border-neutral-950 active:scale-95"
              >
                ←
              </button>
              <button
                onClick={() => goToCard(focusedIndex() + 1)}
                aria-label="Next certificate"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-800 shadow-sm transition-all hover:bg-neutral-950 hover:text-white hover:border-neutral-950 active:scale-95"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Carousel window */}
        <div
          ref={wrapRef}
          className="relative mt-2 min-h-0 flex-1 overflow-hidden"
          style={{ '--card-w': 'min(380px, 80vw)' }}
        >
          <div
            ref={trackRef}
            className="relative flex h-full w-max min-w-full items-center will-change-transform"
            style={{
              gap: GAP,
              paddingInline: 'calc(50% - var(--card-w) / 2)',
            }}
          >
            {/* Layer BACK (z-0): path segments that go BEHIND the cards + plane when on those segments */}
            <svg
              className="pointer-events-none absolute left-0 top-0 z-0"
              width={geo.w}
              height={geo.h}
              style={{ overflow: 'visible' }}
              aria-hidden="true"
            >
              <defs>
                <clipPath id="cert-clip-back">
                  <rect ref={clipBackRef} x="0" y="-100" width="0" height={geo.h + 200} />
                </clipPath>
              </defs>
              {/* invisible full path used to measure the plane position */}
              <path ref={pathRef} d={geo.d} fill="none" stroke="none" />
              <g fill="none" strokeLinecap="round">
                <Segs layer={0} stroke="#d6d2c6" />
                <g clipPath="url(#cert-clip-back)">
                  <Segs layer={0} stroke="#ea4335" />
                </g>
              </g>
              <g ref={planeBackRef}>{planeImg}</g>
            </svg>

            {/* Cards (opaque) */}
            {certificationsData.items.map((cert, index) => (
              <div
                key={cert.id}
                ref={(el) => (cardRefs.current[index] = el)}
                onClickCapture={(e) => {
                  const el = cardRefs.current[index];
                  if (el && Number(el.dataset.focus || 0) < 0.6) {
                    e.preventDefault();
                    e.stopPropagation();
                    goToCard(index);
                  }
                }}
                className="relative z-10 shrink-0 will-change-transform"
                style={{ width: 'var(--card-w)' }}
              >
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5 }}
                  className="group flex flex-col justify-between rounded-3xl border border-neutral-200/90 bg-white p-6 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)] transition-shadow hover:shadow-[0_28px_50px_-18px_rgba(0,0,0,0.28)]"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4 font-mono-code text-xs">
                      <span className="text-[#ea4335] font-bold truncate max-w-[200px] px-3 py-1 rounded-full bg-red-50">
                        {cert.platform}
                      </span>
                      <span className="text-neutral-500 shrink-0 font-medium">
                        {cert.date || 'Certified'}
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-neutral-950 group-hover:text-[#ea4335] transition-colors leading-snug line-clamp-2">
                      {cert.title}
                    </h3>

                    {cert.credentialId && (
                      <p className="mt-2 font-mono-code text-[11px] text-neutral-400 truncate">
                        ID: {cert.credentialId}
                      </p>
                    )}

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-600 line-clamp-2">
                      {cert.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cert.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-neutral-200/60 bg-neutral-50 px-2.5 py-1 font-mono-code text-[10px] text-neutral-700 font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <a
                      href={assetUrl(cert.href)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider text-neutral-800 transition-colors group-hover:text-[#ea4335] font-semibold"
                    >
                      <FaCertificate size={14} className="text-[#ea4335]" />
                      <span>View Certificate PDF</span>
                      <span className="text-xs transition-transform group-hover:translate-x-0.5">↗</span>
                    </a>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ea4335] text-white text-sm">
                      →
                    </div>
                  </div>
                </motion.article>
              </div>
            ))}

            {/* Layer FRONT (z-20): path segments that go OVER the cards + nodes + plane when on those segments */}
            <svg
              className="pointer-events-none absolute left-0 top-0 z-20"
              width={geo.w}
              height={geo.h}
              style={{ overflow: 'visible' }}
              aria-hidden="true"
            >
              <defs>
                <clipPath id="cert-clip-front">
                  <rect ref={clipFrontRef} x="0" y="-100" width="0" height={geo.h + 200} />
                </clipPath>
              </defs>
              <g fill="none" strokeLinecap="round">
                <Segs layer={1} stroke="#d6d2c6" />
                <Nodes stroke="#cfcabc" />
                <g clipPath="url(#cert-clip-front)">
                  <Segs layer={1} stroke="#ea4335" />
                  <Nodes stroke="#ea4335" />
                </g>
              </g>
              <g ref={planeFrontRef}>{planeImg}</g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}