import { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import FooterMega from '@/components/ui/footer-mega';
import SmartCTA from '@/components/ui/smart-cta';
import Link from 'next/link';
import { ArrowRight, MessageSquare, CheckCircle2, Clock } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';

export const metadata: Metadata = {
  title: "WhatsApp Business Automation & CRM Triage in Bangalore | 21TechGlory",
  description: "Connect your website directly to WhatsApp Business API. Instant inquiry triage, automated appointment bookings, and zero lead loss in Bangalore.",
  alternates: {
    canonical: "https://21techglory.com/locations/bangalore/whatsapp-automation",
  }
};

export default function BangaloreWhatsappAutomationPage() {
  const faqs = [
    {
      q: "How fast is the automated WhatsApp reply?",
      a: "Our WhatsApp API webhooks dispatch a personalized confirmation with booking options in under 60 seconds of a customer submitting a form or chat inquiry."
    },
    {
      q: "Does WhatsApp automation reduce clinic and salon no-shows?",
      a: "Yes. Automated reminders sent 24 hours and 2 hours prior to scheduled visits reduce missed appointments by up to 35% across our active Bangalore clients."
    }
  ];

  const faqSchema = getFaqSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Bangalore Hub", item: "https://21techglory.com/locations/bangalore" },
    { name: "WhatsApp Automation", item: "https://21techglory.com/locations/bangalore/whatsapp-automation" }
  ]);

  return (
    <div className="relative min-h-screen text-white bg-[#0B1220] overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      <section className="pt-36 pb-20 md:pt-48 md:pb-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <MessageSquare className="w-4 h-4" /> 24/7 Lead Capture Engine
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            WhatsApp Business Automation & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#4F7DF7] to-purple-500">
              Lead Triage in Bangalore
            </span>
          </h1>

          <p className="text-base md:text-lg text-[#A7B0C0] max-w-3xl mx-auto leading-relaxed">
            Never lose an inquiry in a spreadsheet again. Capture leads instantly from website forms and Google Maps, dispatch automated WhatsApp replies, and sync to your CRM.
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm shadow-lg transition-all inline-flex items-center gap-2"
            >
              Automate My WhatsApp Workflow <ArrowRight className="w-4 h-4" />
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
