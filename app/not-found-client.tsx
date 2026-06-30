"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, HelpCircle, Code2, ShieldAlert, ArrowUpRight } from 'lucide-react';

export default function NotFoundClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const quickLinks = [
    {
      title: "Our Services Hub",
      description: "Explore custom web development, local SEO, GMB optimization, AI workflows, CRM, and paid PPC ads.",
      href: "/services",
      color: "from-cyan-500/10 to-cyan-500/0",
      borderColor: "group-hover:border-cyan-500/30",
      icon: Code2,
    },
    {
      title: "Clinics & Hospitals",
      description: "Custom medical websites, patient booking automations, HIPAA security considerations, and local rankings.",
      href: "/industries/clinics-hospitals",
      color: "from-purple-500/10 to-purple-500/0",
      borderColor: "group-hover:border-purple-500/30",
      icon: ShieldAlert,
    },
    {
      title: "Salons & Spas",
      description: "Local SEO dominance, Google Business Profile maps optimization, review campaigns, and appointment funnels.",
      href: "/industries/salons-spas",
      color: "from-cyan-500/10 to-cyan-500/0",
      borderColor: "group-hover:border-cyan-500/30",
      icon: ArrowRight,
    },
    {
      title: "Contact Our Specialists",
      description: "Speak directly with our technical development and search engine optimization team.",
      href: "/contact",
      color: "from-purple-500/10 to-purple-500/0",
      borderColor: "group-hover:border-purple-500/30",
      icon: HelpCircle,
    }
  ];

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden flex flex-col justify-between">
      {/* Background ambient elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Main Content */}
      <main className="relative z-10 flex-grow pt-36 pb-20 px-6 max-w-7xl mx-auto w-full flex flex-col justify-center items-center">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-500 mx-auto mb-8 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
          >
            <ShieldAlert className="w-10 h-10" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            404 — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Page Not Found</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8"
          >
            The route you are trying to access does not exist or has been permanently moved to a new URL mapping. Let's get you back on track.
          </motion.p>
        </div>

        {/* Quick Links Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl"
        >
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link key={index} href={link.href} className="group relative block p-6 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all overflow-hidden">
                {/* Hover gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="relative z-10 flex gap-4">
                  <div className="p-3 rounded-2xl bg-white/5 text-cyan-400 group-hover:text-purple-400 transition-colors shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-1 group-hover:text-cyan-300 transition-colors">
                      {link.title} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">{link.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </motion.div>

        {/* Back Home CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/"
            className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex items-center justify-center gap-2"
          >
            Back to Homepage
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-all"
          >
            Start Your Project
          </button>
        </motion.div>
      </main>

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
