"use client";

// {{TODO: review_schema_pending_permission}}

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  date: string;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    name: "{{TODO: testimonial_name_1}}",
    role: "{{TODO: testimonial_role_1}}",
    company: "{{TODO: testimonial_company_1}}",
    quote: "{{TODO: testimonial_quote_1}}",
    rating: 5,
    date: "{{TODO: testimonial_date_1}}",
    project: "Dermatology Clinic Website & SEO"
  },
  {
    name: "{{TODO: testimonial_name_2}}",
    role: "{{TODO: testimonial_role_2}}",
    company: "{{TODO: testimonial_company_2}}",
    quote: "{{TODO: testimonial_quote_2}}",
    rating: 5,
    date: "{{TODO: testimonial_date_2}}",
    project: "Hospital Booking & Portal Integration"
  },
  {
    name: "{{TODO: testimonial_name_3}}",
    role: "{{TODO: testimonial_role_3}}",
    company: "{{TODO: testimonial_company_3}}",
    quote: "{{TODO: testimonial_quote_3}}",
    rating: 5,
    date: "{{TODO: testimonial_date_3}}",
    project: "Skincare E-commerce Speed Optimization"
  },
  {
    name: "{{TODO: testimonial_name_4}}",
    role: "{{TODO: testimonial_role_4}}",
    company: "{{TODO: testimonial_company_4}}",
    quote: "{{TODO: testimonial_quote_4}}",
    rating: 5,
    date: "{{TODO: testimonial_date_4}}",
    project: "E-Commerce PPC Restructuring"
  },
  {
    name: "{{TODO: testimonial_name_5}}",
    role: "{{TODO: testimonial_role_5}}",
    company: "{{TODO: testimonial_company_5}}",
    quote: "{{TODO: testimonial_quote_5}}",
    rating: 5,
    date: "{{TODO: testimonial_date_5}}",
    project: "Local Business SEO Campaign"
  },
  {
    name: "{{TODO: testimonial_name_6}}",
    role: "{{TODO: testimonial_role_6}}",
    company: "{{TODO: testimonial_company_6}}",
    quote: "{{TODO: testimonial_quote_6}}",
    rating: 5,
    date: "{{TODO: testimonial_date_6}}",
    project: "WhatsApp CRM System Setup"
  },
  {
    name: "{{TODO: testimonial_name_7}}",
    role: "{{TODO: testimonial_role_7}}",
    company: "{{TODO: testimonial_company_7}}",
    quote: "{{TODO: testimonial_quote_7}}",
    rating: 5,
    date: "{{TODO: testimonial_date_7}}",
    project: "Vite/Next.js Custom Portal"
  },
  {
    name: "{{TODO: testimonial_name_8}}",
    role: "{{TODO: testimonial_role_8}}",
    company: "{{TODO: testimonial_company_8}}",
    quote: "{{TODO: testimonial_quote_8}}",
    rating: 5,
    date: "{{TODO: testimonial_date_8}}",
    project: "Local GBP Setup & Optimization"
  }
];

export default function TestimonialsClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Ambient background elements */}
      <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[50%] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[50%] h-[60%] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[0%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-36 pb-12 md:pt-48 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <Sparkles className="w-4 h-4" /> Verifiable Satisfaction
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Clients Say</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            We let our performance metrics and system delivery do the talking. Read reports from our partners across digital infrastructure campaigns.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid Section */}
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative rounded-3xl bg-white/[0.01] border border-white/10 hover:border-cyan-500/30 p-8 transition-all hover:bg-white/[0.02]"
              >
                {/* Top star bar */}
                <div className="flex items-center gap-1 text-cyan-400 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan-400" />
                  ))}
                </div>

                {/* Quote block */}
                <div className="relative mb-6">
                  <MessageSquare className="absolute -top-3 -left-3 w-8 h-8 text-white/[0.03] -z-10" />
                  <p className="text-gray-300 text-sm leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/10 my-6" />

                {/* Author Details */}
                <div className="flex flex-col">
                  <h4 className="font-bold text-white text-base">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.role} &bull; {item.company}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[10px] uppercase tracking-wider text-cyan-500 font-semibold px-2 py-0.5 rounded bg-cyan-500/10">
                      {item.project}
                    </span>
                    <span className="text-[10px] text-gray-600">{item.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Callout */}
      <section className="pb-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-neutral-900 to-black border border-white/10 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,#06b6d410,transparent)] pointer-events-none" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Build a High-Converting System?
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Let's launch custom SEO campaigns, build your clinic platforms, or implement lead nurture systems designed for ROI.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold transition-all shadow-lg shadow-cyan-500/20"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
