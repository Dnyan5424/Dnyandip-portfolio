import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { portfolioLogo } from '../assets/images';
import { assetUrl } from '../utils/assetUrl';

const navItems = [
  { label: 'Work', to: '#projects' },
  { label: 'Path', to: '#path' },
  { label: 'About', to: '#about' },
  { label: 'Skills', to: '#skills' },
  { label: 'Research', to: '#research' },
  { label: 'Certificates', to: '#certificates' },
  { label: 'Contact', to: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'projects', 'path', 'about', 'skills', 'research', 'certificates', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#e6e3da] bg-[#f9f8f5]/90 backdrop-blur-md py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-lg"
        >
          <img
            src={portfolioLogo}
            alt="Dnyandip Katkar"
            className="h-9 w-9 rounded-full object-cover border border-neutral-300 shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight text-neutral-950">
              Dnyandip Katkar
            </span>
            <span className="font-mono-code text-[10px] tracking-widest uppercase text-neutral-500">
              Developer Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => {
            const sectionKey = item.to.replace('#', '');
            const isActive = activeSection === sectionKey;
            return (
              <a
                key={item.label}
                href={item.to}
                onClick={(e) => handleNavClick(e, item.to)}
                className={`px-3 py-1.5 font-mono-code text-xs tracking-wider uppercase transition-colors rounded-md relative ${
                  isActive
                    ? 'text-neutral-950 font-bold'
                    : 'text-neutral-500 hover:text-neutral-950'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-x-3 -bottom-1 h-0.5 bg-[#ea4335]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          <span className="mx-1.5 h-3.5 w-px bg-neutral-300" />

          {/* CV Direct Link */}
          <a
            href={assetUrl('documents/Resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1 rounded-full border border-neutral-900 bg-neutral-950 px-3.5 py-1 font-mono-code text-xs uppercase tracking-wider text-white transition-all hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          >
            <span>CV</span>
            <span className="text-[10px]" aria-hidden="true">↗</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 text-neutral-700 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
        >
          {mobileOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-[#e6e3da] bg-[#f9f8f5]/98 backdrop-blur-xl px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.to}
                  onClick={(e) => handleNavClick(e, item.to)}
                  className="py-2 font-display text-lg tracking-wide text-neutral-700 transition-colors hover:text-[#ea4335]"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-neutral-200">
                <a
                  href={assetUrl('documents/Resume.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-between rounded-lg bg-neutral-950 px-4 py-3 font-mono-code text-xs uppercase tracking-wider text-white"
                >
                  <span>View Resume / CV</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
