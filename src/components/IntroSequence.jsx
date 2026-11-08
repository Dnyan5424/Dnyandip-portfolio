
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  { text: 'नमस्कार', lang: 'MR', subtitle: 'Welcome to my world.' },
  { text: 'Hello', lang: 'EN', subtitle: 'A new perspective begins.' },
  { text: 'नमस्ते', lang: 'HI', subtitle: 'Ideas without boundaries.' },
  { text: 'Bonjour', lang: 'FR', subtitle: 'Design meets technology.' },
  { text: 'Konnichiwa', lang: 'JP', subtitle: 'Creativity knows no borders.' },
  { text: 'Здравствуйте', lang: 'RU', subtitle: 'Innovation connects us all.' },
  { text: 'Hallo', lang: 'DE', subtitle: 'Building a better tomorrow.' },
  { text: 'Ciao', lang: 'IT', subtitle: 'Something meaningful awaits.' },
];

const ease = [0.22, 1, 0.36, 1];

export default function IntroSequence({ onComplete }) {
  const [stage, setStage] = useState('prompt');
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [showRedBanner, setShowRedBanner] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [progress, setProgress] = useState(0);

  const playChime = useCallback(() => {
    if (!soundEnabled) return;

    try {
      const AudioContext =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContext) return;

      const ctx = new AudioContext();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(523.25, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        783.99,
        ctx.currentTime + 0.3
      );

      gain.gain.setValueAtTime(0.045, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + 0.65
      );

      oscillator.connect(gain);
      gain.connect(ctx.destination);

      oscillator.start();
      oscillator.stop(ctx.currentTime + 0.65);

      oscillator.onended = () => ctx.close();
    } catch {
      // Sound is optional.
    }
  }, [soundEnabled]);

  const complete = useCallback(() => {
    setStage('finished');
    onComplete?.();
  }, [onComplete]);

  const startSequence = useCallback(() => {
    if (stage !== 'prompt') return;

    playChime();
    setGreetingIndex(0);
    setProgress(0);
    setShowRedBanner(false);
    setStage('animating');
  }, [stage, playChime]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && stage === 'prompt') {
        startSequence();
      }

      if (event.key === 'Escape') {
        complete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stage, startSequence, complete]);

  // Greeting animation
  useEffect(() => {
    if (stage !== 'animating' || showRedBanner) return;

    if (greetingIndex < greetings.length) {
      const timer = setTimeout(() => {
        setGreetingIndex((prev) => prev + 1);
        setProgress(((greetingIndex + 1) / 5) * 100);
      }, 620);

      return () => clearTimeout(timer);
    }

    const bannerTimer = setTimeout(() => {
      setShowRedBanner(true);
      setProgress(100);
    }, 250);

    return () => clearTimeout(bannerTimer);
  }, [stage, greetingIndex, showRedBanner]);

  // Finish after welcome reveal
  useEffect(() => {
    if (!showRedBanner) return;

    const timer = setTimeout(complete, 1250);

    return () => clearTimeout(timer);
  }, [showRedBanner, complete]);

  return (
    <AnimatePresence>
      {stage !== 'finished' && (
        <motion.div
          key="portfolio-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.035, filter: 'blur(8px)' }}
          transition={{ duration: 0.65, ease }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-[#f8f7f4] text-[#171717] select-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 50% 45%, rgba(255,255,255,0.95), transparent 65%)',
          }}
        >
          {/* Background atmosphere */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  'linear-gradient(#777 1px, transparent 1px), linear-gradient(90deg, #777 1px, transparent 1px)',
                backgroundSize: '64px 64px',
              }}
            />

            <div className="absolute w-[400px] h-[400px] rounded-full bg-[#e7e1d9]/40 blur-[110px] top-[15%] left-[-10%]" />

            <div className="absolute w-[350px] h-[350px] rounded-full bg-[#edc9c0]/25 blur-[110px] bottom-[-10%] right-[-5%]" />

            <div className="absolute inset-0 opacity-[0.025] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%22.6%22/%3E%3C/svg%3E')]" />
          </div>

          {/* Top navigation */}
          <div className="absolute top-0 left-0 right-0 px-6 sm:px-12 py-7 flex justify-between items-center z-30">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#171717] text-white flex items-center justify-center font-bold text-xs tracking-tight">
                DK
              </div>

              <div className="leading-tight">
                <p className="font-semibold text-xs tracking-wide">
                  Dnyandip Katkar
                </p>
                <p className="text-[9px] text-neutral-400 uppercase tracking-[0.18em] mt-1">
                  Creative Developer
                </p>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-widest text-neutral-400">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              AVAILABLE TO EXPLORE
            </div>

            <button
              type="button"
              onClick={complete}
              className="group text-[10px] uppercase tracking-[0.16em] text-neutral-400 hover:text-black transition-colors flex items-center gap-2"
            >
              Skip intro
              <span className="text-sm group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>

          {/* Main content */}
          {stage === 'prompt' && (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease }}
              className="relative z-10 flex flex-col items-center text-center px-5"
            >
              {/* Decorative upper label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 mb-9"
              >
                <span className="w-7 h-px bg-neutral-300" />
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-neutral-400">
                  A digital introduction
                </span>
                <span className="w-7 h-px bg-neutral-300" />
              </motion.div>

              {/* Laptop illustration */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative mb-10"
              >
                {/* Ambient shadow */}
                <div className="absolute inset-x-8 bottom-[-24px] h-10 bg-black/15 blur-2xl rounded-full" />

                {/* Laptop screen */}
                <div className="relative w-[260px] sm:w-[340px] rounded-t-[17px] border-[5px] border-[#252525] bg-[#252525] p-[7px] shadow-[0_25px_65px_rgba(0,0,0,0.18)]">
                  {/* Camera */}
                  <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-neutral-500" />

                  {/* Display */}
                  <div className="relative aspect-[16/10] rounded-[8px] overflow-hidden bg-[#efede7] flex flex-col justify-between p-4 sm:p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-mono tracking-widest text-neutral-400">
                        DK / PORTFOLIO
                      </span>
                      <span className="text-[8px] text-neutral-400">
                        2026
                      </span>
                    </div>

                    <div className="text-left">
                      <p className="text-[9px] text-neutral-400 tracking-widest uppercase mb-2">
                        Think. Build. Create.
                      </p>

                      <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.07em] leading-none">
                        Hello<span className="text-[#e14a3b]">.</span>
                      </h2>

                      <div className="mt-3 h-[2px] w-12 bg-[#e14a3b]" />
                    </div>

                    <div className="flex justify-between items-end">
                      <span className="text-[8px] font-mono text-neutral-400">
                        ENGINEERING IDEAS INTO REALITY
                      </span>
                      <div className="flex gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#e14a3b]" />
                        <span className="w-1 h-1 rounded-full bg-neutral-300" />
                        <span className="w-1 h-1 rounded-full bg-neutral-300" />
                      </div>
                    </div>

                    {/* Screen reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Laptop hinge and base */}
                <div className="relative mx-auto w-[285px] sm:w-[365px] h-[10px] bg-gradient-to-b from-[#c5c5c5] to-[#777] rounded-b-lg border-x border-neutral-500">
                  <div className="mx-auto w-12 h-[3px] bg-neutral-500 rounded-b-md" />
                </div>

                <div className="mx-auto w-[275px] sm:w-[350px] h-[5px] bg-gradient-to-b from-neutral-500 to-neutral-300 rounded-b-full" />
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.055em]">
                  Every idea starts
                  <br />
                  with a <span className="text-[#e14a3b]">hello.</span>
                </h1>

                <p className="mt-4 text-xs sm:text-sm text-neutral-500 tracking-wide">
                  Welcome to my little corner of the internet.
                </p>
              </motion.div>

              {/* Enter button */}
              <motion.button
                type="button"
                onClick={startSequence}
                whileHover={{ scale: 1.045 }}
                whileTap={{ scale: 0.96 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="group relative mt-8 inline-flex items-center gap-8 bg-[#171717] text-white pl-7 pr-2 py-2 rounded-full shadow-xl shadow-black/10 hover:bg-[#e14a3b] transition-colors duration-500"
              >
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase">
                  Enter portfolio
                </span>

                <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>

              <p className="mt-4 text-[9px] text-neutral-400 font-mono tracking-widest">
                PRESS ENTER TO EXPLORE
              </p>
            </motion.div>
          )}

          {/* Greeting animation */}
          {stage === 'animating' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center z-10"
            >
              {/* Architectural grid */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-300/60" />
                <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-300/60" />

                <div className="absolute inset-[12%] border border-neutral-300/30" />

                {[
                  'top-0 left-0',
                  'top-0 right-0',
                  'bottom-0 left-0',
                  'bottom-0 right-0',
                ].map((position) => (
                  <span
                    key={position}
                    className={`absolute ${position} w-2 h-2 border border-neutral-400/60`}
                  />
                ))}
              </div>

              {/* Metadata */}
              <div className="absolute top-24 left-6 sm:left-12 right-6 sm:right-12 flex justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.17em] text-neutral-400 font-mono">
                <span>DK — Creative Developer</span>
                <span>EST. 2026</span>
              </div>

              <div className="absolute bottom-20 left-6 sm:left-12 right-6 sm:right-12 flex justify-between text-[9px] uppercase tracking-widest text-neutral-400 font-mono">
                <span>Design / Technology / Innovation</span>
                <span>INDIA — 18°31'N</span>
              </div>

              {/* Center greeting */}
              <div className="relative z-10 flex flex-col items-center text-center px-5">
                {!showRedBanner ? (
                  <AnimatePresence mode="wait">
                    {greetingIndex < greetings.length && (
                      <motion.div
                        key={greetingIndex}
                        initial={{ opacity: 0, y: 35, filter: 'blur(12px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -25, filter: 'blur(8px)' }}
                        transition={{ duration: 0.45, ease }}
                      >
                        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.35em] text-neutral-400 uppercase">
                          {greetings[greetingIndex].lang} / 04
                        </span>

                        <h2 className="mt-5 text-6xl sm:text-8xl md:text-9xl font-black tracking-[-0.075em]">
                          {greetings[greetingIndex].text}
                          <span className="text-[#e14a3b]">.</span>
                        </h2>

                        <p className="mt-5 text-xs sm:text-sm text-neutral-500 tracking-wide">
                          {greetings[greetingIndex].subtitle}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                ) : (
                  <motion.div
                    initial={{ scale: 0.65, opacity: 0, rotate: -3 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 180,
                      damping: 17,
                    }}
                    className="relative"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: 0 }}
                      transition={{ duration: 1, ease }}
                      className="absolute inset-0 rounded-2xl bg-[#e14a3b]"
                    />

                    <div className="relative bg-[#e14a3b] px-9 sm:px-20 py-8 sm:py-12 rounded-2xl shadow-[0_25px_80px_rgba(225,74,59,0.25)]">
                      <p className="text-[9px] sm:text-[10px] text-white/70 uppercase tracking-[0.35em] mb-4">
                        A world of possibilities
                      </p>

                      <h2 className="text-5xl sm:text-7xl md:text-8xl text-white font-black tracking-[-0.07em]">
                        Welcome<span className="text-white/60">.</span>
                      </h2>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Progress indicator */}
              <div className="absolute bottom-8 left-6 right-6 sm:left-12 sm:right-12 flex items-center gap-4">
                <span className="font-mono text-[9px] tracking-widest text-neutral-400">
                  0{Math.min(greetingIndex + 1, 5)}
                </span>

                <div className="h-[2px] flex-1 bg-neutral-200 overflow-hidden">
                  <motion.div
                    className="h-full bg-[#e14a3b]"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease }}
                  />
                </div>

                <span className="font-mono text-[9px] tracking-widest text-neutral-400">
                  05
                </span>
              </div>
            </motion.div>
          )}

          {/* Bottom controls */}
          {stage === 'prompt' && (
            <div className="absolute bottom-7 left-6 right-6 sm:left-12 sm:right-12 flex justify-between items-center z-20">
              <p className="font-mono text-[9px] tracking-widest text-neutral-400">
                © 2026 — DNYANDIP KATKAR
              </p>

              <button
                type="button"
                onClick={() => setSoundEnabled((prev) => !prev)}
                className="group flex items-center gap-2 text-[9px] font-mono tracking-widest text-neutral-400 hover:text-black transition-colors"
                aria-label={soundEnabled ? 'Disable sound' : 'Enable sound'}
              >
                <span className="flex items-center gap-[2px] h-3">
                  {[1, 2, 3, 4].map((item) => (
                    <motion.span
                      key={item}
                      animate={{
                        height: soundEnabled ? [4, 11, 5, 9] : 3,
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: soundEnabled ? Infinity : 0,
                        delay: item * 0.12,
                      }}
                      className="w-[2px] rounded-full bg-[#e14a3b]"
                    />
                  ))}
                </span>

                SOUND {soundEnabled ? 'ON' : 'OFF'}
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
