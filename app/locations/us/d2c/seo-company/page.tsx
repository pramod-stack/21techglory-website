import { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import FooterMega from '@/components/ui/footer-mega';
import SmartCTA from '@/components/ui/smart-cta';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Globe, Zap } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';

export const metadata: Metadata = {
  title: "E-Commerce & D2C SEO Agency for US Brands | 21TechGlory",
  description: "Scale organic revenue for US D2C and e-commerce brands with sub-second product pages, programmatic category SEO, and automated cart re-engagement.",
  alternates: {
    canonical: "https://21techglory.com/locations/us/d2c/seo-company",
  }
};

export default function USD2CSeoPage() {
  const faqs = [
    {
      q: "How does 21TechGlory increase organic search revenue for US D2C brands?",
      a: "We restructure image-heavy product catalogs onto edge-rendered Next.js storefronts, optimize product schema hierarchies, and index long-tail buyer search intent."
    },
    {
      q: "Can you help recover lost mobile conversions?",
      a: "Yes. By optimizing Core Web Vitals to sub-second load times and integrating automated SMS and email cart recovery flows, we consistently reduce mobile drop-off."
    }
  ];

  const faqSchema = getFaqSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "US Markets", item: "https://21techglory.com/us" },
    { name: "D2C SEO", item: "https://21techglory.com/locations/us/d2c/seo-company" }
  ]);

  return (
    <div className="relative min-h-screen text-white bg-[#0B1220] overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <section className="pt-36 pb-20 md:pt-48 md:pb-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-widest">
            <ShoppingBag className="w-4 h-4" /> US D2C E-Commerce Growth
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Organic Search & Storefront Speed for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-[#4F7DF7]">
              US D2C E-Commerce Brands
            </span>
          </h1>

          <p className="text-base md:text-lg text-[#A7B0C0] max-w-3xl mx-auto leading-relaxed">
            Lower your blended customer acquisition cost with lightning-fast catalog speeds, rich snippet product schemas, and automated re-engagement.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl bg-[#1447E6] hover:bg-[#4F7DF7] text-white font-extrabold text-sm shadow-lg transition-all inline-flex items-center gap-2"
            >
              Request Free D2C Audit <ArrowRight className="w-4 h-4" />
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
