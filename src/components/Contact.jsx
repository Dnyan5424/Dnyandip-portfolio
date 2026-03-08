import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const socials = [
  { label: 'Phone', value: '+91 7249385424', href: 'tel:+917249385424', Icon: FaPhoneAlt },
  { label: 'Email', value: 'Dnyandipkatkar07@gmail.com', href: 'mailto:Dnyandipkatkar07@gmail.com', Icon: FaEnvelope },
  { label: 'GitHub', value: 'github.com/Dnyan5424', href: 'https://github.com/Dnyan5424', Icon: FaGithub },
  { label: 'LinkedIn', value: 'linkedin.com/in/dnyandip-katkar-2a4578', href: 'https://www.linkedin.com/in/dnyandip-katkar-2a4578', Icon: FaLinkedin },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="font-space text-xs font-bold uppercase tracking-[0.5em] text-cyan-200/75">Contact</p>
          <h2 className="font-space text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            Let&apos;s build something ambitious together.
          </h2>
          <p className="max-w-xl text-base leading-8 text-slate-300/72 sm:text-lg">
            Open to internships, analytics projects, and engineering collaborations that value clean execution and clear thinking.
          </p>

          <div className="grid gap-4">
            {socials.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="glass-panel section-shell flex items-center gap-4 rounded-[1.6rem] p-5 transition-transform hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-fuchsia-500/20 text-cyan-200">
                  <Icon />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</p>
                  <p className="mt-2 text-sm text-white/85 sm:text-base">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          onSubmit={(event) => event.preventDefault()}
          className="glass-panel section-shell rounded-[2rem] p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-3">
              <label htmlFor="name" className="text-xs uppercase tracking-[0.32em] text-slate-400">
                Name
              </label>
              <input id="name" type="text" placeholder="Your name" className="input-shell w-full rounded-2xl px-5 py-4 text-white placeholder:text-slate-500" />
            </div>
            <div className="space-y-3">
              <label htmlFor="email" className="text-xs uppercase tracking-[0.32em] text-slate-400">
                Email
              </label>
              <input id="email" type="email" placeholder="you@example.com" className="input-shell w-full rounded-2xl px-5 py-4 text-white placeholder:text-slate-500" />
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <label htmlFor="message" className="text-xs uppercase tracking-[0.32em] text-slate-400">
              Message
            </label>
            <textarea
              id="message"
              rows="7"
              placeholder="Tell me about your project, team, or idea."
              className="input-shell w-full rounded-[1.6rem] px-5 py-4 text-white placeholder:text-slate-500"
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-500 px-7 py-4 text-sm font-semibold text-slate-950 shadow-[0_14px_40px_rgba(56,189,248,0.28)] transition-transform hover:scale-[1.02]"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
