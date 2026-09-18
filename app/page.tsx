"use client";

import { useState } from 'react';
import Preloader from '@/components/ui/preloader';
import Navbar from '@/components/ui/navbar';
import HeroWrapper from '@/components/ui/hero-wrapper';
import IndustriesMarquee from '@/components/ui/industries-marquee';
import ResultsCounters from '@/components/ui/results-counters';
import ComparisonSection from '@/components/ui/comparison-section';
import EngineWorkflowStrip from '@/components/ui/engine-workflow-strip';
import ServicesBento from '@/components/ui/services-bento';
import ServiceIndustryMatrix from '@/components/ui/service-industry-matrix';
import ProblemPicker from '@/components/ui/problem-picker';
import SystemBuilder from '@/components/ui/system-builder';
import CaseStudies from '@/components/ui/case-studies';
import GrowthAudit from '@/components/ui/growth-audit';
import WebsiteAudit from '@/components/ui/website-audit';
import LiveDemo from '@/components/ui/live-demo';
import Testimonials from '@/components/ui/testimonials-columns-1';
import PricingSection from '@/components/ui/animated-glassy-pricing';
import BlogPreview from '@/components/ui/blog-preview';
import AnimatedShaderHero from '@/components/ui/animated-shader-hero';
import FooterMega from '@/components/ui/footer-mega';
import StartProjectModal from '@/components/ui/start-project-modal';
import SmartCTA from '@/components/ui/smart-cta';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen text-white bg-[#0B1220] overflow-x-hidden">
      <Preloader />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      {/* 1. WOW (Attention & Hero Choreography) */}
      <HeroWrapper onOpenModal={() => setIsModalOpen(true)} />
      <IndustriesMarquee />
      
      {/* 2. RESULTS & WHY WE'RE DIFFERENT */}
      <ResultsCounters />
      <ComparisonSection />

      {/* 3. UNDERSTANDING (How The Engine Operates: Attract -> Convert -> Automate -> Grow) */}
      <EngineWorkflowStrip />
      
      <div id="services">
        <ServicesBento />
      </div>

      {/* 3B. SERVICES x INDUSTRIES MATRIX */}
      <ServiceIndustryMatrix />

      {/* 4. PROBLEM IDENTIFICATION ("What Are You Trying to Fix?") */}
      <ProblemPicker />

      {/* 5. SYSTEM EXPLANATION ("Build Your System" + Live Visualizer) */}
      <SystemBuilder />
      
      {/* 6. PROOF (Featured Case Studies) */}
      <div id="work">
        <CaseStudies />
      </div>

      {/* 7. INTERACTION (Two Honest Diagnostic Tools) */}
      <GrowthAudit />
      <WebsiteAudit />

      {/* 8. LIVE DEMO ("Show, Don't Tell" - 60s Lead-to-WhatsApp Flow) */}
      <LiveDemo />
      
      {/* 9. TRUST & SOCIAL PROOF */}
      <div id="about">
        <Testimonials />
      </div>
      
      {/* 10. TRANSPARENT PRICING & INSIGHTS */}
      <div id="pricing">
        <PricingSection />
      </div>
      
      <BlogPreview />
      
      {/* 11. FINAL CONVERSION CTA */}
      <AnimatedShaderHero 
        trustBadge={{
          text: "Trusted by 50+ businesses across South India & US SMBs",
          icons: ["✦"]
        }}
        headline={{
          line1: "Ready to Grow?",
          line2: "Let's Build Your Digital System"
        }}
        subtitle={<>We don&apos;t just build websites — we build complete digital growth engines that bring customers, close deals, and scale your <span className="whitespace-nowrap">business 24/7.</span></>}
        buttons={{
          primary: {
            text: "Start Your Project",
            onClick: () => setIsModalOpen(true)
          },
          secondary: {
            text: "See Our Pricing",
            href: "#pricing"
          }
        }}
      />
      
      <FooterMega />

      {/* Persistent Scroll-Aware Smart CTA & Mobile Action Bar */}
      <SmartCTA />

      {/* Progressive 3-Step Lead Modal */}
      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </main>
  );
}
