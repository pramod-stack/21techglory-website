import { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import FooterMega from '@/components/ui/footer-mega';
import SmartCTA from '@/components/ui/smart-cta';
import Link from 'next/link';
import { ArrowRight, Code2, CheckCircle2, Zap } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';

export const metadata: Metadata = {
  title: "Website Development Company in Bangalore | Next.js & AI Web Architecture | 21TechGlory",
  description: "Custom Next.js website design, sub-second App Router development, and automated lead capture architecture in Bangalore.",
  alternates: {
    canonical: "https://21techglory.com/locations/bangalore/web-development",
  }
};

export default function BangaloreWebDevelopmentPillarPage() {
  const faqs = [
    {
      q: "Why do you build on Next.js instead of WordPress in Bangalore?",
      a: "Next.js websites load statically on Edge CDNs in under 1.2 seconds, achieving 95+ Core Web Vitals scores that dramatically improve mobile ad conversion and local search rankings."
    },
    {
      q: "What is the typical delivery timeline for custom web development?",
      a: "Standard business conversion platforms launch in 2–3 weeks, while comprehensive clinic portals and multi-branch systems launch in 3–5 weeks."
    }
  ];

  const faqSchema = getFaqSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Bangalore Hub", item: "https://21techglory.com/locations/bangalore" },
    { name: "Web Development", item: "https://21techglory.com/locations/bangalore/web-development" }
  ]);

  return (
    <div className="relative min-h-screen text-white bg-[#0B1220] overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <section className="pt-36 pb-20 md:pt-48 md:pb-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1447E6]/10 border border-[#1447E6]/30 text-[#4F7DF7] text-xs font-bold uppercase tracking-widest">
            <Code2 className="w-4 h-4" /> Bangalore Web Architecture
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Custom Website Development & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F7DF7] via-[#E8B44C] to-pink-500">
              Lead Engines in Bangalore
            </span>
          </h1>

          <p className="text-base md:text-lg text-[#A7B0C0] max-w-3xl mx-auto leading-relaxed">
            We build sub-second Next.js web applications engineered for speed, high conversion rates, and automated CRM lead capture across South India.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl bg-[#1447E6] hover:bg-[#4F7DF7] text-white font-extrabold text-sm shadow-lg transition-all inline-flex items-center gap-2"
            >
              Start Your Bangalore Web Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative border-t border-[#212C42] bg-[#070C16]">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#101B2E] border border-[#212C42] space-y-2">
                <h4 className="font-bold text-white text-base">{f.q}</h4>
                <p className="text-sm text-[#A7B0C0] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterMega />
      <SmartCTA />
    </div>
  );
}
