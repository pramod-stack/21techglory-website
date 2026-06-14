"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Users, 
  Settings, 
  GitMerge, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Zap, 
  ShieldAlert, 
  CheckSquare, 
  Eye 
} from 'lucide-react';

export default function CrmClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const servicesList = [
    {
      icon: Users,
      title: "CRM Selection & Platform Consulting",
      description: "We help you select and configure the correct Customer Relationship Management (CRM) platform (like HubSpot, Zoho, Salesforce, or Pipedrive) that fits your budget, team layout, and business growth objectives, avoiding expensive software overkill."
    },
    {
      icon: Settings,
      title: "Custom Pipeline & Stage Configuration",
      description: "No two sales cycles are identical. We design custom pipelines with clearly defined deal stages, qualification checklists, and custom contact properties, ensuring your sales reps always know exactly what action to take next."
    },
    {
      icon: GitMerge,
      title: "Lead Capture & API Integrations",
      description: "Connect your website directly to your sales pipeline. We build secure API hooks to automatically transfer web form entries, chatbot conversations, paid Facebook/Google lead ads, and inbound phone records directly into your CRM database."
    },
    {
      icon: Zap,
      title: "Lead Routing & Follow-Up Automation",
      description: "Eliminate manual data assignment. We write custom workflow rules to route incoming leads to the correct sales rep instantly based on territory or department, and initiate automatic client email sequences to keep leads warm."
    },
    {
      icon: CheckSquare,
      title: "Task Management & Sales Reminders",
      description: "Make sure no prospect is forgotten. We configure automated tasks, reminders, and follow-up alerts for your sales team when a lead is stale or needs attention, ensuring clean, disciplined outreach behaviors."
    },
    {
      icon: Eye,
      title: "Sales Dashboards & Performance Tracking",
      description: "Get full visibility over your sales performance. We set up executive reporting dashboards that track conversion rates, pipeline values, sales velocities, and individual rep performance metrics, giving you clear growth intelligence."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Sales Process Audit",
      description: "We review your current customer contact paths, team habits, manual spreadsheets, and software systems to map out your optimized pipeline requirements."
    },
    {
      step: "02",
      title: "CRM Selection & Account Architecture",
      description: "We set up your selected CRM, configure custom properties, build users and roles, and map out your contact database structure."
    },
    {
      step: "03",
      title: "Integrations & Automation Mapping",
      description: "We build direct webhooks connecting your website forms, marketing channels, and email scripts into the CRM platform database."
    },
    {
      step: "04",
      title: "Dashboard & Report Creation",
      description: "We set up your pipeline views, custom list filters, and executive dashboards so you can audit sales velocities and forecasts instantly."
    },
    {
      step: "05",
      title: "Team Onboarding & Campaign Support",
      description: "We deliver custom video training guides and documentation for your sales team, and monitor database health weekly to ensure clean data entry."
    }
  ];

  const faqs = [
    {
      q: "Which CRM platform is best for my business?",
      a: "It depends on your business size, budget, and sales complexity. For local clinics and growing services, HubSpot or Zoho is often ideal because they offer powerful features with reasonable entry pricing. For large enterprises with custom workflows, Salesforce provides maximum scalability. We audit your business and recommend the exact tool you need."
    },
    {
      q: "Can you migrate our old data from spreadsheets?",
      a: "Yes. We clean, format, and map your legacy customer spreadsheets and contact databases, then import them safely into your new CRM system without losing contact notes or history."
    },
    {
      q: "What is sales pipeline automation?",
      a: "It's the process of using rule-based triggers to handle manual database updates. For example, when a lead submits a booking form, the system automatically creates a deal, assigns a rep, schedules a follow-up task, and sends the client a confirmation email, requiring zero manual clicks."
    },
    {
      q: "How does the CRM connect with our marketing campaigns?",
      a: "We set up tracking integrations so that when a lead arrives, the CRM records the source (e.g. Google Ads, SEO keyword, Facebook Campaign), allowing you to see exactly which marketing investments are producing closed revenue."
    },
    {
      q: "Do you train our team on how to use the CRM?",
      a: "Yes. We create customized Loom walkthrough videos and simple cheat sheets tailored to your specific pipeline layouts, ensuring your team has zero learning friction and adopts the system immediately."
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
            <Layers className="w-4 h-4" /> Sales Infrastructure
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            CRM Services That Organize Leads <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">and Improve Follow-Up</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We implement, integrate, and automate CRM platforms to align your marketing leads, track your sales pipelines, and ensure your team closes more deals.
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
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">0%</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Missed Follow-Ups</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">+28%</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Average Sales Velocity Increase</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">100%</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Clean Data Ownership</p>
          </div>
        </div>
      </section>

      {/* Why CRM Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why CRM Matters for Sales Growth</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              If your leads live in spreadsheets or scattered emails, you are losing business. A CRM provides a single, central source of truth, organizing contacts, mapping sales conversations, and automating tedious tasks so your reps can focus entirely on selling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Without a Configured CRM</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  Leads slip through cracks because follow-up tasks are kept in heads.
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  Executives have zero visibility over sales forecasting or rep pipelines.
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  Customer histories are lost when individual sales reps exit the firm.
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all">
              <h3 className="text-xl font-bold text-purple-400 mb-4">With a 21TechGlory Built CRM</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  Automated outreach and pipeline task alerts keep follow-ups consistent.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  Real-time pipelines show deal values, sales velocity, and closed forecasts.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  All communications, notes, and documents are securely saved to the contact record.
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">CRM Setup, Pipeline Design, and Automation</h2>
            <p className="text-lg text-gray-400">
              We design, build, and optimize systems that align lead capture with active sales operations.
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

      {/* CRM Integrations */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">CRM Integrations With Website and Marketing</h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                A CRM only delivers value when connected. We tie your customer database into your marketing channels, ensuring lead attribution is tracked accurately from first ad click to closed deal.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Direct Webform Mapping</h4>
                    <p className="text-sm text-gray-400">Forms map directly to specific CRM contact fields, eliminating manual data entry.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Marketing Attribution Sync</h4>
                    <p className="text-sm text-gray-400">See exactly which Google Ad keyword or SEO search page produced your best clients.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Automated Booking Pipeline</h4>
                    <p className="text-sm text-gray-400">Scheduled calendar calls automatically register as deals in the target pipelines.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-950/20 via-black to-purple-950/20 border border-white/10 overflow-hidden">
              <div className="absolute top-[-10%] right-[-10%] w-60 h-60 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[-10%] w-60 h-60 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Cross-offer Alignment</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Clean customer operations rely on speed. We integrate database setups smoothly with our other services:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Build interfaces via <Link href="/services/web-development" className="text-cyan-400 underline hover:text-cyan-300">Web Development Services</Link> to ensure high conversions.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Connect with our <Link href="/services/ai-automation" className="text-cyan-400 underline hover:text-cyan-300">AI Automation Channels</Link> to process incoming leads.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Ready to deploy? Visit our <Link href="/contact" className="text-cyan-400 underline hover:text-cyan-300">Contact & Intake</Link> page to book an audit.
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-gray-500">
                🚀 CRM Integration Tip: Restricting custom field definitions to necessary items prevents team database fatigue and increases clean data input rate.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-24 px-6 relative bg-white/[0.01] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our CRM Implementation Process</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              How we construct your database, connect automations, and onboard your sales reps.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs About CRM Services</h2>
            <p className="text-gray-400">Answers to the most common questions about setting up and automating customer databases.</p>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Organize Your Sales Pipeline?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Let's structure a custom database that fits your team, captures leads automatically, and tracks your path to target revenue.
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
