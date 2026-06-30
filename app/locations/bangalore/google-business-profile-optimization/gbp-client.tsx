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
import { Target, Star, Image, Share2, ClipboardList, MapPin } from 'lucide-react';

export default function BangaloreGbpClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/services" },
    { name: "Bangalore", href: "/locations/bangalore" },
    { name: "GBP Optimization", href: "/locations/bangalore/google-business-profile-optimization" },
  ];

  const stats = [
    {
      value: "{{TODO: verify or replace}}",
      label: "Maps Visibility Uplift",
      description: "Average benchmark growth in local pack impressions within 60 days of profile setup."
    },
    {
      value: "{{TODO: verify or replace}}",
      label: "Customer Calls & Clicks",
      description: "Direct action events tracked on the call and website buttons of optimized profiles."
    },
    {
      value: "{{TODO: verify or replace}}",
      label: "Review Volume Increase",
      description: "Uplift in customer review conversions after connecting automated SMS/WhatsApp hooks."
    }
  ];

  const comparisonRows: ComparisonRow[] = [
    {
      feature: "Local Map Pack Placement",
      agency: {
        included: true,
        text: "Surgical categorization, coordinate audit, keyword-optimized Q&A, and citation sync."
      },
      competitor: {
        included: false,
        text: "Basic profile setup with incomplete business categories or coordinates."
      }
    },
    {
      feature: "NAP Consistency Auditing",
      agency: {
        included: true,
        text: "Automated scans and manual cleanup of name, address, and phone details across 50+ local platforms."
      },
      competitor: {
        included: false,
        text: "Leaving directory profiles mismatching, confusing Google's crawler indexing."
      }
    },
    {
      feature: "Review Capture Pipeline",
      agency: {
        included: true,
        text: "Integration with CRM systems to trigger automated review requests on Google Maps via WhatsApp."
      },
      competitor: {
        included: false,
        text: "Relying on staff manually reminding customers, resulting in low review volume."
      }
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Google Listing Verification",
      description: "We audit ownership status, check for duplicate profiles, and review coordinate listings in Bangalore."
    },
    {
      number: "02",
      title: "Keyword & Category Alignment",
      description: "We align primary and secondary categories based on localized search volumes and competitor density."
    },
    {
      number: "03",
      title: "Content & Q&A Optimization",
      description: "We publish geotagged media assets, set up high-intent Q&A profiles, and optimize description copy."
    },
    {
      number: "04",
      title: "Review Automation Hook",
      description: "We build APIs connecting your service scheduler to automated WhatsApp Business review invitations."
    }
  ];

  const faqs = [
    {
      q: "What is Google Business Profile optimization and why is it crucial for Bangalore service businesses?",
      a: "GBP optimization is the process of updating, configuring, and maintaining your Google Maps listing (NAP details, category settings, hours, reviews, images) so Google ranks your business in the high-intent Map 3-Pack, driving free calls and directions requests."
    },
    {
      q: "How does 21TechGlory help our Bangalore clinic or salon rank higher on Google Maps?",
      a: "We perform a comprehensive citation audit, correct inconsistent listings, structure category hierarchies, optimize your business description with high-intent keywords, configure geotagged local photos, set up custom Google Q&As, and deploy automated review pipelines."
    },
    {
      q: "Do you guarantee our business will rank in the top 3 Map Pack in Bangalore?",
      a: "No professional agency can guarantee specific rankings due to Google's complex local algorithms. However, our data-backed methods have a strong track record of elevating local clinics and salons into page-one local packs."
    },
    {
      q: "What is a citation audit and how does it affect our local SEO score?",
      a: "A citation audit verifies that your Name, Address, and Phone number (NAP) are identical across directory sites (Justdial, Sulekha, IndiaLIMS, etc.). Inconsistencies confuse Google's crawlers, lowering your local search trustworthiness and rankings."
    },
    {
      q: "Can you help automate client review generation on our Google Maps profile?",
      a: "Yes. We integrate your appointment scheduling system with custom SMS or WhatsApp templates that automatically request reviews from satisfied clients immediately after their appointment."
    },
    {
      q: "How do you handle negative reviews on our Google Business Profile?",
      a: "We provide guidance on responding professionally to negative feedback to preserve brand reputation. We focus on building a high volume of positive reviews to naturally dilute isolated negative ratings."
    },
    {
      q: "How do you track the volume of calls and directions coming from our maps listing?",
      a: "We add UTM tracking codes to your profile website link to trace traffic in Google Analytics. We also monitor monthly Google Business Profile performance insights for calls, messages, and directions requests."
    },
    {
      q: "How do we get started with a Google Business Profile optimization campaign?",
      a: "Schedule a local SEO discovery call with us. We will audit your current maps listing, check for duplicate listings, analyze local competitor positions, and outline an optimization plan."
    }
  ];

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <ServiceHero
        badge="Google Maps SEO"
        title="Google Business Profile Optimization in Bangalore"
        description={
          <span>
            We optimize and manage your Google Business Profile to capture local high-intent search queries. Get your clinic, salon, or store into the local Map Pack. Based in our <Link href="/locations/bangalore" className="text-cyan-400 hover:underline">Bangalore digital agency</Link> hub.
          </span>
        }
        breadcrumbs={breadcrumbs}
        onCtaClick={() => setIsModalOpen(true)}
      />

      <StatStrip stats={stats} />

      {/* Core Local GBP Highlights */}
      <section className="py-24 px-6 relative border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Dominate Google Maps Pack</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our structured optimization workflow elevates your business listing credibility and rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-cyan-500/35 transition-all">
              <div className="p-3 w-fit rounded-xl bg-cyan-500/10 text-cyan-400 mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Geotargeted Media & Updates</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We format and upload geotagged images directly to your listing. Regular, keyword-rich local updates tell Google's algorithm that your business is active, reliable, and serving local customers.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-cyan-500/35 transition-all">
              <div className="p-3 w-fit rounded-xl bg-cyan-500/10 text-cyan-400 mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Review Management & Q&A</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Reviews directly impact local rankings. We build automated notification systems to request ratings, resolve customer queries via structured Q&A panels, and handle reviews to maximize trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable
        title="Bespoke GBP Optimization vs. Basic Listing Setups"
        subtitle="Compare our data-backed mapping optimization against generic, unmanaged profiles."
        rows={comparisonRows}
      />

      <ProcessSteps
        title="Our Local Citation & Maps Workflow"
        subtitle="How we manage and elevate your listing performance in local search grids."
        steps={processSteps}
      />

      <FaqAccordion
        title="GBP Optimization FAQs"
        items={faqs.map(f => ({ question: f.q, answer: f.a }))}
      />

      <CtaBlock
        title="Ready to Capture Local Maps Searchers?"
        description="Contact our local SEO team for a comprehensive audit of your Google Business Profile coordinates, attributes, and categories."
        ctaText="Request a GMB Profile Audit"
        onCtaClick={() => setIsModalOpen(true)}
      />

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
