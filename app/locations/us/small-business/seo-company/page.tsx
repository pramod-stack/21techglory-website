import { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import FooterMega from '@/components/ui/footer-mega';
import SmartCTA from '@/components/ui/smart-cta';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe, TrendingUp, ShieldCheck } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';

export const metadata: Metadata = {
  title: "SEO Company for US Small Businesses & Local Service Brands | 21TechGlory",
  description: "Capture high-intent US local search traffic with technical Next.js SEO, high-authority schema markup, and automated consultation booking.",
  alternates: {
    canonical: "https://21techglory.com/locations/us/small-business/seo-company",
  }
};

export default function USSmallBusinessSeoPage() {
  const faqs = [
    {
      q: "How does 21TechGlory optimize SEO for US small businesses?",
      a: "We engineer lightning-fast Next.js web architecture, implement comprehensive Schema.org JSON-LD local business hierarchies, and build keyword relevance targeting high-intent commercial terms."
    },
    {
      q: "What is your communication and support schedule for US clients?",
      a: "Our team operates with dedicated daily overlap between 10:30 AM and 12:30 PM Eastern Time, ensuring real-time coordination, weekly sprint reports, and rapid issue resolution."
    }
  ];

  const faqSchema = getFaqSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "US Markets", item: "https://21techglory.com/us" },
    { name: "Small Business SEO", item: "https://21techglory.com/locations/us/small-business/seo-company" }
  ]);

  return (
    <div className="relative min-h-screen text-white bg-[#0B1220] overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <section className="pt-36 pb-20 md:pt-48 md:pb-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1447E6]/10 border border-[#1447E6]/30 text-[#4F7DF7] text-xs font-bold uppercase tracking-widest">
            <Globe className="w-4 h-4" /> US Small Business Inbound Architecture
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            SEO & Inbound Lead Engines for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F7DF7] via-[#E8B44C] to-pink-500">
              US Small Businesses
            </span>
          </h1>

          <p className="text-base md:text-lg text-[#A7B0C0] max-w-3xl mx-auto leading-relaxed">
            Dominate local organic search rankings and turn high-intent visitors into booked consultations without relying entirely on expensive paid ads.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl bg-[#1447E6] hover:bg-[#4F7DF7] text-white font-extrabold text-sm shadow-lg transition-all inline-flex items-center gap-2"
            >
              Request Free Strategy Audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
