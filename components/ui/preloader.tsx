"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpiralAnimation } from './spiral-animation';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [startVisible, setStartVisible] = useState(false);

  useEffect(() => {
    // Fade in the start button after animation loads
    const timer = setTimeout(() => {
      setStartVisible(true);
    }, 2000);
    
    // Auto-dismiss after approximately 2 visual loops (8 seconds)
    const autoDismiss = setTimeout(() => {
      setLoading(false);
    }, 8000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(autoDismiss);
    };
  }, []);

  const handleEnter = () => {
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div 
          key="spiral-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] w-full h-full overflow-hidden bg-black"
        >
          {/* Spiral Animation */}
          <div className="absolute inset-0 pointer-events-none">
            <SpiralAnimation />
          </div>
          
          {/* Simple Elegant Text Button with Pulsing Effect */}
          <div 
            className={`
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
              transition-all duration-1000 ease-out
              ${startVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <button 
              onClick={handleEnter}
              className="
                text-red-500 text-xl md:text-3xl tracking-[0.2em] uppercase font-bold
                transition-all duration-700 text-center
                hover:tracking-[0.3em] animate-pulse
                drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]
              "
            >
              CLICK TO ENTER THE 21TECHGLORY WORLD
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
