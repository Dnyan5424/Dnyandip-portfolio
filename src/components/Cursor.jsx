import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseout', leave);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseout', leave);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 140,
        y: position.y - 140,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.4 }}
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-[280px] 
      w-[280px] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.12)
      _0%,rgba(59,130,246,0.08)_32%,rgba(168,85,247,0.04)_55%,transparent_72%)] blur-3xl lg:block"
    />
  );
}
