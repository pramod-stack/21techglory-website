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
import { MapPin, CheckCircle2, Navigation, Layers, ShieldCheck, Activity } from 'lucide-react';
import { Post } from '@/lib/blog/posts-data';

export default function LocalSeoClientPage({ relatedPosts }: { relatedPosts?: Post[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Local SEO", href: "/services/local-seo" },
  ];

  const stats = [
    {
      value: "{{TODO: verify or replace}}",
      label: "Map Pack Placement Rate",
      description: "Average benchmark for active target locations within 90 days of launch."
    },
    {
      value: "{{TODO: verify or replace}}",
      label: "Inbound Call Volume Increase",
      description: "Measured via click-to-call conversions on verified local business panels."
    },
    {
      value: "{{TODO: verify or replace}}",
      label: "Average Cost-per-Acquisition Drop",
      description: "Compared to paid advertising campaigns targeting similar search intent."
    }
  ];

  const comparisonRows: ComparisonRow[] = [
    {
      feature: "Local Ranking System Integration",
      agency: {
        included: true,
        text: "Custom React codebases with direct JSON-LD local business coordinate schemas injected directly into the HTML tree."
      },
      competitor: {
        included: false,
        text: "Standard WordPress theme with bulky SEO plugins that drag down mobile page load speeds and limit schema customization."
      }
    },
    {
      feature: "Citation and NAP Cleanliness",
      agency: {
        included: true,
        text: "Surgical auditing of duplicate, inaccurate, and outdated listings on 60+ Tier-1 directories with permanent manual fixes."
      },
      competitor: {
        included: false,
        text: "Automated API sync systems that overwrite listings temporarily and leave deep duplication unresolved."
      }
    },
    {
      feature: "Hyper-Local Content Density",
      agency: {
        included: true,
        text: "Dedicated neighborhood and landing page architectures built to target specific high-intent geographic clusters."
      },
      competitor: {
        included: false,
        text: "Single contact page with a list of target postal codes, resulting in weak local contextual authority."
      }
    },
    {
      feature: "Review Ingestion System",
      agency: {
        included: true,
        text: "Automated WhatsApp API review pipelines designed to capture positive feedback and route issues before they go live."
      },
      competitor: {
        included: false,
        text: "Standard email templates or PDF manuals that rely entirely on customers manually copying links to search panels."
      }
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Geographical & NAP Audit",
      description: "We scrape all online mentions of your business to locate inconsistent Name, Address, and Phone number entries that confuse map crawlers."
    },
    {
      number: "02",
      title: "Google Business Profile Alignment",
      description: "We optimize your categories, metadata, geotagged media assets, and search description coordinates for maximum proximity indexing."
    },
    {
      number: "03",
      title: "Neighborhood Page Construction",
      description: "We build sub-second React landing pages specifically targeting key suburbs, clinics, and local services to capture long-tail query volumes."
    },
    {
      number: "04",
      title: "Citation & Backlink Injection",
      description: "We build manual, high-authority localized citations and secure contextual links from geographical domains to establish local authority."
    },
    {
      number: "05",
      title: "Lead Capture & Pipeline Automation",
      description: "We link your local pages and Maps CTAs directly with automated CRM, WhatsApp, and booking systems to ensure leads are actioned instantly."
    }
  ];

  const faqItems: FaqItem[] = [
    {
      question: "What is local SEO and how is it different from traditional SEO?",
      answer: "Traditional SEO focuses on ranking websites for queries without geographic boundaries (e.g., 'how to build a website'). Local SEO focuses on optimization specifically for search queries that contain geographical qualifiers (like city name or 'near me') or indicate local intent. The key differentiator is the Google Map Pack, which displays map results above organic web search, utilizing proximity, prominence, and relevance factors."
    },
    {
      question: "How does the Google Map Pack algorithm rank local businesses?",
      answer: "The Map Pack ranking algorithm is governed by three primary pillars: Proximity (how close the searcher is to your verified physical address), Relevance (how well your business categories and profile descriptions match the search term), and Prominence (the authority of your main website, local backlink profile, quantity of reviews, and review velocity)."
    },
    {
      question: "What is NAP consistency and why does it affect search ranking?",
      answer: "NAP stands for Name, Address, and Phone number. Search engines crawl third-party directories, directories like YellowPages, and social profiles to verify that your business details match exactly. Inconsistent NAPs (e.g., variations in suite numbers, abbreviations, or phone numbers) create search engine distrust, resulting in lower maps and search visibility."
    },
    {
      question: "How do review velocity and review sentiment impact local maps SEO?",
      answer: "Review velocity (how frequently you receive new reviews), review quantity, and sentiment (positive words, keyword mentions in reviews) are key signals for local rank. Consistent positive review growth indicates to search engines that your business is active and trusted by local clients."
    },
    {
      question: "Do we need location-specific landing pages for every neighborhood?",
      answer: "Yes. If your business serves multiple suburbs, clinics, or regions (such as Jayanagar, Indiranagar, and Koramangala in Bangalore), a single contact page will not provide enough contextual search relevance. Creating targeted, light-weight, highly structured local pages allows you to rank for long-tail, high-conversion geo queries."
    },
    {
      question: "How do you track calls and directions from Google Maps?",
      answer: "We configure tracking variables, UTM parameters on GMB profile website links, and integrate call tracking platforms (DNI) to trace every click, map direction request, and phone call directly back to the specific search query that generated it."
    },
    {
      question: "What are citation directories and how do you manage them?",
      answer: "Citations are online mentions of your business NAP on websites like Justdial, Yelp, and local business directories. We clean up duplicate listings and optimize citations manually, avoiding automatic API synchronization services that create messy, temporary indexation overrides."
    },
    {
      question: "How long does it take to see rankings change for local keywords in Bangalore?",
      answer: "While initial optimizations to your Google Business Profile (GBP) can reflect within weeks, achieving top Map Pack placements for competitive local queries typically takes between 60 to 90 days. This timeline depends on cleaning up historical citation issues, increasing review velocity, and deploying optimized local landing pages."
    }
  ];

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Hero */}
      <ServiceHero
        badge="Local SEO Services"
        title="Local SEO Services That Drive Calls, Bookings, and Walk-Ins"
        description="Rank in the top positions for 'near me' and local map searches. We build fast, schema-rich local landing pages, align citation networks, and automate reviews for clinics, salons, and service businesses."
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
              <span className="text-cyan-400">01.</span> Complete Maps Local Dominance
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              For service-based businesses, salons, and healthcare clinics, ranking on page one of standard organic search results is no longer sufficient. Mobile users looking for immediate service solutions demand map results. Map search results are presented via the Google Local 3-Pack, positioned directly above traditional search positions, capturing over 60% of total clicks for transactional queries. Our approach is engineered to ensure your business claims one of these highly visible placements.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We begin by analyzing the underlying ranking factors in your specific geo-market. Rather than just tweaking descriptions, we implement structural optimization that aligns your local assets with the three pillars of local ranking: proximity, relevance, and prominence. By pairing a custom Next.js website with our proven GBP strategies, we position your business to attract high-intent customers who are ready to make a booking, pick up the phone, or walk through your doors. Learn how we support healthcare locations on our dedicated <Link href="/industries/clinics-hospitals" className="text-cyan-400 hover:underline">Clinics & Hospitals Industry Hub</Link> and beauty spaces on our <Link href="/industries/salons-spas" className="text-cyan-400 hover:underline">Salons & Spas Industry Hub</Link>.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">02.</span> The Google Map Pack Ecosystem
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              The Google Map Pack operates on its own dedicated search algorithm, distinct from traditional desktop indexation. Proximity is a crucial ranking factor, but relevance and prominence are variables that can be influenced by engineering. Proximity determines rankings based on the searcher's physical location, while relevance is dictated by how well your categories, attributes, and on-page copy align with the search term. Prominence is built through local citations, reviews, and domain authority.
            </p>
            <p className="text-gray-400 leading-relaxed">
              To maximize prominence, we audit your overall digital footprint, building contextual local signals that reinforce your primary physical address. We optimize technical elements, ensuring that your Google Business Profile links to a high-speed landing page featuring structured local business schema. This provides the exact GPS coordinates and service descriptions crawlers need to connect your profile with high-volume search queries. Learn more about optimizing your profile details at our <Link href="/services/google-business-profile-optimization" className="text-cyan-400 hover:underline">GMB Optimization Service page</Link>.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">03.</span> Hyper-Local Keyword Capture
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Generic search terms like 'SEO agency' or 'healthcare clinic' are highly competitive and often capture broad, low-intent traffic. True commercial opportunities lie in hyper-local search phrases (e.g., 'dental clinic in Indiranagar' or 'hair salon near Koramangala'). These search terms indicate that the user has immediate intent and is searching for a local solution.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We perform deep keyword research to uncover these high-intent local search terms. By analyzing search volumes, competitor ranks, and geographic intent variations, we compile a target keyword library for your business. We then build and optimize dedicated pages targeting these localized search terms, ensuring your brand appears in front of users at the exact moment they are looking to convert. For businesses targeting the Karnataka region, explore our localized strategy via our <Link href="/locations/bangalore/seo-company" className="text-cyan-400 hover:underline">Bangalore SEO Company Page</Link>.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">04.</span> Local Citation & NAP Auditing
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Search engines utilize local citation directories to verify a business's physical address. Consistent NAP (Name, Address, Phone number) details across platforms like Yelp, Justdial, Facebook, and local directories build trust with search engine algorithms. Inconsistent information, such as variations in street names or old phone numbers, can negatively impact your rankings.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our team performs a thorough audit of your online citations. We identify duplicate listings, fix incorrect addresses, and update outdated contact information across all key platforms. By building clean, consistent, and high-authority local citations, we strengthen your brand's prominence and build search engine trust in your location signals.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">05.</span> Geotargeted Landing Page Creation
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              To rank across multiple physical service areas, businesses need optimized, location-specific landing pages. A single contact page with a list of target locations does not provide enough regional context for search engine crawlers. We build custom, lightweight, and schema-rich landing pages for each of your key target areas.
            </p>
            <p className="text-gray-400 leading-relaxed">
              These pages are built with optimized header tags, local content, and precise JSON-LD coordinate schema. We ensure they load in under a second on mobile devices, providing a seamless user experience that encourages conversion. Each page features clear call-to-actions, directing traffic directly into your booking or CRM systems. Review examples of our work and client case studies on our <Link href="/work" className="text-cyan-400 hover:underline">Work Portfolio page</Link>.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">06.</span> WhatsApp-Integrated Review Collection
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Review volume and velocity are crucial factors in Map Pack rankings. However, manually asking customers for reviews can be time-consuming and inconsistent. We develop automated review acquisition systems that connect directly with your customers via WhatsApp API integrations.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When a booking is completed or a service is delivered, our system sends a personalized WhatsApp follow-up. This message includes a direct link to your Google Business review panel, simplifying the feedback process for clients. This automated approach helps you consistently collect high-quality reviews, improving your local visibility and click-through rates.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">07.</span> Tracking Offline Conversions (Calls & Directions)
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Measuring the success of local campaigns requires tracking offline conversions, such as phone calls and map direction requests. Many agencies report on vanity metrics like impressions, but we focus on tracking tangible actions that drive business revenue.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We implement UTM parameters and custom call tracking integrations on your Google Business Profile. This allows us to track when a user calls your business directly from map results or requests driving directions to your location. By connecting these offline conversions to specific keyword optimizations, we provide clear visibility into your return on investment.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">08.</span> Continuous Optimization and Reporting
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Local search rankings are dynamic, with search algorithms and competitor activities constantly changing. Maintaining top placements requires ongoing optimization, content updates, and link building.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We provide monthly reporting dashboards that display key performance indicators, including map views, direction requests, phone calls, and keyword positions. Our team continuously refines your citation profile, updates local landing page content, and manages review campaigns to ensure your business maintains long-term prominence in your local market. Reach out to our engineers directly on our <Link href="/contact" className="text-cyan-400 hover:underline">Contact page</Link> to schedule an audit.
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

      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-20 bg-zinc-950/20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-bold tracking-[0.2em] text-cyan-400 uppercase">Local SEO Insights</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                Expert <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Local SEO Guides</span>
              </h2>
              <p className="mt-4 text-zinc-400 text-base sm:text-lg">
                Read our latest insights on GBP optimization, maps ranking factors, and hyper-local citation building.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col p-8 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/[0.1] rounded-3xl transition-all duration-300 transform hover:-translate-y-1 text-left"
                >
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">{post.category}</span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">{post.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-grow">{post.description}</p>
                  <span className="text-xs font-semibold text-white flex items-center gap-1">
                    Read article <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
