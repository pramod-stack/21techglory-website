"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const comparisons = [
  {
    feature: "Focus",
    others: "Just building a website",
    us: "Building a customer acquisition engine"
  },
  {
    feature: "Design",
    others: "Generic WordPress templates",
    us: "Premium, conversion-optimized custom UI"
  },
  {
    feature: "Operations",
    others: "Manual follow-ups & messy sheets",
    us: "Fully automated WhatsApp & CRM systems"
  },
  {
    feature: "SEO",
    others: "Basic keywords added once",
    us: "Data-driven local dominance strategy"
  },
  {
    feature: "Speed",
    others: "Slow loading times (3s+)",
    us: "Lightning fast Next.js architecture (<1s)"
  },
  {
    feature: "ROI",
    others: "Hoping for the best",
    us: "Guaranteed measurable business growth"
  }
];

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why We're Different</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">We don't sell websites. We sell the infrastructure that helps your business acquire more customers automatically.</p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 mb-4 px-6 py-4">
              <div className="col-span-1 text-sm font-bold text-gray-500 uppercase tracking-wider">Features</div>
              <div className="col-span-1 text-sm font-bold text-gray-500 uppercase tracking-wider text-center">Typical Agency</div>
              <div className="col-span-1 text-sm font-bold text-cyan-400 uppercase tracking-wider text-center">21TechGlory</div>
            </div>

            {/* Rows */}
            <div className="flex flex-col gap-3">
              {comparisons.map((row, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors items-center"
                >
                  <div className="col-span-1 font-semibold text-white">
                    {row.feature}
                  </div>
                  
                  <div className="col-span-1 flex items-center justify-center gap-3 text-gray-400 text-sm text-center">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{row.others}</span>
                  </div>
                  
                  <div className="col-span-1 flex items-center justify-center gap-3 text-white text-sm font-medium text-center bg-cyan-950/30 p-3 rounded-xl border border-cyan-500/20">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{row.us}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
