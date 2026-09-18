import { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import FooterMega from '@/components/ui/footer-mega';
import SmartCTA from '@/components/ui/smart-cta';
import Link from 'next/link';
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ExternalLink 
} from 'lucide-react';
import ProblemPicker from '@/components/ui/problem-picker';
import SystemBuilder from '@/components/ui/system-builder';
import GrowthAudit from '@/components/ui/growth-audit';
import WebsiteAudit from '@/components/ui/website-audit';
import LiveDemo from '@/components/ui/live-demo';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';

export const metadata: Metadata = {
  title: "US Digital Growth Infrastructure & Customer Acquisition Systems | 21TechGlory",
  description: "High-performance Next.js websites, SEO dominance, and automated lead triage engines for US SMBs, D2C brands, and professional services. Aligned to US Eastern business hours.",
  alternates: {
    canonical: "https://21techglory.com/us",
  },
  openGraph: {
    title: "US Digital Growth Infrastructure & Conversion Engines | 21TechGlory",
    description: "High-performance websites and automated lead capture engines for US SMBs.",
    url: "https://21techglory.com/us",
    type: "website",
  }
};

export default function USMarketPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "United States", item: "https://21techglory.com/us" }
  ]);

  return (
    <div className="relative min-h-screen text-white bg-[#0B1220] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      {/* Hero Section with US Pain Point Framing & USD Context */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1447E6]/10 border border-[#1447E6]/30 text-[#4F7DF7] text-xs font-bold uppercase tracking-widest">
            <Globe className="w-4 h-4" /> US Market Growth Architecture
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Stop Burning Ad Spend on <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F7DF7] via-[#E8B44C] to-pink-500">
              Leaky Website Funnels
            </span>
          </h1>

          <p className="text-base md:text-xl text-[#A7B0C0] max-w-3xl mx-auto leading-relaxed">
            We build sub-second Next.js customer-acquisition engines for US SMBs and D2C brands. High-converting copy, automated lead triage, and organic search dominance — engineered with direct US Eastern timezone alignment.
          </p>

          {/* Key US USPs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-mono text-[#E8B44C]">
            <span className="px-3 py-1.5 rounded-lg bg-[#101B2E] border border-[#212C42] flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5" /> USD Transparent Scoping
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#101B2E] border border-[#212C42] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> 10:30–12:30 ET Daily Overlap
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#101B2E] border border-[#212C42] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> NDA & Work-for-Hire Contracts
            </span>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl bg-[#1447E6] hover:bg-[#4F7DF7] text-white font-extrabold text-sm shadow-[0_0_25px_rgba(20,71,230,0.4)] transition-all inline-flex items-center gap-2"
            >
              BOOK A FREE STRATEGY CALL <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#pricing-us"
              className="px-8 py-4 rounded-2xl bg-[#101B2E] hover:bg-[#16243D] border border-[#212C42] text-white font-bold text-sm transition-all inline-flex items-center gap-2"
            >
              View USD Pricing Tiers
            </a>
          </div>

        </div>
      </section>

      {/* US Pain Point Breakdown */}
      <section className="py-16 px-6 relative border-t border-[#212C42] bg-[#070C16]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-4xl font-bold">Why US Businesses Upgrade to 21TechGlory</h2>
            <p className="text-xs md:text-sm text-[#A7B0C0]">
              Rising customer acquisition costs (CAC) and sluggish WordPress templates are crushing conversion margins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl bg-[#101B2E] border border-[#212C42] space-y-3">
              <div className="p-3 w-fit rounded-xl bg-red-500/10 text-red-400 font-mono text-xs font-bold">
                PROBLEM 01
              </div>
              <h3 className="text-lg font-bold text-white">CAC Pressure & Ad Fatigue</h3>
              <p className="text-xs text-[#A7B0C0] leading-relaxed">
                Meta and Google ad costs in North America have jumped 30%+ year-over-year. Sending paid traffic to generic 3-second templates wastes half your acquisition spend before a visitor reads your offer.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#101B2E] border border-[#212C42] space-y-3">
              <div className="p-3 w-fit rounded-xl bg-[#D9A441]/10 text-[#E8B44C] font-mono text-xs font-bold">
                PROBLEM 02
              </div>
              <h3 className="text-lg font-bold text-white">Zero Automated Follow-up</h3>
              <p className="text-xs text-[#A7B0C0] leading-relaxed">
                Over 60% of high-intent web inquiries bounce if they don't receive an automated reply within 5 minutes. Our systems triage leads and dispatch instant booking workflows 24/7.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#101B2E] border border-[#212C42] space-y-3">
              <div className="p-3 w-fit rounded-xl bg-[#1447E6]/10 text-[#4F7DF7] font-mono text-xs font-bold">
                PROBLEM 03
              </div>
              <h3 className="text-lg font-bold text-white">High Domestic Agency Overhead</h3>
              <p className="text-xs text-[#A7B0C0] leading-relaxed">
                US agencies charge $20k–$50k for basic WordPress themes. 21TechGlory delivers enterprise-grade Next.js engineering and automated CRM infrastructure at scalable, transparent rates.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Problem Picker & System Builder */}
      <ProblemPicker />
      <SystemBuilder />

      {/* Live Pipeline Demo */}
      <LiveDemo />

      {/* Diagnostic Audits */}
      <GrowthAudit />
      <WebsiteAudit />

      {/* USD Transparent Pricing Section */}
      <section id="pricing-us" className="py-24 px-6 relative border-t border-[#212C42] bg-[#070C16]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-mono text-[#E8B44C] uppercase font-bold tracking-widest">
              Transparent USD Scoping
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Simple, Scalable USD Packages</h2>
            <p className="text-sm text-[#A7B0C0]">
              Fixed scopes, clear deliverables, and zero surprise monthly retainers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Starter Engine */}
            <div className="p-8 rounded-3xl bg-[#101B2E] border border-[#212C42] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#4F7DF7] font-bold uppercase tracking-wider">
                  Conversion Engine
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-extrabold text-white">$1,200</span>
                  <span className="text-xs text-[#5C6273]">/ one-time</span>
                </div>
                <p className="text-xs text-[#A7B0C0]">
                  High-speed custom Next.js landing page with conversion copywriting and CRM lead routing.
                </p>
                <ul className="space-y-2 text-xs text-[#A7B0C0] pt-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sub-second mobile load speed (&lt;1.2s)</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Automated email & SMS/WhatsApp triage</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 14-day delivery timeline</li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="w-full py-3 rounded-xl bg-[#101B2E] hover:bg-[#16243D] border border-[#212C42] text-white font-bold text-xs text-center transition-all block"
              >
                Request Scope Brief →
              </Link>
            </div>

            {/* Growth System (Popular) */}
            <div className="p-8 rounded-3xl bg-[#101B2E] border-2 border-[#1447E6] flex flex-col justify-between space-y-6 shadow-2xl relative">
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#1447E6] text-white text-[10px] font-mono font-bold uppercase tracking-widest">
                Most Selected
              </div>
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#E8B44C] font-bold uppercase tracking-wider">
                  Full Acquisition Engine
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-extrabold text-white">$2,800</span>
                  <span className="text-xs text-[#5C6273]">/ one-time</span>
                </div>
                <p className="text-xs text-[#A7B0C0]">
                  Full-stack digital growth system: multi-page website, technical SEO architecture, and CRM automations.
                </p>
                <ul className="space-y-2 text-xs text-[#A7B0C0] pt-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E8B44C]" /> 5–8 high-converting page architectures</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E8B44C]" /> Full Hubspot / CRM deal workflow sync</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E8B44C]" /> Organic SEO taxonomy & schema tree</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#E8B44C]" /> 30-day post-launch support guarantee</li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="w-full py-3.5 rounded-xl bg-[#1447E6] hover:bg-[#4F7DF7] text-white font-extrabold text-xs text-center transition-all block shadow-lg"
              >
                BOOK STRATEGY CALL →
              </Link>
            </div>

            {/* Enterprise / Retainer */}
            <div className="p-8 rounded-3xl bg-[#101B2E] border border-[#212C42] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                  Enterprise System
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-extrabold text-white">$4,500+</span>
                  <span className="text-xs text-[#5C6273]">/ custom</span>
                </div>
                <p className="text-xs text-[#A7B0C0]">
                  Custom web application, multi-location portal, or dedicated organic search & CRO growth retainer.
                </p>
                <ul className="space-y-2 text-xs text-[#A7B0C0] pt-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Custom API & payment integrations</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> Dedicated growth engineering sprint</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-400" /> SLA response in &lt;2 hours</li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="w-full py-3 rounded-xl bg-[#101B2E] hover:bg-[#16243D] border border-[#212C42] text-white font-bold text-xs text-center transition-all block"
              >
                Discuss Custom Architecture →
              </Link>
            </div>

          </div>

        </div>
      </section>

      <FooterMega />
      <SmartCTA />
    </div>
  );
}
