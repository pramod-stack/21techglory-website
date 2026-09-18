import { Metadata } from 'next';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Link from 'next/link';
import { 
  Truck, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Industrial & Manufacturing Website Design & B2B Inquiries | 21TechGlory",
  description: "High-authority industrial website design, equipment catalog architecture, and automated RFQ quotation pipelines for B2B manufacturers.",
  alternates: {
    canonical: "https://21techglory.com/industries/industrial-manufacturing",
  },
  openGraph: {
    title: "Industrial & Manufacturing Website Design | 21TechGlory",
    description: "High-authority industrial website design and automated RFQ quotation pipelines for B2B manufacturers.",
    url: "https://21techglory.com/industries/industrial-manufacturing",
    type: "website",
  }
};

export default function IndustrialManufacturingPage() {
  const faqs = [
    {
      q: "How do your industrial websites handle complex technical specifications?",
      a: "We structure dynamic specification sheets, load chart viewers, and downloadable engineering PDF brochures with sub-second loading speed."
    },
    {
      q: "How does the automated Request-For-Quotation (RFQ) system work?",
      a: "We build guided 3-step quotation builders that prompt industrial buyers for parameters like capacity, span, duty class, and delivery location. These parameters create structured deal cards in your CRM automatically."
    }
  ];

  const faqSchema = getFaqSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Industries", item: "https://21techglory.com/industries" },
    { name: "Industrial & Manufacturing", item: "https://21techglory.com/industries/industrial-manufacturing" }
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Truck className="w-4 h-4" /> Industrial & Engineering Infrastructure
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Industrial Website Design & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
              B2B Quotation Engines
            </span>
          </h1>

          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Position your manufacturing capabilities with engineering authority. We build structured equipment catalogs and automated quotation pipelines for heavy industry.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/work/namo-cranes"
              className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all inline-flex items-center gap-2"
            >
              View Namo Cranes Case Study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Registry Projects: Namo Cranes, Maxim Automation, Elite Elevators */}
      <section className="py-16 px-6 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center mb-8">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Client Deployments in Industrial Engineering
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mt-1">
              Proven Across Heavy Industry & Material Handling
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Namo Cranes */}
            <div className="p-8 rounded-3xl bg-neutral-950 border border-cyan-500/30 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono text-cyan-300 font-bold px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30">
                  Full 6-Step Case Study
                </span>
                <h3 className="text-2xl font-bold text-white">Namo Cranes & Services</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Engineered modular overhead crane specifications, technical drawing downloads, and automated B2B RFQ routing (+220% qualified enquiries).
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between">
                <Link href="/work/namo-cranes" className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1">
                  Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a href="https://namocranes.com/" target="_blank" rel="noreferrer" className="text-xs text-gray-400 hover:text-white inline-flex items-center gap-1">
                  Visit Live <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Maxim Automation */}
            <div className="p-8 rounded-3xl bg-neutral-950 border border-white/10 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono text-gray-400 font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  Industrial Automation Showcase
                </span>
                <h3 className="text-2xl font-bold text-white">Maxim Automation</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  High-tech automation solutions showcase highlighting PLC integrations, robotics, and engineering support inquiries.
                </p>
              </div>
              <div className="pt-6 flex items-center justify-between">
                <span className="text-xs text-gray-500">Active Production System</span>
                <a href="https://maxim-automation.com/" target="_blank" rel="noreferrer" className="text-xs text-gray-400 hover:text-white inline-flex items-center gap-1">
                  Visit Live <ExternalLink className="w-3 h-3" />
                </a>
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
