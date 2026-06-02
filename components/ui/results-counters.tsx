"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

function Counter({ value, suffix = "", prefix = "", decimals = 0 }: { value: number, suffix?: string, prefix?: string, decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  const displayValue = useTransform(springValue, (current) => 
    `${prefix}${current.toFixed(decimals)}${suffix}`
  );

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", desc: "Successfully completed for businesses across India" },
  { value: 300, suffix: "%", label: "Avg. Lead Increase", desc: "Increase in qualified leads for our local SEO clients" },
  { value: 20, suffix: "+", label: "Hours Saved/Wk", desc: "Time saved per week through AI & WhatsApp automation" },
  { value: 10, suffix: "x", label: "ROI Generated", desc: "Average return on investment for performance marketing" },
];

export default function ResultsCounters() {
  return (
    <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[200px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Results We Create</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We measure our success by your business growth. Here's what working with 21TechGlory looks like by the numbers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500 mb-2 font-mono">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
              <p className="text-sm text-gray-500">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
