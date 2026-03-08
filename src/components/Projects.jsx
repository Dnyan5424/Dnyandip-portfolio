import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub } from 'react-icons/fa';

const filters = ['All', 'AI', 'Web', 'Platform'];

const projects = [
  {
    title: 'AI Code Reviewer',
    type: 'AI',
    description: 'Built an AI-powered code review tool that analyzes source code and provides suggestions for improving code quality, readability, and performance.',
    stack: ['Python', 'OpenAI API', 'JavaScript', 'HTML', 'CSS'],
    accent: 'from-fuchsia-500/40 via-sky-400/30 to-cyan-300/25',
  },
  {
    title: 'AI Expense Tracker',
    type: 'AI',
    description: 'Developed an intelligent expense tracking system that categorizes user expenses and provides insights into spending habits.',
    stack: ['Python', 'SQL / MongoDB', 'React', 'Charts'],
    accent: 'from-cyan-400/35 via-sky-500/30 to-indigo-500/25',
  },
  {
    title: 'AI Chatbot',
    type: 'AI',
    description: 'Created an AI chatbot capable of answering user queries in real time using natural language processing techniques.',
    stack: ['Python', 'OpenAI API', 'JavaScript', 'HTML', 'CSS'],
    accent: 'from-violet-500/35 via-fuchsia-500/25 to-cyan-400/25',
  },
  {
    title: 'AI-Based EV Station Management System',
    type: 'Platform',
    description: 'Developed a smart web application for managing Electric Vehicle charging stations with AI-based monitoring and optimization.',
    stack: ['React', 'Node.js', 'MongoDB', 'Python AI', 'REST APIs'],
    accent: 'from-emerald-400/30 via-cyan-400/28 to-sky-400/25',
  },
  {
    title: 'Portfolio Website',
    type: 'Web',
    description: 'Designed and developed a personal portfolio website to showcase projects, skills, and professional experience.',
    stack: ['React', 'Tailwind CSS', 'JavaScript'],
    accent: 'from-amber-300/24 via-fuchsia-400/24 to-sky-400/24',
  },
  {
    title: 'Car Rental Website',
    type: 'Web',
    description: 'Built a web application that allows users to browse, book, and manage car rentals online.',
    stack: ['HTML', 'CSS', 'JavaScript', 'MongoDB / SQL'],
    accent: 'from-cyan-300/24 via-blue-400/24 to-fuchsia-400/24',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.type === activeFilter);

  return (
    <div className="mx-auto max-w-7xl space-y-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <p className="font-space text-xs font-bold uppercase tracking-[0.5em] text-cyan-200/75">Projects</p>
          <h2 className="font-space text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            Real projects spanning AI, web development, and smart platform systems.
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-500 text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.28)]'
                  : 'border border-white/10 bg-white/5 text-slate-200/75 hover:border-cyan-300/35'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            whileHover={{ y: -10 }}
            className="glass-panel section-shell group overflow-hidden rounded-[2rem]"
          >
            <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.accent}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.12),rgba(2,6,23,0.65))]" />
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-5 rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
              />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-slate-950/55 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-100/78">
                {project.type}
              </div>
            </div>

            <div className="space-y-5 p-6">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-300/72">
                    {item}
                  </span>
                ))}
              </div>

              <div>
                <h3 className="font-space text-2xl font-bold">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300/68">{project.description}</p>
              </div>

              <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Highlights</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300/72">
                  {project.title === 'AI Code Reviewer' && (
                    <>
                      <li>Automated code review using AI</li>
                      <li>Detects syntax errors and bad coding practices</li>
                      <li>Suggests optimization improvements</li>
                    </>
                  )}
                  {project.title === 'AI Expense Tracker' && (
                    <>
                      <li>Automatic expense categorization using AI</li>
                      <li>Monthly spending analytics</li>
                      <li>Budget tracking and alerts</li>
                    </>
                  )}
                  {project.title === 'AI Chatbot' && (
                    <>
                      <li>Real-time conversation interface</li>
                      <li>Context-based responses</li>
                      <li>Scalable for future integrations</li>
                    </>
                  )}
                  {project.title === 'AI-Based EV Station Management System' && (
                    <>
                      <li>Real-time charging station availability</li>
                      <li>AI-based demand prediction</li>
                      <li>Booking and analytics dashboard</li>
                    </>
                  )}
                  {project.title === 'Portfolio Website' && (
                    <>
                      <li>Fully responsive design</li>
                      <li>Smooth animations and modern UI</li>
                      <li>Projects showcase with GitHub links</li>
                    </>
                  )}
                  {project.title === 'Car Rental Website' && (
                    <>
                      <li>Car browsing and filtering</li>
                      <li>Booking and reservation management</li>
                      <li>Admin panel for vehicle management</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.02]"
                >
                  Live Demo <FaArrowRight size={12} />
                </a>
                <a
                  href="https://github.com/Dnyan5424"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 transition-colors hover:border-cyan-300/35 hover:text-cyan-200"
                >
                  GitHub <FaGithub size={13} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
