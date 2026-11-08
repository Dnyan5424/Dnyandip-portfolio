import React from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa';
import { researchData } from '../data/content';

export default function Research() {
  return (
    <section id="research" className="relative py-28 px-6 sm:px-8 lg:px-12 border-t border-[#e6e3da] bg-[#fbfbfa]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="pb-12 border-b border-[#e6e3da]">
          <span className="font-mono-code text-xs uppercase tracking-widest text-[#ea4335] font-bold">
            {researchData.sectionLabel} (05)
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 max-w-3xl">
            {researchData.heading}
          </h2>
        </div>

        {/* Editorial Publication Cards */}
        <div className="mt-12 space-y-8">
          {researchData.publications.map((paper) => (
            <motion.article
              key={paper.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-10 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="max-w-4xl">
                  <div className="flex items-center gap-2.5 font-mono-code text-xs uppercase tracking-wider text-[#ea4335] font-bold mb-3">
                    <FaBookOpen />
                    <span>Peer-Reviewed Academic Publication</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
                    {paper.title}
                  </h3>

                  <p className="mt-2 font-mono-code text-xs sm:text-sm text-neutral-500">
                    Published in: <span className="text-neutral-800 font-semibold">{paper.venue}</span>
                  </p>

                  <div className="mt-6 space-y-3 text-sm sm:text-base leading-relaxed text-neutral-600">
                    {paper.description.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Topics */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {paper.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1 font-mono-code text-xs text-neutral-700"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Read Paper Action Button */}
                <div className="shrink-0 pt-2">
                  <a
                    href={paper.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 font-display text-sm font-bold text-white transition-all hover:bg-[#ea4335] hover:scale-105 active:scale-95 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                  >
                    <span>Read Paper</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
