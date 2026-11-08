import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaLightbulb, FaPeopleArrows, FaRocket } from 'react-icons/fa';
import { aboutData, personalData } from '../data/content';
import { profileImage, pixelProfileImage } from '../assets/images';

const pillarIcons = {
  brain: FaBrain,
  lightbulb: FaLightbulb,
  teamwork: FaPeopleArrows,
  rocket: FaRocket,
};

export default function About() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    
    // Calculate 3D tilt
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateX = (mouseY / (card.height / 2)) * -8;
    const rotateY = (mouseX / (card.width / 2)) * 8;
    setRotate({ x: rotateX, y: rotateY });

    // Calculate mouse percentage inside image container for circular spotlight mask
    const xPercent = ((e.clientX - card.left) / card.width) * 100;
    const yPercent = ((e.clientY - card.top) / card.height) * 100;
    setCursorPos({ x: xPercent, y: yPercent });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <section id="about" className="relative py-28 px-6 sm:px-8 lg:px-12 border-t border-[#e6e3da] bg-[#fbfbfa]">
      <div className="mx-auto max-w-7xl">
        {/* Section Tag */}
        <div className="pb-12 border-b border-[#e6e3da]">
          <span className="font-mono-code text-xs uppercase tracking-widest text-[#ea4335] font-bold">
            {aboutData.sectionLabel} (03)
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 max-w-4xl">
            {aboutData.heading}
          </h2>
        </div>

        {/* Narrative & Profile Layout */}
        <div className="mt-16 grid gap-12 lg:gap-16 lg:grid-cols-[0.85fr_1.15fr] items-start">
          
          {/* Interactive Profile Card with Circular Spotlight Reveal */}
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
            className="w-full max-w-md mx-auto lg:mx-0 group cursor-none"
          >
            <motion.div
              animate={{ rotateX: rotate.x, rotateY: rotate.y }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-5 shadow-lg"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900">
                
                {/* Layer 1: Colored Pixelated Image (Base background view) - Grayscale removed */}
                <img
                  src={pixelProfileImage}
                  alt="Dnyandip Katkar Pixel Profile"
                  className="h-full w-full object-cover object-top contrast-110 select-none"
                />

                {/* Layer 2: Clean HD Image (Revealed inside dynamic circular mask around cursor) */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    WebkitMaskImage: `radial-gradient(circle 90px at ${cursorPos.x}% ${cursorPos.y}%, black 100%, transparent 100%)`,
                    maskImage: `radial-gradient(circle 90px at ${cursorPos.x}% ${cursorPos.y}%, black 100%, transparent 100%)`,
                  }}
                >
                  <img
                    src={profileImage}
                    alt="Dnyandip Katkar Clean Profile"
                    className="h-full w-full object-cover object-top filter contrast-105 select-none"
                  />
                </div>

                {/* Optional visual glow ring directly outlining the spotlight cursor circle */}
                {isHovered && (
                  <div
                    className="pointer-events-none absolute h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-opacity duration-300"
                    style={{
                      left: `${cursorPos.x}%`,
                      top: `${cursorPos.y}%`,
                    }}
                  />
                )}

                <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Profile Information Overlay */}
                <div 
                  className="absolute bottom-6 left-6 right-6 z-20 text-white select-none pointer-events-none"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <span className="font-mono-code text-[11px] uppercase tracking-widest text-red-300 font-bold">
                    Developer // Engineer
                  </span>
                  <h3 className="mt-1 font-display text-2xl font-bold">
                    {personalData.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-200">
                    {personalData.profileTagline}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bio & Pillars */}
          <div className="space-y-10">
            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-neutral-600">
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 pt-6 border-t border-[#e6e3da]">
              {aboutData.pillars.map((pillar) => {
                const IconComponent = pillarIcons[pillar.iconName] || FaBrain;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-neutral-200 bg-white p-5 transition-all hover:border-neutral-300 hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#ea4335] mb-4">
                      <IconComponent size={18} />
                    </div>
                    <h4 className="font-display text-base font-bold text-neutral-950">
                      {pillar.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}