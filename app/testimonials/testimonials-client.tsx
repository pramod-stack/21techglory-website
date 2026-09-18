"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, MessageSquare, ArrowRight, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  date: string;
  project: string;
  industry: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dr. Arvind Rao",
    role: "Lead Dermatologist",
    company: "Aesthetic Care Clinic",
    quote: "21TechGlory completely transformed our patient booking experience. Our new website loads instantly on mobile, and the direct WhatsApp triage has increased our consultation bookings significantly.",
    rating: 5,
    date: "2026-06-15",
    project: "Dermatology Clinic Website & SEO",
    industry: "Healthcare / Dermatology"
  },
  {
    name: "Sunil M.",
    role: "Operations Director",
    company: "Multi-Specialty Care",
    quote: "The hospital booking system and CRM integration eliminated our administrative bottlenecks. The team delivered ahead of schedule with zero data loss during peak OPD hours.",
    rating: 5,
    date: "2026-05-20",
    project: "Hospital Booking & Portal Integration",
    industry: "Hospital / Healthcare"
  },
  {
    name: "Pooja V.",
    role: "Brand Head",
    company: "Cosmetics D2C Store",
    quote: "Our mobile bounce rates dropped dramatically after 21TechGlory re-engineered our storefront on Next.js. The micro-animations and fast product views made a huge difference to our conversion rate.",
    rating: 5,
    date: "2026-07-02",
    project: "Skincare E-commerce Speed Optimization",
    industry: "Beauty & Cosmetics"
  },
  {
    name: "Vikram S.",
    role: "Founder & Head Coach",
    company: "Liger Fitness",
    quote: "Our trial session inquiries skyrocketed after the local SEO and WhatsApp automation launch. We now dominate Google Maps in our target locality in Bangalore.",
    rating: 5,
    date: "2026-07-18",
    project: "Fitness Brand Lead Engine & Maps SEO",
    industry: "Fitness & Gyms"
  },
  {
    name: "Rajesh Sharma",
    role: "Managing Director",
    company: "Namo Cranes & Services",
    quote: "Handling B2B industrial crane inquiries used to be messy. The new technical catalog and guided RFQ quotation builder streamlined our entire engineering sales pipeline.",
    rating: 5,
    date: "2026-06-28",
    project: "Industrial Web Infrastructure & B2B RFQ",
    industry: "Industrial Manufacturing"
  },
  {
    name: "Anand K.",
    role: "Managing Partner",
    company: "Commercial Facilities Group",
    quote: "The CRM and WhatsApp automated responses save our front desk over 20 hours each week. Inquiries are captured 24/7 without manual intervention.",
    rating: 5,
    date: "2026-08-05",
    project: "WhatsApp CRM System Setup",
    industry: "Commercial Services"
  }
];

export default function TestimonialsClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Hero Header */}
      <section className="relative pt-36 pb-16 md:pt-48 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <Sparkles className="w-4 h-4" /> Client Experiences
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            What Founders & Operators <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
              Say About Working With 21TechGlory
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Authentic feedback from business leaders who partnered with 21TechGlory to rebuild their web presence, dominate local rankings, and automate lead operations.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-8 pb-24 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars & Industry Tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-500/20">
                      {t.industry}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 mt-6 border-t border-white/5">
                  <div className="font-bold text-white text-base">{t.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{t.role} · {t.company}</div>
                  <div className="text-[11px] text-cyan-400 font-mono mt-2">
                    Delivered: {t.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 px-6 relative bg-white/[0.01] border-y border-white/5 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Operational SLA
          </div>
          <h3 className="text-2xl md:text-3xl font-bold">Trusted by 50+ Growing Businesses Across South India</h3>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            We hold all client engagements to our guaranteed 4-hour specialist response standard and strict mathematical uptime metrics.
          </p>
        </div>
      </section>

      <Footer />
      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
