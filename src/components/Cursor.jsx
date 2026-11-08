import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const onMediaChange = (e) => setIsPointerDevice(e.matches);
    mediaQuery.addEventListener('change', onMediaChange);

    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseout', leave);

    return () => {
      mediaQuery.removeEventListener('change', onMediaChange);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseout', leave);
    };
  }, []);

  if (!isPointerDevice) return null;

  return (
    <>
      {/* Precision center dot */}
      <motion.div
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.1 }}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-neutral-900"
      />

      {/* Subtle outer follow ring */}
      <motion.div
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          opacity: visible ? 0.35 : 0,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 20, mass: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-[99] h-9 w-9 rounded-full border border-neutral-900/50"
      />
    </>
  );
}
