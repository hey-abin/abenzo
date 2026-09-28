'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClickRipple() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev, newRipple]);
    };

    window.addEventListener('click', handleClick, { passive: true });
    return () => window.removeEventListener('click', handleClick);
  }, []);

  const removeRipple = (id) => {
    setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ 
              width: 0, 
              height: 0, 
              opacity: 0.5,
              scale: 0 
            }}
            animate={{ 
              width: '150vmax', 
              height: '150vmax',
              opacity: 0,
              scale: 1
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1.5, 
              ease: "easeOut" 
            }}
            onAnimationComplete={() => removeRipple(ripple.id)}
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 shadow-[0_0_80px_rgba(0,130,120,0.2)]"
          />
        ))}
      </AnimatePresence>
    </div>
  );
}