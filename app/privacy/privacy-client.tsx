"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ArrowRight } from 'lucide-react';

export default function PrivacyClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sections = [
    {
      icon: Eye,
      title: "1. Information We Collect",
      content: "We collect information you provide directly to us, such as when you request an audit, submit a contact form, start a project, or communicate with our team. This may include your name, email address, phone number, company name, website URL, and details about your technical requirements."
    },
    {
      icon: Lock,
      title: "2. How We Use Your Information",
      content: "We use the information we collect to deliver and improve our development, SEO, and AI automation services. Specifically, we use it to customize your project audits, manage your account, send transaction/project updates, reply to your inquiries, and analyze website traffic to improve user experience."
    },
    {
      icon: Shield,
      title: "3. Data Protection and Security",
      content: "We implement industry-standard technical and organizational security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. We utilize encrypted data transfer protocols (HTTPS/SSL), official API channels, and secure access controls for all client information."
    },
    {
      icon: FileText,
      title: "4. Third-Party Integrations and APIs",
      content: "For certain services (like AI automation and CRM setup), we integrate third-party APIs (including Google API, Meta API, Razorpay, or Slack). We ensure that any client or lead data passed through these integrations complies with strict data safety guidelines and is never sold or used to train public language models."
    }
  ];

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Main Content */}
      <main className="relative pt-36 pb-24 px-6 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <Shield className="w-4 h-4" /> Security & Privacy
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Last Updated: June 14, 2026. This policy describes how we protect your personal and project information at 21TechGlory.
          </motion.p>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/20 transition-all flex flex-col justify-start"
            >
              <div className="p-3 w-fit rounded-2xl bg-white/5 text-cyan-400 mb-6">
                <section.icon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold mb-4">{section.title}</h2>
              <p className="text-sm text-gray-400 leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Legal text details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-invert max-w-none p-8 rounded-3xl bg-white/[0.01] border border-white/5 text-gray-400 space-y-6 text-sm leading-relaxed"
        >
          <h3 className="text-white text-lg font-semibold">5. Your Consent and Rights</h3>
          <p>
            By using our website, you consent to our Privacy Policy. You have the right to request access to the personal information we hold about you, ask for corrections, or request deletion of your information. To exercise these rights, please contact our privacy officer at info@21techglory.com.
          </p>
          <h3 className="text-white text-lg font-semibold">6. Changes to this Policy</h3>
          <p>
            We may update our Privacy Policy from time to time to reflect operational or security improvements. Any changes will be posted directly on this page with an updated modification date. We recommend checking this page regularly to stay informed.
          </p>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 text-center relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Have questions about your data?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 relative z-10 text-sm">
            Reach out to our security team. We are committed to transparency and respect your data privacy rights.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-pointer inline-flex items-center gap-2 relative z-10 text-sm"
          >
            Contact Security Team <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </main>

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
