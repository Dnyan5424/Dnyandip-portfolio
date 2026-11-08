import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Projects from './components/Projects';
import PathTimeline from './components/PathTimeline';
import About from './components/About';
import Skills from './components/Skills';
import Research from './components/Research';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroSequence from './components/IntroSequence';

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#f9f8f5] text-neutral-900 selection:bg-red-100 selection:text-neutral-950">
      {/* Interactive Multilingual Laptop Intro Sequence from Video */}
      {!introDone && (
        <IntroSequence onComplete={() => setIntroDone(true)} />
      )}

      {/* Desktop Precision Cursor */}
      <Cursor />

      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Page Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero />
        <Projects />
        <PathTimeline />
        <About />
        <Skills />
        <Research />
        <Certificates />
        <Contact />
      </main>

      {/* Closing Footer */}
      <Footer />
    </div>
  );
}
