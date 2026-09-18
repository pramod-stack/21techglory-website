"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  MessageSquare, 
  Bot, 
  Database, 
  Send, 
  Clock, 
  CheckCheck, 
  Sparkles, 
  ArrowRight,
  Play
} from 'lucide-react';
import { Analytics } from '@/lib/analytics';

const PIPELINE_STEPS = [
  {
    step: 1,
    title: "MESSAGE RECEIVED",
    detail: "WhatsApp / Web Chat hook catches inbound message instantly.",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-500",
    badge: "0.1s"
  },
  {
    step: 2,
    title: "AI UNDERSTANDS REQUEST",
    detail: "NLP classifies intent: 'Pricing & Treatment Inquiry for Skin Rejuvenation'.",
    icon: Sparkles,
    color: "from-cyan-500 to-purple-500",
    badge: "0.4s"
  },
  {
    step: 3,
    title: "LEAD CREATED IN CRM",
    detail: "HubSpot deal card generated with name, phone & procedure interest.",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    badge: "0.8s"
  },
  {
    step: 4,
    title: "WHATSAPP RESPONSE SENT",
    detail: "Personalized reply with doctor pricing & 1-click booking link sent.",
    icon: Send,
    color: "from-pink-500 to-emerald-500",
    badge: "1.4s"
  },
  {
    step: 5,
    title: "FOLLOW-UP ACTIVATED",
    detail: "If unbooked after 4 hours, polite nurture sequence scheduled automatically.",
    icon: Clock,
    color: "from-emerald-500 to-teal-600",
    badge: "Auto"
  }
];

export default function LiveDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-80px" });
  
  const [activeStep, setActiveStep] = useState<number>(0);
  const [typingText, setTypingText] = useState<string>("");
  const fullText = "Hi, I want to know the pricing for hair & skin treatments.";

  useEffect(() => {
    if (!isInView) {
      setActiveStep(0);
      setTypingText("");
      return;
    }

    let isCancelled = false;

    // Simulate typing
    let charIdx = 0;
    const typeInterval = setInterval(() => {
      if (isCancelled) return;
      if (charIdx <= fullText.length) {
        setTypingText(fullText.slice(0, charIdx));
        charIdx++;
      } else {
        clearInterval(typeInterval);
        // Start pipeline reveal
        startPipeline();
      }
    }, 35);

    const startPipeline = () => {
      let step = 1;
      const stepInterval = setInterval(() => {
        if (isCancelled) return;
        if (step <= PIPELINE_STEPS.length) {
          setActiveStep(step);
          step++;
        } else {
          clearInterval(stepInterval);
        }
      }, 700);
    };

    return () => {
      isCancelled = true;
      clearInterval(typeInterval);
    };
  }, [isInView]);

  const handleAutomateCta = () => {
    Analytics.ctaClick("demo", "AUTOMATE MY BUSINESS →", "system_builder");
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("21tg:apply-preset", {
        detail: { presetKey: "Clinic / Salon" }
      }));
      window.dispatchEvent(new CustomEvent("21tg:open-lead-form", {
        detail: {
          intent: "build_my_system",
          modules: ["crm", "whatsapp", "ai_bot", "automation"]
        }
      }));
    }
  };

  return (
    <section ref={containerRef} className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-cyan-950/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-4">
            Live System Demonstration
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            WATCH THE ACQUISITION ENGINE IN ACTION
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            See how a raw inquiry transforms into a qualified, tracked CRM opportunity in under 60 seconds.
          </p>
        </div>

        {/* Live Simulator Window */}
        <div className="rounded-3xl bg-neutral-950 border border-white/10 p-6 md:p-10 shadow-2xl space-y-8">
          
          {/* Simulated Chat Bubble */}
          <div className="max-w-xl mx-auto p-4 md:p-6 rounded-2xl bg-neutral-900 border border-white/10 flex items-start gap-3 shadow-lg">
            <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 font-bold text-xs">
              USER
            </div>
            <div className="flex-1">
              <div className="text-[11px] font-mono text-gray-500 uppercase mb-1">
                Inbound Visitor Message:
              </div>
              <div className="text-sm md:text-base text-white font-medium min-h-[28px]">
                "{typingText}"
                <span className="inline-block w-1.5 h-4 bg-cyan-400 ml-1 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Staged 5-Node Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {PIPELINE_STEPS.map((item) => {
              const isActivated = activeStep >= item.step;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.step}
                  animate={isActivated ? { opacity: 1, scale: 1 } : { opacity: 0.35, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isActivated 
                      ? "bg-white/[0.04] border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]" 
                      : "bg-white/[0.01] border-white/5"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${item.color} text-white`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isActivated ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" : "bg-white/5 text-gray-600"
                      }`}>
                        {item.badge}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-white mb-1.5">
                      {item.title}
                    </div>
                    <p className="text-[11px] text-gray-400 leading-snug">
                      {item.detail}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono">
                    {isActivated ? (
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCheck className="w-3.5 h-3.5" /> COMPLETED
                      </span>
                    ) : (
                      <span className="text-gray-600">STANDBY...</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Outcome Copy & CTA */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Automated Outcome:
              </div>
              <p className="text-sm md:text-base font-semibold text-white">
                That message became a tracked lead with an automatic reply in under a minute — while the owner was busy with patients.
              </p>
            </div>

            <button
              onClick={handleAutomateCta}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              AUTOMATE MY BUSINESS <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
