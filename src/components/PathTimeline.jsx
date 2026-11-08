import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaUsers } from 'react-icons/fa';
import { pathTimelineData } from '../data/content';
import { assetUrl } from '../utils/assetUrl';
import { dypCampusImage, scvCampusImage, sveriCampusImage } from '../assets/images';

const filterCategories = ['All', 'Experience', 'Simulations', 'Education', 'Leadership'];

const campusImageFor = (organization) => {
  if (organization.includes('D. Y. Patil')) {
    return { src: dypCampusImage, alt: 'Dr. D. Y. Patil Institute of Technology campus' };
  }
  if (organization.includes('SVERI')) {
    return {
      src: sveriCampusImage,
      alt: "SVERI's College of Engineering campus",
      blendMode: 'multiply',
    };
  }
  if (organization.includes('Shree Chandrashekhar')) {
    return { src: scvCampusImage, alt: 'Shree Chandrashekhar Vidyalay campus' };
  }
  return null;
};

export default function PathTimeline() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All'
    ? pathTimelineData.timeline
    : pathTimelineData.timeline.filter((item) => {
        if (activeFilter === 'Experience') return item.type === 'Experience';
        if (activeFilter === 'Simulations') return item.type === 'Simulation';
        if (activeFilter === 'Education') return item.type === 'Education';
        if (activeFilter === 'Leadership') return item.type === 'Leadership';
        return true;
      });

  const getIcon = (type) => {
    switch (type) {
      case 'Experience':
        return <FaBriefcase className="text-[#ea4335]" size={13} />;
      case 'Simulation':
        return <FaLaptopCode className="text-blue-600" size={13} />;
      case 'Education':
        return <FaGraduationCap className="text-emerald-600" size={14} />;
      case 'Leadership':
        return <FaUsers className="text-amber-600" size={13} />;
      default:
        return <FaBriefcase className="text-[#ea4335]" size={13} />;
    }
  };

  return (
    <section id="path" className="relative py-28 px-6 sm:px-8 lg:px-12 border-t border-[#e6e3da] bg-[#f9f8f5]">
      {/* Anchor targets for legacy links */}
      <div id="experience" className="absolute -top-20" />
      <div id="internships" className="absolute -top-20" />
      <div id="education" className="absolute -top-20" />
      <div id="positions" className="absolute -top-20" />

      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-[#e6e3da]">
          <div>
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#ea4335] font-bold">
              {pathTimelineData.sectionLabel} (02)
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
              {pathTimelineData.heading}
            </h2>
            <p className="mt-2 text-neutral-600 max-w-xl text-base">
              {pathTimelineData.subheading}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-4 py-1.5 font-mono-code text-xs uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                  activeFilter === cat
                    ? 'bg-neutral-950 text-white font-semibold shadow-xs'
                    : 'border border-neutral-300 bg-white text-neutral-600 hover:border-neutral-900 hover:text-neutral-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Timeline Container */}
        <div className="relative mt-16 pl-6 sm:pl-10">
          {/* Vertical Progress Line */}
          <div className="absolute left-2.5 sm:left-4 top-2 bottom-6 w-px bg-gradient-to-b from-[#ea4335] via-neutral-300 to-transparent" />

          <div className="space-y-10 sm:space-y-14">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const campusImage = item.type === 'Education' ? campusImageFor(item.organization) : null;
                return (
                <motion.div
                  key={`${item.role}-${item.organization}`}
                  layout
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-[30px] sm:-left-[42px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:border-neutral-950">
                    {getIcon(item.type)}
                  </div>

                  {/* Card Shell in Clean White */}
                  <div className={`rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all hover:border-neutral-300 hover:shadow-md ${campusImage ? 'grid gap-6 sm:grid-cols-[minmax(0,1fr)_minmax(190px,30%)] sm:items-center' : ''}`}>
                    <div className={campusImage ? 'order-last sm:order-first' : ''}>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-3 mb-4 font-mono-code text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-[#ea4335] font-bold uppercase tracking-widest">{item.tag}</span>
                        <span className="text-neutral-300">·</span>
                        <span className="text-neutral-500">{item.location}</span>
                      </div>
                      <span className="text-neutral-500">{item.period}</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-950">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-neutral-700">
                      {item.organization}
                    </p>

                    {/* Points / Details */}
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-600">
                      {item.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills learned tag if any */}
                    {item.skills && item.skills.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 font-mono-code text-[11px] text-neutral-600"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Certificate / Document Link if attached */}
                    {item.certificateHref && (
                      <div className="mt-5 pt-3">
                        <a
                          href={assetUrl(item.certificateHref)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono-code text-xs uppercase tracking-wider text-[#ea4335] font-bold hover:underline"
                        >
                          <span>View Certificate</span>
                          <span className="text-[10px]">↗</span>
                        </a>
                      </div>
                    )}
                    </div>

                    {campusImage && (
                      <div className="order-first flex h-36 items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-100 via-white to-neutral-200 p-2 sm:order-last sm:h-40">
                        <img
                          src={campusImage.src}
                          alt={campusImage.alt}
                          loading="lazy"
                          className="h-full w-full object-contain"
                          style={campusImage.blendMode ? { mixBlendMode: campusImage.blendMode } : undefined}
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
