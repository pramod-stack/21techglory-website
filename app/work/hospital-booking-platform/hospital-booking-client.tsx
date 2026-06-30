"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  TrendingUp, 
  MapPin, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  Quote,
  Activity
} from 'lucide-react';

export default function HospitalBookingClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Back Button & Intro Header */}
      <section className="pt-32 pb-12 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Case Studies
          </Link>

          <div className="space-y-4">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
              Custom Software & CRM Automation
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Multi-Specialty Hospital Booking Platform
            </h1>
            <p className="text-lg text-gray-400">
              Developing secure custom scheduling portals, integrating automated CRM pipelines, and eliminating booking abandonment.
            </p>
          </div>
        </div>
      </section>

      {/* Case Details Block */}
      <section className="pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl bg-white/[0.01] border border-white/10">
          <div className="space-y-1">
            <h4 className="text-xs text-gray-500 uppercase font-semibold">Location</h4>
            <div className="flex items-center gap-1.5 text-sm text-white">
              <MapPin className="w-4 h-4 text-purple-400" /> Bangalore, India
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs text-gray-500 uppercase font-semibold">Duration</h4>
            <div className="flex items-center gap-1.5 text-sm text-white">
              <Calendar className="w-4 h-4 text-purple-400" /> {"{{TODO: hospital_duration}}"}
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs text-gray-500 uppercase font-semibold">Stack Used</h4>
            <div className="flex items-center gap-1.5 text-sm text-white">
              <Layers className="w-4 h-4 text-purple-400" /> {"{{TODO: hospital_stack}}"}
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs text-gray-500 uppercase font-semibold">Industry</h4>
            <p className="text-sm text-white font-medium">Healthcare / Medical</p>
          </div>
        </div>
      </section>

      {/* Challenge vs Results Grid */}
      <section className="pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenge Card */}
          <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/15 space-y-4">
            <h3 className="text-xl font-bold text-white">The Starting Situation</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              The hospital group suffered from a highly fragmented booking system with high patient dropout rates:
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">&bull;</span> Booking dropouts: Up to {"{{TODO: hospital_initial_dropout}}"}% of users abandoned the slow multi-step web form.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">&bull;</span> Manual routing: Administrative staff manually copied patient entries from email list boxes to CRMs.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">&bull;</span> Lead loss: {"{{TODO: hospital_lead_loss_number}}"}% of form submissions were lost due to database sync failures.
              </li>
            </ul>
          </div>

          {/* Result Card */}
          <div className="p-8 rounded-3xl bg-purple-950/20 border border-purple-500/30 space-y-4">
            <h3 className="text-xl font-bold text-purple-400 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" /> Operational Achievements
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              By deploying a responsive scheduling portal and direct CRM automation paths, we achieved:
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                Lead conversion rate increased by {"{{TODO: hospital_lead_conversion}}"}.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                0% form data loss achieved with offline-sync database design.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                Intake processing time reduced from hours to immediate CRM synchronization.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Screenshot Placeholder Grid */}
      <section className="pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-white px-2">Portal Interface Screenshot</h3>
          <div className="w-full aspect-video rounded-3xl bg-neutral-900 border border-white/10 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#c084fc10,transparent)] pointer-events-none" />
            <Activity className="w-12 h-12 text-purple-500/40 mb-4" />
            <p className="text-sm text-gray-400">
              [Screenshot Placeholder: /case-studies/hospital-booking-platform.png]
            </p>
            <p className="text-xs text-gray-600 mt-2 max-w-sm">
              Displays the Next.js scheduling dashboard, showing interactive department selection and time slots.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions / What We Built */}
      <section className="pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="border-l-4 border-purple-500 pl-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">What We Built & Implemented</h2>
            <p className="text-gray-400 text-sm mt-1">Our technical solution architecture for medical scheduling.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">1. Custom Patient Intake Interface</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                We designed a clean, mobile-first booking interface. Using React state optimization, we reduced inputs to the bare minimum fields, allowing patients to schedule consultations in under 3 clicks while preserving privacy controls.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">2. Direct HubSpot CRM Integration</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                We built a serverless API routing system that transmits booking entries directly to HubSpot. The moment a patient submits the form, a structured deal card is created with metadata outlining their desired medical department.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">3. Auto-Alert Alerting & Sync System</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                We integrated real-time webhook endpoints. Immediate notifications are pushed to clinic desk coordinators via WhatsApp/SMS integration, prompting rapid human response times.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">4. Secure Database Buffering</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                To guarantee zero form loss, we implemented a queue-based database buffer. If the CRM API encounters rate-limits or outages, patient payloads are safely held in local data storage and automatically re-transmitted upon recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Quote Section */}
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-neutral-900/30 border border-white/10 relative">
          <Quote className="w-12 h-12 text-purple-500/10 absolute top-6 left-6" />
          <div className="relative space-y-6 text-center">
            <p className="text-lg md:text-xl text-gray-300 italic max-w-2xl mx-auto leading-relaxed">
              "{`{{TODO: client_quote}}`}"
            </p>
            <div>
              <h4 className="font-bold text-white text-base">{`{{TODO: client_quote_author}}`}</h4>
              <p className="text-xs text-gray-500">{`{{TODO: client_quote_role}}`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Related Services</h3>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/services/web-development" 
              className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 text-sm font-medium transition-colors"
            >
              Web Development
            </Link>
            <Link 
              href="/services/crm" 
              className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 text-sm font-medium transition-colors"
            >
              CRM Systems
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="pb-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#c084fc10,transparent)] pointer-events-none" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Custom Medical Integrations?
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Let's design and scale secure React portals, build patient intake pipelines, and link your backend databases directly to CRM platforms.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold transition-all shadow-lg shadow-cyan-500/20"
            >
              Consult an Integration Engineer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
