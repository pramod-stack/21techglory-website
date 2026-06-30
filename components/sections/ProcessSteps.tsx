"use client";

import React from 'react';
import { motion } from 'framer-motion';

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
}

export default function ProcessSteps({
  title = "Our Execution Framework",
  subtitle = "A systemic, high-performance optimization process engineered for long-term growth.",
  steps,
}: ProcessStepsProps) {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
          {/* Connecting line for larger screens */}
          <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-cyan-500/10 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(6,182,212,0.3)] mb-6">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
