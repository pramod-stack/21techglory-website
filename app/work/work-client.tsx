"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  TrendingUp, 
  Bot, 
  Code2, 
  Search,
  CheckCircle2
} from 'lucide-react';

export default function WorkClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cases = [
    {
      title: "Premium Skincare & Dermatology Clinic Integration",
      category: "Conversion Design & Web Development",
      description: "Implemented a fully custom, high-speed landing page integration mapping legacy HTML structures to React, resolving client console errors, and replacing chat bottlenecks with standardized chatbot modal components.",
      metrics: "2.8x Bookings Increase | 1.1s Load Time",
      link: "/skincare",
      isInternal: true,
      icon: Code2
    },
    {
      title: "Multi-Specialty Hospital Booking Platform",
      category: "Custom Software & CRM Automation",
      description: "Designed a bespoke healthcare scheduling system linking clinical intake forms directly to automated HubSpot CRM deal cards, instantly alerting desk coordinators on lead updates.",
      metrics: "+34% Lead Conversion | 0% Form Loss",
      link: "/hospitals",
      isInternal: true,
      icon: Bot
    },
    {
      title: "Local B2B Service Provider Local SEO Campaign",
      category: "Search Engine Optimization & GMB",
      description: "Optimized city-specific service pages, cleaned business citations, and built a Google Business Profile review automation flow to capture regional intent terms.",
      metrics: "Top 3 Local Maps Rankings | +120% Inbound Calls",
      link: "/services/seo",
      isInternal: false,
      icon: Search
    },
    {
      title: "E-Commerce Fashion Brand Paid PPC Acquisition",
      category: "Paid Facebook & Google Ads Campaigns",
      description: "Restructured broad Google search keywords to exact intent queries, set up pixel attribution, and deployed optimized landing pages to capture social media buyers.",
      metrics: "3.6x ROI Multiplier | -30% Lead Cost",
      link: "/services/paid-ads",
      isInternal: false,
      icon: TrendingUp
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
            <Sparkles className="w-4 h-4" /> Client Case Studies
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            Case Studies: Web, SEO, and <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Automation Achievements</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Explore how we help B2B brands and local healthcare clinics dominate their digital spaces with high-performance codebases, top rankings, and CRM pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Partner With Us <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 pb-24 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((item, idx) => (
              <div 
                key={idx}
                className="group p-8 md:p-10 rounded-3xl bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      {item.category}
                    </span>
                    <item.icon className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">{item.description}</p>
                </div>

                <div>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-sm font-semibold text-cyan-300 mb-6 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" /> {item.metrics}
                  </div>

                  <Link 
                    href={item.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                  >
                    {item.isInternal ? "View Case Study" : "View Offering Details"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Metrics */}
      <section className="py-24 px-6 relative bg-white/[0.01] border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Engineering Results</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            We hold our work to strict mathematical verification benchmarks:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-black border border-white/10">
              <CheckCircle2 className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">99.9% Uptime</h4>
              <p className="text-xs text-gray-400">CDNs ensure pages load securely across global routes.</p>
            </div>
            <div className="p-6 rounded-2xl bg-black border border-white/10">
              <CheckCircle2 className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">&lt; 1.5s Load Speed</h4>
              <p className="text-xs text-gray-400">Optimized asset pipeline for high conversion rates.</p>
            </div>
            <div className="p-6 rounded-2xl bg-black border border-white/10">
              <CheckCircle2 className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">100% Mobile Optimized</h4>
              <p className="text-xs text-gray-400">Ensuring fluid paths on smartphones and tablets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Want to Be Our Next Success Story?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Let's build a dedicated web codebase, setup top-ranking SEO campaigns, and configure automation systems that drive growth for your business.
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
