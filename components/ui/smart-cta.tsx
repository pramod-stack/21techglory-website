"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight, X } from 'lucide-react';
import { Analytics } from '@/lib/analytics';

type ZoneInfo = {
  zone: string;
  label: string;
  destination: "picker" | "builder" | "form" | "audit";
};

export default function SmartCTA() {
  const [activeZone, setActiveZone] = useState<ZoneInfo>({
    zone: "hero",
    label: "EXPLORE MY OPTIONS →",
    destination: "picker",
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleModalState = (e: any) => {
      setIsModalOpen(!!e.detail?.isOpen);
    };
    window.addEventListener("21tg:modal-toggle", handleModalState);
    return () => window.removeEventListener("21tg:modal-toggle", handleModalState);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 250) {
        setIsVisible(false);
        return;
      }
      setIsVisible(true);

      // Check current scroll position against page sections
      const sections = [
        { id: "services", label: "EXPLORE MY OPTIONS →", destination: "picker" as const },
        { id: "problem-picker", label: "BUILD MY SYSTEM →", destination: "builder" as const },
        { id: "system-builder", label: "BUILD MY SYSTEM →", destination: "form" as const },
        { id: "work", label: "SEE WHAT WE CAN BUILD →", destination: "builder" as const },
        { id: "growth-audit", label: "GET MY BLUEPRINT →", destination: "form" as const },
        { id: "website-audit", label: "FIX MY WEBSITE →", destination: "form" as const },
        { id: "pricing", label: "BUILD MY GROWTH SYSTEM →", destination: "form" as const },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.6) {
            setActiveZone({
              zone: sections[i].id,
              label: sections[i].label,
              destination: sections[i].destination,
            });
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    Analytics.ctaClick(activeZone.zone, activeZone.label, activeZone.destination);

    if (activeZone.destination === "picker") {
      const el = document.getElementById("problem-picker");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (activeZone.destination === "builder") {
      const el = document.getElementById("system-builder");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("21tg:open-lead-form", {
          detail: { intent: "smart_cta", source: activeZone.zone }
        }));
      }
    }
  };

  const handleWhatsApp = () => {
    Analytics.whatsappClick("smart_cta");
  };

  if (!isVisible || isModalOpen || isDismissed) return null;

  return (
    <>
      {/* Desktop Floating Pill: Bottom-Right */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.9 }}
        transition={{ duration: 0.25 }}
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-3"
      >
        <a
          href="https://wa.me/917795354043?text=Hi%2021TechGlory,%20I'm%20interested%20in%20building%20a%20digital%20growth%20system."
          target="_blank"
          rel="noreferrer noopener"
          onClick={handleWhatsApp}
          className="p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-black fill-black" />
        </a>

        <button
          onClick={handleClick}
          className="px-6 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-xs tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>{activeZone.label}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Mobile Bottom Action Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-black/90 backdrop-blur-md border-t border-white/10 flex items-center justify-between gap-2 safe-area-pb"
      >
        <button
          onClick={handleClick}
          className="flex-1 py-3 px-4 rounded-xl bg-cyan-500 text-black font-extrabold text-xs tracking-wide shadow-md flex items-center justify-center gap-2"
        >
          <span>{activeZone.label}</span>
        </button>

        <a
          href="https://wa.me/917795354043?text=Hi%2021TechGlory,%20I'm%20interested%20in%20a%20growth%20system."
          target="_blank"
          rel="noreferrer noopener"
          onClick={handleWhatsApp}
          className="p-3 rounded-xl bg-emerald-500 text-black shrink-0 flex items-center justify-center"
        >
          <MessageCircle className="w-5 h-5 fill-black" />
        </a>

        <button
          onClick={() => setIsDismissed(true)}
          className="p-2 text-gray-500 hover:text-white"
          title="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </>
  );
}
