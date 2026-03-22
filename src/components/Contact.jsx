import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  {
    label: 'Email Me',
    href: 'mailto:Dnyandipkatkar07@gmail.com',
    Icon: FaEnvelope,
    accent: 'from-cyan-300/20 via-sky-400/12 to-transparent',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dnyandipkatkar',
    Icon: FaLinkedin,
    accent: 'from-sky-400/18 via-blue-400/10 to-transparent',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Dnyan5424',
    Icon: FaGithub,
    accent: 'from-fuchsia-400/18 via-cyan-300/10 to-transparent',
  },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="glass-panel section-shell relative overflow-hidden rounded-[2.25rem] p-7 sm:p-9"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(232,121,249,0.12),transparent_32%)]" />

          <div className="relative z-10 space-y-6">
            <p className="font-space text-xs font-bold uppercase tracking-[0.5em] text-cyan-200/75">
              Contact
            </p>

            <div className="space-y-4">
              <h2 className="font-space text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Let&apos;s Connect
              </h2>
              <p className="max-w-xl text-base leading-8 text-slate-300/72 sm:text-lg">
                This portfolio highlights my student journey across software, AI, and web development.
                Reach out for collaborations, project discussions, or to connect.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-5">
          {socials.map(({ label, href, Icon, note, accent }, index) => (
            <motion.a
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="glass-panel section-shell group relative overflow-hidden rounded-[2rem] p-6 sm:p-7"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-80`} />

              <div className="relative z-10 flex items-start justify-between gap-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.3rem] border border-white/12 bg-white/[0.06] text-xl text-cyan-200">
                    {React.createElement(Icon)}
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">Reach Out</p>
                    <h3 className="mt-2 font-space text-2xl font-bold text-white">{label}</h3>
                    <p className="mt-3 max-w-md text-sm leading-7 text-slate-300/72">{note}</p>
                  </div>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-slate-300 transition-all group-hover:border-cyan-300/35 group-hover:text-cyan-200">
                  <FaArrowRight />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
