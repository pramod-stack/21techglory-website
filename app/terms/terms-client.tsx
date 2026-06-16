"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import { motion } from 'framer-motion';
import { FileText, FileCheck, DollarSign, Clock, ArrowRight } from 'lucide-react';

export default function TermsClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sections = [
    {
      icon: FileText,
      title: "1. Service Scope and Deliverables",
      content: "21TechGlory provides custom web development, search engine optimization (SEO), and AI automation integration services. The specific scope, deliverables, and timeline of each project are defined in the signed Project Proposal or Statement of Work (SOW)."
    },
    {
      icon: FileCheck,
      title: "2. Code and Asset Ownership",
      content: "Upon full payment of all project fees, you obtain 100% ownership of the custom codebase, graphics, and integrations built for your project. 21TechGlory retains no ownership rights over your custom software or marketing accounts."
    },
    {
      icon: DollarSign,
      title: "3. Fees, Billing, and Payments",
      content: "Project fees and payment schedules (such as advance deposits and milestone payments) are outlined in the SOW. Payments are processed securely. Delayed payments may result in a temporary suspension of project development or campaign operations."
    },
    {
      icon: Clock,
      title: "4. Timelines and Delays",
      content: "We make every effort to meet project deadlines. However, timelines are dependent on timely feedback, approval, and assets provided by the client. Delays in receiving client materials may result in proportional shifts in delivery dates."
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
            <FileText className="w-4 h-4" /> Terms of Service
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Terms & Conditions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Last Updated: June 14, 2026. Please read these terms carefully before partner-boarding or initiating a project with 21TechGlory.
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
          <h3 className="text-white text-lg font-semibold">5. Limitation of Liability</h3>
          <p>
            To the maximum extent permitted by law, 21TechGlory will not be liable for any indirect, incidental, special, or consequential damages (including loss of profits, revenue, or business data) arising out of or in connection with the use of our services or website.
          </p>
          <h3 className="text-white text-lg font-semibold">6. Termination of Service</h3>
          <p>
            Either party may terminate a project or agreement if the other party breaches any material term of the agreement or SOW and fails to cure such breach within 14 days of written notice. Upon termination, client will be billed for all work completed up to the date of termination.
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Ready to initiate your project agreement?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 relative z-10 text-sm">
            Contact our business onboarding desk to request a custom Project Proposal and Statement of Work tailored to your growth goals.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all cursor-pointer inline-flex items-center gap-2 relative z-10 text-sm"
          >
            Start Onboarding Request <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </main>

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
