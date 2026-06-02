"use client";

import { useState } from 'react';
import Preloader from '@/components/ui/preloader';
import Navbar from '@/components/ui/navbar';
import HeroWrapper from '@/components/ui/hero-wrapper';
import ServicesBento from '@/components/ui/services-bento';
import ResultsCounters from '@/components/ui/results-counters';
import IndustriesMarquee from '@/components/ui/industries-marquee';
import ComparisonSection from '@/components/ui/comparison-section';
import { PortfolioParallax } from '@/components/ui/portfolio-parallax';
import CaseStudies from '@/components/ui/case-studies';
import Testimonials from '@/components/ui/testimonials-columns-1';
import PricingSection from '@/components/ui/animated-glassy-pricing';
import AnimatedShaderHero from '@/components/ui/animated-shader-hero';
import BlogPreview from '@/components/ui/blog-preview';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen text-white bg-black overflow-x-hidden">
      <Preloader />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      
      <HeroWrapper onOpenModal={() => setIsModalOpen(true)} />
      <IndustriesMarquee />
      
      <div id="services">
        <ServicesBento />
      </div>
      
      <ResultsCounters />
      <ComparisonSection />
      
      <div id="work">
        <PortfolioParallax />
      </div>
      
      <CaseStudies />
      
      <div id="about">
        <Testimonials />
      </div>
      
      <div id="pricing">
        <PricingSection />
      </div>
      
      <BlogPreview />
      
      <AnimatedShaderHero 
        trustBadge={{
          text: "Trusted by 50+ businesses across South India",
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
      
      <Footer />

      {/* Reusable Modal for Forms */}
      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </main>
  );
}
