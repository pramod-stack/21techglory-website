import { Metadata } from 'next';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Link from 'next/link';
import { 
  Code2, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  ExternalLink 
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Software & IT Agency Website Development & B2B Inbound | 21TechGlory",
  description: "Enterprise tech company website architecture, modern SaaS styling, and global lead routing pipelines for software and IT consulting firms.",
  alternates: {
    canonical: "https://21techglory.com/industries/software-it-services",
  },
  openGraph: {
    title: "Software & IT Company Web Architecture | 21TechGlory",
    description: "Enterprise tech company website architecture for software and IT consulting firms.",
    url: "https://21techglory.com/industries/software-it-services",
    type: "website",
  }
};

export default function SoftwareItServicesPage() {
  const faqs = [
    {
      q: "How do you position tech companies for overseas and enterprise buyers?",
      a: "We engineer lightning-fast Next.js architecture deployed across global Edge CDNs, structuring clear service taxonomies, architectural case studies, and transparent consultation booking paths."
    },
    {
      q: "Can you link consultation bookings directly to our team calendar and CRM?",
      a: "Yes. Inbound tech inquiries are automatically qualified and synced to HubSpot, Salesforce, or your custom CRM with instant calendar slot assignments."
    }
  ];

  const faqSchema = getFaqSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Industries", item: "https://21techglory.com/industries" },
    { name: "Software & IT Services", item: "https://21techglory.com/industries/software-it-services" }
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
            <Code2 className="w-4 h-4" /> Enterprise Software Infrastructure
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Web Architecture for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Software & IT Service Companies
            </span>
          </h1>

          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Attract high-ticket enterprise contracts with sub-second global performance, modern tech aesthetics, and seamless inbound consultation pipelines.
          </p>
        </div>
      </section>

      {/* Featured Registry Client: Centurian Apps */}
      <section className="py-16 px-6 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 rounded-3xl bg-neutral-950 border border-cyan-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-cyan-400 font-bold px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30">
                Featured Client: Centurian Apps & Solutions
              </span>
              <h3 className="text-2xl font-bold text-white">
                Centurian Apps — Enterprise Software Platform
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Engineered a scalable corporate website highlighting cloud services, custom software engineering, and client case histories deployed globally with sub-second CDN responses.
              </p>
              <div className="pt-2">
                <a
                  href="https://centurianapps.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                >
                  Visit Production Platform <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <div className="text-2xl font-black text-cyan-400 font-mono">&lt;1.0s</div>
                <div className="text-xs text-gray-400 mt-1">Global Speed</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <div className="text-2xl font-black text-purple-400 font-mono">2.4x</div>
                <div className="text-xs text-gray-400 mt-1">Client Inquiries</div>
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
