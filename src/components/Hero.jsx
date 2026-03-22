import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import {
  SiJavascript, SiPython, SiTailwindcss, SiNodedotjs,
  SiMongodb, SiTensorflow, SiGit, SiMysql,
} from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { assetUrl } from '../utils/assetUrl';

const floatingIcons = [
  { Icon: RiReactjsLine, className: 'left-[50%]  top-[50%]    text-cyan-300/75'    },
  { Icon: SiJavascript,  className: 'right-[50%] top-[72%]   text-yellow-300/80'  },
  { Icon: SiPython,      className: 'right-[16%] bottom-[22%] text-sky-300/80'    },
  { Icon: SiNodedotjs,   className: 'left-[25%]  bottom-[28%]  text-green-400/70'  },
  { Icon: SiTailwindcss, className: 'left-[40%] top-[30%]     text-teal-300/65'   },
  { Icon: SiMongodb,     className: 'right-[70 %] bottom-[22%]  text-emerald-300/65'},
  { Icon: SiTensorflow,  className: 'left-[40%]  top-[52%]     text-orange-400/65' },
  { Icon: SiMysql,       className: 'right-[22%] top-[8%]     text-blue-400/65'   },
  { Icon: SiGit,         className: 'left-[14%] bottom-[54%]  text-red-400/60'    },
];

const techStack = [
  { Icon: RiReactjsLine, label: 'React',      color: '#22d3ee', bg: 'rgba(34,211,238,0.10)',  ring: 'rgba(34,211,238,0.4)' },
  { Icon: SiJavascript,  label: 'JavaScript', color: '#fde047', bg: 'rgba(253,224,71,0.10)',  ring: 'rgba(253,224,71,0.4)' },
  { Icon: SiPython,      label: 'Python',     color: '#38bdf8', bg: 'rgba(56,189,248,0.10)',  ring: 'rgba(56,189,248,0.4)' },
  { Icon: SiTailwindcss, label: 'Tailwind',   color: '#2dd4bf', bg: 'rgba(45,212,191,0.10)',  ring: 'rgba(45,212,191,0.4)' },
  { Icon: SiNodedotjs,   label: 'Node.js',    color: '#4ade80', bg: 'rgba(74,222,128,0.10)',  ring: 'rgba(74,222,128,0.4)' },
  { Icon: SiMongodb,     label: 'MongoDB',    color: '#86efac', bg: 'rgba(134,239,172,0.10)', ring: 'rgba(134,239,172,0.35)' },
  { Icon: SiTensorflow,  label: 'TensorFlow', color: '#fb923c', bg: 'rgba(251,146,60,0.10)',  ring: 'rgba(251,146,60,0.4)' },
  { Icon: SiMysql,       label: 'SQL',        color: '#60a5fa', bg: 'rgba(96,165,250,0.10)',  ring: 'rgba(96,165,250,0.4)' },
  { Icon: SiGit,         label: 'Git',        color: '#f87171', bg: 'rgba(248,113,113,0.10)', ring: 'rgba(248,113,113,0.4)' },
];

export default function Hero() {
  return (
    <div className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 sm:px-8 lg:px-12">

      {/* ── Background atmosphere ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-glow opacity-30" />
        <div className="absolute left-[12%] top-[16%] h-64 w-64 rounded-full bg-cyan-400/18 blur-[130px]" />
        <div className="absolute right-[10%] top-[8%]  h-72 w-72 rounded-full bg-fuchsia-500/18 blur-[150px]" />
        <div className="absolute bottom-[10%] left-[42%] h-64 w-64 rounded-full bg-sky-400/12 blur-[140px]" />
      </div>

      {/* ── Floating ambient icons ── */}
      {floatingIcons.map(({ Icon, className }, index) => (
        <motion.div
          key={className}
          animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 6 + index, repeat: Infinity, ease: 'easeInOut' }}
          className={`pointer-events-none absolute hidden rounded-3xl border border-white/10 bg-white/5 p-4 text-3xl shadow-[0_18px_40px_rgba(2,8,23,0.45)] backdrop-blur-xl md:block ${className}`}
        >
          <Icon />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

        {/* ── LEFT: Hero copy ── */}
        <div className="space-y-7">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-3"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.5em] text-cyan-300/80">
              Available for Opportunities
            </span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.75 }}
              className="font-space text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-white"
            >
              Hi, I&apos;m{' '}
              <span
                className="text-gradient block sm:inline"
                style={{
                  background: 'linear-gradient(120deg, #67e8f9 0%, #38bdf8 40%, #e879f9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Dnyan
              </span>
            </motion.h1>

            {/* Role subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.7 }}
              className="font-space text-[clamp(1.05rem,2.4vw,1.45rem)] font-semibold tracking-[-0.01em] text-slate-300/85"
            >
              Full-Stack Engineer&nbsp;&nbsp;·&nbsp;&nbsp;AI/ML Explorer&nbsp;&nbsp;·&nbsp;&nbsp;Blockchain Tinkerer
            </motion.p>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.65 }}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-[clamp(0.85rem,1.8vw,1.1rem)] text-slate-400">Currently →</span>
              <span
                className="font-mono text-[clamp(0.95rem,2vw,1.2rem)] font-semibold"
                style={{
                  background: 'linear-gradient(90deg, #22d3ee, #a78bfa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <Typewriter
                  words={['Building Data Pipelines', 'Crafting Web Experiences', 'Training ML Models', 'Exploring Web3 Protocols']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={65}
                  deleteSpeed={35}
                  delaySpeed={1600}
                />
              </span>
            </motion.div>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.7 }}
            className="max-w-[52ch] text-[clamp(0.9rem,1.6vw,1.05rem)] leading-[1.85] text-slate-400"
          >
            I turn complex problems into elegant digital solutions — from{' '}
            <span className="font-medium text-slate-200">responsive web apps</span> and{' '}
            <span className="font-medium text-slate-200">ML-powered analytics</span> to{' '}
            <span className="font-medium text-slate-200">smart contract experiments</span>.
            Engineering fundamentals, designer instincts.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="projects"
              smooth
              offset={-88}
              duration={500}
              className="inline-flex cursor-pointer items-center gap-2.5 rounded-full px-8 py-3.5 text-[0.9rem] font-bold tracking-wide text-slate-950 shadow-[0_12px_40px_rgba(56,189,248,0.35)] transition-all hover:scale-[1.04] hover:shadow-[0_16px_48px_rgba(56,189,248,0.5)]"
              style={{ background: 'linear-gradient(120deg, #67e8f9, #38bdf8 50%, #e879f9)' }}
            >
              <span>View My Work</span>
              <span className="text-base">↗</span>
            </Link>
           <a
  href={assetUrl('resume.pdf')}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2.5 rounded-full border border-white/14 bg-white/[0.06] px-8 py-3.5 text-[0.9rem] font-semibold text-white backdrop-blur-sm transition-all hover:scale-[1.04] hover:border-cyan-400/40 hover:bg-white/10"
>
  <span>View CV</span>
  <span className="text-sm opacity-70">↗</span>
</a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.6 }}
            className="flex items-center gap-3 pt-1"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-slate-600">Connect</span>
            <span className="h-px w-4 bg-slate-700" />
            {[
              { href: 'https://github.com/Dnyan5424',                   Icon: FaGithub,   label: 'GitHub'   },
              { href: 'https://www.linkedin.com/in/dnyandip-katkar-2a4578', Icon: FaLinkedin, label: 'LinkedIn' },
              { href: 'mailto:Dnyandipkatkar07@gmail.com',              Icon: FaEnvelope, label: 'Email'    },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-lg text-slate-400 transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: 3D Glass Tech-Stack Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.32, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-lg"
          style={{ perspective: '1200px' }}
        >
          {/* Glow bloom behind card */}
          <div className="pointer-events-none absolute inset-6 -z-20 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/18 to-sky-500/12 blur-3xl" />
          {/* Ghost depth panel */}
          <div
            className="pointer-events-none absolute inset-0 translate-y-4 scale-[0.96] rounded-[2.5rem] border border-white/[0.05] bg-white/[0.015]"
            style={{ backdropFilter: 'blur(4px)' }}
          />

          {/* Main glass surface */}
          <div
            className="relative overflow-hidden rounded-[2.4rem] border border-white/[0.13] p-6"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.02) 55%, rgba(10,16,40,0.65) 100%)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              boxShadow: '0 48px 120px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(255,255,255,0.03)',
            }}
          >
            {/* Top refraction line */}
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
            {/* Inner glow */}
            <div className="pointer-events-none absolute -top-16 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-400/10 to-transparent blur-3xl" />

            {/* Card header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.55em] text-slate-500">My Toolkit</p>
                <h2 className="mt-1 font-space text-[1.25rem] font-bold leading-tight tracking-tight text-white">
                  Tech Stack
                </h2>
            
              </div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-400">Live</span>
              </div>
            </div>

            {/* 3×3 Icon grid */}
            <div className="grid grid-cols-3 gap-2.5">
              {techStack.map(({ Icon, label, color, bg, ring }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.55, y: 18 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.065, duration: 0.45, ease: 'easeOut' }}
                  whileHover={{ scale: 1.09, y: -5 }}
                  className="group relative flex flex-col items-center gap-2 rounded-2xl border p-4 cursor-default transition-all duration-300"
                  style={{
                    background: bg,
                    borderColor: 'rgba(255,255,255,0.08)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.07)',
                    backdropFilter: 'blur(12px)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = ring;
                    e.currentTarget.style.boxShadow = `0 10px 36px rgba(0,0,0,0.4), 0 0 22px ${ring}, inset 0 1px 0 rgba(255,255,255,0.13)`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.07)';
                  }}
                >
                  {/* Hover bloom */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                    style={{ background: `radial-gradient(circle at 50% 35%, ${ring}, transparent 72%)` }}
                  />
                  <Icon
                    className="relative z-10 text-[1.75rem] drop-shadow-lg transition-transform duration-200 group-hover:scale-110"
                    style={{ color }}
                  />
                  <span className="relative z-10 font-mono text-[8.5px] font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors duration-200 group-hover:text-slate-100">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

            {/* Bottom refraction */}
            <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 md:flex"
      >
        <div className="flex h-12 w-7 justify-center rounded-full border border-white/10 bg-white/[0.04] p-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2.5 w-0.5 rounded-full bg-cyan-400"
          />
        </div>
      </motion.div>
    </div>
  );
}
