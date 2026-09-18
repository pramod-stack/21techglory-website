"use client";

import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { 
  Stethoscope, 
  Dumbbell, 
  Sparkles, 
  Truck, 
  Code2, 
  Building2, 
  ShoppingBag, 
  MapPin 
} from 'lucide-react';

const industries = [
  { name: "Clinics & Healthcare", icon: Stethoscope },
  { name: "Fitness & Gyms", icon: Dumbbell },
  { name: "Salons & Aesthetics", icon: Sparkles },
  { name: "Industrial & Cranes", icon: Truck },
  { name: "Software & IT", icon: Code2 },
  { name: "Elevators & Manufacturing", icon: Building2 },
  { name: "Cosmetics & D2C", icon: ShoppingBag },
  { name: "Local Businesses", icon: MapPin },
];

export default function IndustriesMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "100px" });
  const shouldReduceMotion = useReducedMotion();

  // Duplicate the array to create a seamless loop
  const duplicatedIndustries = [...industries, ...industries, ...industries];

  return (
    <section ref={containerRef} className="py-20 bg-transparent overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 uppercase tracking-widest">
          Industries We Dominate
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Left and right fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={isInView && !shouldReduceMotion ? { x: ["0%", "-33.33%"] } : { x: "0%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex gap-8 whitespace-nowrap px-4"
        >
          {duplicatedIndustries.map((ind, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-colors cursor-pointer group"
            >
              <div className="p-2 rounded-full bg-black border border-white/10 text-gray-400 group-hover:text-cyan-400 transition-colors">
                <ind.icon className="w-5 h-5" />
              </div>
              <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                {ind.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
