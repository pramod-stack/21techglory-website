"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Search, 
  MapPin, 
  BarChart3, 
  Bot, 
  MessageSquare, 
  Sparkles, 
  Layers, 
  Calendar, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  Plus 
} from 'lucide-react';
import SystemVisualizer from '@/components/ui/system-visualizer';
import { SYSTEM_MODULES, SYSTEM_PRESETS } from '@/lib/project-registry';
import { Analytics } from '@/lib/analytics';

const iconComponents: Record<string, any> = {
  Code2,
  Search,
  MapPin,
  BarChart3,
  Bot,
  MessageSquare,
  Sparkles,
  Layers,
  Calendar,
  TrendingUp
};

interface SystemBuilderProps {
  onOpenFormWithModules?: (modules: string[]) => void;
}

export default function SystemBuilder({ onOpenFormWithModules }: SystemBuilderProps) {
  const [selectedModules, setSelectedModules] = useState<string[]>([
    "website",
    "crm",
    "whatsapp",
    "automation"
  ]);
  const [activePreset, setActivePreset] = useState<string>("Local Business");

  // Listen to preset events dispatched from Problem Picker
  useEffect(() => {
    const handleCustomPreset = (e: any) => {
      const presetKey = e.detail?.presetKey;
      if (presetKey && SYSTEM_PRESETS[presetKey]) {
        setSelectedModules(SYSTEM_PRESETS[presetKey].modules);
        setActivePreset(presetKey);
      }
    };
    window.addEventListener("21tg:apply-preset", handleCustomPreset);
    return () => window.removeEventListener("21tg:apply-preset", handleCustomPreset);
  }, []);

  const toggleModule = (id: string) => {
    let updated: string[];
    const isAdding = !selectedModules.includes(id);

    if (isAdding) {
      updated = [...selectedModules, id];
      Analytics.moduleToggle(id, "added", updated);
    } else {
      // Keep at least 1 module
      if (selectedModules.length <= 1) return;
      updated = selectedModules.filter(m => m !== id);
      Analytics.moduleToggle(id, "removed", updated);
    }

    setSelectedModules(updated);
    setActivePreset("Custom Stack");
  };

  const applyPreset = (presetName: string) => {
    const preset = SYSTEM_PRESETS[presetName];
    if (!preset) return;
    setSelectedModules(preset.modules);
    setActivePreset(presetName);
    Analytics.systemPreset(presetName, preset.modules);
  };

  // Generate dynamic summary line
  const selectedNames = selectedModules
    .map(id => SYSTEM_MODULES.find(m => m.id === id)?.name)
    .filter(Boolean);
  
  const summaryLine = `Your system: ${selectedNames.join(" + ")} — captures, routes, and follows up every lead 24/7.`;

  const handleBuildCta = () => {
    Analytics.ctaClick("builder", "BUILD THIS SYSTEM FOR ME →", "progressive_form");
    if (onOpenFormWithModules) {
      onOpenFormWithModules(selectedModules);
    } else if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("21tg:open-lead-form", { 
        detail: { 
          intent: "build_my_system",
          modules: selectedModules 
        } 
      }));
    }
  };

  return (
    <section id="system-builder" className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-purple-950/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase mb-4">
            Interactive System Assembler
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            BUILD YOUR SYSTEM
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Select what you need — we'll assemble the system that makes it work together seamlessly.
          </p>
        </div>

        {/* 1-Click Presets */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-gray-500 mr-2">
            Industry Presets:
          </span>
          {Object.keys(SYSTEM_PRESETS).map((presetName) => {
            const isActive = activePreset === presetName;
            return (
              <button
                key={presetName}
                onClick={() => applyPreset(presetName)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] font-bold scale-105"
                    : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {presetName}
              </button>
            );
          })}
        </div>

        {/* 2-Column Builder Layout: Module Picker (Left) + Live Visualizer (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: 10 Module Chips */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {SYSTEM_MODULES.map((mod) => {
                const isSelected = selectedModules.includes(mod.id);
                const Icon = iconComponents[mod.icon] || Layers;

                return (
                  <button
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-start justify-between gap-3 group ${
                      isSelected
                        ? "bg-cyan-950/30 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                        : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <div className={`p-2.5 rounded-xl transition-colors shrink-0 ${
                        isSelected ? "bg-cyan-500 text-black font-bold" : "bg-white/5 text-gray-400 group-hover:text-cyan-400"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className={`text-sm font-bold truncate ${
                          isSelected ? "text-white" : "text-gray-300 group-hover:text-white"
                        }`}>
                          {mod.name}
                        </div>
                        <div className="text-xs text-gray-500 leading-snug mt-0.5">
                          {mod.desc}
                        </div>
                      </div>
                    </div>

                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected ? "bg-cyan-500 text-black" : "border border-white/20 text-gray-600 group-hover:border-white/40"
                    }`}>
                      {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Connected Flow Visualizer */}
          <div className="lg:col-span-5">
            <SystemVisualizer selectedModules={selectedModules} />
          </div>
        </div>

        {/* Running Summary Line & Bottom CTA Bar */}
        <div className="p-6 md:p-8 rounded-3xl bg-neutral-950 border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Configured Growth Architecture:
            </div>
            <p className="text-sm md:text-base font-semibold text-white">
              {summaryLine}
            </p>
          </div>

          <button
            onClick={handleBuildCta}
            className="w-full md:w-auto px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            BUILD THIS SYSTEM FOR ME <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
