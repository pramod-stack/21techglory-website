"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import OnboardingForm from './multistep-form';

interface StartProjectModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function StartProjectModal({ isOpen, setIsOpen }: StartProjectModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[110] overflow-y-auto pointer-events-none">
            <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full max-w-4xl bg-black border border-white/10 shadow-2xl rounded-3xl overflow-hidden text-left align-middle pointer-events-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Content */}
                <div className="relative p-6 sm:p-10 max-h-[85vh] overflow-y-auto custom-scrollbar">
                  <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black z-0 pointer-events-none" />
                  
                  <div className="relative z-10 text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-white">Start Your Project</h2>
                    <p className="text-gray-400">Fill out the details below and we'll connect within 24 hours.</p>
                  </div>

                  <div className="relative z-10">
                    <OnboardingForm />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
