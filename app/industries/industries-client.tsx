"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  Sparkles, 
  ArrowRight, 
  ChevronDown, 
  ChevronRight,
  CheckCircle2, 
  Zap, 
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Database,
  Search
} from 'lucide-react';

export default function IndustriesClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const industries = [
    {
      title: "Clinics & Hospitals",
      icon: HeartPulse,
      accent: "purple",
      description: "Scale patient acquisition and streamline clinical workflows with custom clinic web systems, GMB local search optimization, and automated WhatsApp communication loops.",
      href: "/industries/clinics-hospitals",
      roi: "3.8x patient bookings",
      features: [
        "No-friction patient scheduling calendars",
        "HIPAA-compliant CRM integrations (HubSpot, Zoho)",
        "Google Maps ranking for high-intent medical queries",
        "WhatsApp automated appointment reminder loops"
      ]
    },
    {
      title: "Salons & Spas",
      icon: Sparkles,
      accent: "amber",
      description: "Boost bookings, lock in recurring clients, and automate scheduling with ultra-fast web applications, local SEO dominance, and WhatsApp/Instagram integrations.",
      href: "/industries/salons-spas",
      roi: "68% no-show reduction",
      features: [
        "Custom booking engines with payment flows",
        "WhatsApp & Instagram message integrations",
        "Local SEO to dominate 'near me' organic search",
        "Automated review collection campaigns"
      ]
    }
  ];

  const coreCapabilities = [
    {
      icon: Zap,
      title: "Sub-Second Next.js Performance",
      description: "We code custom Next.js sites from scratch. Fast sites capture 2x more mobile traffic and outrank slow template competitors.",
      accent: "cyan"
    },
    {
      icon: Database,
      title: "Automated CRM Pipelines",
      description: "No more spreadsheet list loss. Leads, appointment details, and user queries sync instantly to HubSpot or Zoho dashboards.",
      accent: "purple"
    },
    {
      icon: Search,
      title: "Local Search Dominance",
      description: "We optimize Google Business Profiles and directory structures to put your location in front of ready-to-book local searchers.",
      accent: "cyan"
    }
  ];

  const faqs = [
    {
      q: "What industries do you specialize in?",
      a: "We design and build growth solutions tailored to local service businesses. Our core specializations are healthcare (Clinics & Hospitals, dental practices, diagnostic labs, therapy centers) and wellness/beauty (Premium Salons, Day Spas, nail lounges, skin care studios)."
    },
    {
      q: "Do you offer custom designs or templates?",
      a: "We build fully custom, high-speed Next.js frontends to ensure absolute design freedom, lightning-fast load times, and reliable mobile responsiveness. We do not use slow, generic WordPress templates."
    },
    {
      q: "Can you connect our booking platform to our existing CRM?",
      a: "Yes. We regularly connect custom booking engines, appointment calendars, and contact forms to leading CRM platforms like HubSpot, Zoho, and Salesforce, as well as medical-specific software and messaging apps like WhatsApp."
    },
    {
      q: "How does local SEO help my service business?",
      a: "Local SEO focuses on ranking your business in the Google Maps 3-Pack and local organic search. By optimizing your Google Business Profile, cleaning citation listings, and structuring city-specific service pages, we make sure local buyers find you when searching for your services."
    }
  ];

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-20%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <Zap className="w-4 h-4" /> Vertical Growth Platforms
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            Growth Platforms Engineered <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">For Your Industry</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We deploy complete digital acquisition networks, CRM databases, and automated follow-ups designed for the unique operations of clinics, hospitals, salons, and spas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/work"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 hover:border-white/20 transition-all text-center"
            >
              Explore Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 pb-24 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              const isPurple = ind.accent === "purple";
              const accentColor = isPurple ? "text-purple-400 group-hover:text-purple-300" : "text-amber-400 group-hover:text-amber-300";
              const accentBg = isPurple ? "bg-purple-500/10 group-hover:bg-purple-500/20" : "bg-amber-500/10 group-hover:bg-amber-500/20";
              const borderHover = isPurple ? "hover:border-purple-500/30" : "hover:border-amber-500/30";
              const glowBg = isPurple ? "bg-purple-500/5" : "bg-amber-500/5";

              return (
                <div 
                  key={idx}
                  className={`group relative p-8 md:p-10 rounded-3xl bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 ${borderHover} transition-all flex flex-col justify-between overflow-hidden`}
                >
                  <div className={`absolute top-0 right-0 w-48 h-48 rounded-full ${glowBg} blur-[60px] pointer-events-none`} />
                  
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className={`p-4 rounded-2xl ${accentBg} ${accentColor} transition-all`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/5">
                        Industry offering
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4 group-hover:text-white transition-colors">{ind.title}</h2>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">{ind.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {ind.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${accentColor}`} />
                          <span className="text-gray-300 text-sm md:text-base">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-sm font-semibold mb-8 flex items-center gap-2">
                      <TrendingUp className={`w-4 h-4 ${accentColor}`} /> 
                      <span className="text-gray-400">Expected Growth:</span> 
                      <span className={`${accentColor} font-bold`}>{ind.roi}</span>
                    </div>

                    <Link 
                      href={ind.href}
                      className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
                    >
                      View Growth System <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 px-6 relative bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Built on Proven Digital Infrastructure</h2>
            <p className="text-lg text-gray-400">
              No matter your vertical, we engineer your core systems to convert searchers into paying clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreCapabilities.map((cap, idx) => {
              const CapIcon = cap.icon;
              return (
                <div key={idx} className="p-8 rounded-3xl bg-black border border-white/5 hover:border-cyan-500/20 transition-all">
                  <div className="p-3 w-fit rounded-xl bg-white/5 text-cyan-400 mb-6">
                    <CapIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{cap.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about our industry-specific systems.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-white/10 bg-black overflow-hidden transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex justify-between items-center text-white hover:text-cyan-400 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-base md:text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>
                
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm md:text-base text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Unlock Your Business Capacity</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Talk to an agency engineer today to design your automated intake, booking calendars, and local map strategy.
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all cursor-pointer inline-flex items-center gap-2"
          >
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
