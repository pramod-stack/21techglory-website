"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import ServiceHero from '@/components/sections/ServiceHero';
import StatStrip from '@/components/sections/StatStrip';
import ComparisonTable, { ComparisonRow } from '@/components/sections/ComparisonTable';
import ProcessSteps, { ProcessStep } from '@/components/sections/ProcessSteps';
import FaqAccordion, { FaqItem } from '@/components/sections/FaqAccordion';
import CtaBlock from '@/components/sections/CtaBlock';
import Link from 'next/link';
import { Code2, Cpu, Smartphone, ShieldAlert, Award, Star, Activity, MapPin } from 'lucide-react';

export default function BangaloreWebDevClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/services" },
    { name: "Bangalore", href: "/locations/bangalore" },
    { name: "Web Development", href: "/locations/bangalore/website-development-company" },
  ];

  const stats = [
    {
      value: "{{TODO: verify or replace}}",
      label: "Lighthouse Speed Index",
      description: "Average mobile speed performance score achieved on our custom-coded Next.js builds."
    },
    {
      value: "{{TODO: verify or replace}}, e.g. < 1.5s",
      label: "Average Page Load Time",
      description: "Time to interactive measured across regional cellular networks in Bangalore."
    },
    {
      value: "{{TODO: verify or replace}}",
      label: "Inquiry Conversion Increase",
      description: "Average uplift in booking form completions after migrating from legacy templates."
    }
  ];

  const comparisonRows: ComparisonRow[] = [
    {
      feature: "Rendering Framework",
      agency: {
        included: true,
        text: "Custom Next.js & React builds pre-rendered to static HTML on edge servers for sub-second loading."
      },
      competitor: {
        included: false,
        text: "Bloated WordPress or Elementor templates relying on heavy server-side databases."
      }
    },
    {
      feature: "Local SEO Readiness",
      agency: {
        included: true,
        text: "LocalBusiness and FAQ JSON-LD schemas hardcoded directly into Server Components."
      },
      competitor: {
        included: false,
        text: "Generic plugins outputting unvalidated schema code or missing structured details."
      }
    },
    {
      feature: "API Lead Automation",
      agency: {
        included: true,
        text: "Direct integration with CRM systems (Zoho, HubSpot) and real-time WhatsApp confirmations."
      },
      competitor: {
        included: false,
        text: "Basic email forms saving to local databases, leading to high lead response times."
      }
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "UI/UX & Lead Wireframing",
      description: "We map out interactive user pathways tailored to clinic booking or salon scheduling needs in Bangalore."
    },
    {
      number: "02",
      title: "Next.js Web Engineering",
      description: "We code lightweight, responsive components using React, Tailwind, and Framer Motion for premium aesthetics."
    },
    {
      number: "03",
      title: "Local Schema & SEO Sync",
      description: "We inject localized structured schemas, configure header hierarchies, and establish canonical pathways."
    },
    {
      number: "04",
      title: "Integrations & API Hook",
      description: "We connect booking software, set up database pipelines, and link the WhatsApp Business API notifications."
    }
  ];

  const faqs = [
    {
      q: "What makes 21TechGlory a premier website development company in Bangalore?",
      a: "Unlike agencies that build slow WordPress templates, 21TechGlory develops custom Next.js websites that achieve sub-second loading speeds, top security, and flawless technical SEO. We integrate forms directly with CRMs and WhatsApp notifications for instant lead routing."
    },
    {
      q: "How long does it take to develop a custom website for a Bangalore business?",
      a: "A typical custom project takes between 3 to 6 weeks, depending on the complexity of layouts, CRM integrations, and online booking setups. We maintain transparent staging links so you can review development live."
    },
    {
      q: "Will our new custom website be mobile-friendly and optimized for local SEO?",
      a: "Yes. Every website we build features responsive design, lightweight code optimized for mobile processors, and structured schema markup (LocalBusiness, Breadcrumbs, FAQs) embedded directly into the page source."
    },
    {
      q: "Do you integrate online booking calendars for clinics and salons in Bangalore?",
      a: "Yes. We design and integrate custom online booking calendars that sync with your internal scheduler (e.g. Google Calendar, Cliniko, Zenoti) and automate reminders via WhatsApp Business API."
    },
    {
      q: "Can you help migrate our existing WordPress site to a Next.js framework?",
      a: "Yes. We rebuild WordPress sites on Next.js to improve PageSpeed scores, preserve all your existing URL structures, set up permanent redirects (301s) to retain SEO authority, and update the UI design."
    },
    {
      q: "What hosting platforms do you use for Next.js website deployments?",
      a: "We deploy Next.js platforms on Vercel or AWS. This delivers global edge caching, near-instant load times, and near-zero server downtime, which is highly favored by Google's crawl engines."
    },
    {
      q: "Do you write custom copywriting content for our Bangalore website?",
      a: "Yes. We write high-intent, SEO-optimized copy tailored to your local audience. We incorporate high-intent search terms (like 'best clinic in Indiranagar') without keyword stuffing, focusing on user conversion."
    },
    {
      q: "How do we start a website development project with 21TechGlory?",
      a: "Book a discovery call through our website audit form. We will analyze your current site's performance, layout limitations, and lead pipelines, and draft a tailored development roadmap."
    }
  ];

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <ServiceHero
        badge="Performance Development"
        title="Website Development Company in Bangalore"
        description={
          <span>
            We build custom, lightning-fast Next.js and React websites designed to convert visitors into patients and clients. Fully optimized for local SEO and integrated with your booking systems. Based in our <Link href="/locations/bangalore" className="text-cyan-400 hover:underline">Bangalore digital agency</Link> hub.
          </span>
        }
        breadcrumbs={breadcrumbs}
        onCtaClick={() => setIsModalOpen(true)}
      />

      <StatStrip stats={stats} />

      {/* Core Local Service Highlights */}
      <section className="py-24 px-6 relative border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Designed for Local Service Conversions</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our web development process balances beautiful branding with robust conversion architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-cyan-500/35 transition-all">
              <div className="p-3 w-fit rounded-xl bg-cyan-500/10 text-cyan-400 mb-6">
                <Cpu className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom React / Next.js Stack</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                By replacing slow database calls with statically pre-rendered HTML, our websites load within 1.5 seconds. Faster speeds decrease visitor bounce rates and satisfy Google's mobile indexing standards.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-cyan-500/35 transition-all">
              <div className="p-3 w-fit rounded-xl bg-cyan-500/10 text-cyan-400 mb-6">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile-First Touch Layouts</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Most local searches occur on smartphones. We design interactive interfaces with natural thumb targets, swipe-friendly testimonials, and clear call-to-call buttons to drive immediate bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable
        title="Next.js Performance vs. WordPress Templates"
        subtitle="Understand the technical differences that directly affect your local search standings."
        rows={comparisonRows}
      />

      <ProcessSteps
        title="Our Custom Engineering Workflow"
        subtitle="How we design, develop, and launch high-performance websites for Bangalore businesses."
        steps={processSteps}
      />

      <FaqAccordion
        title="Web Development FAQs"
        items={faqs.map(f => ({ question: f.q, answer: f.a }))}
      />

      <CtaBlock
        title="Ready to Rebuild Your Digital Platform?"
        description="Contact our Bangalore engineers to review your website speed, conversion limitations, and booking funnels."
        ctaText="Schedule a Web Architecture Audit"
        onCtaClick={() => setIsModalOpen(true)}
      />

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
