import { Metadata } from 'next';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';
import { getServiceSchema } from '@/lib/schema/service';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import Link from 'next/link';
import { 
  Dumbbell, 
  Sparkles, 
  MapPin, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare,
  Search,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Fitness & Gym Website Development, Local SEO & Member Growth | 21TechGlory",
  description: "Scale your fitness center, gym, or yoga studio with sub-second website design, Google Maps local SEO dominance, automated trial bookings, and WhatsApp lead capture.",
  alternates: {
    canonical: "https://21techglory.com/industries/fitness-gyms",
  },
  openGraph: {
    title: "Fitness & Gym Website Development & Lead Engine | 21TechGlory",
    description: "Scale your fitness center or gym with high-converting websites, local SEO, and automated trial bookings.",
    url: "https://21techglory.com/industries/fitness-gyms",
    type: "website",
  }
};

export default function FitnessGymsPage() {
  const faqs = [
    {
      q: "How does 21TechGlory help gyms increase membership trial bookings?",
      a: "We engineer high-speed Next.js landing pages with direct 1-click WhatsApp and online trial booking flows. We pair this with Google Maps optimization to rank your gym #1 when nearby fitness enthusiasts search 'gyms near me'."
    },
    {
      q: "Can you automate trial workout reminders on WhatsApp?",
      a: "Yes. When a prospect books a trial workout, our system sends an instant WhatsApp confirmation, followed by automated reminders 2 hours before the workout to minimize no-shows."
    },
    {
      q: "What makes your gym websites different from generic WordPress templates?",
      a: "Our gym platforms load in under 1.2 seconds, feature high-impact cinematic aesthetics, and include integrated membership calculators and review collection sequences."
    }
  ];

  const faqSchema = getFaqSchema(faqs);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Industries", item: "https://21techglory.com/industries" },
    { name: "Fitness & Gyms", item: "https://21techglory.com/industries/fitness-gyms" }
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

      {/* Hero Section */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Dumbbell className="w-4 h-4" /> Gym & Fitness Growth Engine
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            High-Performance Websites & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
              Lead Engines for Gyms & Fitness Centers
            </span>
          </h1>

          <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Turn nearby fitness searches into paying gym members. We build sub-second websites, rank you #1 on Google Maps, and automate trial workout bookings on WhatsApp.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/work/liger-fitness"
              className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all inline-flex items-center gap-2"
            >
              View Liger Fitness Case Study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Registry Proof */}
      <section className="py-16 px-6 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Live Production Benchmark
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mt-1">
              Featured Client: Liger Fitness
            </h2>
          </div>

          <div className="p-8 rounded-3xl bg-neutral-950 border border-cyan-500/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-cyan-300 font-bold px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30">
                +180% Verified Trial Bookings
              </span>
              <h3 className="text-2xl font-bold text-white">
                How We Ranked Liger Fitness #1 in Local Maps & Built Their Automated Trial Engine
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                By replacing sluggish third-party links with a custom sub-second Next.js portal and direct WhatsApp trial confirmations, Liger Fitness transformed their online inquiry volume.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  href="/work/liger-fitness" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                >
                  Read Full 6-Step Breakdown <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://www.ligerfitness.co.in/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white"
                >
                  Visit Live Site <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <div className="text-2xl font-black text-cyan-400 font-mono">+180%</div>
                <div className="text-xs text-gray-400 mt-1">Trial Bookings</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <div className="text-2xl font-black text-purple-400 font-mono">&lt;1.2s</div>
                <div className="text-xs text-gray-400 mt-1">Mobile Speed</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <div className="text-2xl font-black text-emerald-400 font-mono">#1</div>
                <div className="text-xs text-gray-400 mt-1">Google Maps</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <div className="text-2xl font-black text-pink-400 font-mono">24/7</div>
                <div className="text-xs text-gray-400 mt-1">WhatsApp Sync</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-sm text-gray-400 mt-1">Fitness and gym digital marketing answered clearly.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-neutral-950 border border-white/10 space-y-2">
                <h4 className="text-base font-bold text-white">{faq.q}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
