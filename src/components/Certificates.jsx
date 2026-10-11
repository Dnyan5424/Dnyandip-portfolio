
import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import {
  SiGoogleanalytics,
  SiGoogleplay,
  SiTcs,
} from 'react-icons/si';
import { assetUrl } from '../utils/assetUrl';

const certificates = [
  {
    title: 'TCS iON Career Edge - Young Professional',
    platform: 'Tata Consultancy Services (TCS)',
    date: 'July 2025',
    credentialId: '204620-28582730-1016',
    description:
      'Completed a career readiness program covering communication, workplace skills, and AI fundamentals.',
    skills: [
      'Communication Skills',
      'Professional Soft Skills',
      'AI Fundamentals',
    ],
    Icon: SiTcs,
    href: '/documents/certificates/tcs-ion-career-edge.pdf',
  },
  {
    title: 'Google Analytics Certification',
    platform: 'Google',
    credentialId: '153195920',
    description:
      'Developed practical knowledge of analytics reporting, website traffic analysis, and interpreting user behavior data.',
    skills: [
      'Data Analysis',
      'Business Analytics',
      'Website Traffic Analysis',
      'User Behavior Insights',
    ],
    Icon: SiGoogleanalytics,
    href: '/documents/certificates/google-analytics-certification.pdf',
  },
  {
    title: 'Google Play Academy Certification',
    platform: 'Google Play Academy',
    date: 'September 2025',
    validUntil: 'September 2028',
    credentialId: '161333853',
    description:
      'Learned app publishing, optimization, and performance practices for products in the Google Play ecosystem.',
    skills: [
      'Google Play Store Optimization',
      'App Publishing',
      'Mobile App Performance Monitoring',
    ],
    Icon: SiGoogleplay,
    href: '/documents/certificates/google-play-academy-certification.pdf',
  },
  {
    title: 'Full Stack Web Development',
    platform: 'Udemy',
    date: '2025',
    description:
      'Covered front-end fundamentals and core web development concepts used to build responsive websites.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    Icon: HiArrowTopRightOnSquare,
    href: '/documents/certificates/udemy-full-stack-web-development.pdf',
  },
  {
    title: 'AI/ML for Geodata Analytics',
    platform: 'Indian Institute of Remote Sensing (IIRS), ISRO',
    date: 'August 2026',
    credentialId: '2026234975123',
    description:
      'Completed a 10-hour online course exploring AI and machine learning applications in geodata analytics.',
    skills: [
      'Artificial Intelligence',
      'Machine Learning',
      'Geospatial Analytics',
      'Satellite Data',
    ],
    Icon: HiArrowTopRightOnSquare,
    href: '/documents/certificates/aiml-for-geodata.pdf',
  },
  {
    title:
      'Earth Observations and Numerical Model Applications for Tropical Cyclone Monitoring and Forecasting',
    platform: 'Indian Institute of Remote Sensing (IIRS), ISRO',
    date: 'July 2026',
    description:
      'Participated in an online workshop on Earth observations and numerical model applications for tropical cyclone monitoring and forecasting.',
    skills: [
      'Earth Observation',
      'Satellite Data',
      'Numerical Models',
      'Weather Monitoring',
    ],
    Icon: HiArrowTopRightOnSquare,
    href: '/documents/certificates/cyclone-monitoring-forecasting.pdf',
  },

  // Microsoft Learn achievements
  {
    title: 'Describe Azure Compute Services',
    platform: 'Microsoft Learn',
    date: 'September 2026',
    description:
      'Completed a Microsoft Learn module covering Azure compute services and cloud computing capabilities.',
    skills: ['Microsoft Azure', 'Cloud Computing', 'Compute Services'],
    Icon: HiArrowTopRightOnSquare,
    href: '/documents/achievements/microsoft-learn-achievements.pdf',
  },
  {
    title: 'Build Your First ASP.NET Core Web App',
    platform: 'Microsoft Learn',
    date: 'September 2026',
    description:
      'Completed a learning module introducing the development of web applications using ASP.NET Core.',
    skills: ['ASP.NET Core', 'C#', 'Web Development'],
    Icon: HiArrowTopRightOnSquare,
    href: '/documents/achievements/microsoft-learn-achievements-1.pdf',
  },
  {
    title: 'Write Your First C# Code',
    platform: 'Microsoft Learn',
    date: 'September 2026',
    description:
      'Practiced fundamental C# programming concepts and writing basic code.',
    skills: ['C#', 'Programming Fundamentals', 'Problem Solving'],
    Icon: HiArrowTopRightOnSquare,
    href: '/documents/achievements/microsoft-learn-achievements-2.pdf',
  },
  {
    title: 'Get Started with Classes and Objects in C#',
    platform: 'Microsoft Learn',
    date: 'September 2026',
    description:
      'Explored object-oriented programming fundamentals using classes and objects in C#.',
    skills: ['C#', 'Object-Oriented Programming', 'Classes', 'Objects'],
    Icon: HiArrowTopRightOnSquare,
    href: '/documents/achievements/microsoft-learn-achievements-3.pdf',
  },
  {
    title: 'Introduction to Prompt Engineering with GitHub Copilot',
    platform: 'Microsoft Learn',
    date: 'September 2026',
    description:
      'Explored prompt engineering and the use of GitHub Copilot to assist software development.',
    skills: [
      'Prompt Engineering',
      'GitHub Copilot',
      'AI-Assisted Development',
    ],
    Icon: HiArrowTopRightOnSquare,
    href: '/documents/achievements/microsoft-learn-achievements-4.pdf',
  },
];

export default function Certificates() {
  return (
    <div className="mx-auto max-w-7xl space-y-10">
      {/* Section heading */}
      <div className="max-w-3xl space-y-4">
        <p className="font-space text-xs font-bold uppercase tracking-[0.5em] text-cyan-200/75">
          Certificates
        </p>

        <h2 className="font-space text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          Certifications that strengthen industry readiness, analytics, and
          product understanding.
        </h2>

        <p className="text-sm leading-7 text-slate-400">
          A collection of professional certifications and learning
          achievements across software development, artificial intelligence,
          cloud computing, analytics, and emerging technologies.
        </p>
      </div>

      {/* Certificate cards */}
      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {certificates.map((certificate, index) => {
          const CertificateIcon =
            certificate.Icon ?? HiArrowTopRightOnSquare;

          return (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.06,
              }}
              whileHover={{ y: -6 }}
              className="glass-panel section-shell flex flex-col rounded-[1.8rem] p-6"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-fuchsia-500/20 text-cyan-200">
                <CertificateIcon size={24} />
              </div>

              {/* Title */}
              <h3 className="font-space text-xl font-bold leading-tight">
                {certificate.title}
              </h3>

              {/* Issuing platform */}
              <p className="mt-3 text-sm font-medium text-cyan-200/78">
                {certificate.platform}
              </p>

              {/* Issue date */}
              {certificate.date && (
                <p className="mt-2 text-xs text-slate-400">
                  Issued: {certificate.date}
                </p>
              )}

              {/* Expiry date */}
              {certificate.validUntil && (
                <p className="mt-2 text-xs text-slate-400">
                  Valid until: {certificate.validUntil}
                </p>
              )}

              {/* Credential ID */}
              {certificate.credentialId && (
                <p className="mt-2 break-words text-xs text-slate-500">
                  Credential ID: {certificate.credentialId}
                </p>
              )}

              {/* Description */}
              <p className="mt-5 text-sm leading-7 text-slate-300/80">
                {certificate.description}
              </p>

              {/* Skills */}
              <div className="mt-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                  Skills Learned
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-300/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View certificate link */}
              <div className="mt-auto pt-8">
                <a
                  href={assetUrl(certificate.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${certificate.title} certificate`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-cyan-200"
                >
                  View certificate
                  <HiArrowTopRightOnSquare size={15} />
                </a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}