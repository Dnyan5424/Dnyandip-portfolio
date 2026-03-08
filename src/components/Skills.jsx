import React from 'react';
import { motion } from 'framer-motion';
import { BiLogoJava } from 'react-icons/bi';
import { FaBrain, FaChartBar, FaFileExcel, FaTable } from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiCss,
  SiEthereum,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiPython,
  SiR,
  SiReact,
  SiSqlite,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from 'react-icons/si';

const categories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', Icon: BiLogoJava, color: 'text-orange-300' },
      { name: 'C', Icon: SiC, color: 'text-sky-300' },
      { name: 'C++', Icon: SiCplusplus, color: 'text-blue-300' },
      { name: 'Python', Icon: SiPython, color: 'text-cyan-300' },
      { name: 'R Language', Icon: SiR, color: 'text-violet-300' },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'HTML', Icon: SiHtml5, color: 'text-orange-300' },
      { name: 'CSS', Icon: SiCss, color: 'text-sky-300' },
      { name: 'JavaScript', Icon: SiJavascript, color: 'text-yellow-300' },
      { name: 'React', Icon: SiReact, color: 'text-cyan-300' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'SQL', Icon: SiSqlite, color: 'text-cyan-200' },
      { name: 'MongoDB', Icon: SiMongodb, color: 'text-emerald-300' },
    ],
  },
  {
    title: 'Data Analytics Tools',
    skills: [
      { name: 'Excel', Icon: FaFileExcel, color: 'text-emerald-300' },
      { name: 'Tableau', Icon: FaTable, color: 'text-sky-300' },
      { name: 'Power BI', Icon: FaChartBar, color: 'text-amber-300' },
      { name: 'Analytics Reporting', Icon: FaChartBar, color: 'text-fuchsia-300' },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'Machine Learning', Icon: FaBrain, color: 'text-fuchsia-300' },
      { name: 'NumPy', Icon: SiNumpy, color: 'text-blue-300' },
      { name: 'Pandas', Icon: SiPandas, color: 'text-violet-300' },
      { name: 'Scikit-learn', Icon: SiScikitlearn, color: 'text-yellow-300' },
    ],
  },
  {
    title: 'Blockchain',
    skills: [
      { name: 'Blockchain Basics', Icon: SiEthereum, color: 'text-violet-300' },
    ],
  },
];

export default function Skills() {
  return (
    <div className="mx-auto max-w-7xl space-y-12">
      <div className="max-w-3xl space-y-4">
        <p className="font-space text-xs font-bold uppercase tracking-[0.5em] text-cyan-200/75">Skills</p>
        <h2 className="font-space text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          A broader technical profile across software, analytics, AI, and blockchain.
        </h2>
        <p className="text-base leading-8 text-slate-300/72 sm:text-lg">
          My skill set spans programming, web development, data analytics tools, machine learning concepts, and emerging technologies.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: categoryIndex * 0.08 }}
            className="glass-panel section-shell rounded-[2rem] p-6 sm:p-7"
          >
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Category</p>
                <h3 className="mt-2 font-space text-2xl font-bold">{category.title}</h3>
              </div>
              <div className="rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200/85">
                Toolkit
              </div>
            </div>

            <div className="grid gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.08 * skillIndex }}
                  whileHover={{ rotateX: 4, rotateY: -4, y: -4 }}
                  className="rounded-[1.6rem] border border-white/8 bg-white/[0.04] p-5"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-xl ${skill.color}`}>
                      <skill.Icon />
                    </div>
                    <div>
                      <p className="font-space text-lg font-bold">{skill.name}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Technology</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}