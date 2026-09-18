"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Bot, 
  Sparkles, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { Analytics } from '@/lib/analytics';

export interface ProblemCardData {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  presetKey: string;
  presetModules: string[];
  diagnosis: string;
  implementation: { title: string; href: string }[];
  recommendedChain: string[];
  caseStudies: { title: string; href: string; metric: string }[];
}

export const PROBLEMS: ProblemCardData[] = [
  {
    id: "leads",
    title: "I NEED MORE LEADS",
    subtitle: "High-intent traffic & local Google dominance",
    icon: TrendingUp,
    presetKey: "Local Business",
    presetModules: ["website", "gmb", "seo", "whatsapp"],
    diagnosis: "You have a great service, but potential customers in your area don't find you first when searching on Google or Maps. Competitors with weaker services are capturing ready-to-buy inquiries simply through better local ranking.",
    implementation: [
      { title: "Google Business Profile #1 Map Pack Optimization", href: "/services/google-business-profile-optimization" },
      { title: "Local Intent SEO & Citation Building", href: "/services/local-seo" },
      { title: "High-Converting Sub-Second Landing Pages", href: "/services/web-development" },
      { title: "Direct WhatsApp Lead Capture Widget", href: "/services/ai-automation" }
    ],
    recommendedChain: ["Google Search / Maps", "Local Landing Page", "WhatsApp Direct Routing", "Booked Client"],
    caseStudies: [
      { title: "Liger Fitness: #1 Local Ranking & Trial Bookings", href: "/work/liger-fitness", metric: "+180% Bookings" },
      { title: "Bangalore Clinic Local SEO Domination", href: "/work/clinic-seo-bangalore", metric: "#1 Map Rank" }
    ]
  },
  {
    id: "automate",
    title: "I NEED TO AUTOMATE MY BUSINESS",
    subtitle: "Eliminate manual follow-ups & missed calls",
    icon: Bot,
    presetKey: "Clinic / Salon",
    presetModules: ["crm", "whatsapp", "ai_bot", "automation", "booking"],
    diagnosis: "Your team is losing hours copying leads into spreadsheets, answering the same repetitive questions, and manually chasing prospects. Unanswered inquiries after hours go cold and buy from faster competitors.",
    implementation: [
      { title: "Instant 60-Second WhatsApp Auto-Responder", href: "/services/ai-automation" },
      { title: "HubSpot / Custom CRM Deal Card Pipelines", href: "/services/crm" },
      { title: "24/7 AI Chatbot & Intake Scheduling", href: "/services/ai-automation" },
      { title: "Automated No-Show Reminder Sequences", href: "/services/crm" }
    ],
    recommendedChain: ["Visitor Inquiry", "AI Immediate Qualifier", "CRM Auto-Sync", "WhatsApp Reminder", "Confirmed Appointment"],
    caseStudies: [
      { title: "Multi-Specialty Hospital Booking Platform", href: "/work/hospital-booking-platform", metric: "0% Form Loss" },
      { title: "Brew Hospitality Automated Table Booking", href: "/work", metric: "100% Automated" }
    ]
  },
  {
    id: "convert",
    title: "MY WEBSITE IS NOT CONVERTING",
    subtitle: "Turn sluggish traffic into paying buyers",
    icon: Sparkles,
    presetKey: "E-commerce",
    presetModules: ["website", "analytics", "whatsapp", "automation"],
    diagnosis: "You get traffic from social media or word of mouth, but visitors bounce within 3 seconds due to slow load speeds, generic layouts, confusing navigation, or high-friction forms that scare customers away.",
    implementation: [
      { title: "Next.js Sub-Second Speed Engineering (<1.2s LCP)", href: "/services/web-development" },
      { title: "Frictionless 3-Click Intake & Booking UI", href: "/services/web-development" },
      { title: "Social Proof & Psychological Conversion Architecture", href: "/services/web-development" },
      { title: "Real-Time Funnel Analytics & Drop-off Tracking", href: "/services/crm" }
    ],
    recommendedChain: ["Fast Mobile Landing", "High-Trust Social Proof", "Frictionless Modal Intake", "Instant Confirmation"],
    caseStudies: [
      { title: "Premium Skincare Clinic Conversion Rebuild", href: "/work/skincare-website-conversion", metric: "Sub-Second LCP" },
      { title: "Cosmaty D2C Beauty Storefront", href: "/work", metric: "+65% Engagement" }
    ]
  },
  {
    id: "system",
    title: "I NEED A COMPLETE DIGITAL SYSTEM",
    subtitle: "End-to-end customer acquisition machine",
    icon: Cpu,
    presetKey: "Full Growth Engine",
    presetModules: ["website", "seo", "gmb", "ads", "crm", "whatsapp", "ai_bot", "automation", "booking", "analytics"],
    diagnosis: "You want a market-leading digital setup: brand authority, top Google rankings, paid acquisition funnels, automated CRM routing, and 24/7 AI chat so your business runs on autopilot and scales predictably.",
    implementation: [
      { title: "Full Custom Next.js Brand Infrastructure", href: "/services/web-development" },
      { title: "Omnichannel SEO & Google Map Pack Authority", href: "/services/seo" },
      { title: "Full CRM, WhatsApp, & AI Intake Ecosystem", href: "/services/ai-automation" },
      { title: "Attribution-Linked PPC Advertising Funnels", href: "/services/paid-ads" }
    ],
    recommendedChain: ["Multi-Channel Traffic", "Optimized Web Hub", "CRM Routing", "AI Auto-Nurture", "Compound Scale"],
    caseStudies: [
      { title: "Namo Cranes B2B Industrial Quotation Portal", href: "/work/namo-cranes", metric: "+220% RFQs" },
      { title: "Elite Elevators Luxury Digital Experience", href: "/work", metric: "Pan-India Scale" }
    ]
  }
];

interface ProblemPickerProps {
  onSelectProblem?: (problem: ProblemCardData) => void;
}

export default function ProblemPicker({ onSelectProblem }: ProblemPickerProps) {
  const [selectedProblemId, setSelectedProblemId] = useState<string>("leads");

  const selectedProblem = PROBLEMS.find(p => p.id === selectedProblemId) || PROBLEMS[0];

  const handleCardClick = (problem: ProblemCardData) => {
    setSelectedProblemId(problem.id);
    Analytics.problemCardClick(problem.id, problem.title);
    if (onSelectProblem) {
      onSelectProblem(problem);
    }
  };

  const handleScrollToBuilder = (presetKey: string) => {
    Analytics.systemPreset(presetKey, selectedProblem.presetModules);
    const element = document.getElementById("system-builder");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Also trigger custom event for builder sync
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("21tg:apply-preset", { detail: { presetKey } }));
    }
  };

  return (
    <section id="problem-picker" className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-950/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
            Interactive System Matcher
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            WHAT ARE YOU TRYING TO FIX?
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Select your primary business bottleneck below — we will assemble the exact digital infrastructure designed to solve it.
          </p>
        </div>

        {/* 4 Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PROBLEMS.map((problem) => {
            const isSelected = selectedProblemId === problem.id;
            return (
              <button
                key={problem.id}
                onClick={() => handleCardClick(problem)}
                className={`text-left p-6 rounded-3xl border transition-all duration-300 relative flex flex-col justify-between cursor-pointer group ${
                  isSelected
                    ? "bg-gradient-to-b from-cyan-950/40 via-purple-950/20 to-black border-cyan-500/60 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl transition-colors ${
                      isSelected ? "bg-cyan-500 text-black font-bold" : "bg-white/5 text-cyan-400 group-hover:text-white"
                    }`}>
                      <problem.icon className="w-6 h-6" />
                    </div>
                    {isSelected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                    )}
                  </div>

                  <h3 className={`text-lg font-bold mb-2 transition-colors ${
                    isSelected ? "text-cyan-300" : "text-white group-hover:text-cyan-400"
                  }`}>
                    {problem.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {problem.subtitle}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                  isSelected ? "border-cyan-500/30 text-cyan-400" : "border-white/5 text-gray-500 group-hover:text-gray-300"
                }`}>
                  <span>{isSelected ? "Active Blueprint" : "Tap to Diagnose"}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSelected ? "rotate-180" : ""}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Revealed Solution Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProblem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-neutral-950/80 border border-cyan-500/30 p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
              {/* Left Column: Diagnosis & What We Implement */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                    Root Cause Diagnosis
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    {selectedProblem.diagnosis}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" /> What 21TechGlory Implements:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProblem.implementation.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all flex items-start gap-2.5 text-xs text-gray-300 hover:text-white group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Recommended Flow Chain */}
                <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                    Recommended Execution Chain:
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {selectedProblem.recommendedChain.map((node, idx) => (
                      <React.Fragment key={idx}>
                        <span className="px-3 py-1 rounded-lg bg-black border border-white/10 text-white font-medium">
                          {node}
                        </span>
                        {idx < selectedProblem.recommendedChain.length - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Case Studies & Direct Scroll CTA */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-6 p-6 rounded-2xl bg-black/60 border border-white/10">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                    Proven In Real Deployments:
                  </h4>
                  <div className="space-y-3">
                    {selectedProblem.caseStudies.map((cs, idx) => (
                      <Link
                        key={idx}
                        href={cs.href}
                        className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {cs.title}
                          </div>
                          <div className="text-xs text-cyan-400 font-mono mt-1">
                            Verified Result: {cs.metric}
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => handleScrollToBuilder(selectedProblem.presetKey)}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-black font-extrabold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    SEE MY RECOMMENDED SYSTEM ({selectedProblem.presetKey.toUpperCase()}) <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-gray-500 text-center">
                    Scrolls to interactive architecture builder with these modules pre-selected.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
