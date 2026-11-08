import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheck } from 'react-icons/fa';
import { projectsData } from '../data/content';

const categories = ['All', 'AI', 'Platform', 'Web'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-28 px-6 sm:px-8 lg:px-12 border-t border-[#e6e3da] bg-[#fbfbfa]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-[#e6e3da]">
          <div>
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#ea4335] font-bold">
              Selected Work (01)
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950">
              Case Studies & Systems
            </h2>
            <p className="mt-2 text-neutral-600 max-w-xl text-base">
              Real projects spanning AI models, smart platforms, data pipelines, and responsive web systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 font-mono-code text-xs uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 ${
                  activeCategory === cat
                    ? 'bg-neutral-950 text-white font-semibold shadow-xs'
                    : 'border border-neutral-300 bg-white text-neutral-600 hover:border-neutral-900 hover:text-neutral-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Work List (Alternating Editorial Compositions) */}
        <div className="mt-16 space-y-20 sm:space-y-28">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid gap-10 lg:gap-16 items-center ${
                    isEven ? 'lg:grid-cols-[1.1fr_0.9fr]' : 'lg:grid-cols-[0.9fr_1.1fr]'
                  }`}
                >
                  {/* Visual / Feature Composition Box */}
                  <div
                    className={`relative rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow group ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {/* Subtle Top Metadata */}
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-6">
                      <span className="font-mono-code text-xs uppercase tracking-widest text-[#ea4335] font-bold">
                        {project.type} // {project.year}
                      </span>
                      <span className="font-mono-code text-xs text-neutral-400">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Key Highlights Inside the Composition */}
                    <div>
                      <h4 className="font-mono-code text-xs uppercase tracking-wider text-neutral-500 mb-4 font-semibold">
                        Key Architecture & Highlights
                      </h4>
                      <ul className="space-y-3">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-3 text-sm text-neutral-700">
                            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#ea4335]">
                              <FaCheck className="text-[9px]" />
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Matrix Inside Card */}
                    <div className="mt-8 pt-6 border-t border-neutral-100">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 font-mono-code text-xs text-neutral-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Editorial Details & Links */}
                  <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <div className="flex items-center gap-2 font-mono-code text-xs uppercase text-neutral-500 tracking-wider">
                        <span>Project</span>
                        <span className="text-neutral-300">/</span>
                        <span className="text-[#ea4335] font-bold">{project.type}</span>
                      </div>
                      <h3 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-base sm:text-lg leading-relaxed text-neutral-600">
                      {project.description}
                    </p>

                    {/* Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 font-display text-sm font-bold text-neutral-900 transition-all hover:border-neutral-900 hover:scale-105 active:scale-95 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                        >
                          <FaGithub size={15} />
                          <span>View Code</span>
                          <span className="text-xs">↗</span>
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 font-display text-sm font-bold text-white transition-all hover:bg-[#ea4335] hover:scale-105 active:scale-95 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                        >
                          <FaExternalLinkAlt size={12} />
                          <span>Live Site</span>
                          <span className="text-xs">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
