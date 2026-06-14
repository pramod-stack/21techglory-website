"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import OnboardingForm from '@/components/ui/multistep-form';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  PhoneCall, 
  Sparkles 
} from 'lucide-react';

export default function ContactClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stepsList = [
    {
      title: "Direct Specialist Review",
      description: "Our technical leads review your site speed, SEO signals, and current lead flow within 24 hours."
    },
    {
      title: "Technical Consultation",
      description: "A 30-minute strategic mapping session detailing exact opportunities for speed and lead capture improvements."
    },
    {
      title: "Bespoke System Proposal",
      description: "You receive a transparent project proposal containing fixed timelines, exact tech choices, and direct ROI metrics."
    }
  ];

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-20%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Header Section */}
      <section className="relative pt-36 pb-12 md:pt-48 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <Sparkles className="w-4 h-4" /> Start Your Conversion Engine
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Contact Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Growth Engineers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Submit your goals and operational requirements below. Our technical specialists will build your project roadmap.
          </motion.p>
        </div>
      </section>

      {/* Form and Contact Info Grid */}
      <section className="pb-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Details & Journey */}
          <div className="lg:col-span-5 space-y-10">
            {/* Contact Details */}
            <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Direct Contact</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white/5 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-300">Email Address</h4>
                  <p className="text-white text-base">pramodn276@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white/5 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-300">Office Location</h4>
                  <p className="text-white text-base">Bangalore, Karnataka, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white/5 text-cyan-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-300">Response Hours</h4>
                  <p className="text-white text-base">Mon - Sat: 9:00 AM - 7:00 PM IST</p>
                  <p className="text-xs text-gray-500 mt-1">Inbound form entries reviewed 24/7</p>
                </div>
              </div>
            </div>

            {/* Journey steps */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white px-2">What Happens Next?</h3>
              <div className="space-y-6">
                {stepsList.map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </div>
                      {idx < stepsList.length - 1 && (
                        <div className="w-[1px] h-12 bg-white/10 mt-2" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Multi-step Onboarding Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white/[0.01] border border-white/10 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black pointer-events-none z-0" />
            <div className="relative z-10 p-4 sm:p-6">
              <div className="text-center pt-8">
                <h3 className="text-2xl font-bold text-white mb-2">Project Intake Form</h3>
                <p className="text-sm text-gray-400">Let's collect project scope, design parameters, and timelines.</p>
              </div>
              
              <OnboardingForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
