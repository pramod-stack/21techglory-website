"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Check
} from 'lucide-react';

const iconMap: Record<string, any> = {
  website: Code2,
  seo: Search,
  gmb: MapPin,
  ads: BarChart3,
  crm: Bot,
  whatsapp: MessageSquare,
  ai_bot: Sparkles,
  automation: Layers,
  booking: Calendar,
  analytics: TrendingUp,
};

const moduleLabels: Record<string, { name: string; nodeRole: string; color: string }> = {
  website: { name: "Next.js Core Web", nodeRole: "High-Speed Conversion Hub", color: "from-cyan-500 to-blue-600" },
  seo: { name: "Organic SEO", nodeRole: "Inbound Buyer Stream", color: "from-blue-500 to-indigo-600" },
  gmb: { name: "Google Map Pack", nodeRole: "Local #1 Search Dominance", color: "from-indigo-500 to-purple-600" },
  ads: { name: "Targeted PPC Ads", nodeRole: "Paid Intent Acquisition", color: "from-purple-500 to-pink-600" },
  crm: { name: "Central CRM", nodeRole: "Automated Deal Card Pipeline", color: "from-pink-500 to-rose-600" },
  whatsapp: { name: "WhatsApp Engine", nodeRole: "60s Direct Conversation", color: "from-emerald-500 to-teal-600" },
  ai_bot: { name: "AI Intake Assistant", nodeRole: "24/7 Intelligent Qualification", color: "from-amber-500 to-orange-600" },
  automation: { name: "Workflow Triggers", nodeRole: "Zero-Touch Sync & Routing", color: "from-violet-500 to-purple-700" },
  booking: { name: "Calendar Engine", nodeRole: "Frictionless Appointment Intake", color: "from-cyan-600 to-teal-600" },
  analytics: { name: "Attribution Matrix", nodeRole: "Continuous ROI & Growth KPIs", color: "from-emerald-400 to-cyan-500" },
};

interface SystemVisualizerProps {
  selectedModules: string[];
}

export default function SystemVisualizer({ selectedModules }: SystemVisualizerProps) {
  // Logical ordering of pipeline
  const pipelineOrder = ["seo", "gmb", "ads", "website", "booking", "ai_bot", "crm", "whatsapp", "automation", "analytics"];
  const activeNodes = pipelineOrder.filter(id => selectedModules.includes(id));

  return (
    <div className="w-full rounded-3xl bg-neutral-950/90 border border-white/10 p-6 md:p-8 relative overflow-hidden flex flex-col justify-between">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-transparent to-purple-950/20 pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Live Architecture Flow
            </div>
            <h4 className="text-lg font-bold text-white mt-0.5">
              Connected Infrastructure Blueprint
            </h4>
          </div>
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
            {selectedModules.length} Active Nodes
          </span>
        </div>

        {/* Dynamic Nodes Grid / Vertical Flow */}
        <div className="space-y-3 relative z-10 py-2">
          {activeNodes.length === 0 ? (
            <div className="p-8 text-center text-gray-500 text-sm italic">
              Select modules on the left to see your custom pipeline assemble.
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <AnimatePresence>
                {activeNodes.map((modId, index) => {
                  const info = moduleLabels[modId];
                  const Icon = iconMap[modId] || Layers;
                  const isLast = index === activeNodes.length - 1;

                  return (
                    <motion.div
                      key={modId}
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="relative"
                    >
                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-colors flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${info.color} text-white shrink-0`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-bold text-white truncate">
                              {info.name}
                            </div>
                            <div className="text-xs text-gray-400 truncate">
                              {info.nodeRole}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                          <Check className="w-3.5 h-3.5" />
                          <span>SYNCD</span>
                        </div>
                      </div>

                      {/* Connection Line Indicator */}
                      {!isLast && (
                        <div className="w-[2px] h-3 bg-gradient-to-b from-cyan-500/40 to-purple-500/40 mx-auto my-0.5" />
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Live System Feedback */}
      <div className="mt-6 pt-4 border-t border-white/10 relative z-10">
        <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1">
          Pipeline Operation:
        </div>
        <div className="text-xs text-cyan-300 font-medium leading-relaxed">
          {selectedModules.length > 0 
            ? `Your system automatically captures, routes, syncs, and nurtures prospects through ${selectedModules.length} synchronized endpoints.`
            : "Choose any combination or preset to assemble your growth stack."}
        </div>
      </div>
    </div>
  );
}
