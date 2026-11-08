import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { personalData, projectsData } from '../data/content';
import { assetUrl } from '../utils/assetUrl';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const progress = Math.min(scrollY / 450, 1);
  const mockupRotateX = Math.max(12 - progress * 12, 0);
  const mockupScale = 0.95 + progress * 0.05;

  const handleSkipToWork = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 sm:px-8 lg:px-12 flex flex-col justify-between bg-[#f9f8f5]">
      {/* Editorial Headline Block */}
      <div className="mx-auto w-full max-w-7xl">
        {/* Status / Location Meta */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono-code text-xs uppercase tracking-wider text-neutral-500 mb-6"
        >
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            <span className="text-neutral-800 font-medium">{personalData.status}</span>
          </span>
          <span className="hidden sm:inline text-neutral-300">/</span>
          <span className="text-neutral-600">{personalData.subheading}</span>
        </motion.div>

        {/* Large Editorial Title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold tracking-tight text-neutral-950 leading-[1.04]">
            Hi, I&apos;m <span className="text-[#ea4335]">{personalData.shortName}</span>.
            <br />
            <span className="text-neutral-700 font-bold">
              {personalData.title}
            </span>
          </h1>
        </motion.div>

        {/* Quick Tagline Chips (like in reference video: 5+ years of experience • NIFT graduate • Claude coder) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 flex flex-wrap items-center gap-2.5 font-mono-code text-xs text-neutral-600"
        >
          <span className="rounded-full border border-neutral-300 bg-white px-3.5 py-1">
            🎓 Diploma Computer Eng. (96.12%)
          </span>
          <span className="rounded-full border border-neutral-300 bg-white px-3.5 py-1">
            ⚡ Full-Stack Developer
          </span>
          <span className="rounded-full border border-neutral-300 bg-white px-3.5 py-1">
            🤖 Applied AI & Data Systems
          </span>
        </motion.div>

        {/* Rotating Role & Narrative Statement */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-baseline pt-6 border-t border-[#e6e3da]">
          <div>
            <div className="flex items-center gap-3 font-mono-code text-sm sm:text-base text-neutral-600">
              <span className="text-neutral-400 uppercase tracking-widest text-xs">Currently -&gt;</span>
              <span className="text-[#ea4335] font-semibold">
                <Typewriter
                  words={personalData.rotatingRoles}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={35}
                  delaySpeed={1800}
                />
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600 font-normal">
              {personalData.bioStatement}
            </p>
          </div>

          {/* Action Links & Socials */}
          <div className="flex flex-col sm:flex-row lg:flex-col lg:items-end justify-between gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={handleSkipToWork}
                className="inline-flex items-center gap-2.5 rounded-full bg-neutral-950 px-6 py-3 font-display text-sm font-bold text-white transition-all hover:bg-[#ea4335] hover:scale-105 active:scale-95 shadow-md"
              >
                <span>Explore Work</span>
                <FaArrowDown className="text-xs" />
              </a>
              <a
                href={assetUrl(personalData.resumePath)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 font-display text-sm font-bold text-neutral-900 transition-all hover:border-neutral-900 hover:scale-105 active:scale-95 shadow-sm"
              >
                <span>View CV</span>
                <span className="text-xs">↗</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-neutral-500 text-sm">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="transition-colors hover:text-neutral-950"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="transition-colors hover:text-neutral-950"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={personalData.socials.email}
                aria-label="Send Email"
                className="transition-colors hover:text-neutral-950"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Device / Viewport Scroll Intro */}
      <div className="mx-auto w-full max-w-6xl mt-16 sm:mt-20">
        <div
          className="transition-transform duration-200 ease-out"
          style={{
            perspective: '1400px',
            transform: `perspective(1400px) rotateX(${mockupRotateX}deg) scale(${mockupScale})`,
          }}
        >
          {/* Laptop / Browser Mockup Shell in Warm Light */}
          <div className="overflow-hidden rounded-2xl border border-neutral-300 bg-white shadow-xl">
            {/* Top Device Window Bar */}
            <div className="flex items-center justify-between border-b border-neutral-200 bg-[#f4f2ec] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ea4335]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#fbbc05]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#34a853]" />
              </div>

              <div className="rounded-md border border-neutral-300 bg-white px-3 py-1 font-mono-code text-[11px] text-neutral-600 shadow-xs">
                dnyandip-portfolio // selected-work.preview
              </div>

              <a
                href="#projects"
                onClick={handleSkipToWork}
                className="font-mono-code text-[11px] uppercase tracking-wider text-[#ea4335] hover:underline font-bold"
              >
                Skip straight to work ↓
              </a>
            </div>

            {/* Inner Viewport Content */}
            <div className="p-6 sm:p-10 bg-[#faf9f6]">
              <div className="grid gap-6 md:grid-cols-3">
                {projectsData.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="group relative rounded-xl border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-400 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between font-mono-code text-[11px] uppercase text-neutral-500 mb-3">
                      <span className="text-[#ea4335] font-bold">{item.type}</span>
                      <span>{item.year}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-neutral-900 group-hover:text-[#ea4335] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-neutral-200 bg-neutral-100 px-2 py-0.5 font-mono-code text-[10px] text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
