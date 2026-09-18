"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Globe, 
  ChevronDown, 
  Send
} from 'lucide-react';
import BrandLogo from '@/components/ui/brand-logo';
import { Analytics } from '@/lib/analytics';

const SERVICES_LINKS = [
  { name: "Website Development", href: "/services/web-development" },
  { name: "SEO & Content", href: "/services/seo" },
  { name: "Local SEO Services", href: "/services/local-seo" },
  { name: "GBP Optimization", href: "/services/google-business-profile-optimization" },
  { name: "Paid Ads (Meta+Google)", href: "/services/paid-ads" },
  { name: "AI Automation", href: "/services/ai-automation" },
  { name: "CRM Workflows", href: "/services/crm" },
  { name: "WhatsApp Automation", href: "/services/ai-automation" },
  { name: "Booking System", href: "/services/web-development" },
  { name: "Analytics & Reporting", href: "/services/web-development" },
  { name: "Brand Identity", href: "/services/web-development" },
  { name: "Conversion Copywriting", href: "/services/seo" },
];

const INDUSTRIES_LINKS = [
  { name: "Clinics & Hospitals", href: "/industries/clinics-hospitals" },
  { name: "Salons & Spas", href: "/industries/salons-spas" },
  { name: "Fitness & Gyms", href: "/industries/fitness-gyms" },
  { name: "Beauty & Cosmetics", href: "/industries/beauty-cosmetics" },
  { name: "Software & IT Services", href: "/industries/software-it-services" },
  { name: "Hospitality & F&B", href: "/work" },
  { name: "Industrial & Manufacturing", href: "/industries/industrial-manufacturing" },
  { name: "Healthcare & Wellness", href: "/industries/clinics-hospitals" },
  { name: "Finance & Funds", href: "/work" },
  { name: "Sports & Leisure Clubs", href: "/work" },
];

const WORK_LINKS = [
  { name: "Liger Fitness Gyms", href: "/work/liger-fitness" },
  { name: "Namo Cranes & Services", href: "/work/namo-cranes" },
  { name: "Skincare E-commerce", href: "/work/skincare-website-conversion" },
  { name: "Hospital Booking System", href: "/work/hospital-booking-platform" },
  { name: "Bangalore Clinic SEO", href: "/work/clinic-seo-bangalore" },
  { name: "View All Client Projects ↗", href: "/work" },
];

const RESOURCES_LINKS = [
  { name: "Growth Insights & Blog", href: "/blog" },
  { name: "Transparent Pricing", href: "/#pricing" },
  { name: "Growth System Audit", href: "/tools/growth-audit" },
  { name: "Website Speed Audit", href: "/tools/site-audit" },
  { name: "Build Your System", href: "/tools/build-your-system" },
  { name: "Industries Served", href: "/industries" },
];

const COMPANY_LINKS = [
  { name: "About 21TechGlory", href: "/about" },
  { name: "Our Methodology", href: "/#about" },
  { name: "Client Testimonials", href: "/testimonials" },
  { name: "Bangalore Hub", href: "/locations/bangalore" },
  { name: "US Market Services", href: "/us" },
  { name: "Contact & Support", href: "/contact" },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
  { name: "Engagement Terms", href: "/engagement-terms" },
  { name: "XML Sitemap", href: "/sitemap.xml" },
];

export default function FooterMega() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success">("idle");
  const [currentCountry, setCurrentCountry] = useState<"IN" | "US">("IN");

  const toggleAccordion = (col: string) => {
    setOpenAccordion(openAccordion === col ? null : col);
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterStatus("success");
      Analytics.event("newsletter_signup", { email: newsletterEmail });
    }
  };

  return (
    <footer className="bg-[#070C16] text-white border-t border-[#212C42] relative overflow-hidden">
      
      {/* Top Trust & Newsletter Strip */}
      <div className="border-b border-[#212C42] py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E8B44C] uppercase tracking-widest font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Operational SLA Standard
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Practical growth systems, once a week.
            </h3>
            <p className="text-xs md:text-sm text-[#A7B0C0]">
              No fluff, no generic AI spam. Actionable case studies and technical performance insights — unsubscribe anytime.
            </p>
          </div>

          <div className="lg:col-span-6">
            {newsletterStatus === "success" ? (
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Thank you for subscribing. Weekly growth systems delivered directly to your inbox.
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your business email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-[#101B2E] border border-[#212C42] text-sm text-white placeholder-[#5C6273] focus:outline-none focus:border-[#4F7DF7]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#1447E6] hover:bg-[#4F7DF7] text-white font-bold text-xs tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  SUBSCRIBE <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Main 6-Column Mega Directory */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Brand Banner */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-12 border-b border-[#212C42]">
          <div className="space-y-1">
            <BrandLogo size="lg" variant="stacked" />
            <p className="text-xs text-[#A7B0C0] max-w-md pt-1">
              Customer-acquisition engines, high-speed Next.js web applications, and automated lead infrastructure for ambitious businesses in India & the US.
            </p>
          </div>

          <div className="flex items-center gap-3 text-[#A7B0C0]">
            <a
              href="https://linkedin.com/company/21techglory"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#101B2E] hover:text-[#4F7DF7] border border-[#212C42] transition-colors"
              title="21TechGlory on LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/21techglory"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#101B2E] hover:text-pink-400 border border-[#212C42] transition-colors"
              title="21TechGlory on Instagram"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://github.com/21techglory"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#101B2E] hover:text-white border border-[#212C42] transition-colors"
              title="21TechGlory on GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* 6 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-12">
          
          {/* Col 1: Services */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8B44C] mb-4">
              Services (12)
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_LINKS.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-[#A7B0C0] hover:text-[#4F7DF7] transition-colors block py-0.5">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Industries */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8B44C] mb-4">
              Industries (10)
            </h4>
            <ul className="space-y-2 text-xs">
              {INDUSTRIES_LINKS.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-[#A7B0C0] hover:text-[#4F7DF7] transition-colors block py-0.5">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Real Work */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8B44C] mb-4">
              Client Proof
            </h4>
            <ul className="space-y-2 text-xs">
              {WORK_LINKS.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-[#A7B0C0] hover:text-[#4F7DF7] transition-colors block py-0.5 font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Resources & Tools */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8B44C] mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              {RESOURCES_LINKS.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-[#A7B0C0] hover:text-[#4F7DF7] transition-colors block py-0.5">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Company */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8B44C] mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              {COMPANY_LINKS.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-[#A7B0C0] hover:text-[#4F7DF7] transition-colors block py-0.5">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 6: Legal & Compliance */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#E8B44C] mb-4">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-xs">
              {LEGAL_LINKS.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-[#A7B0C0] hover:text-[#4F7DF7] transition-colors block py-0.5">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-2.5 rounded-lg bg-[#101B2E] border border-[#212C42] text-[10px] text-[#A7B0C0]">
              NDA available on request prior to project scoping.
            </div>
          </div>

        </div>

        {/* Locations, Operating Hours & SLA Bar */}
        <div className="mt-14 pt-8 border-t border-[#212C42] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#A7B0C0]">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#4F7DF7] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white mb-0.5">Bangalore HQ & Regional Markets</div>
              <div>Bangalore, Karnataka, India · Serving South India & Global Remote Clients</div>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Globe className="w-4 h-4 text-[#E8B44C] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white mb-0.5">US Market Delivery</div>
              <div>Dedicated remote delivery with 2h daily ET alignment (10:30–12:30 ET)</div>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white mb-0.5">Operating Hours & Response SLA</div>
              <div>Mon–Sat: 09:00–19:00 IST · Guaranteed reply in under 4 business hours</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Country Selector */}
        <div className="mt-10 pt-6 border-t border-[#212C42] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5C6273]">
          <div>
            © {new Date().getFullYear()} 21TechGlory Systems Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#101B2E] border border-[#212C42] text-[11px] font-mono">
              <button
                onClick={() => setCurrentCountry("IN")}
                className={`px-2 py-0.5 rounded cursor-pointer ${
                  currentCountry === "IN" ? "bg-[#1447E6] text-white font-bold" : "text-[#A7B0C0] hover:text-white"
                }`}
              >
                🇮🇳 India (INR)
              </button>
              <Link
                href="/us"
                onClick={() => setCurrentCountry("US")}
                className={`px-2 py-0.5 rounded cursor-pointer ${
                  currentCountry === "US" ? "bg-[#1447E6] text-white font-bold" : "text-[#A7B0C0] hover:text-white"
                }`}
              >
                🇺🇸 US (USD)
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
