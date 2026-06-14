"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, 
  MapPin, 
  TrendingUp, 
  BarChart3, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Zap, 
  LineChart, 
  ShieldCheck, 
  Globe,
  Smartphone
} from 'lucide-react';

export default function SeoClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const servicesList = [
    {
      icon: MapPin,
      title: "Google Business Profile (GMB) Optimization",
      description: "Rank in Google's Local 3-Pack where over 40% of local searches click. We audit your GMB profile, optimize categories, upload geotagged images, manage business citations, and build review campaigns that drive high-intent local phone calls and direction requests."
    },
    {
      icon: Search,
      title: "Local SEO Dominance",
      description: "We optimize your website to rank for city-specific intent queries (e.g., 'skincare clinic in Bangalore'). We build localized service pages, target local keyword modifiers, and build high-authority local backlinks that search engines trust."
    },
    {
      icon: Globe,
      title: "Technical SEO & Schema Auditing",
      description: "We fix site crawlability, indexation speed, code structures, and Core Web Vitals. We inject structured data (JSON-LD schema for local businesses, FAQs, services, and reviews) so search bots understand exactly what your website offers."
    },
    {
      icon: Zap,
      title: "On-Page SEO & Content Strategy",
      description: "Rank for commercial and transactional intent search queries. We optimize your page headings, copy, internal link profiles, titles, meta tags, and image alt tags, aligning every element with the target search query intent."
    },
    {
      icon: LineChart,
      title: "Conversion Rate Optimization (CRO)",
      description: "Traffic is useless if it doesn't convert. We audit user landing paths, design clear CTA flows, adjust layouts, and build conversion loops that turn organic search visitors into qualified leads."
    },
    {
      icon: BarChart3,
      title: "Transparent Performance Reporting",
      description: "No vanity metrics. We track keyword rankings, organic search traffic, and actual conversions (form submissions, calls, bookings). You receive clear, monthly reporting showing precisely how SEO translates to revenue."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "SEO Audit & Competitor Intelligence",
      description: "We run deep audits on your website speed, rankings, backlinks, and structure, and identify high-value keywords that your competitors are ranking for."
    },
    {
      step: "02",
      title: "Technical & On-Page Implementation",
      description: "We optimize the site's codebase, set up schema markup, rewrite page titles and descriptions, and fix any crawl errors blocking search bots."
    },
    {
      step: "03",
      title: "Local Citation & GMB Setup",
      description: "We claim, clean up, and optimize your local directory listings, citations, and Google Business Profile to align location data sitewide."
    },
    {
      step: "04",
      title: "Commercial Content Expansion",
      description: "We write high-intent service and location pages targeting transactional queries to capture ready-to-buy searchers in your target locations."
    },
    {
      step: "05",
      title: "Monthly Authority & Reporting",
      description: "We build premium, relevant backlinks, track rankings, and compile simple dashboard reports showing organic progress and conversion growth."
    }
  ];

  const faqs = [
    {
      q: "How long does it take to see results from SEO?",
      a: "SEO is a long-term compound growth strategy. While local optimizations and technical fixes can show ranking improvements within 4 to 8 weeks, significant organic traffic growth and consistent lead volume typically take 3 to 6 months of continuous campaign work."
    },
    {
      q: "What is Google Business Profile (GMB) optimization?",
      a: "It's the process of improving your Google Maps listing visibility. Over 50% of mobile searches look for local directions. By optimizing your GMB photos, reviews, business descriptors, categories, and attributes, we help your business rank at the top of local maps searches."
    },
    {
      q: "Do you guarantee #1 rankings on Google?",
      a: "Any agency guaranteeing a #1 search ranking is misleading you. Google's algorithm changes constantly. Instead, we guarantee to follow Google's white-hat guidelines, optimize code for speed, write high-authority content, and focus on delivering qualified leads and positive ROI."
    },
    {
      q: "What is Schema Markup and why does it matter?",
      a: "Schema markup is code that helps search engine crawlers understand context. For example, local business schema highlights your location and phone number, while FAQ schema renders questions and answers directly in search results, increasing organic click-through rates."
    },
    {
      q: "How do you track and report campaign progress?",
      a: "We set up tracking via Google Search Console and Google Analytics. Every month, you receive a dashboard report showing keyword positions, organic impressions, organic traffic clicks, and the exact count of phone calls and lead form submissions."
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
            <TrendingUp className="w-4 h-4" /> Organic Acquisition
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            SEO Services Built for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Rankings, Leads, and Revenue</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We optimize your local listings and build high-authority web presence to capture customers looking for your business. Rank #1 where your buyers are searching.
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
              Start Your Project <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/work"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 hover:border-white/20 transition-all text-center"
            >
              See Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">3.8x</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Average ROI Multiplier</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">+120%</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Organic Call Growth</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">100%</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">White-Hat Strategy</p>
          </div>
        </div>
      </section>

      {/* Why SEO Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why SEO Still Drives the Highest-Intent Traffic</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Unlike paid social media ads where you interrupt users as they browse, search engine optimization captures buyers actively looking for answers. They have intent. They are ready to act. SEO makes sure your brand is the obvious choice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Paid Ads vs SEO</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  Paid ad campaigns stop delivering leads the moment you stop spending budget.
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  Ad fatigue decreases conversions over time, forcing bids higher.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  SEO rankings compound over time, lowering cost-per-lead as domain authority grows.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  Organic search positions command over 70% of total desktop and mobile clicks.
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Local Map SEO Value</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  Maps listings sit above standard organic results, receiving 40%+ of mobile local clicks.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  Direct actions: call clinic, view hospital hours, request driving directions.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  Builds immediate customer trust through public reviews and active owner updates.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown Section */}
      <section className="py-24 px-6 relative bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Our SEO Services Explained</h2>
            <p className="text-lg text-gray-400">
              We cover the entire optimization lifecycle, including technical repairs, local citation structures, and content creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-3xl bg-black border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-2xl bg-white/5 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-colors mb-6">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Improve Rankings */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Improve Rankings and Lead Quality</h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Ranking for 'any' keyword is easy. Ranking for keywords that convert into high-value clients is hard. We align your SEO content strategy with transactional intent queries, ensuring we drive actual buyers, not just curiosity clickers.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Intent Alignment</h4>
                    <p className="text-sm text-gray-400">We prioritize transactional queries (e.g. 'root canal treatment Bangalore') over purely educational topics to capture ready-to-act patients.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Local Landing Pages</h4>
                    <p className="text-sm text-gray-400">We construct location pages with integrated maps, local address configurations, and embedded contact forms to maximize conversion.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">E-E-A-T Signal Reinforcement</h4>
                    <p className="text-sm text-gray-400">We format content with clear author profiles, references, doctor reviews, and licensing details to pass search engine quality checks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-950/20 via-black to-purple-950/20 border border-white/10 overflow-hidden">
              <div className="absolute top-[-10%] right-[-10%] w-60 h-60 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[-10%] w-60 h-60 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Connecting Web Dev & SEO</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                SEO without a fast codebase fails. Search engines penalize slow websites, and users bounce. Our integrated offerings work hand-in-hand:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Explore our <Link href="/services/web-development" className="text-cyan-400 underline hover:text-cyan-300">Web Development Services</Link> to build speed foundations.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Integrate with <Link href="/services/paid-ads" className="text-cyan-400 underline hover:text-cyan-300">Paid Ads Campaigns</Link> to run hybrid search strategies.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  See successful campaigns on our <Link href="/work" className="text-cyan-400 underline hover:text-cyan-300">Work & Case Studies</Link> page.
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-gray-500">
                🚀 SEO Optimization Tip: High-quality internal linking structures pass page rank down to specific high-value service pages, magnifying domain authority.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Process Section */}
      <section className="py-24 px-6 relative bg-white/[0.01] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO Campaign Process</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              How we take your website from unindexed to ranking on page #1 of search results.
            </p>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                <div className="absolute left-[-17px] top-0 w-8 h-8 rounded-full bg-black border border-cyan-400 flex items-center justify-center text-xs font-bold text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                  {idx + 1}
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">Phase {step.step}</span>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 px-6 relative border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs About SEO Services</h2>
            <p className="text-gray-400">Answers to the most common questions about our search engine optimization strategies.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-white/10 bg-black overflow-hidden transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex justify-between items-center text-white hover:text-cyan-400 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-base md:text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>
                
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm md:text-base text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Drive Search Engine Traffic?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Let's build a customized SEO blueprint that places your brand in front of customers search queries. Connect with our optimization specialists today.
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
