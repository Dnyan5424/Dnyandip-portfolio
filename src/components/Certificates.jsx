import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { SiGoogleanalytics, SiGoogleplay, SiTcs } from 'react-icons/si';
import { assetUrl } from '../utils/assetUrl';

const certificates = [
  {
    title: 'TCS iON Career Edge - Young Professional',
    platform: 'Tata Consultancy Services (TCS)',
    date: 'July 2025',
    credentialId: '204620-28582730-1016',
    skills: ['Communication Skills', 'Professional Soft Skills', 'Artificial Intelligence Fundamentals'],
    Icon: SiTcs,
    href: '/documents/certificates/tcs-ion-career-edge.pdf',
  },
  {
    title: 'Google Analytics Certification',
    platform: 'Google',
    credentialId: '153195920',
    skills: ['Data Analysis', 'Business Analytics', 'Website Traffic Analysis', 'User Behavior Insights'],
    Icon: SiGoogleanalytics,
    href: '/documents/certificates/google-analytics-certification.pdf',
  },
  {
    title: 'Google Play Academy Certification',
    platform: 'Google Play Academy',
    date: 'September 2025',
    validUntil: 'September 2028',
    credentialId: '161333853',
    skills: ['Google Play Store Optimization', 'App Publishing', 'Mobile App Performance Monitoring'],
    Icon: SiGoogleplay,
    href: '/documents/certificates/google-play-academy-certification.pdf',
  },
  {
    title: 'Full Stack Web Development',
    platform: 'Udemy',
    date: '2025',
    credentialId: 'Udemy Certificate',
    skills: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    Icon: HiArrowTopRightOnSquare,
    href: '/documents/certificates/udemy-full-stack-web-development.pdf',
  },
];

export default function Certificates() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      <div className="max-w-3xl space-y-4">
        <p className="font-space text-xs font-bold uppercase tracking-[0.5em] text-cyan-200/75">Certificates</p>
        <h2 className="font-space text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Certifications that strengthen industry readiness, analytics, and product understanding.
        </h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {certificates.map((certificate, index) => (
          <motion.article
            key={certificate.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
            className="glass-panel section-shell rounded-[1.8rem] p-6"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-fuchsia-500/20 text-cyan-200">
              <certificate.Icon />
            </div>
            <h3 className="font-space text-xl font-bold leading-tight">{certificate.title}</h3>
            <p className="mt-3 text-sm font-medium text-cyan-200/78">{certificate.platform}</p>
            {certificate.date ? (
              <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">Issued: {certificate.date}</p>
            ) : null}
            {certificate.validUntil ? (
              <p className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-400">Valid Until: {certificate.validUntil}</p>
            ) : null}
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Credential ID: {certificate.credentialId}</p>

            <p className="mt-5 text-sm leading-7 text-slate-300/72">{certificate.description}</p>

            <div className="mt-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">Skills Learned</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
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
              href={assetUrl(certificate.href)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/82 transition-colors hover:text-cyan-200"
            >
              View certificate <HiArrowTopRightOnSquare size={15} />
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
