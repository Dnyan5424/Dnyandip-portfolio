import React from 'react';
import { motion } from 'framer-motion';

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  size: 6 + (index % 4) * 6,
  left: `${5 + ((index * 13) % 90)}%`,
  top: `${8 + ((index * 9) % 80)}%`,
  duration: 8 + (index % 5),
  delay: (index % 6) * 0.5,
}));

export default function BackgroundParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          animate={{ y: [0, -20, 0], opacity: [0.18, 0.55, 0.18] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
          className="absolute rounded-full border border-white/12 bg-white/8 backdrop-blur-sm"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            boxShadow: '0 0 24px rgba(34, 211, 238, 0.15)',
          }}
        />
      ))}
    </div>
  );
}
