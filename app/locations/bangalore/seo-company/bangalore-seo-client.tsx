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
import { Compass, ShieldAlert, Award, Star, Activity, MapPin } from 'lucide-react';

export default function BangaloreSeoClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/services" },
    { name: "Bangalore", href: "/locations/bangalore/seo-company" },
    { name: "SEO Company", href: "/locations/bangalore/seo-company" },
  ];

  const stats = [
    {
      value: "{{TODO: verify or replace}}",
      label: "Organic Lead Volume Growth",
      description: "Average client performance measured over an active 6-month optimization window."
    },
    {
      value: "{{TODO: verify or replace}}",
      label: "Top 3 Map Pack Placements",
      description: "Percentage of target location keywords successfully indexed on page one."
    },
    {
      value: "{{TODO: verify or replace}}",
      label: "First Page Organic Term Indexing",
      description: "Average volume of high-intent search terms reaching page one rankings."
    }
  ];

  const comparisonRows: ComparisonRow[] = [
    {
      feature: "React Engineering Stack",
      agency: {
        included: true,
        text: "Building custom, lightweight Next.js and React codebases that achieve sub-second load times on mobile devices."
      },
      competitor: {
        included: false,
        text: "Using heavy, pre-built WordPress themes with slow loading speeds and bloated plugin files."
      }
    },
    {
      feature: "Targeted Search Optimization",
      agency: {
        included: true,
        text: "Targeting high-intent, transaction-oriented search terms that convert visitors into active leads."
      },
      competitor: {
        included: false,
        text: "Focusing on vanity metrics like impressions and traffic volumes from low-intent keywords."
      }
    },
    {
      feature: "Structured Schema Integration",
      agency: {
        included: true,
        text: "Injecting custom JSON-LD LocalBusiness, Service, and FAQ schemas directly into the page source code."
      },
      competitor: {
        included: false,
        text: "Relying on generic SEO plugins that output basic, unoptimized schema structures."
      }
    },
    {
      feature: "Lead Route Automation",
      agency: {
        included: true,
        text: "Connecting landing pages directly with WhatsApp, email notifications, and CRM systems for instant routing."
      },
      competitor: {
        included: false,
        text: "Leaving form submissions in static databases, requiring manual download and delayed follow-ups."
      }
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Competitor & Market Audit",
      description: "We analyze competitor keyword strategies, backlink profiles, and category setups in the Bangalore market."
    },
    {
      number: "02",
      title: "On-Page & Schema Optimization",
      description: "We optimize header structures, internal link flows, and inject custom local business schemas into your code."
    },
    {
      number: "03",
      title: "Targeted Content Creation",
      description: "We build dedicated landing pages designed to rank for high-intent search terms in key neighborhoods."
    },
    {
      number: "04",
      title: "Local Link & Citation Building",
      description: "We build high-quality citations and acquire contextually relevant local links to grow your prominence."
    },
    {
      number: "05",
      title: "Conversion Tracking Setup",
      description: "We implement tracking parameters, call tracking numbers, and analytics goals to measure true ROI."
    }
  ];

  const faqItems: FaqItem[] = [
    {
      question: "Why should a Bangalore business hire a specialized SEO agency instead of a generalist agency?",
      answer: "Generalist agencies focus on vanity metrics like clicks and impressions across broad categories. A specialized SEO agency like 21TechGlory focuses on intent-driven local rankings and custom React engineering. This ensures your site loads fast, ranks for terms that drive business, and converts visitors into paying clients."
    },
    {
      question: "What is the difference between custom-coded sites and WordPress for SEO?",
      answer: "Custom-coded Next.js sites provide clean code, sub-second loading speeds, and complete control over metadata and schema injection. WordPress sites are often slowed down by bloated themes and multiple plugins, which negatively impacts mobile usability and search engine indexation."
    },
    {
      question: "Which Bangalore neighborhoods do you serve for local SEO campaigns?",
      answer: "We support businesses throughout the greater Bangalore region, with active campaigns running in Indiranagar, Koramangala, HSR Layout, Jayanagar, JP Nagar, Whitefield, Marathahalli, MG Road, and Malleshwaram. We optimize citations and location pages specifically targeting these geographic suburbs."
    },
    {
      question: "How do you identify high-intent keywords for local clinics and salons?",
      answer: "We analyze search queries to separate informational searches (e.g., 'how to treat acne') from transactional local searches (e.g., 'acne treatment clinic in Indiranagar'). By targeting these high-intent local queries, we capture visitors who are ready to book a service."
    },
    {
      question: "What is local business schema and why is it important?",
      answer: "Local business schema is a structured JSON-LD code block that provides search engine crawlers with your exact NAP details, GPS coordinates, operating hours, and services. Injecting this schema directly into your code builds search engine trust and improves your maps visibility."
    },
    {
      question: "Do you guarantee top Google Map Pack rankings in Bangalore?",
      answer: "No reputable agency can guarantee specific rankings due to search engine algorithm updates. However, our process has a proven track record of securing first-page placements by cleaning up citations, optimizing profiles, and building high-speed landing pages."
    },
    {
      question: "How do you track and verify offline leads like calls and walk-ins?",
      answer: "We use UTM tracking parameters on your Google Business Profile links and implement call tracking numbers. This allows us to track when a user calls your business or requests directions directly from map search results."
    },
    {
      question: "How do we get started with a local SEO audit for our Bangalore location?",
      answer: "You can book a consultation through our website or contact us directly. Our engineers will audit your current search visibility, identify citation issues, analyze competitor gaps, and provide a clear optimization strategy."
    }
  ];

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Hero */}
      <ServiceHero
        badge="Bangalore SEO Agency"
        title="SEO Company in Bangalore for Service Businesses and Clinics"
        description="21TechGlory is a technical SEO agency helping clinics, salons, and service providers rank higher, capture local leads, and convert map searches into business revenue."
        breadcrumbs={breadcrumbs}
        onCtaClick={() => setIsModalOpen(true)}
      />

      {/* Stats Strip */}
      <StatStrip stats={stats} />

      {/* Core Copy Content Sections */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section 1 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">01.</span> Bangalore's Digital Search Landscape
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Bangalore's commercial landscape is highly competitive, with thousands of businesses competing for customer attention. For service-based businesses, salons, and medical clinics, traditional advertising yields declining returns. Modern consumers use mobile searches to find local services instantly.
            </p>
            <p className="text-gray-400 leading-relaxed">
              To succeed in this market, businesses need a strong search presence. We build technical SEO campaigns that place your brand in front of users searching for your services in Bangalore. We serve key neighborhoods including Indiranagar, Koramangala, HSR Layout, Jayanagar, JP Nagar, Whitefield, Marathahalli, MG Road, and Malleshwaram {"{{TODO: confirm Bangalore neighborhoods served}}"}. Our focus is on driving measurable growth, ensuring your business captures high-intent traffic. Explore our main strategies on our <Link href="/services/seo" className="text-cyan-400 hover:underline">SEO Services page</Link>.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">02.</span> Local Search Market Penetration
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Succeeding in local search requires more than just basic keyword optimization. It demands a strategy built on proximity, relevance, and prominence. We optimize your digital presence to ensure your business ranks for targeted search terms across your key service areas in Bangalore.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We align your website structure and local profiles to strengthen your location signals. This helps search engine algorithms connect your services with local queries. Learn more about our targeted maps and location strategies at our <Link href="/services/local-seo" className="text-cyan-400 hover:underline">Local SEO Service page</Link> and our <Link href="/services/google-business-profile-optimization" className="text-cyan-400 hover:underline">GMB Profile Optimization page</Link>.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">03.</span> Clinic and Healthcare SEO Specialization
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Healthcare and clinic SEO requires a careful approach that complies with Google's search guidelines. Search engines evaluate medical content using high standards of expertise, authoritativeness, and trustworthiness.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We specialize in healthcare SEO, ensuring your clinic's content is accurate, authoritative, and structured correctly. We implement specialized schema codes and optimize provider profiles to help your clinic rank for key medical searches. Check out our dedicated strategies on our <Link href="/industries/clinics-hospitals" className="text-cyan-400 hover:underline">Clinics & Hospitals Hub</Link>.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">04.</span> Salon and Spa SEO Performance
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              For salons and spas, search queries are highly visual and location-dependent. Users search for services like 'hair salon near me' or 'facial treatments in Indiranagar' with immediate intent to book an appointment.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We build campaigns that capture this high-intent traffic. We optimize your local profiles with real photos, manage your review velocity, and build fast, responsive location pages that make it easy for users to book. Review our industry-specific approach on our <Link href="/industries/salons-spas" className="text-cyan-400 hover:underline">Salons & Spas Hub</Link>.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">05.</span> Technical SEO and Custom React Engineering
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Website speed and mobile performance are critical ranking factors. Slow, template-built sites often struggle to rank well, particularly on mobile networks. We build custom, lightweight React and Next.js codebases to ensure your site loads instantly.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our custom codebases provide sub-second load times and allow us to inject clean, precise schema structures directly into the HTML. This helps search engine crawlers easily index your site and understand your business offerings.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">06.</span> Organic Lead Capture Systems
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Attracting traffic to your site is only the first step; you also need to convert those visitors into active leads. We integrate custom form captures, booking links, and call buttons directly into your landing pages.
            </p>
            <p className="text-gray-400 leading-relaxed">
              These elements are designed to encourage user interaction and make it easy to contact your business. We connect these forms to automated lead management tools to ensure inquiries are routed and actioned quickly.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">07.</span> High-Intent Keyword Targeting
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We target keywords that indicate clear commercial intent. This ensures your SEO campaign attracts visitors who are ready to make a purchase or book a service.
            </p>
            <p className="text-gray-400 leading-relaxed">
              By analyzing search volumes and competitor ranks in Bangalore, we build a target keyword library. We then optimize your landing pages to capture these high-value terms, maximizing the efficiency of your campaign. See examples of how we apply this data on our <Link href="/work" className="text-cyan-400 hover:underline">Work Portfolio page</Link>.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">08.</span> Measurable ROI and Reporting
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              We believe in complete transparency, providing simple reports that show the actual business value generated by your SEO campaign.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We track key performance indicators, including phone calls, form completions, and booking requests. This data allows you to see the direct impact of our work on your business growth. Schedule an audit with our team through our <Link href="/contact" className="text-cyan-400 hover:underline">Contact page</Link> to start growing your search presence.
            </p>
          </div>

        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable rows={comparisonRows} />

      {/* Process Steps */}
      <ProcessSteps steps={processSteps} />

      {/* FAQ Accordion */}
      <FaqAccordion items={faqItems} />

      {/* CTA Block */}
      <CtaBlock onCtaClick={() => setIsModalOpen(true)} />

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
