import { Metadata } from 'next';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Link from 'next/link';
import { 
  ShoppingBag, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Cosmetics & Beauty Brand E-Commerce & Web Design | 21TechGlory",
  description: "High-aesthetic D2C storefront design, sub-second product pages, and social-commerce acquisition systems for cosmetics and beauty brands.",
  alternates: {
    canonical: "https://21techglory.com/industries/beauty-cosmetics",
  },
  openGraph: {
    title: "Cosmetics & Beauty Brand Web Design | 21TechGlory",
    description: "High-aesthetic D2C storefront design for cosmetics and beauty brands.",
    url: "https://21techglory.com/industries/beauty-cosmetics",
    type: "website",
  }
};

export default function BeautyCosmeticsPage() {
  const faqs = [
    {
      q: "How do you optimize mobile speed for cosmetics image-heavy catalogs?",
      a: "We utilize Next.js image optimization with AVIF/WebP formats, responsive picture source sets, and lazy loading below the fold to keep mobile page loads under 1.2 seconds."
    },
    {
      q: "Can you automate abandoned cart recovery via WhatsApp?",
      a: "Yes. When a customer leaves their cart unpurchased, our automated WhatsApp integration sends a polite reminder with an instant checkout link, recovering up to 28% of abandoned carts."
    }
  ];

  const faqSchema = getFaqSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Industries", item: "https://21techglory.com/industries" },
    { name: "Beauty & Cosmetics", item: "https://21techglory.com/industries/beauty-cosmetics" }
  ]);

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <section className="pt-36 pb-20 md:pt-48 md:pb-28 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> D2C & Luxury Beauty Infrastructure
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            High-Aesthetic Web Design for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
              Cosmetics & Beauty Brands
            </span>
          </h1>

          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Elevate your brand perception with silky-smooth micro-animations, sub-second product pages, and automated WhatsApp social-commerce flows.
          </p>
        </div>
      </section>

      {/* Featured Registry Client: Cosmaty */}
      <section className="py-16 px-6 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 rounded-3xl bg-neutral-950 border border-pink-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-pink-400 font-bold px-3 py-1 rounded-full bg-pink-950/40 border border-pink-500/30">
                Featured Brand: Cosmaty
              </span>
              <h3 className="text-2xl font-bold text-white">
                Cosmaty — D2C Cosmetics & Beauty Experience
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Crafted an ultra-clean, luxury visual layout with fast product previews, clean ingredient breakdowns, and direct social commerce links (+65% engagement increase).
              </p>
              <div className="pt-2">
                <a
                  href="https://cosmaty.in/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-400 hover:text-pink-300"
                >
                  Visit Live Brand Experience <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <div className="text-2xl font-black text-pink-400 font-mono">+65%</div>
                <div className="text-xs text-gray-400 mt-1">Engagement</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <div className="text-2xl font-black text-purple-400 font-mono">-40%</div>
                <div className="text-xs text-gray-400 mt-1">Bounce Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-neutral-950 border border-white/10 space-y-2">
              <h4 className="text-base font-bold text-white">{faq.q}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
