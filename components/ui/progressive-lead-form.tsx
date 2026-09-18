"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Send, 
  Lock, 
  Clock, 
  Sparkles,
  Shield,
  Layers,
  Check
} from 'lucide-react';
import { SYSTEM_MODULES } from '@/lib/project-registry';
import { Analytics } from '@/lib/analytics';

interface ProgressiveLeadFormProps {
  initialIntent?: string;
  initialModules?: string[];
  initialBusinessType?: string;
  initialWebsite?: string;
  auditScore?: number;
  onSuccess?: () => void;
}

const PROBLEM_OPTIONS = [
  "I Need More Leads & Local Dominance",
  "I Need To Automate Repetitive Follow-Ups",
  "My Website Is Slow & Not Converting",
  "I Need A Complete End-to-End Digital System"
];

const BUSINESS_TYPES = [
  "Clinic / Healthcare Practice",
  "Salon / Spa / Aesthetic Center",
  "Fitness / Gym / Personal Training",
  "Industrial / Manufacturing / B2B",
  "E-commerce / D2C Brand",
  "Restaurant / Hospitality",
  "Professional Services",
  "Other Local Business"
];

export default function ProgressiveLeadForm({
  initialIntent = "build_my_system",
  initialModules = ["website", "crm", "whatsapp", "automation"],
  initialBusinessType = "Clinic / Healthcare Practice",
  initialWebsite = "",
  auditScore,
  onSuccess
}: ProgressiveLeadFormProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Form State
  const [selectedProblem, setSelectedProblem] = useState<string>(PROBLEM_OPTIONS[0]);
  const [selectedModules, setSelectedModules] = useState<string[]>(initialModules);
  const [businessType, setBusinessType] = useState<string>(initialBusinessType);
  const [websiteUrl, setWebsiteUrl] = useState<string>(initialWebsite);
  const [currentSituation, setCurrentSituation] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [visitorPath, setVisitorPath] = useState<string[]>(["landing", "form_step1"]);

  useEffect(() => {
    if (initialModules && initialModules.length > 0) {
      setSelectedModules(initialModules);
    }
  }, [initialModules]);

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      if (selectedModules.length > 1) {
        setSelectedModules(selectedModules.filter(m => m !== id));
      }
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  const handleNextStep = (stepNumber: number) => {
    Analytics.formStep(stepNumber, `step_${stepNumber}`, initialIntent);
    setVisitorPath(prev => [...prev, `form_step${stepNumber}`]);
    setCurrentStep(stepNumber);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);

    const payload = {
      intent: initialIntent,
      problem: selectedProblem,
      modules: selectedModules,
      businessType,
      website: websiteUrl,
      situation: currentSituation,
      name,
      phone,
      email,
      auditScore: auditScore || null,
      source: "progressive_lead_form",
      visitorPath,
      submittedAt: new Date().toISOString()
    };

    // Trigger analytics generate_lead event
    Analytics.formSubmit(payload);

    // Simulated network transmission with fallback (Web3Forms/Webhook compatible)
    try {
      if (process.env.NEXT_PUBLIC_FORM_ENDPOINT) {
        await fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
      } else {
        await new Promise(r => setTimeout(r, 900));
      }
    } catch (err) {
      console.warn("Form submission fallback:", err);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    if (onSuccess) onSuccess();
  };

  return (
    <div className="w-full text-left space-y-6">
      
      {/* Benefit Banner Header */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-purple-950/40 to-black border border-cyan-500/30 text-center">
        <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-bold mb-1">
          Speed & Quality Promise
        </div>
        <p className="text-xs md:text-sm font-semibold text-white">
          TELL US WHAT YOU NEED. WE WILL SHOW YOU THE EXACT SYSTEM WE WOULD BUILD FOR YOUR BUSINESS — FREE, WITHIN 4 BUSINESS HOURS.
        </p>
      </div>

      {/* Progress Indicators */}
      {!isSuccess && (
        <div className="flex items-center justify-between gap-2 px-2">
          {[1, 2, 3].map((step) => {
            const isDone = currentStep > step;
            const isCurrent = currentStep === step;

            return (
              <div key={step} className="flex-1 flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                  isDone 
                    ? "bg-emerald-500 text-black font-bold" 
                    : isCurrent 
                    ? "bg-cyan-500 text-black" 
                    : "bg-white/10 text-gray-400"
                }`}>
                  {isDone ? <Check className="w-4 h-4" /> : step}
                </div>
                <div className={`h-1 flex-1 rounded-full ${
                  isDone ? "bg-emerald-500" : isCurrent ? "bg-cyan-500/40" : "bg-white/10"
                }`} />
              </div>
            );
          })}
        </div>
      )}

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        
        {/* STEP 1: What do you need help with? */}
        {currentStep === 1 && !isSuccess && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Step 1: What are you looking to fix or build?
              </h3>
              <p className="text-xs text-gray-400">
                Choose your primary objective and the modules you want included in your system blueprint.
              </p>
            </div>

            {/* Problem Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Primary Focus Area
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROBLEM_OPTIONS.map((prob, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setSelectedProblem(prob)}
                    className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                      selectedProblem === prob
                        ? "bg-cyan-950/40 border-cyan-500 text-cyan-300 shadow-sm"
                        : "bg-white/[0.02] border-white/10 text-gray-400 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {prob}
                  </button>
                ))}
              </div>
            </div>

            {/* Module Picker */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Selected Modules ({selectedModules.length})
              </label>
              <div className="flex flex-wrap gap-2">
                {SYSTEM_MODULES.map((mod) => {
                  const isChecked = selectedModules.includes(mod.id);
                  return (
                    <button
                      type="button"
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                        isChecked
                          ? "bg-cyan-500 text-black border-cyan-400 font-bold"
                          : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20"
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                      <span>{mod.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleNextStep(2)}
              className="w-full py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm tracking-wide shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Continue to Step 2 <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* STEP 2: Tell us about your business */}
        {currentStep === 2 && !isSuccess && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Step 2: Tell us about your business
              </h3>
              <p className="text-xs text-gray-400">
                Helps our growth engineers tailor the blueprint to your specific industry constraints.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Business Industry / Category
                </label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors [&>option]:bg-neutral-900"
                >
                  {BUSINESS_TYPES.map((b, i) => (
                    <option key={i} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Current Website / Instagram URL (Optional)
                </label>
                <input
                  type="text"
                  placeholder="https://yourbusiness.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Current Situation / Bottleneck (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Getting traffic but visitors bounce, need WhatsApp reminders for appointments..."
                  value={currentSituation}
                  onChange={(e) => setCurrentSituation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="px-5 py-4 rounded-xl border border-white/10 text-gray-400 hover:text-white text-sm font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                type="button"
                onClick={() => handleNextStep(3)}
                className="flex-1 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm tracking-wide shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Continue to Final Step <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: How can we contact you? */}
        {currentStep === 3 && !isSuccess && (
          <motion.form
            key="step3"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Step 3: Where should we send your system blueprint?
              </h3>
              <p className="text-xs text-gray-400">
                Our Senior Specialists reply within 4 business hours with your system architecture.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Pramod Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 99999 99999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="hello@yourbusiness.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* In-Transaction Trust Badge */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-400 space-y-1">
              <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                <Clock className="w-3.5 h-3.5 text-cyan-400" /> Guaranteed 4-Hour Response (Mon–Sat, 9AM–7PM IST)
              </div>
              <p className="text-[11px] text-gray-500">
                Your contact information is strictly confidential. Zero spam, zero high-pressure sales calls.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="px-5 py-4 rounded-xl border border-white/10 text-gray-400 hover:text-white text-sm font-semibold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !name || !phone}
                className="flex-1 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-black font-extrabold text-sm tracking-wide shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                    <span>Transmitting Parameters...</span>
                  </>
                ) : (
                  <>
                    SUBMIT & GET SYSTEM BLUEPRINT <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}

        {/* Success State */}
        {isSuccess && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-3xl bg-cyan-950/20 border border-cyan-500/40 text-center space-y-5"
          >
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                Your System Request is Confirmed
              </h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Our Senior Growth Specialists have received your parameters for <strong>{businessType}</strong>. We will review your bottlenecks and deliver your custom architecture blueprint within <strong>4 business hours</strong> (Mon–Sat, 9AM–7PM IST).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 max-w-md mx-auto text-xs text-cyan-300 font-mono">
              Inquiry ID: 21TG-{Math.floor(100000 + Math.random() * 900000)} · Speed Priority: Active
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
