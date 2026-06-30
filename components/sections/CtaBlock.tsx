"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, CheckCircle } from 'lucide-react';

interface CtaBlockProps {
  title?: string;
  description?: string;
  ctaText?: string;
  onCtaClick: () => void;
}

export default function CtaBlock({
  title = "Ready to Double Your Inbound Pipeline?",
  description = "Get a detailed local conversion and keyword audit for your business. No obligation, no generic automated PDFs — just raw opportunities.",
  ctaText = "Claim Your Growth Audit",
  onCtaClick,
}: CtaBlockProps) {
  const trustPoints = [
    "Sub-second React Speed",
    "No Lock-In Contracts",
    "Direct Architect Access"
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background ambient neon glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-purple-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-8 md:p-16 text-center shadow-2xl backdrop-blur-md"
        >
          {/* Decorative neon borders */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            {title}
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={onCtaClick}
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-white text-base shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] transition-all cursor-pointer overflow-hidden duration-300"
            >
              <div className="absolute inset-0 w-full h-full bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">{ctaText}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="tel:+917795354043"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
            >
              <PhoneCall className="w-5 h-5 text-cyan-400" />
              <span>+91 77953 54043</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
