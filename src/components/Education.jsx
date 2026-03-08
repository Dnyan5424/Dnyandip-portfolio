import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    school: "SVERI's College of Engineering (Polytechnic), Pandharpur",
    degree: 'Diploma in Computer Engineering',
    period: '2023 - 2026',
    details: ['Percentage: 96.12%'],
  },
  {
    school: 'Shree Chandrashekhar Vidyalay, Shreepur',
    degree: '10th Grade',
    period: 'Completed',
    details: ['Percentage: 93.40%', 'Ranked 1st in class', 'Ideal Student Award'],
  },
];

export default function Education() {
  return (
    <div className="mx-auto max-w-6xl space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="font-space text-xs font-bold uppercase tracking-[0.5em] text-cyan-200/75">Education</p>
        <h2 className="font-space text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Strong academic performance backed by consistency and discipline.
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-fuchsia-400 via-cyan-300/40 to-transparent md:left-1/2" />

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.article
              key={item.school}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24, y: 18 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className={`relative ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'}`}
            >
              <div className="absolute left-[-31px] top-8 h-5 w-5 rounded-full border border-fuchsia-400/50 bg-slate-950 shadow-[0_0_22px_rgba(192,132,252,0.4)] md:left-1/2 md:-translate-x-1/2" />

              <div className="glass-panel section-shell rounded-[2rem] p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200/75">{item.period}</p>
                <h3 className="mt-3 font-space text-2xl font-bold">{item.school}</h3>
                <p className="mt-3 text-base font-semibold text-slate-200/80">{item.degree}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {item.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full border border-white/8 bg-white/5 px-4 py-2 text-sm text-slate-300/75"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
