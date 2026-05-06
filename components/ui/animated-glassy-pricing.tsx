"use client";
import React from "react";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    planName: 'Starter',
    description: 'Perfect for new & small local businesses.',
    price: '10k+',
    features: [
      '5-Page Professional Website',
      'Google My Business Setup',
      'Basic SEO Optimization',
      'Mobile Responsive Design',
      'Contact Form + WhatsApp Button',
      '1 Month Free Support'
    ],
    buttonText: 'Get Started',
    buttonVariant: 'secondary'
  },
  {
    planName: 'Growth',
    description: 'For businesses ready to scale fast.',
    price: '20k+',
    features: [
      'Custom 10-Page Website',
      'Full SEO + GMB Management',
      'Meta / Google Ads Management',
      'CRM + Lead Automation Setup',
      'Monthly Performance Reports',
      'Priority Support (3 Months)'
    ],
    buttonText: 'Choose Growth Plan',
    isPopular: true,
    buttonVariant: 'primary'
  },
  {
    planName: 'Agency',
    description: 'Complete digital transformation package.',
    price: 'Customizable',
    features: [
      'Full Custom Web Application',
      'AI Chatbot + Automation Suite',
      'Multi-Channel Ads Management',
      'Advanced CRM + Sales Funnel',
      'Brand Identity Design',
      'Dedicated Account Manager'
    ],
    buttonText: 'Contact Us',
    buttonVariant: 'primary'
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-black py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Transparent Pricing for Real Results
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            No hidden fees. No fluff. Just systems that bring you customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.planName}
              className={`relative flex flex-col p-8 rounded-3xl backdrop-blur-md border transition-all duration-300 hover:-translate-y-2
                ${plan.isPopular 
                  ? 'bg-gray-900/80 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] scale-105 z-10' 
                  : 'bg-gray-900/40 border-white/10 hover:border-white/20'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.planName}</h3>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  {plan.price !== 'Customizable' && <span className="text-4xl font-bold text-white">₹</span>}
                  <span className={`font-black text-white tracking-tighter ${plan.price === 'Customizable' ? 'text-4xl' : 'text-6xl'}`}>{plan.price}</span>
                </div>
              </div>

              <ul className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check className={`w-5 h-5 shrink-0 ${plan.isPopular ? 'text-cyan-400' : 'text-purple-400'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300
                  ${plan.isPopular 
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]' 
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
