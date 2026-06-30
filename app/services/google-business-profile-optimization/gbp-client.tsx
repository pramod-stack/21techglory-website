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

export default function GbpClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "GBP Optimization", href: "/services/google-business-profile-optimization" },
  ];

  const stats = [
    {
      value: "{{TODO: verify or replace}}",
      label: "Map Impression Growth",
      description: "Average benchmark for targeted keywords within 60 days of GMB profile optimization."
    },
    {
      value: "{{TODO: verify or replace}}",
      label: "Direction Requests Increase",
      description: "Direct tracking of localized navigational requests to clinics and retail outlets."
    },
    {
      value: "{{TODO: verify or replace}}",
      label: "Click-Through-to-Site Rate",
      description: "Average referral traffic increase to primary domains via optimized website buttons."
    }
  ];

  const comparisonRows: ComparisonRow[] = [
    {
      feature: "Category and Attribute Setup",
      agency: {
        included: true,
        text: "Surgical alignment of primary and secondary categories based on search volume density and competitor gap analysis."
      },
      competitor: {
        included: false,
        text: "Basic setup selecting a single category and leaving secondary attributes blank or misaligned."
      }
    },
    {
      feature: "Media Asset Optimization",
      agency: {
        included: true,
        text: "Uploading geo-optimized, high-resolution media with descriptive file names, alt text signals, and spatial categorizations."
      },
      competitor: {
        included: false,
        text: "Uploading basic stock photos with automated file titles directly from cellular phone folders."
      }
    },
    {
      feature: "Google Posts Management",
      agency: {
        included: true,
        text: "Dynamic publishing schedules targeting key services with keyword-injected descriptions and custom UTM links."
      },
      competitor: {
        included: false,
        text: "Publishing occasional posts without search parameter tracking or targeted service links."
      }
    },
    {
      feature: "Q&A and Review Automation",
      agency: {
        included: true,
        text: "Structured Q&A setups answering high-volume search queries directly inside the GMB profile panel."
      },
      competitor: {
        included: false,
        text: "Ignoring the Q&A section completely, leaving public queries unanswered or unmonitored."
      }
    }
  ];

  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "GMB Asset Verification",
      description: "We audit ownership, duplicate panels, category assignments, and verified status to establish a clean foundation."
    },
    {
      number: "02",
      title: "Category & Keyword Alignment",
      description: "We match your profile categories and descriptions with targeted search queries to increase maps relevance."
    },
    {
      number: "03",
      title: "Media & Post Deployment",
      description: "We upload optimized, location-specific images and publish regular updates with custom CTA booking links."
    },
    {
      number: "04",
      title: "Q&A & Review Workflows",
      description: "We construct custom profile Q&As and deploy automated review acquisition workflows to grow feedback velocity."
    },
    {
      number: "05",
      title: "Tracking & Spam Protection",
      description: "We implement call tracking, UTM links, and actively report fake competitor listings that manipulate rankings."
    }
  ];

  const faqItems: FaqItem[] = [
    {
      question: "Why is the primary category selection critical for Google Maps?",
      answer: "The primary category is the strongest relevance signal in Google's local algorithm. Selecting the wrong primary category can completely prevent your business from ranking for your main services, even if you include them in your description or secondary categories."
    },
    {
      question: "How does image optimization affect maps indexing?",
      answer: "Uploading real, high-resolution images of your physical location, team, and services builds user trust and signals profile activity. While Google no longer reads EXIF metadata directly, image labeling, file names, and visual contents are parsed by Google Vision AI to verify category relevance."
    },
    {
      question: "What is Google Business Profile spam and how do you combat it?",
      answer: "Spam includes fake listings, keyword-stuffed business names, and virtual addresses used by competitors to manipulate rankings. We audit your local search area, file redressal forms, and report spam listings to restore fair rankings for verified local businesses."
    },
    {
      question: "How often should we publish Google Business Profile posts?",
      answer: "We recommend publishing updates at least once a week. Frequent posting shows Google that your profile is active, and provides local searchers with current offers, updates, and direct call-to-actions."
    },
    {
      question: "Can we use a virtual office address for verification?",
      answer: "Google's guidelines strictly prohibit using virtual offices, PO boxes, or shared co-working spaces unless they are staffed during normal business hours. Using unapproved addresses often leads to profile suspension."
    },
    {
      question: "How do you track direction requests and phone calls from GMB?",
      answer: "We append custom UTM parameters to all website URLs on your profile, allowing Google Analytics to track maps traffic. We also implement call forwarding numbers to trace inbound call volume back to your GBP."
    },
    {
      question: "What is the impact of review responses on local SEO?",
      answer: "Responding to all reviews—both positive and negative—signals to Google that your business is active and values feedback. Responding quickly and including relevant keywords naturally can help improve your overall prominence."
    },
    {
      question: "What should we do if our Google Business Profile is suspended?",
      answer: "Profile suspensions usually occur due to guideline violations, such as keyword stuffing or address issues. We audit your profile details, correct any violations, compile verification documents, and submit a reinstatement request."
    }
  ];

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Hero */}
      <ServiceHero
        badge="GMB Optimization Services"
        title="Google Business Profile Optimization for More Calls and Map Visibility"
        description={
          <span>
            Maximize your local search visibility, drive customer calls, and increase direction requests. We specialize in category optimization, spam fighting, review automation, and tracking for service-based businesses. Operating locally? See our dedicated page for <Link href="/locations/bangalore/google-business-profile-optimization" className="text-cyan-400 hover:underline">Google Business Profile optimization in Bangalore</Link>.
          </span>
        }
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
              <span className="text-cyan-400">01.</span> Claim & Verify Authority Setup
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Establishing a verified physical business location is the foundation of local map rankings. An unverified or poorly configured profile will not appear in high-intent Map Pack results. The verification process requires detailed documentation, video audits, and address verification. We manage this entire verification process, ensuring your profile is aligned with Google's guidelines from day one.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Once verified, we establish your brand's authority by ensuring your NAP (Name, Address, Phone number) details are identical across your website and third-party listings. For clinics and hospitals, we configure individual practitioner listings alongside primary facility profiles. To understand how we structure this local infrastructure, visit our <Link href="/services/local-seo" className="text-cyan-400 hover:underline">Local SEO Service Page</Link> and read our industry-specific breakdowns for <Link href="/industries/clinics-hospitals" className="text-cyan-400 hover:underline">Clinics & Hospitals</Link> or <Link href="/industries/salons-spas" className="text-cyan-400 hover:underline">Salons & Spas</Link>.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">02.</span> Primary and Secondary Category Alignment
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Google's map algorithm relies heavily on categories to determine relevance. The primary category carries the most weight, while secondary categories allow you to rank for additional services. Many agencies select generic categories, leaving significant visibility on the table.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We audit your competitors' profiles to identify the category structures driving their maps visibility. We then select the optimal primary and secondary categories for your business. We also configure business-specific attributes, such as wheelchair accessibility, virtual appointments, and languages spoken, providing the detailed signals search engines look for.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">03.</span> Geo-Optimized Media Assets
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Profiles with high-quality, real photos receive significantly more direction requests and clicks than profiles relying on stock imagery. Google's algorithms analyze image uploads using Vision AI to identify objects, verify your business location, and confirm service relevance.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We establish a structured media uploading schedule for your profile. We organize, name, and categorize images of your physical location, team, and services. This consistent upload of real, optimized photos shows Google that your profile is active, helping improve overall visibility.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">04.</span> Google Business Profile Posting Workflows
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Google Posts are mini-advertisements that appear directly on your search profile. While they may not directly influence rankings, they are highly effective for driving clicks, shares, and bookings.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We manage your posting schedule, publishing updates, offers, and events that highlight your key services. Each post is optimized with targeted keywords and custom UTM tracking links. This approach ensures your posts look professional and allow you to measure their impact on website conversions.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">05.</span> Structured Q&A Management
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              The Questions and Answers section on your profile is public, meaning any user can ask and answer questions about your business. Leaving this section unmonitored can lead to inaccurate answers that hurt your brand reputation.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We set up and monitor the Q&A section on your profile. We publish and answer high-frequency customer questions, using relevant keywords naturally. This provides searchers with clear, accurate information and helps search engines better understand your business offerings.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">06.</span> Review Velocity & Automation Strategies
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Review volume and velocity are crucial ranking signals in local search. However, manually asking clients for reviews can be inconsistent. We develop automated review collection systems that connect directly with your booking or CRM platforms.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When a service is completed, our system automatically sends a personalized follow-up message with a direct review link. We also help you implement templates for responding to reviews. This consistent approach to gathering and responding to feedback builds customer trust and improves your rankings.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">07.</span> Spacing & Keyword-Rich Descriptions
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your business description is an opportunity to introduce your brand to searchers. While description keywords may not directly influence rankings, they are crucial for driving user engagement and click-through rates.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We write clear, professional, and keyword-rich descriptions for your profile. We structure the copy to highlight your unique value propositions and key services. This ensures searchers quickly understand what your business offers and are encouraged to take action.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">08.</span> Maps Inbound Call & Direction Tracking
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Understanding how your profile drives business requires tracking phone calls and map direction requests. We focus on measuring these key conversion actions to provide clear visibility into your return on investment.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We implement custom tracking links and call forwarding numbers on your profile. This allows us to track when a user calls your business or requests directions directly from map search results. We use this data to continually refine your optimization strategy, ensuring we target the keywords that drive the most value. Reach out to our team via our <Link href="/contact" className="text-cyan-400 hover:underline">Contact Page</Link> to start optimizing your profile. For businesses looking for a local agency partner, check out our localized services on our <Link href="/locations/bangalore/seo-company" className="text-cyan-400 hover:underline">Bangalore SEO Company Page</Link>.
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
