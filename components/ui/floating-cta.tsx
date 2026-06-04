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
            className="group relative flex items-center justify-center w-16 h-16 rounded-full text-white shadow-[0_14px_40px_rgba(37,211,102,0.45)] hover:shadow-[0_18px_50px_rgba(37,211,102,0.55)] transition-all hover:scale-110 active:scale-95 pointer-events-auto"
            style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)' }}
            onMouseEnter={() => setShowTooltip(true)}
          >
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            
            {/* Ping animation */}
            <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-60" style={{ animationDuration: '2.4s' }} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
