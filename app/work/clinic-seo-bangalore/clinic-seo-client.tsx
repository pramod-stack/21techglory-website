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
  Quote
} from 'lucide-react';

export default function ClinicSeoClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Back Button & Intro Header */}
      <section className="pt-32 pb-12 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/work" 
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Case Studies
          </Link>

          <div className="space-y-4">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Search Engine Optimization & GMB
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Bangalore Clinic Local SEO Campaign
            </h1>
            <p className="text-lg text-gray-400">
              Structuring localized patient-acquisition funnels, automating GMB reviews, and dominating geographic search queries.
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
              <MapPin className="w-4 h-4 text-cyan-400" /> Bangalore, India
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs text-gray-500 uppercase font-semibold">Duration</h4>
            <div className="flex items-center gap-1.5 text-sm text-white">
              <Calendar className="w-4 h-4 text-cyan-400" /> {"{{TODO: clinic_seo_duration}}"}
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs text-gray-500 uppercase font-semibold">Stack Used</h4>
            <div className="flex items-center gap-1.5 text-sm text-white">
              <Layers className="w-4 h-4 text-cyan-400" /> {"{{TODO: clinic_seo_stack}}"}
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs text-gray-500 uppercase font-semibold">Industry</h4>
            <p className="text-sm text-white font-medium">Healthcare / Clinic</p>
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
              The clinic faced low patient inquiries through Google Maps and organic searches, despite serving active neighborhoods. They had a weak online presence:
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">&bull;</span> Low local keyword rankings for high-value treatments.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">&bull;</span> Static phone calls: Average of {"{{TODO: clinic_seo_initial_calls}}"} calls per month.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">&bull;</span> Unclaimed citation directories and inconsistent NAP info.
              </li>
            </ul>
          </div>

          {/* Result Card */}
          <div className="p-8 rounded-3xl bg-cyan-950/20 border border-cyan-500/30 space-y-4">
            <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" /> Campaign Achievements
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              After implementing the localized SEO pipeline, the clinic achieved major growth metrics:
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                Ranked in Top 3 local maps for {"{{TODO: clinic_seo_ranking_keywords}}"} key phrases.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                Inbound call volume increased by {"{{TODO: clinic_seo_calls_percentage}}"}.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                Zero citation mismatches detected across local directory systems.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Screenshot Placeholder Grid */}
      <section className="pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-white px-2">Performance Screenshot</h3>
          <div className="w-full aspect-video rounded-3xl bg-neutral-900 border border-white/10 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#06b6d410,transparent)] pointer-events-none" />
            <Layers className="w-12 h-12 text-cyan-500/40 mb-4" />
            <p className="text-sm text-gray-400">
              [Screenshot Placeholder: /case-studies/clinic-seo-bangalore.png]
            </p>
            <p className="text-xs text-gray-600 mt-2 max-w-sm">
              Displays Google Business Profile Performance dashboard showing call growth and keyword impressions.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions / What We Built */}
      <section className="pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="border-l-4 border-cyan-500 pl-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">What We Built & Implemented</h2>
            <p className="text-gray-400 text-sm mt-1">Our technical execution framework for local healthcare SEO.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">1. Hyper-Local Landing Pages</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                We engineered neighborhood-specific service routes targeting sub-regions. Each page features structured medical FAQ sections, custom map embeds, and schema blocks telling Google's crawler exactly which services are offered in each district.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">2. Medical & Service Schema Markup</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                We injected `MedicalBusiness` and `LocalBusiness` JSON-LD schemas directly into the header templates of all relevant pages. This defined standard attributes like coordinates, doctor specializations, business hours, and accepted payment types.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">3. Google Business Profile Optimization</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                We corrected secondary categories, published weekly localized update cards, uploaded geotagged patient environment images, and optimized the product catalog to directly display the primary services.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">4. GMB Review Automation Workflow</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                We designed a QR-code based automation sequence for post-treatment patients, linking them directly to the pre-filled positive review modal on their smartphones, significantly accelerating review counts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Quote Section */}
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-neutral-900/30 border border-white/10 relative">
          <Quote className="w-12 h-12 text-cyan-500/10 absolute top-6 left-6" />
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
              href="/services/local-seo" 
              className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 text-sm font-medium transition-colors"
            >
              Local SEO Services
            </Link>
            <Link 
              href="/services/google-business-profile-optimization" 
              className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 text-sm font-medium transition-colors"
            >
              GMB Optimization
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="pb-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#06b6d410,transparent)] pointer-events-none" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to Replicate This local SEO Growth?
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Let's structure location pages and optimize your Google Business Profiles to attract patients and clients directly to your physical or local business branches.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold transition-all shadow-lg shadow-cyan-500/20"
            >
              Consult an SEO Engineer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
