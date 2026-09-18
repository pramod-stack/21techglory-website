"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ProgressiveLeadForm from '@/components/ui/progressive-lead-form';

interface StartProjectModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  defaultIntent?: string;
  defaultModules?: string[];
}

export default function StartProjectModal({ 
  isOpen, 
  setIsOpen,
  defaultIntent = "start_project",
  defaultModules = ["website", "crm", "whatsapp", "automation"]
}: StartProjectModalProps) {
  const [modalContext, setModalContext] = useState({
    intent: defaultIntent,
    modules: defaultModules,
    businessType: "Clinic / Healthcare Practice",
    website: "",
    auditScore: undefined as number | undefined
  });

  // Listen to global open-lead-form events
  useEffect(() => {
    const handleOpenEvent = (e: any) => {
      const detail = e.detail || {};
      setModalContext({
        intent: detail.intent || defaultIntent,
        modules: detail.modules || defaultModules,
        businessType: detail.businessType || "Clinic / Healthcare Practice",
        website: detail.website || "",
        auditScore: detail.auditScore
      });
      setIsOpen(true);
    };

    window.addEventListener("21tg:open-lead-form", handleOpenEvent);
    return () => window.removeEventListener("21tg:open-lead-form", handleOpenEvent);
  }, [defaultIntent, defaultModules, setIsOpen]);

  // Dispatch modal toggle state for Smart CTA to hide
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("21tg:modal-toggle", { detail: { isOpen } }));
    }

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
            className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[110] overflow-y-auto pointer-events-none">
            <div className="min-h-full flex items-center justify-center p-4 sm:p-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative w-full max-w-3xl bg-neutral-950 border border-cyan-500/30 shadow-2xl rounded-3xl overflow-hidden text-left align-middle pointer-events-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-50 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md cursor-pointer"
                  title="Close Modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Modal Content */}
                <div className="relative p-6 sm:p-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 via-black to-black z-0 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <ProgressiveLeadForm 
                      initialIntent={modalContext.intent}
                      initialModules={modalContext.modules}
                      initialBusinessType={modalContext.businessType}
                      initialWebsite={modalContext.website}
                      auditScore={modalContext.auditScore}
                    />
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
