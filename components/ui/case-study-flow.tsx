"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  MapPin, 
  Calendar, 
  Layers, 
  TrendingUp, 
  CheckCircle2, 
  XCircle,
  Building2, 
  Sparkles,
  Bot,
  Code2,
  Search,
  BarChart3
} from 'lucide-react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import { Analytics } from '@/lib/analytics';

export interface CaseStudyProps {
  id: string;
  client: string;
  title: string;
  subtitle: string;
  category: string;
  industry: string;
  location: string;
  duration: string;
  stack: string[];
  liveUrl?: string;
  // 01 The Business
  businessOverview: string;
  // 02 The Problem (Starting Situation)
  problemSummary: string;
  problemPoints: string[];
  // 03 What 21TG Implemented
  implementations: {
    area: "DESIGN" | "TECHNOLOGY" | "AUTOMATION" | "CONVERSION" | "MARKETING";
    title: string;
    description: string;
  }[];
  // 04 Before vs After Transformation Flow
  beforeFlow: string[];
  afterFlow: string[];
  // 05 What Changed (Outcomes & Verified Metrics)
  outcomes: string[];
  verifiedMetrics: { label: string; value: string }[];
  // 06 Recommendation & Related
  recommendedPreset: string;
  recommendedModules: string[];
  relatedCaseStudies?: { title: string; href: string; category: string }[];
}

export default function CaseStudyFlow({ data }: { data: CaseStudyProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTransformationTab, setActiveTransformationTab] = useState<"after" | "before">("after");

  const handleBuildSimilar = () => {
    Analytics.caseStudyRecommendationClick(data.id, data.recommendedPreset);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("21tg:open-lead-form", {
        detail: {
          intent: "build_my_system",
          modules: data.recommendedModules,
          preset: data.recommendedPreset
        }
      }));
    }
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Header & Breadcrumb */}
      <section className="pt-36 pb-10 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Project Registry
          </Link>

          <div className="space-y-4">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              {data.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {data.title}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              {data.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* 01 — THE BUSINESS (Metadata Block) */}
      <section className="pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/10 mb-6">
            <div className="space-y-1">
              <h4 className="text-xs text-gray-500 uppercase font-semibold">Location</h4>
              <div className="flex items-center gap-1.5 text-sm text-white font-medium">
                <MapPin className="w-4 h-4 text-cyan-400" /> {data.location}
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs text-gray-500 uppercase font-semibold">Duration</h4>
              <div className="flex items-center gap-1.5 text-sm text-white font-medium">
                <Calendar className="w-4 h-4 text-cyan-400" /> {data.duration}
              </div>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs text-gray-500 uppercase font-semibold">Industry</h4>
              <p className="text-sm text-white font-medium">{data.industry}</p>
            </div>
            <div className="space-y-1">
              <h4 className="text-xs text-gray-500 uppercase font-semibold">Core Stack</h4>
              <div className="flex items-center gap-1.5 text-sm text-cyan-300 font-medium truncate">
                <Layers className="w-4 h-4 text-cyan-400 shrink-0" /> {data.stack.slice(0, 2).join(", ")}
              </div>
            </div>
          </div>

          {/* Business Overview */}
          <div className="p-6 rounded-3xl bg-white/[0.01] border border-white/5">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">01 — The Business</div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {data.businessOverview}
            </p>
          </div>
        </div>
      </section>

      {/* 02 — THE PROBLEM (Starting Situation) */}
      <section className="pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-neutral-950/80 border border-red-500/20 space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono text-red-400 uppercase tracking-wider">
                02 — The Starting Situation & Bottlenecks
              </div>
            </div>
            
            <p className="text-gray-300 text-base leading-relaxed">
              {data.problemSummary}
            </p>

            <div className="space-y-3 pt-2">
              {data.problemPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 — WHAT 21TG IMPLEMENTED (Structured Architecture Diagram) */}
      <section className="pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
            03 — What 21TechGlory Implemented
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.implementations.map((impl, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20 inline-block mb-3">
                    {impl.area}
                  </span>
                  <h4 className="text-base font-bold text-white mb-2">{impl.title}</h4>
                  <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{impl.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — THE TRANSFORMATION (Interactive Before vs After Flow) */}
      <section className="pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-neutral-950 border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-purple-400 uppercase tracking-wider">
                04 — Digital Journey Transformation
              </div>

              {/* Toggle Switch */}
              <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 self-start sm:self-auto">
                <button
                  onClick={() => setActiveTransformationTab("before")}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTransformationTab === "before" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "text-gray-400 hover:text-white"
                  }`}
                >
                  BEFORE 21TG
                </button>
                <button
                  onClick={() => setActiveTransformationTab("after")}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTransformationTab === "after" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold" : "text-gray-400 hover:text-white"
                  }`}
                >
                  AFTER 21TG ENGINE
                </button>
              </div>
            </div>

            {/* Flow Visualizer */}
            {activeTransformationTab === "before" ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-4"
              >
                <div className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  Legacy Friction Path (Leads Leaking):
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {data.beforeFlow.map((node, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-3 py-1.5 rounded-lg bg-black border border-red-500/30 text-red-300 font-medium">
                        {node}
                      </span>
                      {idx < data.beforeFlow.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-4"
              >
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  Automated Conversion Engine (Zero Lead Loss):
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {data.afterFlow.map((node, idx) => (
                    <React.Fragment key={idx}>
                      <span className="px-3 py-1.5 rounded-lg bg-black border border-cyan-500/40 text-cyan-200 font-semibold shadow-sm shadow-cyan-500/20">
                        {node}
                      </span>
                      {idx < data.afterFlow.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 05 — WHAT CHANGED (Outcome Chips & Verified Metrics) */}
      <section className="pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            05 — What Changed for the Business
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {data.verifiedMetrics.map((metric, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-cyan-500/30 text-center">
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono mb-1">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-400 uppercase font-semibold tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 space-y-3">
            {data.outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — EXPLORE THE RESULT & LIVE URL */}
      {data.liveUrl && (
        <section className="pb-16 px-6 relative z-10">
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-neutral-900/60 border border-white/15 text-center space-y-4">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              06 — Experience The Production Platform
            </div>
            <h3 className="text-2xl font-bold text-white">
              Explore {data.client}'s Live Website
            </h3>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              Now that you understand the architecture and outcomes, interact directly with the production environment.
            </p>
            <div className="pt-2">
              <a
                href={data.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white text-black font-extrabold text-sm hover:bg-cyan-400 transition-colors shadow-lg"
              >
                VISIT LIVE PROJECT <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Closing: SIMILAR TO WHAT YOU NEED? Recommendation Block */}
      <section className="pb-28 px-6 relative z-10">
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-br from-neutral-900 via-black to-neutral-950 border border-cyan-500/30 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            Tailored Recommendation
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Similar to what your business needs?
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            We can deploy a tailored variation of this exact growth system for your {data.industry} business within 2 to 4 weeks.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-cyan-300 font-mono">
            {data.recommendedModules.map((mod, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                +{mod.toUpperCase()}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={handleBuildSimilar}
              className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer inline-flex items-center gap-2"
            >
              BUILD A SIMILAR SYSTEM FOR ME <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
