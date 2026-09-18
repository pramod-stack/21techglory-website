"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  HelpCircle, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Activity,
  AlertTriangle,
  RotateCcw
} from 'lucide-react';
import { Analytics } from '@/lib/analytics';

interface AuditQuestion {
  id: string;
  dimension: "Visibility" | "Conversion" | "Automation" | "Follow-Up" | "Digital Infrastructure";
  question: string;
  subtext: string;
}

const QUESTIONS: AuditQuestion[] = [
  {
    id: "vis",
    dimension: "Visibility",
    question: "Do nearby customers find your business in Google's top-3 Map Pack when searching your primary service?",
    subtext: "Tests local SEO authority, GBP optimization, and citation rank."
  },
  {
    id: "conv",
    dimension: "Conversion",
    question: "Does your mobile website load in under 2 seconds with a direct 1-click booking / WhatsApp intake?",
    subtext: "Tests frontend speed, mobile responsiveness, and friction-free UI."
  },
  {
    id: "auto",
    dimension: "Automation",
    question: "Do new website or social inquiries receive an automatic, personalized WhatsApp reply within 5 minutes?",
    subtext: "Tests lead response velocity and automated intake pipelines."
  },
  {
    id: "followup",
    dimension: "Follow-Up",
    question: "Does your system automatically follow up with unconfirmed leads and send appointment reminders?",
    subtext: "Tests automated retention sequences and CRM pipeline hygiene."
  },
  {
    id: "infra",
    dimension: "Digital Infrastructure",
    question: "Are all inquiries automatically synchronized into a central CRM without manual spreadsheet copying?",
    subtext: "Tests zero-loss data capture, database buffering, and CRM integrations."
  }
];

const ANALYSIS_STEPS = [
  "CHECKING LOCAL VISIBILITY SIGNALS...",
  "ANALYZING MOBILE CONVERSION FLOW...",
  "FINDING PIPELINE LEAD LEAKS...",
  "CHECKING WHATSAPP AUTOMATION HOOKS...",
  "BUILDING PERSONALIZED GROWTH BLUEPRINT..."
];

export default function GrowthAudit() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisIndex, setAnalysisIndex] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(() => {
        setAnalysisIndex((prev) => {
          if (prev >= ANALYSIS_STEPS.length - 1) {
            clearInterval(interval);
            setIsAnalyzing(false);
            setIsCompleted(true);
            return prev;
          }
          return prev + 1;
        });
      }, 450);
      return () => clearInterval(interval);
    }
  }, [isAnalyzing]);

  const handleAnswer = (val: number) => {
    const q = QUESTIONS[currentStep];
    const newAnswers = { ...answers, [q.id]: val };
    setAnswers(newAnswers);

    if (currentStep === 0) {
      Analytics.auditStart("growth");
    }

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsAnalyzing(true);
    }
  };

  const restartAudit = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsAnalyzing(false);
    setAnalysisIndex(0);
    setIsCompleted(false);
  };

  // Compute Scores
  const calculateScores = () => {
    const scores: Record<string, number> = {
      Visibility: (answers["vis"] ?? 1) * 33.33,
      Conversion: (answers["conv"] ?? 1) * 33.33,
      Automation: (answers["auto"] ?? 1) * 33.33,
      "Follow-Up": (answers["followup"] ?? 1) * 33.33,
      "Digital Infrastructure": (answers["infra"] ?? 1) * 33.33,
    };

    const overall = Math.round(
      Object.values(scores).reduce((a, b) => a + b, 0) / 5
    );

    return { scores, overall };
  };

  const { scores, overall } = calculateScores();

  const handleGetBlueprint = () => {
    Analytics.auditComplete("growth", overall, { answers, scores });
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("21tg:open-lead-form", {
        detail: {
          intent: "growth_blueprint",
          auditScore: overall,
          auditDetails: answers
        }
      }));
    }
  };

  return (
    <section id="growth-audit" className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-950/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4">
            Interactive Health Check
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            HOW STRONG IS YOUR DIGITAL GROWTH SYSTEM?
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Take this 60-second diagnostic to identify lead leaks, missing automations, and conversion bottlenecks across your business.
          </p>
        </div>

        {/* Audit Container */}
        <div className="rounded-3xl bg-neutral-950 border border-white/10 p-6 md:p-10 shadow-2xl relative">
          
          {/* State 1: Active Questions */}
          {!isAnalyzing && !isCompleted && (
            <div>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-2">
                  <span>Dimension {currentStep + 1} of {QUESTIONS.length}: {QUESTIONS[currentStep].dimension}</span>
                  <span className="text-cyan-400">{Math.round(((currentStep) / QUESTIONS.length) * 100)}% Complete</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      {QUESTIONS[currentStep].dimension} Diagnostic
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                      {QUESTIONS[currentStep].question}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {QUESTIONS[currentStep].subtext}
                    </p>
                  </div>

                  {/* 3 Answer Choices */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                    <button
                      onClick={() => handleAnswer(3)}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-950/20 text-left transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-2 font-bold text-emerald-400 text-sm mb-1">
                        <CheckCircle2 className="w-4 h-4" /> Yes, Fully
                      </div>
                      <div className="text-xs text-gray-400">
                        System is automated and active
                      </div>
                    </button>

                    <button
                      onClick={() => handleAnswer(2)}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-amber-500/50 hover:bg-amber-950/20 text-left transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-2 font-bold text-amber-400 text-sm mb-1">
                        <HelpCircle className="w-4 h-4" /> Partially / Inconsistent
                      </div>
                      <div className="text-xs text-gray-400">
                        Done manually or occasionally
                      </div>
                    </button>

                    <button
                      onClick={() => handleAnswer(1)}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/50 hover:bg-red-950/20 text-left transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-2 font-bold text-red-400 text-sm mb-1">
                        <XCircle className="w-4 h-4" /> No / Not Sure
                      </div>
                      <div className="text-xs text-gray-400">
                        Missing or broken flow
                      </div>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* State 2: Fast Staged Analyzing Sequence */}
          {isAnalyzing && (
            <div className="py-12 text-center space-y-6">
              <div className="w-12 h-12 rounded-full border-2 border-cyan-500 border-t-transparent animate-spin mx-auto" />
              <div className="space-y-2">
                <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                  CALCULATING BENCHMARKS
                </div>
                <div className="text-lg font-bold text-white">
                  {ANALYSIS_STEPS[analysisIndex]}
                </div>
              </div>
            </div>
          )}

          {/* State 3: Results & Gauges */}
          {isCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Overall Score Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white/[0.02] border border-cyan-500/30">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
                    System Health Assessment
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Your Business Growth Score
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Deterministic score derived directly from your 5 operational answers.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono">
                    {overall}/100
                  </div>
                  <div className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    {overall >= 75 ? "Strong System" : overall >= 50 ? "Leaking Leads" : "Critical Leaks"}
                  </div>
                </div>
              </div>

              {/* 5 Dimension Gauges */}
              <div className="space-y-3">
                {Object.entries(scores).map(([dim, score]) => (
                  <div key={dim} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-300">{dim}</span>
                      <span className="font-mono text-cyan-400">{Math.round(score)}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-700"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Personalized Action Teaser */}
              <div className="p-5 rounded-2xl bg-neutral-900 border border-white/10 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" /> High-Impact Opportunities Identified:
                </h4>
                <ul className="text-xs text-gray-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    {scores.Automation < 70 
                      ? "Deploy automated WhatsApp auto-responders to capture after-hours inquiries before they go cold."
                      : "Refine multi-channel CRM routing to attribute revenue directly to Google Search clicks."}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">•</span>
                    {scores.Conversion < 70
                      ? "Rebuild mobile landing pages with sub-second Next.js architecture to reduce high-friction bounce."
                      : "Automate post-visit review generation to maintain #1 local Google Map Pack dominance."}
                  </li>
                </ul>
              </div>

              {/* Gate CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
                <button
                  onClick={restartAudit}
                  className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Retake Diagnostic
                </button>

                <button
                  onClick={handleGetBlueprint}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-black font-extrabold text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  GET MY COMPLETE BLUEPRINT <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
