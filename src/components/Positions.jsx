import React from 'react';
import { motion } from 'framer-motion';
import { FaTasks, FaUsers } from 'react-icons/fa';

const positions = [
  {
    title: 'Organizer - College Tech Events',
    description:
      'Organized Technical Quiz, CodeByte, and Paper Presentation events focused on Web Development, Data Science, Machine Learning and DSA.',
    Icon: FaTasks,
  },
  {
    title: 'Student Representative - Annual Gathering',
    description:
      'Led organization and coordination of school annual gathering.',
    Icon: FaUsers,
  },
];

export default function Positions() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="font-space text-xs font-bold uppercase tracking-[0.5em] text-cyan-200/75">Positions of Responsibility</p>
        <h2 className="font-space text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Leadership roles built around coordination, ownership, and execution.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {positions.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className="glass-panel section-shell rounded-[1.8rem] p-6 sm:p-7"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-300/20 to-fuchsia-500/20 text-cyan-200">
              <item.Icon />
            </div>
            <h3 className="font-space text-2xl font-bold leading-tight">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300/68 sm:text-base">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
