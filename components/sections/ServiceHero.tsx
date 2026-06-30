"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface ServiceHeroProps {
  badge: string;
  title: string;
  description: string | React.ReactNode;
  breadcrumbs: BreadcrumbItem[];
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function ServiceHero({
  badge,
  title,
  description,
  breadcrumbs,
  ctaText = "Schedule an Acquisition Audit",
  onCtaClick,
}: ServiceHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 mb-8 text-xs md:text-sm text-gray-500 font-medium">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.href}>
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-700" />}
              {idx === breadcrumbs.length - 1 ? (
                <span className="text-cyan-400 font-semibold">{crumb.name}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.name}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-6"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          {badge}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500">
            {title}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <button
            onClick={onCtaClick}
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 font-bold text-white text-base shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] transition-all cursor-pointer overflow-hidden duration-300"
          >
            <div className="absolute inset-0 w-full h-full bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">{ctaText}</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
