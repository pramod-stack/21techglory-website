"use client";

import React, { useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Rocket, 
  Smartphone, 
  Layers, 
  Target, 
  ArrowRight, 
  ChevronDown, 
  CheckCircle2, 
  Zap, 
  TrendingUp, 
  ShieldCheck 
} from 'lucide-react';

export default function WebDevClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const servicesList = [
    {
      icon: Code2,
      title: "Custom Web Application Development",
      description: "We design and build bespoke, high-performance web applications tailored to your business operations. No generic templates, no unnecessary bloat—just clean, modular code that runs incredibly fast and scales effortlessly as your business grows."
    },
    {
      icon: Rocket,
      title: "High-Converting Landing Pages",
      description: "Every marketing campaign needs a dedicated landing page designed specifically to convert. We build lightning-fast, high-end landing pages optimized for maximum conversion rate, proper search engine indexing, and direct lead generation."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Responsive Design",
      description: "Over 60% of web traffic originates from mobile devices. We build every interface with a mobile-first philosophy, ensuring seamless responsiveness, natural touch targets, and optimized assets for the fastest loading times on cellular connections."
    },
    {
      icon: Layers,
      title: "Headless CMS & Dynamic Platforms",
      description: "Get full control over your content without sacrificing page speed. We integrate headless content management systems (like Sanity or Contentful) with Next.js, allowing your team to update posts and text in real-time while maintaining 100/100 Lighthouse scores."
    },
    {
      icon: ShieldCheck,
      title: "E-Commerce & Payment Architectures",
      description: "Secure, reliable, and smooth payment funnels. We integrate Stripe, Razorpay, and other merchant gateways directly into your website's custom flow, reducing checkout friction and maximizing payment success rates."
    },
    {
      icon: Target,
      title: "API Integrations & Systems Sync",
      description: "Connect your website directly to your business tools. We automate lead flow by connecting web forms to your CRM (HubSpot, Zoho, Salesforce), email marketing lists, and automated internal tools (Slack, WhatsApp)."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Blueprint",
      description: "We map out your business objectives, target audience, and system requirements to establish a clear architectural roadmap and wireframe structure before writing a single line of code."
    },
    {
      step: "02",
      title: "Bespoke UI/UX Design",
      description: "We design custom, high-fidelity prototypes in Figma, establishing a premium visual identity with fluid layouts, modern typography, and curated color palettes tailored to your brand."
    },
    {
      step: "03",
      title: "Performance-Driven Development",
      description: "We translate approved designs into production-ready code using React, Next.js, and Tailwind CSS. We emphasize semantic HTML, accessibility standards, and clean component structures."
    },
    {
      step: "04",
      title: "SEO & Conversion Optimization",
      description: "We implement full technical SEO, including schema markups, canonical tags, heading hierarchies, meta tags, and speed optimizations, ensuring the website is built to rank on search engines."
    },
    {
      step: "05",
      title: "Deployment & Growth Audit",
      description: "We deploy the website to high-availability global edge servers (Vercel/AWS) and set up analytics tracking to monitor traffic, load times, and conversions for continuous growth."
    }
  ];

  const faqs = [
    {
      q: "Do you use templates like WordPress or Webflow?",
      a: "No, we specialize in custom development using modern frameworks like Next.js and React. While templates are quick to launch, they carry heavy code bloat, load slowly, and limit your ability to scale. Our custom sites load in under 1.5 seconds, are highly secure, and give you unlimited design and functional freedom."
    },
    {
      q: "Will my website be optimized for search engines (SEO)?",
      a: "Absolutely. Every website we build includes complete technical SEO. We write semantic HTML, structure heading elements properly, set up self-referencing canonical tags, integrate FAQ and Organization schema markup, and optimize image assets to ensure maximum indexability and crawlability."
    },
    {
      q: "How does the custom website connect to our CRM or Sales team?",
      a: "We integrate your web forms directly with your internal tools (like HubSpot, Zoho, Salesforce, or Google Sheets) and setup automations so that when a lead fills out a form, your sales team is instantly notified via Slack or WhatsApp, and the client is automatically put into an email sequence."
    },
    {
      q: "What is the typical timeline for a custom web development project?",
      a: "A standard custom website takes between 4 to 6 weeks from strategy to deployment. For complex web applications or larger e-commerce systems, timelines typically range from 6 to 10 weeks depending on features and integrations."
    },
    {
      q: "Do you provide hosting and ongoing maintenance support?",
      a: "Yes. We host your site on high-speed global CDN networks to ensure 99.9% uptime. We also offer ongoing maintenance packages that cover security updates, regular backups, and content tweaks so your site stays fast and secure."
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

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-6"
          >
            <Zap className="w-4 h-4" /> Custom Web Solutions
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            Web Development Services That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Turn Visitors Into Leads</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We build custom, lightning-fast, and search-optimized websites designed specifically to acquire, engage, and convert your ideal business clients. No templates. No clutter. Just pure performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/work"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 hover:border-white/20 transition-all text-center"
            >
              See Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">&lt; 1.5s</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Average Page Load Time</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">+40%</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Conversion Rate Increase</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">100%</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Tailored Custom Codebase</p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Modern Businesses Need More Than Just a Website</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              A website that is slow, confusing, or buried on page 3 of Google is a liability. Your prospective clients make split-second decisions based on credibility, usability, and speed. We build engines that capture intent, build trust, and drive actions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">The Standard Website Problem</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  WordPress plugins bloat code and slow down loading speeds, leading to bounce rates.
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  Generic templates make your business look identical to hundreds of competitors.
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  Zero technical SEO foundations mean search crawlers fail to read and rank your pages.
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  Disconnected forms mean leads sit in spam folders instead of your sales CRM.
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all">
              <h3 className="text-xl font-bold text-purple-400 mb-4">The 21TechGlory Solution</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  Clean React/Next.js files compile to static HTML, achieving 95+ scores.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  Bespoke Figma UI/UX designs reflect your premium branding and market position.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  Schema markups, canonical tags, and clean semantic structures built-in.
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                  Automatic lead pipelines pushing data to CRMs with instant instant notifications.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown Section */}
      <section className="py-24 px-6 relative bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">What’s Included in Our Web Development Services</h2>
            <p className="text-lg text-gray-400">
              We design, develop, secure, and maintain high-performance digital infrastructure built to win sales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-3xl bg-black border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-2xl bg-white/5 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-colors mb-6">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UX & SEO Foundations Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Conversion-Focused UX and SEO Foundations</h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                We design sites that do two things exceptionally well: attract organic search traffic and turn those visitors into high-intent leads. Every codebase we ship complies with modern search algorithms and user behavior heuristics.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Core Web Vitals Mastery</h4>
                    <p className="text-sm text-gray-400">Optimized asset bundles, responsive images, and static pre-rendering ensure passing scores on Google's PageSpeed Insights.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Lead Capture Optimization</h4>
                    <p className="text-sm text-gray-400">Visual hierarchies guide users directly to form completions, booking schedules, or telephone calls with minimal friction.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-cyan-500/10 text-cyan-400 mt-1">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Structured Schema & Meta tags</h4>
                    <p className="text-sm text-gray-400">FAQ, local business, and article schemas are hardcoded to allow search engine bots to instantly index your site details.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-950/20 via-black to-purple-950/20 border border-white/10 overflow-hidden">
              <div className="absolute top-[-10%] right-[-10%] w-60 h-60 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[-10%] w-60 h-60 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Cross-Linking Integration</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Our platforms are completely interconnected. We set up contextual internal link networks across related services so both crawlers and clients can navigate seamlessly:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Prominently links to <Link href="/services/seo" className="text-cyan-400 underline hover:text-cyan-300">SEO Services</Link> to build immediate rank-readiness.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Connects with <Link href="/services/crm" className="text-cyan-400 underline hover:text-cyan-300">CRM Automations</Link> to ensure incoming leads are processed.
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Showcases real examples on our <Link href="/work" className="text-cyan-400 underline hover:text-cyan-300">Work & Case Studies</Link> page.
                </li>
              </ul>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-gray-500">
                🚀 SEO Optimization Tip: Clean internal linking profiles pass PageRank down to specific high-value service pages, magnifying domain authority.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Development Process */}
      <section className="py-24 px-6 relative bg-white/[0.01] border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Website Development Process</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A robust, structured workflow designed to build premium websites on time, without delays or unexpected bugs.
            </p>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12">
                <div className="absolute left-[-17px] top-0 w-8 h-8 rounded-full bg-black border border-cyan-400 flex items-center justify-center text-xs font-bold text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                  {idx + 1}
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-1">Phase {step.step}</span>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Fast, Custom Websites Win More Leads</h2>
            <p className="text-gray-400">Let's look at how our custom techstack stacks up against traditional page builders.</p>
          </div>

          <div className="w-full overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-4 font-bold text-white">Feature / Metric</th>
                  <th className="p-4 font-bold text-cyan-400">21TechGlory Custom Sites</th>
                  <th className="p-4 font-bold text-gray-400">Typical Page Builders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-4 text-sm font-medium text-white">Page Speed / Core Web Vitals</td>
                  <td className="p-4 text-sm text-cyan-400 font-semibold">Under 1.5s (Passed)</td>
                  <td className="p-4 text-sm text-gray-400">3.5s - 6s (Failed)</td>
                </tr>
                <tr>
                  <td className="p-4 text-sm font-medium text-white">Design Flexibility</td>
                  <td className="p-4 text-sm text-cyan-400 font-semibold">100% Unique, Figma Bespoke</td>
                  <td className="p-4 text-sm text-gray-400">Locked to pre-made templates</td>
                </tr>
                <tr>
                  <td className="p-4 text-sm font-medium text-white">Security Vulnerabilities</td>
                  <td className="p-4 text-sm text-cyan-400 font-semibold">High (No plugins to hack)</td>
                  <td className="p-4 text-sm text-gray-400">Low (Frequent WP theme hacks)</td>
                </tr>
                <tr>
                  <td className="p-4 text-sm font-medium text-white">System Integrations</td>
                  <td className="p-4 text-sm text-cyan-400 font-semibold">API-First direct pipelines</td>
                  <td className="p-4 text-sm text-gray-400">Bloated third-party integrations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 px-6 relative bg-white/[0.01] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs About Web Development</h2>
            <p className="text-gray-400">Answers to the most common questions about our custom website design and coding solutions.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-white/10 bg-black overflow-hidden transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex justify-between items-center text-white hover:text-cyan-400 transition-colors focus:outline-none"
                >
                  <span className="font-bold text-base md:text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-cyan-400' : ''}`} />
                </button>
                
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm md:text-base text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build a High-Performance Website?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Let's design and code a custom digital system that puts your company ahead of the competition. Tell us about your project goals.
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all cursor-pointer inline-flex items-center gap-2"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
