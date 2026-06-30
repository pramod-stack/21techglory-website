"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  label: string;
  description?: string;
}

interface StatStripProps {
  stats: StatItem[];
}

export default function StatStrip({ stats }: StatStripProps) {
  return (
    <section className="relative py-12 border-y border-white/10 bg-white/[0.02] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-xs text-gray-400 max-w-xs leading-relaxed">
                  {stat.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
