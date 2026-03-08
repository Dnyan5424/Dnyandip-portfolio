import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { FaBrain } from 'react-icons/fa6';

const researchPublications = [
  {
    title: 'AI-Based EV Charging Station Management System',
    venue: 'International Journal of Research Publication and Reviews (IJRPR)',
    description: [
      'This research focuses on developing an AI-based management system for electric vehicle charging stations.',
      'The system analyzes charging demand, optimizes station availability, and improves energy distribution using intelligent algorithms.',
      'It shows how AI can improve efficiency in EV infrastructure and support the growing adoption of electric vehicles.',
    ],
    topics: ['Artificial Intelligence', 'Data Analytics', 'Smart Energy Management'],
    href: 'https://ijrpr.com/uploads/V6ISSUE12/IJRPR58115.pdf',
  },
];

export default function Research() {
  const MotionArticle = motion.article;

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="font-space text-xs font-bold uppercase tracking-[0.5em] text-cyan-200/75">
          Research & Publications
        </p>
        <h2 className="font-space text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Academic work focused on intelligent EV infrastructure, optimization, and applied AI.
        </h2>
      </div>

      <div className="grid gap-6">
        {researchPublications.map((publication, index) => (
          <MotionArticle
            key={publication.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass-panel section-shell rounded-[2rem] p-6 sm:p-8"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-4xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-fuchsia-500/20 text-cyan-200">
                  <FaBrain />
                </div>

                <h3 className="font-space text-2xl font-bold text-white sm:text-3xl">
                  {publication.title}
                </h3>

                <p className="mt-3 text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/72">
                  Published in: {publication.venue}
                </p>

                <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300/76 sm:text-base">
                  {publication.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">
                    Technologies / Concepts
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {publication.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-slate-300/78"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={publication.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition-all hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/15"
              >
                Read Paper
                <HiArrowTopRightOnSquare size={16} />
              </a>
            </div>
          </MotionArticle>
        ))}
      </div>
    </div>
  );
}
