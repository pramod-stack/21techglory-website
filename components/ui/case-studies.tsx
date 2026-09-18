"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Target, Lightbulb, TrendingUp, ExternalLink, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface CaseStudyItem {
  id: string;
  client: string;
  shortLabel?: string;
  category: string;
  badge?: string;
  locationBadge?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  image: string;
  stats: { label: string; value: string }[];
  details: {
    problem: string;
    strategy: string;
    solution: string;
    result: string;
  };
}

const cases: CaseStudyItem[] = [
  {
    id: "liger-fitness",
    client: "Liger Fitness",
    shortLabel: "4 Branches",
    category: "Web Development, Marketing & Multi-Branch Local SEO",
    locationBadge: "4 Branches: 3 in Kerala, 1 in Bangalore",
    liveUrl: "https://www.ligerfitness.co.in/",
    caseStudyUrl: "/work/liger-fitness",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    stats: [
      { label: "Trial Bookings", value: "+180%" },
      { label: "Google Maps Rank", value: "#1 Rank" },
      { label: "Active Branches", value: "3 Kerala + 1 BLR" },
      { label: "Mobile Speed", value: "<1.2s LCP" },
    ],
    details: {
      problem: "Liger Fitness operates 4 premium gyms (3 branches in Kerala and 1 flagship in Bangalore). Despite tremendous physical momentum, online lead generation was leaking: mobile visitors bounced due to slow loading, local search presence was fragmented across different regions, and manual trial inquiries had high drop-off rates.",
      strategy: "Deploy an integrated digital acquisition engine: build a sub-second Next.js web platform, execute a targeted multi-location Google Maps & Local SEO ranking campaign across all 4 branches, and automate instant WhatsApp lead routing for prospective gym members.",
      solution: "Engineered a high-conversion mobile-first website with frictionless 1-click trial bookings, established branch-specific Google Business Profiles with localized schema for each Kerala and Bangalore facility, and connected automated desk alerts.",
      result: "Secured #1 local Google Maps ranking in target vicinities across all 4 branches, surged verified member trial bookings by +180%, and reduced prospect inquiry response time to under 60 seconds."
    }
  },
  {
    id: "education-career-bridge",
    client: "Education to Career Bridge",
    shortLabel: "EdTech",
    category: "Web Development, Education Marketing & Local Ranking",
    locationBadge: "Pan-India Education & Career Counseling",
    liveUrl: "https://educationtocareerbridge.com/",
    caseStudyUrl: "/work/education-career-bridge",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    stats: [
      { label: "Student Inquiries", value: "+250%" },
      { label: "Local Search Rank", value: "#1 Local Pack" },
      { label: "Response Speed", value: "<2 Mins" },
      { label: "Conversion Lift", value: "+68%" },
    ],
    details: {
      problem: "Education to Career Bridge provides crucial career counseling, guidance, and placement bridges for students and graduates. Their legacy web presence was unoptimized for mobile devices, invisible in localized search queries, and lacked a streamlined booking channel for prospective candidates.",
      strategy: "Architect a modern, credible career platform, optimize local ranking and search discoverability for high-intent career and higher education keywords, and implement automated direct counselor connection pathways.",
      solution: "Engineered a high-performance Next.js application with interactive career program tracks, structured localized education schema, strategic Google Maps optimization, and direct WhatsApp counseling funnels.",
      result: "Ranked #1 for regional career guidance and educational counseling searches, increased qualified student enrollment inquiries by 250%, and created a seamless digital inquiry engine."
    }
  },
  {
    id: "slv-pg",
    client: "SLV Home Like PG",
    shortLabel: "Co-Living",
    category: "Local SEO & Website Redesign",
    locationBadge: "Manyata Tech Park, Bangalore",
    liveUrl: "https://wa.me/917795354043?text=Hi,%20I'm%20inquiring%20about%20the%20SLV%20PG%20case%20study.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000&auto=format&fit=crop",
    stats: [
      { label: "Increase in Leads", value: "+300%" },
      { label: "Google Maps Rank", value: "#1 Rank" },
      { label: "Occupancy Rate", value: "100% Full" },
      { label: "Ranking Timeframe", value: "3 Months" },
    ],
    details: {
      problem: "SLV PG was struggling to get consistent tenant bookings despite premium living facilities. Their old website looked outdated, failed to convey trust, and they were invisible on Google Maps in the fiercely competitive Manyata Tech Park corridor.",
      strategy: "Reposition them as an executive co-living space, shift marketing away from generic low-cost price wars, and aggressively optimize localized Google Business citations and geo-targeted keywords.",
      solution: "Designed a cinematic, high-conversion bento grid web experience with room walkthroughs and integrated an automated instant WhatsApp booking flow to qualify and lock in tenant inquiries immediately.",
      result: "Achieved #1 ranking on local Google Maps within 3 months. Inbound tenant lead volume increased by 300% and they reached sustained 100% building occupancy."
    }
  },
  {
    id: "conceive-clinics",
    client: "Conceive Clinics",
    shortLabel: "Healthcare",
    category: "Healthcare Web Architecture & Brand Authority",
    locationBadge: "IVF & Fertility Healthcare Practice",
    liveUrl: "https://www.conceiveclinics.com",
    caseStudyUrl: "/work/clinic-seo-bangalore",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
    stats: [
      { label: "Conversion Rate", value: "+45%" },
      { label: "Patient Inquiries", value: "2x Volume" },
      { label: "Doctor Trust Index", value: "99.2%" },
      { label: "Mobile Page Load", value: "0.9s LCP" },
    ],
    details: {
      problem: "Conceive Clinics needed to establish immense authority and emotional trust online for IVF and reproductive treatments. Their existing digital presence was clinical, cold, and failed to reflect their leading success rates.",
      strategy: "Overhaul the digital patient journey from the ground up. Architect a 'luxury healthcare' aesthetic prioritizing medical empathy, doctor credentials, patient testimonials, and low-friction booking.",
      solution: "Engineered a high-performance modern web application with silky micro-animations, transparent treatment roadmaps, and a direct-to-coordinator WhatsApp booking gateway.",
      result: "Patient consultation conversion rate surged by +45%. The clinic now receives double the qualified, high-intent patient inquiries compared to their previous infrastructure."
    }
  },
  {
    id: "namo-cranes",
    client: "Namo Cranes & Services",
    shortLabel: "Industrial",
    category: "Industrial Web Infrastructure & B2B Inquiries",
    locationBadge: "Heavy Engineering & Manufacturing",
    liveUrl: "https://namocranes.com/",
    caseStudyUrl: "/work/namo-cranes",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
    stats: [
      { label: "B2B Enquiries", value: "+220%" },
      { label: "Catalog Views", value: "3.5x" },
      { label: "System Uptime", value: "99.9%" },
      { label: "RFQ Turnaround", value: "<4 Hours" },
    ],
    details: {
      problem: "Namo Cranes required an authoritative digital infrastructure to handle complex industrial quotation requests for cranes and material handling gear without relying on unstructured, slow email threads.",
      strategy: "Engineer an authoritative B2B industrial catalog with interactive equipment specifications, downloadable technical engineering brochures, and direct CRM inquiry routing.",
      solution: "Engineered a modern Next.js technical showcase with modular crane specifications, downloadable engineering schematics, and direct RFQ form queuing.",
      result: "Structured B2B RFQ pipeline delivering +220% qualified industrial leads, 3.5x catalog engagement, and zero quotation data loss with resilient CRM integration."
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-4 h-4" /> Proven Real-World Results
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured Case Studies</h2>
          <p className="text-gray-400 text-lg">
            Explore how we engineered web development, performance marketing, and #1 local ranking systems for high-growth brands.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === c.id 
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.25)] scale-105" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{c.client}</span>
              {c.shortLabel && (
                <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  activeTab === c.id ? "bg-black/10 text-black font-bold" : "bg-white/10 text-cyan-400"
                }`}>
                  {c.shortLabel}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="relative rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden backdrop-blur-sm shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Image & Visual Showcase Side (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden flex flex-col justify-end p-8">
                <img 
                  src={activeCase.image} 
                  alt={activeCase.client} 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent lg:bg-gradient-to-r lg:from-black/85 lg:via-black/60 lg:to-black/30" />
                
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 text-xs font-bold text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/30 backdrop-blur-md inline-block">
                      {activeCase.category}
                    </span>
                    {activeCase.locationBadge && (
                      <span className="px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/30 backdrop-blur-md inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {activeCase.locationBadge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    {activeCase.client}
                  </h3>

                  {/* Quick Action Links */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {activeCase.liveUrl && (
                      <a
                        href={activeCase.liveUrl}
                        target={activeCase.liveUrl.startsWith('http') ? "_blank" : undefined}
                        rel={activeCase.liveUrl.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:scale-105"
                      >
                        {activeCase.liveUrl.includes('wa.me') ? "Inquire on WhatsApp" : "Visit Live Website"} <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {activeCase.caseStudyUrl && (
                      <Link
                        href={activeCase.caseStudyUrl}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all backdrop-blur-md"
                      >
                        Deep Dive Story <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                    {activeCase.stats.map((stat, i) => (
                      <div key={i} className="bg-black/50 backdrop-blur-md rounded-xl p-3 border border-white/10">
                        <div className="text-xl lg:text-2xl font-black text-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white">
                          {stat.value}
                        </div>
                        <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-0.5">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Text / Strategy Breakdown Side (7 cols) */}
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center gap-6 bg-gradient-to-br from-white/[0.01] to-transparent">
                {[
                  { 
                    icon: Target, 
                    title: "The Problem", 
                    text: activeCase.details.problem, 
                    color: "text-red-400", 
                    bg: "bg-red-400/10 border border-red-400/20" 
                  },
                  { 
                    icon: Lightbulb, 
                    title: "Our Strategy", 
                    text: activeCase.details.strategy, 
                    color: "text-yellow-400", 
                    bg: "bg-yellow-400/10 border border-yellow-400/20" 
                  },
                  { 
                    icon: CheckCircle2, 
                    title: "The Solution Delivered", 
                    text: activeCase.details.solution, 
                    color: "text-cyan-400", 
                    bg: "bg-cyan-400/10 border border-cyan-400/20" 
                  },
                  { 
                    icon: TrendingUp, 
                    title: "The Tangible Results", 
                    text: activeCase.details.result, 
                    color: "text-green-400", 
                    bg: "bg-green-400/10 border border-green-400/20" 
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${item.bg} ${item.color} mt-0.5 shadow-sm`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-base mb-1.5 flex items-center gap-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Bottom Footer bar inside card */}
                <div className="pt-4 mt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Verified 21TechGlory Client Deployment</span>
                  </div>
                  {activeCase.liveUrl && !activeCase.liveUrl.includes('wa.me') && (
                    <a
                      href={activeCase.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 font-medium"
                    >
                      {activeCase.liveUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
