import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { portfolioLogo } from '../assets/images';

const links = [
  'home',
  'about',
  'research',
  'skills',
  'experience',
  'projects',
  'certificates',
  'education',
  'achievements',
  'contact',
];

const mobileLinks = [
  'home',
  'about',
  'research',
  'skills',
  'experience',
  'projects',
  'certificates',
  'education',
  'achievements',
  'contact',
];

const desktopLabels = {
  home: 'Home',
  about: 'About',
  research: 'Research',
  skills: 'Skills',
  experience: 'Experience',
  projects: 'Projects',
  certificates: 'Certificates',
  education: 'Education',
  achievements: 'Achievements',
  contact: 'Contact',
};

function NavLink({ label, onClick }) {
  return (
    <Link
      to={label}
      smooth
      spy
      offset={-88}
      duration={500}
      activeClass="text-white"
      className="group relative cursor-pointer px-4 py-2 text-sm font-medium capitalize text-slate-300/75 transition-colors hover:text-white"
      onClick={onClick}
    >
      {desktopLabels[label] ?? label}
      <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-500 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}

export default function Navbar() {
  const MotionHeader = motion.header;
  const MotionDiv = motion.div;

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <MotionHeader
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-[90] px-4 py-4 sm:px-6"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? 'glass-panel border-white/10 bg-slate-950/60 shadow-[0_18px_60px_rgba(15,23,42,0.4)]'
            : 'border-white/6 bg-white/[0.03]'
        }`}
      >
        <Link to="home" smooth duration={500} className="flex cursor-pointer items-center gap-3">
          <img src={portfolioLogo} alt="Dnyandip Katkar logo" className="h-11 w-11 rounded-2xl object-cover shadow-[0_0_32px_rgba(56,189,248,0.18)]" />
          <div>
            <p className="font-space text-lg font-bold tracking-tight">Dnyandip</p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-300/55">Developer Portfolio</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((label) => (
            <NavLink key={label} label={label} />
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <MotionDiv
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 shadow-[0_24px_80px_rgba(2,8,23,0.55)] backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col">
              {mobileLinks.map((label) => (
                <NavLink key={label} label={label} onClick={() => setOpen(false)} />
              ))}
            </nav>
          </MotionDiv>
        ) : null}
      </AnimatePresence>
    </MotionHeader>
  );
}
