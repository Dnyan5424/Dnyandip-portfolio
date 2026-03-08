import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaChartLine, FaDatabase, FaRobot } from 'react-icons/fa';

const programs = [
  {
    company: 'Tata',
    title: 'GenAI Powered Data Analytics',
    description:
      'Worked on a simulated business case using Generative AI tools to analyze customer data and generate actionable insights for business decision-making.',
    work: [
      'Performed customer segmentation analysis',
      'Used GenAI tools for data storytelling',
      'Created insights to support business strategy',
    ],
    skills: ['Data Analysis', 'Generative AI', 'Business Analytics', 'Data Storytelling'],
    Icon: FaChartLine,
    href: '/documents/internships/tata-genai-powered-data-analytics.pdf',
  },
  {
    company: 'Citi',
    title: 'Markets Sales & Trading',
    description:
      'Simulated the role of a market analyst, analyzing financial market trends and preparing insights for trading strategies.',
    work: [
      'Conducted trade risk assessments',
      'Analyzed market trends for USD interest rates',
      'Prepared market commentary reports',
    ],
    skills: ['Market Analysis', 'Financial Data Analysis', 'Risk Assessment'],
    Icon: FaBriefcase,
    href: '/documents/internships/citi-markets-sales-trading.pdf',
  },
  {
    company: 'Deloitte',
    title: 'Data Analytics',

    description:
      'Completed a data analytics simulation focused on data cleaning, analysis, and visualization to support client business decisions.',
    work: [
      'Performed data wrangling and preprocessing',
      'Analyzed datasets using Excel and SQL',
      'Created insightful reports and client presentations',
    ],
    skills: ['Data Cleaning', 'SQL', 'Excel Analytics', 'Data Visualization'],
    Icon: FaDatabase,
    href: '/documents/internships/deloitte-data-analytics.pdf',
  },
  {
    company: 'Johnson & Johnson MedTech',
    title: 'Robotics & Controls',
    description:
      'Worked on diagnosing performance delays in a robotic arm control system and suggested improvements using Python.',
    work: [
      'Investigated robotic system performance issues',
      'Proposed Python-based optimization algorithms',
      'Improved system efficiency and responsiveness',
    ],
    skills: ['Python', 'Robotics Control Systems', 'Performance Optimization'],
    Icon: FaRobot,
    href: '/documents/internships/johnson-johnson-medtech-robotics-controls.pdf',
  },
];

export default function Internships() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      <div className="max-w-4xl space-y-4">
        <p className="font-space text-xs font-bold uppercase tracking-[0.5em] text-cyan-200/75">
          Virtual Internships & Industry Simulations
        </p>
        <h2 className="font-space text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Industry exposure through practical simulations and business-focused problem solving.
        </h2>
        <p className="text-base leading-8 text-slate-300/72 sm:text-lg">
          These simulations reflect hands-on exposure to analytics, finance, robotics, and AI-oriented workflows in realistic industry scenarios.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {programs.map((program, index) => (
          <motion.article
            key={`${program.company}-${program.title}`}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
            className="glass-panel section-shell flex rounded-[1.8rem] p-6"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="flex h-full flex-col">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-300/20 to-fuchsia-500/20 text-cyan-200">
                <program.Icon />
              </div>

              <h3 className="mt-3 font-space text-xl font-bold leading-tight">
                {program.company} - {program.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300/68">{program.description}</p>

              <div className="mt-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Key Work</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300/72">
                  {program.work.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Skills</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {program.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-slate-300/75"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={`${baseUrl}${program.href.replace(/^\//, '')}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-200 transition-colors hover:text-white"
              >
                View Details
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
