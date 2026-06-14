"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  TrendingUp, 
  Bot, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Layers, 
  Globe 
} from 'lucide-react';

export default function AboutClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pillars = [
    {
      icon: Code2,
      title: "Custom Code Only",
      description: "We refuse to build on slow, bloated, insecure templates like WordPress or Webflow. We develop custom codebases using Next.js and React, giving you sub-second load speeds and complete security."
    },
    {
      icon: TrendingUp,
      title: "Intent-First Acquisition",
      description: "We don't focus on vanity metrics like impressions or clicks. We align your SEO and Paid Ad strategies directly with high-intent search queries to capture customers ready to buy."
    },
    {
      icon: Bot,
      title: "Operational Automation",
      description: "Every website we build is integrated with automation pipelines (CRM, WhatsApp, Slack) so that incoming inquiries are captured, qualified, and routed instantly."
    }
  ];

  const standards = [
    {
      title: "100% Data Ownership",
      description: "Unlike agencies that lock you into proprietary platforms, we build on standard open-source technologies. You own 100% of your code, database, and accounts."
    },
    {
      title: "Direct Specialist Access",
      description: "No junior account managers acting as telephone messengers. You communicate directly with the senior developers, SEO analysts, and automation architects building your systems."
    },
    {
      title: "Transparent, Raw Metrics",
      description: "We don't hide behind complex jargon or vanity reports. You receive simple, monthly dashboards showing actual form leads, calls, and conversion ROI."
    }
  ];

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-20%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <Users className="w-4 h-4" /> B2B Growth Agency
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            B2B Growth Partners Built <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">For High-Converting Websites</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We are engineering growth. 21TechGlory builds fast web codebases, implements data-driven SEO campaigns, and configures AI automation systems to scale operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Partner With Us <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/work"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 hover:border-white/20 transition-all text-center"
            >
              View Our Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="py-24 px-6 relative border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Growth Pillars</h2>
            <p className="text-lg text-gray-400">
              We approach B2B growth as an engineering challenge. Fast software, high-intent traffic, and automated follow-ups are the three pillars of online dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-3xl bg-black border border-white/10 hover:border-cyan-500/20 transition-all"
              >
                <div className="p-3 w-fit rounded-2xl bg-white/5 text-cyan-400 mb-6">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Standards Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Operational Standards</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We set high standards for how digital agencies should perform. Our focus is on delivering transparent value, clean codebases, and direct accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {standards.map((standard, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all"
              >
                <h3 className="text-lg font-bold text-purple-400 mb-3">{standard.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Links and Navigation */}
      <section className="py-24 px-6 relative bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Explore Our Offerings</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            <Link 
              href="/services/web-development" 
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/40 text-sm font-medium transition-all hover:text-cyan-400"
            >
              Web Development
            </Link>
            <Link 
              href="/services/seo" 
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/40 text-sm font-medium transition-all hover:text-cyan-400"
            >
              SEO & GMB
            </Link>
            <Link 
              href="/services/ai-automation" 
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/40 text-sm font-medium transition-all hover:text-cyan-400"
            >
              AI Automation
            </Link>
            <Link 
              href="/services/crm" 
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/40 text-sm font-medium transition-all hover:text-cyan-400"
            >
              CRM Systems
            </Link>
            <Link 
              href="/services/paid-ads" 
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/40 text-sm font-medium transition-all hover:text-cyan-400"
            >
              Paid PPC Ads
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Engineering Your Digital System</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Connect with our technical specialists to perform a full audit of your website speed, organic rankings, and lead management systems.
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all cursor-pointer inline-flex items-center gap-2"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
