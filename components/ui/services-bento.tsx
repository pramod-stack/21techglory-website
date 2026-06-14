"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code2, Search, MapPin, Bot, PenTool, LayoutTemplate, MessageCircle, BarChart3 } from 'lucide-react';

const services = [
  {
    title: "AI Automation",
    description: "Save 20+ hours a week. We build AI systems that handle customer support, lead qualification, and boring repetitive tasks.",
    icon: Bot,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-900/40 to-black",
    metric: "24/7 Operations",
    href: "/services/ai-automation"
  },
  {
    title: "Website Development",
    description: "High-converting, lightning-fast websites that turn visitors into paying customers. No generic templates.",
    icon: Code2,
    className: "bg-white/[0.03]",
    metric: "+40% Conversion",
    href: "/services/web-development"
  },
  {
    title: "Google Business Optimization",
    description: "Rank #1 on Google Maps in your local area. Perfect for clinics and PGs.",
    icon: MapPin,
    className: "bg-white/[0.03]",
    metric: "Local Dominance",
    href: "/services/seo"
  },
  {
    title: "Local SEO",
    description: "Dominate search results when people in your city look for your services.",
    icon: Search,
    className: "bg-white/[0.03]",
    metric: "Organic Traffic",
    href: "/services/seo"
  },
  {
    title: "SaaS Development",
    description: "Custom web applications and internal tools to scale your operations securely.",
    icon: LayoutTemplate,
    className: "md:col-span-2 bg-gradient-to-br from-cyan-900/40 to-black",
    metric: "Enterprise Grade",
    href: "/services/web-development"
  },
  {
    title: "WhatsApp Automation",
    description: "Automate follow-ups, appointment bookings, and reminders directly on WhatsApp.",
    icon: MessageCircle,
    className: "bg-white/[0.03]",
    metric: "98% Open Rate",
    href: "/services/ai-automation"
  },
  {
    title: "Performance Marketing",
    description: "Data-driven ad campaigns on Google & Meta that guarantee positive ROI.",
    icon: BarChart3,
    className: "bg-white/[0.03]",
    metric: "ROI Focused",
    href: "/services/paid-ads"
  },
  {
    title: "Branding",
    description: "Premium visual identities that make your business look like a million-dollar company.",
    icon: PenTool,
    className: "bg-white/[0.03]",
    metric: "Brand Trust",
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
            We don't just build websites. We build automated growth engines that help you acquire, convert, and retain more customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-4">
          {services.map((service, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className={`group relative rounded-3xl p-6 border border-white/10 overflow-hidden hover:border-white/20 transition-all ${service.className}`}
            >
              <Link href={service.href} className="absolute inset-0 z-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative h-full flex flex-col z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-2xl bg-black/50 border border-white/10 text-cyan-400 group-hover:scale-110 group-hover:text-purple-400 transition-all">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5">
                    {service.metric}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-400 mt-auto leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
