"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  TrendingUp, 
  Lock, 
  CheckCircle2,
  Building2,
  Dumbbell,
  Truck,
  Code2,
  ShoppingBag,
  Stethoscope,
  MessageSquare
} from 'lucide-react';
import { PROJECT_REGISTRY, ProjectRegistryItem } from '@/lib/project-registry';
import { Analytics } from '@/lib/analytics';

const categoryTabs = [
  { id: "all", label: "All Projects" },
  { id: "featured", label: "Featured Case Studies" },
  { id: "industrial", label: "Industrial & Manufacturing" },
  { id: "fitness", label: "Fitness & Healthcare" },
  { id: "d2c", label: "D2C & Tech" },
  { id: "request", label: "Available on Request" },
];

export default function WorkClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects = PROJECT_REGISTRY.filter((project) => {
    if (activeTab === "all") return true;
    if (activeTab === "featured") return project.depth === "full";
    if (activeTab === "industrial") return project.industrySlug === "industrial-manufacturing";
    if (activeTab === "fitness") return project.industrySlug === "fitness-gyms" || project.industrySlug === "clinics-hospitals";
    if (activeTab === "d2c") return project.industrySlug === "beauty-cosmetics" || project.industrySlug === "software-it-services";
    if (activeTab === "request") return project.depth === "on_request";
    return true;
  });

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <Sparkles className="w-4 h-4" /> Client Project Registry
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            Real Client Systems: Web, SEO, and <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
              Automated Acquisition Engines
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Explore how we engineer digital growth infrastructure for Indian SMBs, industrial enterprises, healthcare practices, and fitness brands.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 mb-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.25)] font-extrabold"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Project Registry Grid */}
      <section className="py-6 pb-24 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const isFullCaseStudy = project.depth === "full" && project.caseStudyUrl;
              const isOnRequest = project.depth === "on_request";

              return (
                <div 
                  key={project.id}
                  className="group p-7 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Badge & Depth Indicator */}
                    <div className="flex justify-between items-start mb-5">
                      <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                        {project.industry}
                      </span>
                      {isOnRequest ? (
                        <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full">
                          <Lock className="w-3 h-3" /> On Request
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono text-gray-400">
                          {project.duration}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Metrics / Verified Outcomes */}
                    <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 mb-6 flex flex-wrap items-center gap-2">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-cyan-300 font-semibold mr-2">
                          <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{m.label}: <strong className="text-white">{m.value}</strong></span>
                        </div>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      {isFullCaseStudy ? (
                        <Link 
                          href={project.caseStudyUrl!}
                          className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-cyan-400 transition-colors"
                        >
                          Read 6-Step Case Study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ) : isOnRequest ? (
                        <a 
                          href="https://wa.me/917795354043?text=Hi,%20I%20would%20like%20to%20request%20the%20case%20study%20details%20for%20this%20project."
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5" /> Request Clearance via WhatsApp
                        </a>
                      ) : (
                        <span className="text-xs text-gray-500 font-medium">
                          Production System Active
                        </span>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-cyan-300 transition-colors"
                        >
                          Visit Live <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Results & Standards */}
      <section className="py-20 px-6 relative bg-white/[0.01] border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Strict Engineering Standard</h2>
          <p className="text-base text-gray-400 mb-12 max-w-2xl mx-auto">
            Every client deployment is audited against verified speed and conversion criteria:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-black border border-white/10">
              <CheckCircle2 className="w-7 h-7 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-1">99.9% Uptime SLA</h4>
              <p className="text-xs text-gray-400">Global Edge CDNs and resilient database queues guarantee zero lead drop.</p>
            </div>
            <div className="p-6 rounded-2xl bg-black border border-white/10">
              <CheckCircle2 className="w-7 h-7 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-1">&lt; 1.2s Mobile LCP</h4>
              <p className="text-xs text-gray-400">Lightweight Next.js React 19 architecture optimized for Indian mobile networks.</p>
            </div>
            <div className="p-6 rounded-2xl bg-black border border-white/10">
              <CheckCircle2 className="w-7 h-7 text-cyan-400 mx-auto mb-3" />
              <h4 className="font-bold text-white mb-1">100% Verified Metrics</h4>
              <p className="text-xs text-gray-400">Zero placeholder statistics. Every number is backed by actual client data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto p-10 md:p-12 rounded-3xl bg-neutral-950 border border-white/10 text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">Ready to Build Your System?</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Let's design your Next.js frontend, establish local search authority, and integrate 24/7 automated lead routing.
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer inline-flex items-center gap-2"
          >
            Start Your Project Blueprint <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />
      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
