import { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import FooterMega from '@/components/ui/footer-mega';
import SmartCTA from '@/components/ui/smart-cta';
import Link from 'next/link';
import { ArrowRight, Database, CheckCircle2, HeartPulse } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';

export const metadata: Metadata = {
  title: "CRM & Patient Follow-up Systems for Bangalore Clinics | 21TechGlory",
  description: "Specialized CRM setup for doctors, dermatologists, and healthcare practices in Bangalore. Automated appointment booking, OPD slot sync, and patient retention.",
  alternates: {
    canonical: "https://21techglory.com/locations/bangalore/crm-for-clinics",
  }
};

export default function BangaloreCrmClinicsPage() {
  const faqs = [
    {
      q: "How does a specialized clinic CRM help doctors in Bangalore?",
      a: "It centralizes patient inquiries from your website, Google Maps, and WhatsApp into structured deal cards, tracks procedure interest, and coordinates appointment slots automatically."
    },
    {
      q: "Is patient medical data kept confidential?",
      a: "Yes. Our CRM setups follow strict data confidentiality protocols on Indian servers with zero third-party data sharing and role-based staff access."
    }
  ];

  const faqSchema = getFaqSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Bangalore Hub", item: "https://21techglory.com/locations/bangalore" },
    { name: "Clinic CRM Systems", item: "https://21techglory.com/locations/bangalore/crm-for-clinics" }
  ]);

  return (
    <div className="relative min-h-screen text-white bg-[#0B1220] overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <section className="pt-36 pb-20 md:pt-48 md:pb-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1447E6]/10 border border-[#1447E6]/30 text-[#4F7DF7] text-xs font-bold uppercase tracking-widest">
            <HeartPulse className="w-4 h-4" /> Healthcare Practice Infrastructure
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Clinic CRM & Automated <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F7DF7] via-[#E8B44C] to-pink-500">
              Patient Follow-Up in Bangalore
            </span>
          </h1>

          <p className="text-base md:text-lg text-[#A7B0C0] max-w-3xl mx-auto leading-relaxed">
            Eliminate front-desk chaos and missed patient calls. Automated consultation scheduling, WhatsApp appointment reminders, and structured patient relationship management.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl bg-[#1447E6] hover:bg-[#4F7DF7] text-white font-extrabold text-sm shadow-lg transition-all inline-flex items-center gap-2"
            >
              Request Clinic CRM Demo <ArrowRight className="w-4 h-4" />
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
