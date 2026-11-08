import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck, FaFileAlt } from 'react-icons/fa';
import { contactData, personalData } from '../data/content';
import { assetUrl } from '../utils/assetUrl';
import PaperPlaneGame from './PaperPlaneGame';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-8 lg:px-12 border-t border-[#e6e3da] bg-[#fbfbfa]">
      <div className="mx-auto max-w-5xl">
        {/* Bold Signature Red Callout Card (Preserved Unchanged) */}
        <div className="relative overflow-hidden rounded-3xl bg-[#ea4335] p-8 sm:p-14 text-white shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono-code text-xs uppercase tracking-widest text-red-100 font-bold">
              {contactData.sectionLabel} (07)
            </span>

            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.08]">
              Got a problem worth solving?
            </h2>

            <p className="text-base sm:text-xl leading-relaxed text-red-50 font-normal max-w-2xl">
              Bring me the complex, high-impact one. From data analytics and intelligent ML systems to full-stack web applications, let&apos;s build software people rely on.
            </p>
          </div>

          {/* Quick Action Strip Inside Red Card */}
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {/* Copy / Direct Email Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-display text-sm font-bold text-neutral-950 shadow-md transition-all hover:bg-neutral-100 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {copied ? (
                <>
                  <FaCheck className="text-emerald-600" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <FaEnvelope size={13} className="text-[#ea4335]" />
                  <span>{contactData.email}</span>
                </>
              )}
            </button>

            {/* LinkedIn */}
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-display text-sm font-bold text-white transition-all hover:bg-white/20 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FaLinkedin size={15} />
              <span>LinkedIn</span>
              <span className="text-xs">↗</span>
            </a>

            {/* GitHub */}
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-display text-sm font-bold text-white transition-all hover:bg-white/20 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FaGithub size={15} />
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>

            {/* Resume / CV */}
            <a
              href={assetUrl(personalData.resumePath)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-display text-sm font-bold text-white transition-all hover:bg-white/20 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <FaFileAlt size={13} />
              <span>Resume (CV)</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* Clean Secondary Contact Info */}
        <div className="mt-12 text-center text-sm text-neutral-500 font-mono-code">
          <span>Direct Email: </span>
          <a
            href={`mailto:${contactData.email}`}
            className="text-neutral-900 font-semibold hover:text-[#ea4335] underline"
          >
            {contactData.email}
          </a>
          <span className="mx-2">·</span>
          <span>Response within 24 hours</span>
        </div>

        {/* Interactive Paper Plane Slingshot Game (from Video) */}
        <PaperPlaneGame />
      </div>
    </section>
  );
}
