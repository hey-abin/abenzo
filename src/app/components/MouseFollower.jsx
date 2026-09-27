'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function MouseFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const isDesktopRef = useRef(false);

  useEffect(() => {
    // Detect touch devices — skip entirely on mobile
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    isDesktopRef.current = true;

    const mouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  // On touch devices the pos stays at -100,-100 so nothing shows
  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        x: pos.x - 16,
        y: pos.y - 16,
        border: '2px solid #008278',
        backgroundColor: 'transparent',
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      aria-hidden="true"
    />
  );
}