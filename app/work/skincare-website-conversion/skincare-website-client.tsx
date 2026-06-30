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
  Layout
} from 'lucide-react';

export default function SkincareWebsiteClientPage() {
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
              Conversion Design & Web Development
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Premium Skincare Clinic Conversion Website
            </h1>
            <p className="text-lg text-gray-400">
              Rebuilding sluggish legacy websites with Next.js, optimizing Core Web Vitals, and maximizing patient consultation bookings.
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
              <Calendar className="w-4 h-4 text-cyan-400" /> {"{{TODO: skincare_duration}}"}
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs text-gray-500 uppercase font-semibold">Stack Used</h4>
            <div className="flex items-center gap-1.5 text-sm text-white">
              <Layers className="w-4 h-4 text-cyan-400" /> {"{{TODO: skincare_stack}}"}
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-xs text-gray-500 uppercase font-semibold">Industry</h4>
            <p className="text-sm text-white font-medium">Beauty / Dermatology</p>
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
              The skincare clinic's legacy WordPress platform was slow and had high bounce rates:
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">&bull;</span> Poor Page Speed: Initial LCP took {"{{TODO: skincare_initial_lcp}}"}s, resulting in mobile booking drops.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">&bull;</span> Console Bugs: Hydration errors and booking script conflicts.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">&bull;</span> Confusing navigation causing patients to abandon their booking.
              </li>
            </ul>
          </div>

          {/* Result Card */}
          <div className="p-8 rounded-3xl bg-cyan-950/20 border border-cyan-500/30 space-y-4">
            <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" /> Conversion Achievements
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Rebuilding the digital setup with Next.js and Tailwind CSS yielded key conversion updates:
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                Bookings increased by {"{{TODO: skincare_bookings_increase}}"}.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                Fully sub-second load times ({"{{TODO: skincare_load_time}}"} LCP).
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                Zero script console warnings or booking blockages.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Screenshot Placeholder Grid */}
      <section className="pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-white px-2">Page Speed & Layout Screenshot</h3>
          <div className="w-full aspect-video rounded-3xl bg-neutral-900 border border-white/10 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#06b6d410,transparent)] pointer-events-none" />
            <Layout className="w-12 h-12 text-cyan-500/40 mb-4" />
            <p className="text-sm text-gray-400">
              [Screenshot Placeholder: /case-studies/skincare-website-conversion.png]
            </p>
            <p className="text-xs text-gray-600 mt-2 max-w-sm">
              Displays Google Lighthouse score showing 99+ ratings across Performance, Accessibility, and SEO categories.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions / What We Built */}
      <section className="pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="border-l-4 border-cyan-500 pl-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">What We Built & Implemented</h2>
            <p className="text-gray-400 text-sm mt-1">Our technical solution roadmap for clinics and beauty services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">1. Custom Next.js Boilerplate Migration</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                We migrated the clinic's content hierarchy to a React framework. By leveraging Next.js App Router and server component architectures, we eliminated slow server queries and client-side load lags.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">2. Sub-Second Speed Optimization</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                We optimized the image assets using Next.js `next/image` components, deferred non-critical script loading, and built localized asset styling. This resulted in an LCP of under {"{{TODO: skincare_load_time}}"}.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">3. Smooth Interactive Micro-Animations</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Using Framer Motion and custom CSS transitions, we developed interactive product cards, smooth treatment descriptions, and animated patient review sliders.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">4. Conversion-Focused Intake Flow</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                We replaced clunky booking widgets with a custom React modal workflow. Patients select their skin treatments, choose doctors, and pick times in a frictionless checkout path.
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
              href="/services/web-development" 
              className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 text-sm font-medium transition-colors"
            >
              Web Development
            </Link>
            <Link 
              href="/services/seo" 
              className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 text-sm font-medium transition-colors"
            >
              SEO Services
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="pb-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#06b6d410,transparent)] pointer-events-none" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Is Your Website Losing Patient Bookings?
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Let's rebuild your patient intake flows using lightweight Next.js architectures, optimize your page speed, and secure booking conversions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold transition-all shadow-lg shadow-cyan-500/20"
            >
              Consult a Conversion Designer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
