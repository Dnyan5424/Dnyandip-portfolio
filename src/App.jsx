import React, { Suspense, lazy, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import BackgroundParticles from './components/BackgroundParticles';
import { portfolioLogo } from './assets/images';

const About = lazy(() => import('./components/About'));
const Research = lazy(() => import('./components/Research'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Positions = lazy(() => import('./components/Positions'));
const Internships = lazy(() => import('./components/Internships'));
const Certificates = lazy(() => import('./components/Certificates'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const sectionClassName = 'relative z-10 px-5 py-20 sm:px-8 lg:px-12';

function SectionFallback() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="glass-panel h-64 animate-pulse rounded-[2rem] border border-white/8" />
    </div>
  );
}

function App() {
  const MotionDiv = motion.div;
  const MotionImg = motion.img;
  const MotionInnerDiv = motion.div;

  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--bg)] text-white">
      <Cursor />
      <ScrollProgress />
      <BackgroundParticles />

      <AnimatePresence mode="wait">
        {!ready ? (
          <MotionDiv
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-[radial-gradient(circle_at_top,#1f2a7a_0%,#090b14_35%,#04050b_100%)]"
          >
            <div className="flex flex-col items-center gap-6">
              <MotionImg
                src={portfolioLogo}
                alt="Dnyandip Katkar logo"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="h-24 w-24 rounded-[2rem] border border-cyan-400/30 bg-black/40 object-cover p-2 shadow-[0_0_60px_rgba(56,189,248,0.18)] backdrop-blur-xl"
              />
              <div className="space-y-2 text-center">
                <p className="font-space text-xs uppercase tracking-[0.6em] text-cyan-200/70">
                  Initializing Portfolio
                </p>
                <div className="h-1 w-48 overflow-hidden rounded-full bg-white/8">
                  <MotionInnerDiv
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500"
                  />
                </div>
              </div>
            </div>
          </MotionDiv>
        ) : null}
      </AnimatePresence>

      <div className="relative">
        <Navbar />

        <main className="relative">
          <section id="home" className="relative z-10">
            <Hero />
          </section>

          <Suspense fallback={<section className={sectionClassName}><SectionFallback /></section>}>
            <section id="about" className={sectionClassName}>
              <About />
            </section>
            <section id="research" className={sectionClassName}>
              <Research />
            </section>
            <section id="skills" className={sectionClassName}>
              <Skills />
            </section>
            <section id="certificates" className={sectionClassName}>
              <Certificates />
            </section>
            <section id="projects" className={sectionClassName}>
              <Projects />
            </section>
            <section id="experience" className={sectionClassName}>
              <Experience />
            </section>
            <section id="internships" className={sectionClassName}>
              <Internships />
            </section>
            <section id="education" className={sectionClassName}>
              <Education />
            </section>
            <section id="positions" className={sectionClassName}>
              <Positions />
            </section>
            <section id="contact" className={sectionClassName}>
              <Contact />
            </section>
            <Footer />
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default App;
