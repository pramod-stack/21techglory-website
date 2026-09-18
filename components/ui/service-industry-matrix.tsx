"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Layers, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Filter, 
  Building2, 
  ExternalLink 
} from 'lucide-react';
import { Analytics } from '@/lib/analytics';

const SERVICES = [
  { id: "web-dev", name: "Website Build", href: "/services/web-development" },
  { id: "seo", name: "SEO & Content", href: "/services/seo" },
  { id: "local-seo", name: "Local SEO / GMB", href: "/services/local-seo" },
  { id: "paid-ads", name: "Paid Ads (Meta/Google)", href: "/services/paid-ads" },
  { id: "ai-auto", name: "AI Automation", href: "/services/ai-automation" },
  { id: "crm", name: "CRM Workflows", href: "/services/crm" },
  { id: "whatsapp", name: "WhatsApp Automation", href: "/services/ai-automation" },
  { id: "booking", name: "Booking System", href: "/services/web-development" },
  { id: "analytics", name: "Analytics & Tracking", href: "/services/web-development" },
  { id: "brand", name: "Brand Identity", href: "/services/web-development" },
  { id: "copywriting", name: "Conversion Copywriting", href: "/services/seo" },
  { id: "hosting", name: "Cloud & Edge Hosting", href: "/services/web-development" },
];

const INDUSTRIES = [
  { id: "clinics", name: "Clinics & Hospitals", href: "/industries/clinics-hospitals", benchmark: "+120% Patient Inquiries" },
  { id: "salons", name: "Salons & Spas", href: "/industries/salons-spas", benchmark: "+85% Recurring Bookings" },
  { id: "fitness", name: "Fitness & Gyms", href: "/industries/fitness-gyms", benchmark: "+180% Trial Workouts" },
  { id: "beauty", name: "Beauty & Cosmetics", href: "/industries/beauty-cosmetics", benchmark: "+65% Storefront Sales" },
  { id: "software", name: "Software & IT", href: "/industries/software-it-services", benchmark: "2.4x Enterprise Pipeline" },
  { id: "hospitality", name: "Hospitality & F&B", href: "/work", benchmark: "Direct Table Reservations" },
  { id: "industrial", name: "Industrial & Manufacturing", href: "/industries/industrial-manufacturing", benchmark: "+220% Qualified RFQs" },
  { id: "healthcare", name: "Healthcare & Wellness", href: "/industries/clinics-hospitals", benchmark: "Automated Consultation Sync" },
  { id: "finance", name: "Finance & Funds", href: "/work", benchmark: "Institutional Investor Portals" },
  { id: "sports", name: "Sports & Leisure", href: "/work", benchmark: "Member Pass Automation" },
];

const MATRIX_DATA: Record<string, Record<string, string>> = {
  "fitness": {
    "web-dev": "Sub-second Next.js membership portal with fast class schedule viewers.",
    "local-seo": "Top-3 Google Maps 3-Pack placement for high-intent 'gyms near me' searches.",
    "whatsapp": "Instant trial workout confirmation and 2-hour reminder follow-up sequences.",
    "crm": "Lead cards tagged with trainer preferences and membership stage."
  },
  "industrial": {
    "web-dev": "Interactive engineering catalog with spec sheet and technical drawing downloads.",
    "crm": "Automated B2B RFQ routing segmenting capacity, span, and duty classes.",
    "seo": "High-intent B2B keyword ranking for material handling and automation equipment.",
    "whatsapp": "Direct engineering query triage to field specialists."
  },
  "clinics": {
    "web-dev": "Zero-friction patient booking platform with doctor profiles and procedure guides.",
    "whatsapp": "24/7 automated triage, appointment confirmations, and patient reminders.",
    "local-seo": "Local clinic authority ranking across Bangalore neighborhood search terms.",
    "crm": "HubSpot & custom CRM syncing doctor calendars and OPD slots."
  },
  "beauty": {
    "web-dev": "Luxury D2C storefront with fast-loading AVIF product lookbooks.",
    "paid-ads": "High-ROAS Meta campaigns targeting intent-based beauty buyer segments.",
    "whatsapp": "Abandoned cart recovery messages with 1-click checkout links.",
    "crm": "Customer lifetime value tracking and repeat order reminders."
  },
  "software": {
    "web-dev": "Enterprise modern SaaS styling deployed on global edge CDNs.",
    "seo": "Authoritative technical case study indexing for overseas contract discovery.",
    "crm": "Inbound discovery call booking syncing directly to founder calendars."
  }
};

export default function ServiceIndustryMatrix() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("fitness");
  const [selectedService, setSelectedService] = useState<string>("web-dev");

  const currentIndustry = INDUSTRIES.find(i => i.id === selectedIndustry) || INDUSTRIES[0];
  const currentService = SERVICES.find(s => s.id === selectedService) || SERVICES[0];

  const cellDetails = MATRIX_DATA[selectedIndustry]?.[selectedService] || 
    `Custom-engineered ${currentService.name} designed specifically for ${currentIndustry.name} to capture, convert, and automate growth.`;

  const handleIndustrySelect = (id: string) => {
    setSelectedIndustry(id);
    Analytics.event('matrix_industry_click', { industryId: id });
  };

  const handleServiceSelect = (id: string) => {
    setSelectedService(id);
    Analytics.event('matrix_service_click', { serviceId: id });
  };

  return (
    <section className="py-24 bg-[#0B1220] relative border-t border-[#212C42] overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1447E6]/10 border border-[#1447E6]/30 text-[#4F7DF7] text-xs font-bold uppercase tracking-widest">
            <Layers className="w-4 h-4" /> Comprehensive Growth Matrix
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            How Every Service Powers <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F7DF7] via-[#E8B44C] to-pink-500">
              Your Specific Industry
            </span>
          </h2>
          <p className="text-[#A7B0C0] text-sm md:text-base">
            Select your industry and service layer below to see how our growth architecture integrates for your business model.
          </p>
        </div>

        {/* Matrix Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 10 Industries */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#A7B0C0] mb-2 flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-[#E8B44C]" /> Select Industry (10)
            </div>
            <div className="space-y-1.5 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
              {INDUSTRIES.map((ind) => {
                const isSelected = ind.id === selectedIndustry;
                return (
                  <button
                    key={ind.id}
                    onClick={() => handleIndustrySelect(ind.id)}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? "bg-[#1447E6]/20 border-[#4F7DF7] text-white shadow-md"
                        : "bg-[#101B2E] border-[#212C42] text-[#A7B0C0] hover:text-white hover:border-[#4F7DF7]/40"
                    }`}
                  >
                    <span>{ind.name}</span>
                    {isSelected && (
                      <span className="text-[10px] font-mono text-[#E8B44C] font-bold">
                        {ind.benchmark}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: 12 Services & Result Card */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#A7B0C0] mb-3 flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-[#4F7DF7]" /> Select Service Layer (12)
              </div>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((srv) => {
                  const isSelected = srv.id === selectedService;
                  return (
                    <button
                      key={srv.id}
                      onClick={() => handleServiceSelect(srv.id)}
                      className={`px-3 py-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#D9A441] text-[#001848] border-[#E8B44C] font-bold shadow-md"
                          : "bg-[#101B2E] border-[#212C42] text-[#A7B0C0] hover:text-white hover:border-white/20"
                      }`}
                    >
                      {srv.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Result Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedIndustry}-${selectedService}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-8 rounded-3xl bg-[#101B2E] border border-[#4F7DF7]/30 space-y-6 shadow-2xl relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#212C42] pb-5">
                  <div>
                    <div className="text-xs font-mono text-[#E8B44C] uppercase font-bold tracking-widest mb-1">
                      Targeted Architecture:
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {currentService.name} for {currentIndustry.name}
                    </h3>
                  </div>
                  <Link
                    href={currentIndustry.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F7DF7] hover:text-white"
                  >
                    View Industry Hub <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="space-y-4">
                  <div className="text-xs font-mono uppercase text-[#A7B0C0]">
                    What we build for your business:
                  </div>
                  <p className="text-base text-gray-200 leading-relaxed font-medium">
                    {cellDetails}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#212C42] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#A7B0C0]">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Production-proven across South India & US SMBs</span>
                  </div>

                  <Link
                    href={currentService.href}
                    className="px-5 py-2.5 rounded-xl bg-[#1447E6] hover:bg-[#4F7DF7] text-white text-xs font-bold transition-all inline-flex items-center gap-2 shadow-md"
                  >
                    Explore {currentService.name} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
