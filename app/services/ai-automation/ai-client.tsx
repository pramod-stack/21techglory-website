"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Bot, 
  MessageSquare, 
  Cpu, 
  Layers, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Zap, 
  GitBranch, 
  Clock, 
  Sparkles 
} from 'lucide-react';

export default function AiClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const servicesList = [
    {
      icon: MessageSquare,
      title: "AI Customer Support Agents",
      description: "Answer support questions, qualify incoming traffic, and resolve common customer service tickets 24/7. We build custom-trained AI chatbots that match your brand tone, integrate directly with your product documentation, and handle thousands of conversations simultaneously."
    },
    {
      icon: Bot,
      title: "Lead Qualification & Booking Flows",
      description: "Convert traffic even while your team sleeps. We construct conversational AI pathways that capture user requirements, score lead value, and book appointments directly into your sales calendars (Google Calendar, Calendly) without human intervention."
    },
    {
      icon: Cpu,
      title: "WhatsApp & SMS Automation Channels",
      description: "Reach your clients on the platforms they use most. We connect OpenAI/Gemini models directly to your official WhatsApp Business APIs to send instant booking confirmations, answer pricing queries, and run automated follow-up sequences that boast a 98% open rate."
    },
    {
      icon: GitBranch,
      title: "CRM & Workflow Integrations",
      description: "Automate repetitive data transfer. We build API bridges connecting your forms and chatbots to CRM platforms (HubSpot, Zoho, Salesforce) and internal productivity systems (Slack, Google Sheets, email), ensuring no prospect is forgotten."
    },
    {
      icon: Clock,
      title: "Instant Response Speed Systems",
      description: "Increase conversion rates by replying in seconds instead of hours. Our automation layers detect form fills or direct messages immediately, running lead routing, initial qualification scripts, and sending customized responses instantly."
    },
    {
      icon: Sparkles,
      title: "Bespoke Automation Strategy",
      description: "Every business has unique operational bottlenecks. We analyze your workflows, find manual data entry tasks, and construct tailored AI integrations that save your operations team hours of repetitive work every single week."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Workflow Mapping & Bottleneck Audit",
      description: "We analyze your customer intake paths, common support questions, and manual administrative tasks to map out high-value automation opportunities."
    },
    {
      step: "02",
      title: "AI Agent Training & Knowledge Base Setup",
      description: "We ingest your company documentation, FAQ guidelines, and tone rules to train customized LLM models that represent your brand accurately."
    },
    {
      step: "03",
      title: "Integration & Flow Architecture",
      description: "We configure the backend triggers, connecting chat channels (WhatsApp, Webchat) to your database, scheduling links, and sales CRM pipelines."
    },
    {
      step: "04",
      title: "System Testing & Security Scans",
      description: "We perform heavy prompt-injection and QA testing to make sure the AI answers correctly, respects data guidelines, and falls back to humans when needed."
    },
    {
      step: "05",
      title: "Deployment & Conversational Tuning",
      description: "We launch the bots, set up tracking dashboards, and review conversation logs weekly to optimize answers and increase conversion rates."
    }
  ];

  const faqs = [
    {
      q: "What is AI Automation and how does it help my business?",
      a: "AI Automation involves using artificial intelligence models (like GPT-4 or Gemini) and webhook triggers to handle repetitive customer interactions, qualifying leads, and transferring data between systems. It saves hours of manual work and ensures clients get replies within seconds."
    },
    {
      q: "Can the AI handle bookings and appointments directly?",
      a: "Yes. We can integrate AI agents directly with calendar APIs like Google Calendar or Calendly. The agent chats with the customer, identifies open slots matching their preferences, and books the appointment directly in your system."
    },
    {
      q: "What happens if the AI agent cannot answer a question?",
      a: "We design every AI system with a built-in safety net. If a query is too complex, requires human decision-making, or indicates frustration, the AI marks the conversation and instantly forwards the details to your support team via email or Slack."
    },
    {
      q: "Is it secure? How do you protect customer data?",
      a: "Security is built into our core designs. We use official API channels, encrypt data during transfers, and ensure that customer transcripts are not stored or used to train public LLM models, complying with local data privacy guidelines."
    },
    {
      q: "How long does it take to deploy a custom AI automation?",
      a: "A basic lead capture or support agent takes about 3 to 4 weeks. Complex enterprise integrations (custom databases, multi-step agent actions) typically take 6 to 8 weeks depending on system requirements."
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
            <Bot className="w-4 h-4" /> Operations Automation
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            AI Automation Services for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Faster Operations & Conversions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Save 20+ hours a week. We build AI voice agents, WhatsApp automations, and intelligent workflows that qualify leads and answer support questions instantly.
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
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">20+ Hrs</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Saved Per Week / Business</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">&lt; 10 Sec</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Average Lead Response Time</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">+35%</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Appointment Booking Increase</p>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Where AI Automation Creates Immediate Business Value</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              If your team spends time copying-and-pasting data, answering the same support questions, or manually following up on leads, you are losing money. AI handles these tasks flawlessly in milliseconds, allowing your team to focus on closing sales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Manual Operations Problems</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  Prospects bounce if you take more than 5 minutes to follow up on a web form fill.
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  Support teams burn hours resolving simple FAQs, causing ticket backlogs.
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  Data silos emerge when leads are not instantly pushed into sales CRMs.
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Automated Growth Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  AI replies immediately, qualifying and booking meetings while lead intent is hot.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  Conversational agents resolve 80% of support queries, reducing support cost by 60%.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  Data synchronizes across platforms automatically via API triggers.
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Automations We Build</h2>
            <p className="text-lg text-gray-400">
              We configure intelligent workflows that tie lead capture, customer support, and system database updates together.
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

      {/* WhatsApp & CRM Integrations */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">WhatsApp, CRM, and AI Workflow Integrations</h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                An AI bot on a website is fine. But true power comes from full integration. By connecting your AI agents to WhatsApp Business, your internal systems, and sales databases, we create complete end-to-end automated pipelines.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">WhatsApp Business API Setup</h4>
                    <p className="text-sm text-gray-400">Official template approval, secure numbers, and interactive chatbot flows for customer communication.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">CRM Lead Capture Bridges</h4>
                    <p className="text-sm text-gray-400">Automatic syncing of chat details, lead qualifications, and scheduled calls to your sales pipelines.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Team Alert Pipelines</h4>
                    <p className="text-sm text-gray-400">Slack, Microsoft Teams, or SMS notifications sent to sales reps immediately when high-value leads are identified.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-950/20 via-black to-purple-950/20 border border-white/10 overflow-hidden">
              <div className="absolute top-[-10%] right-[-10%] w-60 h-60 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[-10%] w-60 h-60 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">System Interoperability</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Automations only succeed when integrated with solid database platforms. We link our AI layers cleanly across related systems:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Connect with our <Link href="/services/crm" className="text-cyan-400 underline hover:text-cyan-300">CRM Setup Offerings</Link> to design clean lead pipelines.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Deploy bots on our <Link href="/services/web-development" className="text-cyan-400 underline hover:text-cyan-300">Custom Codebase Websites</Link> for optimal load speeds.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Ready to optimize? Visit our <Link href="/contact" className="text-cyan-400 underline hover:text-cyan-300">Contact & Intake</Link> page to book an audit.
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-gray-500">
                🤖 Optimization Tip: Setting up webhooks instead of email triggers reduces data latency to under 300ms, improving real-time response capability.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 px-6 relative bg-white/[0.01] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Automation Process</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              How we map, configure, test, and deploy intelligent agents inside your business operations.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs About AI Automation</h2>
            <p className="text-gray-400">Answers to the most common questions about building and hosting artificial intelligence bots.</p>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Automate Your Business Operations?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Let's build a customized workflow audit mapping your manual tasks and proving exactly how much time AI automation can save your business.
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
