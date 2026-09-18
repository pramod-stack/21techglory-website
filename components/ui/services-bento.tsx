"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code2, Search, MapPin, Bot, PenTool, LayoutTemplate, MessageCircle, BarChart3, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "AI Automation",
    description: "Save 20+ hours a week. We build AI systems that handle customer support, lead qualification, and routine operations.",
    businessMeaning: "Your business responds, qualifies, and follows up even while you sleep.",
    icon: Bot,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-900/40 to-black",
    metric: "24/7 Lead Capture",
    href: "/services/ai-automation"
  },
  {
    title: "Website Development",
    description: "High-converting, sub-second websites built on custom Next.js architecture.",
    businessMeaning: "Your customer gets a premium experience on every device — and your team gets a lead machine, not a brochure.",
    icon: Code2,
    className: "bg-white/[0.03]",
    metric: "<1.2s Load Speed",
    href: "/services/web-development"
  },
  {
    title: "Google Business & GMB",
    description: "Rank #1 on Google Maps in your local area and capture nearby patients and customers.",
    businessMeaning: "You become the obvious #1 choice when nearby customers search.",
    icon: MapPin,
    className: "bg-white/[0.03]",
    metric: "#1 Local Maps",
    href: "/services/google-business-profile-optimization"
  },
  {
    title: "Local SEO Dominance",
    description: "Ethical organic ranking campaigns targeting high-intent buyer searches in your city.",
    businessMeaning: "Continuous stream of organic, high-ticket inbound calls without paying per click.",
    icon: Search,
    className: "bg-white/[0.03]",
    metric: "Organic Traffic",
    href: "/services/local-seo"
  },
  {
    title: "CRM & Pipeline Automation",
    description: "Custom deal pipelines and intake systems linked directly to your team's workflows.",
    businessMeaning: "No prospect disappears into a messy spreadsheet or missed chat thread again.",
    icon: LayoutTemplate,
    className: "md:col-span-2 bg-gradient-to-br from-cyan-900/40 to-black",
    metric: "Zero Lead Loss",
    href: "/services/crm"
  },
  {
    title: "WhatsApp Business Automation",
    description: "Automate appointment reminders, booking confirmations, and instant lead replies directly on WhatsApp.",
    businessMeaning: "98% open rates and immediate engagement inside your customer's favorite app.",
    icon: MessageCircle,
    className: "bg-white/[0.03]",
    metric: "98% Open Rate",
    href: "/services/ai-automation"
  },
  {
    title: "Performance Ads (PPC)",
    description: "Data-driven ad campaigns across Google Search & Meta with conversion tracking.",
    businessMeaning: "Predictable customer acquisition scaled to measurable positive ROI.",
    icon: BarChart3,
    className: "bg-white/[0.03]",
    metric: "ROI Focused",
    href: "/services/paid-ads"
  },
  {
    title: "Authority Branding",
    description: "Premium visual identities and design language that position you as the market leader.",
    businessMeaning: "Command premium pricing and establish immediate trust before the first call.",
    icon: PenTool,
    className: "bg-white/[0.03]",
    metric: "Market Leader",
    href: "/about"
  }
];

export default function ServicesBento() {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Digital Infrastructure for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Modern Businesses</span>
          </h2>
          <p className="text-lg text-gray-400">
            We don't just build websites. We build automated growth engines that help you attract, convert, and retain more customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-auto md:auto-rows-[280px] gap-6">
          {services.map((service, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              key={i}
              className={`group relative rounded-3xl p-6 border border-white/10 overflow-hidden hover:border-white/25 transition-all flex flex-col justify-between ${service.className}`}
            >
              <Link href={service.href} className="absolute inset-0 z-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-2xl bg-black/60 border border-white/10 text-cyan-400 group-hover:scale-105 group-hover:text-purple-400 transition-all">
                      <service.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-cyan-300 border border-white/10">
                      {service.metric}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors mb-3">
                    {service.description}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-gray-300 leading-snug">
                  <span className="text-cyan-400 font-bold uppercase tracking-wider block mb-1">For your business:</span>
                  {service.businessMeaning}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
