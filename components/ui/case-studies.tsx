"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Target, Lightbulb, TrendingUp } from 'lucide-react';

const cases = [
  {
    id: "slv-pg",
    client: "SLV Home Like PG",
    category: "Local SEO & Website Redesign",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&h=500&auto=format&fit=crop",
    stats: [
      { label: "Increase in Leads", value: "300%" },
      { label: "Google Maps Rank", value: "#1" },
    ],
    details: {
      problem: "SLV PG was struggling to get bookings despite having great facilities. Their old website looked outdated and they were invisible on Google Maps in a highly competitive area.",
      strategy: "We positioned them as a premium co-living space, moved focus away from cheap pricing, and aggressively optimized their Local SEO for 'PG in Manyata Tech Park'.",
      solution: "Designed a cinematic, high-conversion bento grid website and implemented an automated WhatsApp booking flow to capture leads instantly.",
      result: "Achieved #1 ranking on local Google Maps within 3 months. Lead volume increased by 300% and they reached 100% occupancy.",
    }
  },
  {
    id: "conceive-clinics",
    client: "Conceive Clinics",
    category: "Brand Authority & Digital Systems",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&h=500&auto=format&fit=crop",
    stats: [
      { label: "Conversion Rate", value: "+45%" },
      { label: "Patient Inquiries", value: "2x" },
    ],
    details: {
      problem: "Conceive Clinics needed to establish immense trust online for IVF treatments. Their existing digital presence didn't reflect the premium nature of their medical expertise.",
      strategy: "Overhaul the digital patient journey. Build a 'luxury healthcare' aesthetic that prioritizes empathy, authority, and seamless booking.",
      solution: "Developed a creamy pink noise textured aesthetic, cinematic hero sections, and integrated a direct-to-WhatsApp patient inquiry system to reduce friction.",
      result: "Conversion rates increased by 45%. The clinic now receives double the high-intent patient inquiries compared to their previous setup.",
    }
  }
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState(cases[0].id);

  const activeCase = cases.find(c => c.id === activeTab) || cases[0];

  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured Case Studies</h2>
          <p className="text-gray-400 text-lg">See how we've helped businesses transform their digital presence and scale their revenue.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeTab === c.id 
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {c.client}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="relative rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden backdrop-blur-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0"
            >
              {/* Image Side */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={activeCase.image} 
                  alt={activeCase.client} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/50 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="px-3 py-1 text-xs font-bold text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20 mb-4 inline-block">
                    {activeCase.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-6">{activeCase.client}</h3>
                  
                  <div className="flex gap-6">
                    {activeCase.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-2xl font-black text-white">{stat.value}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center gap-8">
                {[
                  { icon: Target, title: "The Problem", text: activeCase.details.problem, color: "text-red-400", bg: "bg-red-400/10" },
                  { icon: Lightbulb, title: "Our Strategy", text: activeCase.details.strategy, color: "text-yellow-400", bg: "bg-yellow-400/10" },
                  { icon: CheckCircle2, title: "The Solution", text: activeCase.details.solution, color: "text-cyan-400", bg: "bg-cyan-400/10" },
                  { icon: TrendingUp, title: "The Result", text: activeCase.details.result, color: "text-green-400", bg: "bg-green-400/10" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${item.bg} ${item.color} mt-1`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
