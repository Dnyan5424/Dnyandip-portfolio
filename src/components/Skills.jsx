
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/content';

const ease = [0.22, 1, 0.36, 1];

const descriptions = [
  'Building modern, scalable and interactive web applications.',
  'Creating intelligent systems and exploring data-driven solutions.',
  'Designing reliable server-side systems and data architecture.',
  'Tools and platforms that power development workflows.',
  'Core engineering principles and problem-solving foundations.',
  'Exploring emerging technologies and new possibilities.',
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 sm:py-32 px-6 sm:px-8 lg:px-12 border-t border-[#e6e3da] bg-[#f9f8f5]"
    >
      <div className="mx-auto max-w-7xl">

        {/* Background decoration */}
        <div className="absolute right-[-100px] top-40 w-80 h-80 rounded-full bg-[#ea4335]/[0.035] blur-[100px] pointer-events-none" />

        {/* SECTION HEADER */}
        <div className="relative grid lg:grid-cols-[1fr_300px] gap-8 items-end pb-12 border-b border-[#e6e3da]">

          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-px bg-[#ea4335]" />
              <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-[#ea4335] font-bold">
                {skillsData.sectionLabel} / 04
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.055em] leading-[1.05] text-neutral-950 max-w-3xl"
            >
              {skillsData.heading}
              <span className="text-[#ea4335]">.</span>
            </motion.h2>

            <p className="mt-5 text-sm sm:text-base text-neutral-500 max-w-xl leading-relaxed">
              {skillsData.subheading}
            </p>
          </div>

          {/* Right metadata */}
          <div className="hidden lg:flex flex-col items-end gap-3 pb-1">
            <span className="font-mono-code text-[10px] uppercase tracking-widest text-neutral-400">
              Technical capabilities
            </span>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="font-mono-code text-xs text-neutral-600">
                Always learning. Always building.
              </span>
            </div>
          </div>
        </div>

        {/* FEATURED TOOLKIT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="relative mt-10 overflow-hidden rounded-2xl border border-neutral-200 bg-white"
        >
          <div className="flex flex-col sm:flex-row sm:items-center">

            <div className="shrink-0 px-6 py-5 sm:border-r border-neutral-100">
              <p className="font-mono-code text-[10px] uppercase tracking-[0.17em] text-neutral-400">
                01 / Preferred tools
              </p>

              <h3 className="mt-1 text-sm font-bold text-neutral-900">
                Primary Stack
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 px-6 py-5">
              {skillsData.featuredToolkit.map((tool, index) => (
                <motion.span
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  whileHover={{ y: -3 }}
                  className="group cursor-default rounded-full border border-neutral-200 bg-[#f9f8f5] px-4 py-2 text-xs font-mono-code text-neutral-700 transition-all duration-300 hover:border-[#ea4335]/50 hover:bg-[#ea4335]/[0.045] hover:text-[#ea4335]"
                >
                  {tool.name}
                  <span className="ml-2 text-[#ea4335] opacity-0 group-hover:opacity-100 transition-opacity">
                    ↗
                  </span>
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SKILL CATEGORY GRID */}
        <div className="mt-16">

          <div className="flex justify-between items-center mb-7">
            <div>
              <p className="font-mono-code text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                Explore my toolkit
              </p>
              <h3 className="mt-1 text-xl font-bold tracking-tight text-neutral-950">
                Technologies & expertise
              </h3>
            </div>

            <span className="hidden sm:block font-mono-code text-[10px] text-neutral-400">
              {String(skillsData.categories.length).padStart(2, '0')} CATEGORIES
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillsData.categories.map((cat, idx) => (
              <motion.article
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: (idx % 3) * 0.09,
                  ease,
                }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 sm:p-7 transition-all duration-300 hover:border-[#ea4335]/40 hover:shadow-[0_16px_45px_rgba(0,0,0,0.055)]"
              >

                {/* Hover accent */}
                <motion.div
                  className="absolute top-0 left-0 h-[2px] w-0 bg-[#ea4335] group-hover:w-full transition-all duration-500"
                />

                {/* Card heading */}
                <div className="flex items-start justify-between pb-5 border-b border-neutral-100">

                  <div>
                    <span className="font-mono-code text-[9px] uppercase tracking-[0.15em] text-neutral-400">
                      CATEGORY / {String(idx + 1).padStart(2, '0')}
                    </span>

                    <h3 className="mt-2 font-display text-lg sm:text-xl font-bold tracking-tight text-neutral-950">
                      {cat.title}
                    </h3>
                  </div>

                  <span className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-200 text-neutral-400 text-sm transition-all duration-300 group-hover:bg-[#ea4335] group-hover:border-[#ea4335] group-hover:text-white">
                    ↗
                  </span>
                </div>

                {/* Description */}
                <p className="mt-5 mb-5 min-h-[40px] text-xs leading-relaxed text-neutral-500">
                  {descriptions[idx] || 'Technologies and tools used in my development journey.'}
                </p>

                {/* Skills */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-neutral-100 bg-[#f8f7f4] px-3 py-2 text-[11px] font-mono-code text-neutral-700 transition-all duration-200 hover:border-[#ea4335]/40 hover:bg-[#ea4335]/[0.04] hover:text-[#ea4335] cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom metadata */}
                <div className="mt-7 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-widest font-mono-code text-neutral-400">
                    Technologies
                  </span>

                  <span className="font-mono-code text-[10px] text-neutral-400 tabular-nums">
                    {String(cat.skills.length).padStart(2, '0')} ITEMS
                  </span>
                </div>

              </motion.article>
            ))}
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mt-16 pt-8 border-t border-[#e6e3da] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <p className="text-sm text-neutral-500">
            Technology evolves. So does my toolkit.
          </p>

          <span className="font-mono-code text-[10px] uppercase tracking-widest text-[#ea4335]">
            Learn / Experiment / Build ↗
          </span>
        </motion.div>

      </div>
    </section>
  );
}
