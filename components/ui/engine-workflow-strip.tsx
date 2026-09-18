"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, Bot, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    phase: "01",
    label: "ATTRACT",
    title: "High-Intent Discovery",
    desc: "SEO, Google Business #1 Map ranking & targeted PPC ads that position your business in front of ready-to-buy customers.",
    services: "Website · SEO · GMB · Ads",
    icon: Search,
    color: "from-cyan-500 to-blue-600",
    borderGlow: "group-hover:border-cyan-500/40"
  },
  {
    phase: "02",
    label: "CONVERT",
    title: "Sub-Second Conversion",
    desc: "Friction-free Next.js web design, psychological trust architecture, and 1-click booking intake that turns visitors into qualified leads.",
    services: "Conversion Design · Fast Frontend",
    icon: Sparkles,
    color: "from-blue-500 to-purple-600",
    borderGlow: "group-hover:border-blue-500/40"
  },
  {
    phase: "03",
    label: "AUTOMATE",
    title: "Instant 24/7 Response",
    desc: "AI chatbots, automated WhatsApp replies under 60 seconds, and seamless CRM deal pipelines that capture every lead while you sleep.",
    services: "CRM · WhatsApp · AI Bots",
    icon: Bot,
    color: "from-purple-500 to-pink-600",
    borderGlow: "group-hover:border-purple-500/40"
  },
  {
    phase: "04",
    label: "GROW",
    title: "Predictable Scale",
    desc: "Real-time analytics, automated client review collection, and retention workflows that compound your market dominance month over month.",
    services: "Analytics · Retention · Reputation",
    icon: TrendingUp,
    color: "from-pink-500 to-emerald-500",
    borderGlow: "group-hover:border-emerald-500/40"
  }
];

export default function EngineWorkflowStrip() {
  return (
    <section className="py-20 bg-black relative border-b border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-purple-950/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
            How The Engine Operates
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            From Search to Sale — <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              The 4-Stage Growth Infrastructure
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            We don't build isolated websites or run disconnected ads. We engineer one unified customer-acquisition machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative p-6 rounded-3xl bg-white/[0.02] border border-white/10 ${step.borderGlow} transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-gray-500 px-2.5 py-1 rounded-md bg-white/5">
                    STAGE {step.phase}
                  </span>
                  <div className={`p-2.5 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-1">
                  {step.label}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-xs text-gray-500 font-medium">
                <span className="text-gray-400 font-semibold">Engine Components:</span> {step.services}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
