import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase } from 'react-icons/fa';

const responsibilities = [
  'Converted raw datasets into meaningful formats through normalization and transformation.',
  'Optimized SQL queries to improve processing speed.',
  'Performed data cleaning and validation to ensure accurate analysis.',
  'Presented clear analytical reports to assist management decision making.',
];

export default function Experience() {
  const certificateHref = `${import.meta.env.BASE_URL}documents/experience/proazure-internship-certificate.pdf`;

  return (
    <div className="mx-auto max-w-6xl space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="font-space text-xs font-bold uppercase tracking-[0.5em] text-cyan-200/75">Experience</p>
        <h2 className="font-space text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Practical experience in data cleaning, SQL optimization, and reporting.
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-sky-400/45 to-transparent md:left-1/2" />

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="relative ml-12 md:ml-0 md:pr-[52%]"
        >
          <div className="absolute left-[-31px] top-8 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-300/50 bg-slate-950 shadow-[0_0_22px_rgba(34,211,238,0.45)] md:left-1/2 md:-translate-x-1/2">
            <motion.span
              animate={{ scale: [1, 1.45, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2.5 w-2.5 rounded-full bg-cyan-300"
            />
          </div>

          <div className="glass-panel section-shell rounded-[2rem] p-6 sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/75">June 2025 - August 2025</p>
                <h3 className="font-space text-3xl font-bold">Data Analyst Intern</h3>
                <p className="text-sm font-semibold text-slate-200/78">
                  ProAzure Software Solutions Ltd - kharadi,Pune
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-300/20 to-fuchsia-500/20 text-cyan-200">
                <FaDatabase />
              </div>
            </div>

            <ul className="space-y-4">
              {responsibilities.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 * index, duration: 0.4 }}
                  className="flex gap-3 text-sm leading-7 text-slate-300/68 sm:text-base"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href={certificateHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-200 transition-colors hover:text-white"
            >
              View Internship Certificate
            </a>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
