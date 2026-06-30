"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Search, 
  MapPin, 
  TrendingUp, 
  Bot, 
  Layers, 
  BarChart3, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Zap, 
  ChevronRight,
  ShieldCheck,
  Smartphone
} from 'lucide-react';

export default function ServicesClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      icon: Code2,
      title: "Custom Web Development",
      description: "Custom web development using Next.js and React. No templates. Sub-second load speeds, total design freedom, and clean, rankable codebase structures.",
      href: "/services/web-development",
      accent: "cyan"
    },
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description: "Rank for high-intent queries that drive commercial value. We optimize site headings, content architecture, keyword profiles, and build premium authority.",
      href: "/services/seo",
      accent: "purple"
    },
    {
      icon: MapPin,
      title: "Local SEO Dominance",
      description: "Claim top ranking in local searches. We structure local landing pages, modify geo-targets, and clean up directory citations to dominate city-specific intent.",
      href: "/services/local-seo",
      accent: "cyan"
    },
    {
      icon: TargetIcon,
      title: "Google Business Profile Optimization",
      description: "Appear in Google's Local 3-Pack where 40%+ of local clicks go. We optimize review pipelines, categories, geotagged assets, and listing attributes.",
      href: "/services/google-business-profile-optimization",
      accent: "purple"
    },
    {
      icon: Bot,
      title: "AI Workflows & Automation",
      description: "Qualify leads 24/7. We implement intelligent chat agents, WhatsApp automations, automatic calendar schedulers, and operational webhook loops.",
      href: "/services/ai-automation",
      accent: "cyan"
    },
    {
      icon: Layers,
      title: "CRM Setup & Integrations",
      description: "Stop losing leads in spreadsheets. We configure HubSpot, Zoho, and Salesforce databases, automate status routing, and build sales pipeline dashboards.",
      href: "/services/crm",
      accent: "purple"
    },
    {
      icon: BarChart3,
      title: "Paid Search & Meta PPC Ads",
      description: "Generate immediate conversions. We build conversion-optimized landing pages, manage negative keywords, and target ready-to-buy searchers.",
      href: "/services/paid-ads",
      accent: "cyan"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audit & Growth Strategy",
      description: "We audit your site speed, keyword rankings, local citations, and sales pipelines, and identify immediate opportunities to capture market share."
    },
    {
      step: "02",
      title: "Digital System Architecture",
      description: "We build custom web codebases optimized for speed and indexability, while drafting high-intent keyword maps and copy templates."
    },
    {
      step: "03",
      title: "API & Automation Integration",
      description: "We connect form captures to your CRM, trigger notifications on Slack or WhatsApp, and deploy automatic email marketing and calendar setups."
    },
    {
      step: "04",
      title: "White-Hat Campaign Launch",
      description: "We optimize GMB properties, launch paid Google/Meta search campaigns, publish semantic on-page content, and build relevant high-quality links."
    },
    {
      step: "05",
      title: "Transparent Scaling & ROI",
      description: "We audit analytics monthly, reporting on actual conversions, call metrics, and revenue ROI, adjusting bids and strategies to continuously scale."
    }
  ];

  const faqs = [
    {
      q: "What types of businesses do you work with?",
      a: "We specialize in B2B service companies, local clinics, hospitals, spas, salons, and professional service providers who want to automate lead capture and build custom, high-speed digital systems."
    },
    {
      q: "Do you work with templates like WordPress or custom code?",
      a: "We only build custom codebases using Next.js and React. We do not use WordPress or Webflow. This ensures your site loads in under 1.5 seconds, has zero security vulnerabilities, and gives you total design freedom."
    },
    {
      q: "How does the CRM setup work with our website?",
      a: "We connect your website forms directly to your CRM (HubSpot, Zoho, or Salesforce) via APIs. When a lead is captured, it is instantly routed to your sales team with automated notifications on Slack or WhatsApp."
    },
    {
      q: "What is your process for local SEO and GMB optimization?",
      a: "We optimize your Google Business Profile (GMB) for the Local 3-Pack, build local citations, structure local service pages, and run localized schema markup campaigns to ensure maximum visibility for geo-specific searches."
    },
    {
      q: "Can you automate our customer support and lead follow-ups?",
      a: "Yes, we build custom AI automation agents and workflows that qualify incoming leads, sync appointments with calendars (Google Calendar, Calendly), and trigger immediate follow-up sequences."
    },
    {
      q: "What budget do you recommend for paid search ads?",
      a: "We recommend a minimum monthly ad spend of $1,000 to $1,500 for Google Search or Meta Ads. This budget is paid directly to the ad platforms and allows search algorithms to optimize conversions quickly."
    },
    {
      q: "How do you track and report campaign success?",
      a: "We configure Google Analytics 4 and Google Search Console to track actual business actions (form submissions, calls, bookings). You receive a transparent monthly dashboard report showing exact ROI and metrics."
    },
    {
      q: "How long does a typical web development and setup project take?",
      a: "A standard custom website and integration project takes 4 to 6 weeks. More complex web applications, full CRM migrations, or custom AI agent implementations typically take 6 to 10 weeks."
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
            <Zap className="w-4 h-4" /> Comprehensive Growth Services
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            Growth Services Built For <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Leads, Bookings, and Revenue</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We don&apos;t build static templates or focus on vanity metrics. We construct performance digital infrastructure, execute local maps dominance, and integrate automation systems.
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
              View Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 px-6 relative bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Our Engineering & SEO Offerings</h2>
            <p className="text-lg text-gray-400">
              We align fast codebases with organic rankings and customer databases to build complete acquisition pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const accentColor = service.accent === "cyan" ? "text-cyan-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-300" : "text-purple-400 group-hover:bg-purple-500/10 group-hover:text-purple-300";
              const titleColor = service.accent === "cyan" ? "group-hover:text-cyan-300" : "group-hover:text-purple-300";
              const borderColor = service.accent === "cyan" ? "hover:border-cyan-500/30" : "hover:border-purple-500/30";
              return (
                <div 
                  key={idx} 
                  className={`group p-8 rounded-3xl bg-black border border-white/10 ${borderColor} transition-all flex flex-col justify-between`}
                >
                  <div>
                    <div className={`p-3 w-fit rounded-2xl bg-white/5 ${accentColor} transition-colors mb-6`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className={`text-xl font-bold mb-4 text-white ${titleColor} transition-colors`}>{service.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">{service.description}</p>
                  </div>
                  <Link href={service.href} className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors mt-auto">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Strip Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-cyan-950/20 via-black to-purple-950/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Tailored for High-Growth Industries</h3>
            <p className="text-gray-400 text-sm md:text-base">We customize acquisition funnels and integrations specifically for service-oriented spaces.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link 
              href="/industries/clinics-hospitals"
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/40 text-sm font-semibold transition-all hover:text-purple-300 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-purple-400" /> Clinics & Hospitals
            </Link>
            <Link 
              href="/industries/salons-spas"
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/40 text-sm font-semibold transition-all hover:text-cyan-300 flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-cyan-400" /> Salons & Spas
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Lifecycle Deployment Process</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              How we construct, rank, and automate digital marketing assets to deliver qualified leads.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Everything you need to know about partnering with 21TechGlory.</p>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Accelerate Growth?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Connect with our technical architects to perform speed, local organic ranking, and system integration audits.
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

// Custom icon wrapper for Google Business Profile
function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
