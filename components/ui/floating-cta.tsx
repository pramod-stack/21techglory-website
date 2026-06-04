"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Show after scrolling a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide tooltip after a few seconds
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-end justify-end flex-col gap-4 pointer-events-none"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10, scale: 0.9 }}
                className="relative bg-white text-black px-4 py-3 rounded-2xl shadow-xl pointer-events-auto"
              >
                <button 
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 bg-black text-white rounded-full p-1 border border-white/20 hover:scale-110 transition-transform"
                >
                  <X className="w-3 h-3" />
                </button>
                <div className="text-sm font-bold">Have a project in mind?</div>
                <div className="text-xs text-gray-600 mt-1">Chat directly with our founder.</div>
                
                {/* Tail */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <a
            href="https://wa.me/917795354043"
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all hover:scale-110 active:scale-95 pointer-events-auto"
            onMouseEnter={() => setShowTooltip(true)}
          >
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            <MessageCircle className="w-8 h-8" />
            
            {/* Ping animation */}
            <div className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-50" style={{ animationDuration: '3s' }} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
