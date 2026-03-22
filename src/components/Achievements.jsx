import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaTrophy } from 'react-icons/fa';

const achievements = [
  {
    title: 'Coder\'s 24-Hour Hackathon 2.0',
    date: 'National Level',
    detail: 'New Satara College of Engineering & Management',
    Icon: FaTrophy,
  },
  {
    title: 'CodeMind AI Hackathon',
    date: 'Hackathon Participation',
    detail: 'SVERI College of Engineering',
    Icon: FaMedal,
  },
  {
    title: 'Chakravyuh 1.0',
    date: 'National Level',
    detail: 'SVERI College of Engineering ',
    Icon: FaTrophy,
  },
];

export default function Achievements() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="font-space text-xs font-bold uppercase tracking-[0.5em] text-cyan-200/75">Achievements</p>
        <h2 className="font-space text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Competitive milestones that reflect curiosity and technical confidence.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {achievements.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass-panel section-shell rounded-[1.8rem] p-6 sm:p-7"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-300/20 to-fuchsia-500/20 text-cyan-200">
              <item.Icon />
            </div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{item.date}</p>
            <h3 className="mt-4 font-space text-2xl font-bold leading-tight">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300/72">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
