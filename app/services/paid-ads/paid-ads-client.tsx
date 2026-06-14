"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Megaphone, 
  Target, 
  Search, 
  Image, 
  LineChart, 
  Percent, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Zap, 
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

export default function PaidAdsClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const servicesList = [
    {
      icon: Search,
      title: "Google Search Campaigns",
      description: "Target searchers at the exact moment they look for your service. We build high-intent keyword strategies, write compelling ad copy, utilize ad assets (sitelinks, callouts), and manage daily bids to win placement for terms like 'dental clinic near me'."
    },
    {
      icon: Image,
      title: "Meta (Facebook & Instagram) Ads",
      description: "Build visual demand and generate qualified leads directly inside social feeds. We design high-performance ad creatives (video and image), set up interest and lookalike audience targets, and build native lead-generation forms that convert."
    },
    {
      icon: Target,
      title: "Google Local Services Ads (LSA)",
      description: "Position your business at the very top of Google Search, above standard Google Ads. Pay only for actual leads (phone calls or messages) rather than clicks. We manage your verification status, reviews, and budget bidding rules."
    },
    {
      icon: LineChart,
      title: "Multi-Platform Retargeting",
      description: "Over 95% of website visitors bounce without taking action. We deploy pixel tracking to show customized ads to past visitors as they browse other platforms, reminding them of your brand and lowering your client acquisition cost."
    },
    {
      icon: Percent,
      title: "Conversion-Focused Landing Pages",
      description: "An ad is only as good as the page it points to. We design and develop custom, speed-optimized landing pages with zero navigation distraction, clear benefits, and instant contact forms built to convert paid traffic."
    },
    {
      icon: ShieldCheck,
      title: "CPL Optimization & Reporting",
      description: "We focus on cost-per-lead (CPL) and acquisition ROI rather than impressions or click counts. You receive clear reports detailing exactly how much ad spend was used and the count of qualified customers produced."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Ad Spend & Account Audit",
      description: "We review your historical ad campaigns, keyword performance, and tracking settings to find and plug cost leakages."
    },
    {
      step: "02",
      title: "Conversion Tracking Setup",
      description: "We configure Google Tag Manager, Meta Pixels, and API triggers to track phone calls, form completions, and booking actions accurately."
    },
    {
      step: "03",
      title: "Creative & Copywriting Build",
      description: "Our copywriters write high-intent search ads, and our design team builds visual creatives optimized for social feeds."
    },
    {
      step: "04",
      title: "Campaign Launch & Alpha Bidding",
      description: "We deploy the ads with conservative bids, using exact and phrase match types to filter out irrelevant searches."
    },
    {
      step: "05",
      title: "Daily Management & Scaling",
      description: "We review search terms daily to add negative keywords, re-allocate budget to winning creatives, and scale campaign spend based on ROI."
    }
  ];

  const faqs = [
    {
      q: "What ad spend budget do you recommend starting with?",
      a: "For local service providers and clinics, we recommend a starting ad spend of at least $1,000 to $1,500 per month (paid directly to Google/Meta). This budget size allows the ad networks to gather sufficient conversion data to optimize bidding algorithms quickly."
    },
    {
      q: "What is the difference between Google Search Ads and Facebook Ads?",
      a: "Google Search Ads capture searchers with immediate intent (e.g., 'skin specialist near me'). Facebook/Instagram Ads build brand demand by showing visual creatives to users matched by demographics and interests. A combination of both represents the optimal acquisition structure."
    },
    {
      q: "Do you design the landing pages for the ads?",
      a: "Yes. Driving paid traffic to a generic homepage is the fastest way to waste budget. We design custom, high-speed landing pages containing specific offers, trust reviews, and direct forms to maximize lead conversion."
    },
    {
      q: "How do you filter out spam or irrelevant clicks?",
      a: "We actively manage negative keyword lists on Google Search campaigns, disabling placement for terms like 'free', 'jobs', or unrelated cities. On Meta, we restrict audience boundaries and add filters to keep lead quality high."
    },
    {
      q: "How long does it take to see leads from a new ad campaign?",
      a: "Unlike SEO which takes months, paid ad campaigns deliver traffic and leads within 24 to 48 hours of launch. The first 30 days are focused on gathering performance metrics and refining negative keyword lists to maximize ROI."
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
            <Megaphone className="w-4 h-4" /> Paid Acquisition
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            Paid Ads Services That Drive <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Immediate Leads & Campaign ROI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Stop wasting budget on empty clicks. We configure search and social campaigns that target buyers with transactional intent, driving immediate phone calls and bookings.
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
              Start Your Campaign <ArrowRight className="w-5 h-5" />
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
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">250%+</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Average ROI Growth</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">-30%</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Average Cost-Per-Lead reduction</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">24-48h</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Time To First Lead Generation</p>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Paid Traffic Delivers Instant Business Impact</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              SEO is vital for long-term equity, but Paid Ads deliver leads immediately. If you need new customers, clinical appointments, or lead inquiries this week, paid search and social campaigns represent the most direct growth dial you can turn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Poor Campaign Execution</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  Broad-match keywords waste thousands of dollars on irrelevant searches.
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  Ad traffic bounces because landing pages are slow and confusing.
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  No retargeting setup leaves 95%+ of traffic completely forgotten.
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Our Campaign Execution</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  Exact-match and structured keywords align ad spend with buyer intent.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  High-speed custom landing pages ensure maximum click-to-lead conversion.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  Multi-channel retargeting captures unconverted traffic to lower CPL.
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Paid Acquisition Channels We Dominate</h2>
            <p className="text-lg text-gray-400">
              We leverage search intent, maps placement, and visual social ads to construct complete acquisition engines.
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

      {/* Landing Page Conversion */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Landing Page Design & Conversion Loops</h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Ad traffic is expensive. Pointing ads to a generic website homepage wastes budget because homepages present too many options. We build dedicated, single-focus landing pages containing clear offers, reviews, and easy contact forms.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Single Call-to-Action Focus</h4>
                    <p className="text-sm text-gray-400">Remove main menu bars and external links, funneling 100% of user focus onto submitting the contact form.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Mobile Loading Optimization</h4>
                    <p className="text-sm text-gray-400">Over 85% of social ad traffic is mobile. We compile page assets to load in under 1.2 seconds on mobile connections.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Pixel Tracking Configuration</h4>
                    <p className="text-sm text-gray-400">We configure tracking events to record form completions and phone clicks to feed optimization metrics to ad networks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-950/20 via-black to-purple-950/20 border border-white/10 overflow-hidden">
              <div className="absolute top-[-10%] right-[-10%] w-60 h-60 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[-10%] w-60 h-60 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Connecting Campaigns</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Paid traffic converts best when paired with fast codebases and strong database routing. Check out our related services:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  See our <Link href="/services/web-development" className="text-cyan-400 underline hover:text-cyan-300">Web Development Services</Link> for custom landing pages.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Deploy <Link href="/services/crm" className="text-cyan-400 underline hover:text-cyan-300">CRM Sales Pipelines</Link> to route incoming leads instantly.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Review our past campaign achievements on the <Link href="/work" className="text-cyan-400 underline hover:text-cyan-300">Case Studies & Work</Link> page.
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-gray-500">
                🎯 Ad Campaign Tip: Aligning ad copy headings exactly with the target landing page header text increases Google Quality Scores, reducing bid costs by 15-20%.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ads Process Section */}
      <section className="py-24 px-6 relative bg-white/[0.01] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Paid Ads Campaign Process</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              How we build, deploy, test, and optimize high-converting search and social ad systems.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs About Paid Ads Services</h2>
            <p className="text-gray-400">Answers to the most common questions about PPC, Meta Ads, and LSAs.</p>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Drive Immediate Leads?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Let's structure a customized paid ads blueprint outlining campaign structure, budget recommendations, and projected cost-per-lead for your industry.
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all cursor-pointer inline-flex items-center gap-2"
          >
            Start Your Campaign <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
