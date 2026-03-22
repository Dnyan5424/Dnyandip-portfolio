import React from 'react';
import { FaChevronUp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import { portfolioLogo } from '../assets/images';

export default function Footer() {
  return (
    <footer className="relative z-10 px-5 pb-10 pt-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/8 bg-white/[0.03] px-6 py-8 backdrop-blur-xl sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <img src={portfolioLogo} alt="Dnyandip Katkar logo" className="h-14 w-14 rounded-2xl object-cover" />
            <div>
            <p className="font-space text-2xl font-bold">Dnyandip Katkar</p>
            <p className="mt-2 text-sm text-slate-300/65">

            </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-300/72">
            {['home', 'about', 'skills', 'experience', 'projects', 'certificates', 'education', 'contact'].map((item) => (
              <Link key={item} to={item} smooth offset={-88} duration={500} className="cursor-pointer capitalize transition-colors hover:text-cyan-200">
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/Dnyan5424', Icon: FaGithub, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/dnyandip-katkar-2a4578', Icon: FaLinkedin, label: 'LinkedIn' },
              { href: 'mailto:Dnyandipkatkar07@gmail.com', Icon: FaEnvelope, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/78 transition-all hover:-translate-y-1 hover:border-cyan-300/35 hover:text-cyan-200"
              >
                {React.createElement(Icon)}
              </a>
            ))}

            <button
              type="button"
              onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-500 text-slate-950 transition-transform hover:scale-[1.04]"
            >
              <FaChevronUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
