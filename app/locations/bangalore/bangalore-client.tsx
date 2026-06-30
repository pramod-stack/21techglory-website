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
import { Target, Compass, Award, HeartPulse, Sparkles, MapPin, Code, MessageSquare } from 'lucide-react';

export default function BangaloreClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/services" },
    { name: "Bangalore Hub", href: "/locations/bangalore" },
  ];

  const stats = [
    {
      value: "{{TODO: verify or replace}}",
      label: "Map Impression Increase",
      description: "Average visibility growth in Google Maps 3-Pack for local service categories."
    },
    {
      value: "{{TODO: verify or replace}}",
      label: "Booking No-Show Drop",
      description: "Reduction in missed appointments through automated WhatsApp reminders."
    },
    {
      value: "{{TODO: verify or replace}}",
      label: "Lighthouse Speed Score",
      description: "Average core web vitals speed index across our custom coded platforms."
    }
  ];

  const servicesList = [
    {
      icon: Target,
      title: "Bangalore SEO Company",
      description: "Rank at the top of Google Search and Google Maps for high-intent transactional search queries. We manage keywords, clean directory citations, and build local search relevance.",
      href: "/locations/bangalore/seo-company",
      cta: "Explore SEO Solutions"
    },
    {
      icon: Code,
      title: "Website Development in Bangalore",
      description: "Custom React and Next.js website design that loads in under 1.5 seconds. Fully responsive, schema-marked, and connected to your CRM for seamless lead capture.",
      href: "/locations/bangalore/website-development-company",
      cta: "Explore Web Solutions"
    },
    {
      icon: MessageSquare,
      title: "GBP & GMB Optimization",
      description: "Dominate Google Maps Pack. We optimize your Google Business Profile listing, setup local coordinates, publish updates, handle reviews, and automate Q&As.",
      href: "/locations/bangalore/google-business-profile-optimization",
      cta: "Explore Maps Solutions"
    }
  ];

  const comparisonRows: ComparisonRow[] = [
    {
      feature: "Local Search Optimization",
      agency: {
        included: true,
        text: "Surgical local schema injections, geo-targeted page copies, and NAP citation audit across 50+ regional directories."
      },
      competitor: {
        included: false,
        text: "Basic directory listing submissions with inconsistent business names, addresses, or phone details."
      }
    },
    {
      feature: "Coding Standards",
      agency: {
        included: true,
        text: "Custom React/Next.js files compiled to static HTML, achieving 95+ PageSpeed scores on mobile connections."
      },
      competitor: {
        included: false,
        text: "Heavy pre-made templates (WordPress/Elementor) packed with slow styling plug-ins and security flaws."
      }
    },
    {
      feature: "Lead Route Automations",
      agency: {
        included: true,
        text: "Direct API lead pipelines connecting forms to CRMs (HubSpot, Zoho) with automated WhatsApp Business confirmations."
      },
      competitor: {
        included: false,
        text: "Submissions saved in web databases requiring manual download, resulting in hours of delay."
      }
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Digital Footprint Audit",
      description: "We evaluate your website speed, local keyword standings, competitor gaps, and directory alignment in Bangalore."
    },
    {
      number: "02",
      title: "System Architecture",
      description: "We map out wireframes, customized local schemas, keyword matrices, and direct CRM connection logic."
    },
    {
      number: "03",
      title: "Bespoke Development & SEO",
      description: "Our engineers build custom Next.js assets, optimize on-page signals, write copy, and configure local citations."
    },
    {
      number: "04",
      title: "Automations Launch & Optimization",
      description: "We connect booking calendars, launch WhatsApp Business API notifications, and track performance indicators."
    }
  ];

  const faqs = [
    {
      q: "What digital services does 21TechGlory offer in Bangalore?",
      a: "We offer custom website development (React/Next.js), local SEO campaigns, Google Business Profile (GBP) optimization, paid advertising management, CRM configuration (HubSpot, Zoho), and automated WhatsApp messaging systems."
    },
    {
      q: "Which local business niches do you specialize in serving in Bangalore?",
      a: "Our core specializations in the Bangalore market include clinic and hospital growth systems (for doctors, dentists, multi-specialty clinics) and premium salon & spa marketing systems (for luxury hair, wellness, and beauty studios)."
    },
    {
      q: "What areas of Bangalore does your local marketing agency cover?",
      a: "We actively serve businesses across the entire Bangalore region, including major commercial and retail districts such as Whitefield, Indiranagar, Koramangala, HSR Layout, MG Road, and Electronic City."
    },
    {
      q: "How does local SEO help Bangalore clinics and salons get more appointments?",
      a: "Local SEO focuses on ranking your business in the Google Maps 3-Pack and local search. By targeting queries like 'dentist in Koramangala' or 'hair salon in HSR Layout', we connect you directly with customers searching for your services in your immediate neighborhood."
    },
    {
      q: "Why do you develop custom Next.js websites instead of WordPress templates?",
      a: "Custom Next.js websites load under 1.5 seconds, are highly secure, and feature flawless technical SEO architecture. This out-performs slow, bloated WordPress templates, leading to higher search rankings and better visitor-to-lead conversion rates."
    },
    {
      q: "Can you automate our clinic or salon appointment reminders in Bangalore?",
      a: "Yes. We integrate your website booking calendar with WhatsApp Business API. This sends automated confirmations, 24-hour and 2-hour reminders, and review requests directly to clients, reducing no-show rates by up to 68%."
    },
    {
      q: "How does 21TechGlory track the ROI of our local marketing campaigns?",
      a: "We set up tracking parameters on all digital assets. This allows us to track phone calls, map direction requests, website form fills, and online bookings to show you exactly how many leads and sales your campaign generates."
    },
    {
      q: "How can my Bangalore business get started with 21TechGlory?",
      a: "You can book a free local digital audit through our website or contact us directly. Our engineers will evaluate your current website speed, local SEO standings, and CRM setups, and map out a growth blueprint."
    }
  ];

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />
      
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <ServiceHero
        badge="Bangalore Growth Hub"
        title="Digital Marketing Agency in Bangalore for Service Businesses"
        description="We design and build custom websites, execute performance local SEO campaigns, and implement automated customer pipelines for service businesses across Bangalore."
        breadcrumbs={breadcrumbs}
        onCtaClick={() => setIsModalOpen(true)}
      />

      <StatStrip stats={stats} />

      {/* Target Segments / Neighborhoods Section */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Who We Partner With in Bangalore</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We build specialized marketing platforms for regional clinics, salons, and growth-oriented service providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-black border border-white/5 hover:border-purple-500/35 transition-all">
              <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-400 mb-6">
                <HeartPulse className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Clinics & Hospitals</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Turn local Google searchers into booked patients with Next.js clinic website designs, automated booking calendars, Google Maps pack rankings, and automated WhatsApp appointment reminders.
              </p>
              <Link href="/industries/clinics-hospitals" className="text-purple-400 text-sm font-semibold hover:underline inline-flex items-center gap-1.5">
                Explore Healthcare Solutions →
              </Link>
            </div>
            <div className="p-8 rounded-3xl bg-black border border-white/5 hover:border-amber-500/35 transition-all">
              <div className="p-3 w-fit rounded-xl bg-amber-500/10 text-amber-400 mb-6">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Salons & Spas</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Maximize styling seat occupancy, secure online deposits to reduce cancellations, and manage client reviews automatically with custom booking engines and Instagram DM automation.
              </p>
              <Link href="/industries/salons-spas" className="text-amber-400 text-sm font-semibold hover:underline inline-flex items-center gap-1.5">
                Explore Beauty Solutions →
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="font-semibold text-white">Active Service Neighborhoods (TODO: Confirm):</span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10">Whitefield</span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10">Indiranagar</span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10">Koramangala</span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10">HSR Layout</span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10">MG Road</span>
              <span className="px-2 py-1 rounded bg-white/5 border border-white/10">Electronic City</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sub-Pages Navigation */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Available Bangalore Services</h2>
            <p className="text-lg text-gray-400">
              Select one of our specialized local channels to see how we drive leads and rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesList.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx} 
                  className="group p-8 rounded-3xl bg-white/[0.01] border border-white/10 hover:border-cyan-500/35 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 w-fit rounded-2xl bg-white/5 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-colors mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-8">{service.description}</p>
                  </div>
                  <Link 
                    href={service.href} 
                    className="w-full py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-center text-sm font-semibold border border-white/10 hover:border-white/20 transition-all block"
                  >
                    {service.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ComparisonTable 
        title="How We Deliver Value to Bangalore Businesses" 
        subtitle="Compare our data-first custom development approach against generic alternatives." 
        rows={comparisonRows} 
      />

      <ProcessSteps 
        title="Our Local Growth Process" 
        subtitle="A step-by-step methodology built to launch high-performance marketing channels." 
        steps={processSteps} 
      />

      <FaqAccordion 
        title="Bangalore Hub FAQs" 
        items={faqs.map(f => ({ question: f.q, answer: f.a }))} 
      />

      <CtaBlock 
        title="Ready to Scale Your Bangalore Business?" 
        description="Schedule a consultation with our local engineering team. We will audit your current website speed, mapping positions, and lead capture funnels." 
        ctaText="Request a Local Strategy Audit" 
        onCtaClick={() => setIsModalOpen(true)} 
      />

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
