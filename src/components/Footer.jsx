import React from 'react';
import { FaChevronUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioLogo } from '../assets/images';
import { personalData } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#projects' },
    { label: 'Path', href: '#path' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Research', href: '#research' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[#e6e3da] py-12 px-6 sm:px-8 lg:px-12 bg-[#f4f2ec]">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex items-center gap-3.5">
          <img
            src={portfolioLogo}
            alt="Dnyandip Katkar logo"
            className="h-9 w-9 rounded-full object-cover border border-neutral-300"
          />
          <div>
            <p className="font-display text-sm font-bold text-neutral-950">
              {personalData.name}
            </p>
            <p className="font-mono-code text-[10px] text-neutral-500 uppercase tracking-widest">
              Computer Engineering Student
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono-code text-xs uppercase text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-neutral-950 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Back to top & Socials */}
        <div className="flex items-center gap-4">
          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-600 hover:text-neutral-950 transition-colors"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={personalData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-600 hover:text-neutral-950 transition-colors"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={personalData.socials.email}
            aria-label="Email"
            className="text-neutral-600 hover:text-neutral-950 transition-colors"
          >
            <FaEnvelope size={16} />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-white transition-all hover:bg-[#ea4335] hover:scale-105 active:scale-95 shadow-sm"
          >
            <FaChevronUp size={12} />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-8 pt-8 border-t border-neutral-300/60 text-center font-mono-code text-[11px] text-neutral-500">
        © {new Date().getFullYear()} Dnyandip Katkar. Designed with warm editorial typography & responsive motion.
      </div>
    </footer>
  );
}
