"use client";
import React from 'react';
import { cn } from '@/lib/utils';
import { Rocket, Shield, Users } from 'lucide-react';
import {
  type FeatureItem,
  PricingTable,
  PricingTableBody,
  PricingTableHeader,
  PricingTableHead,
  PricingTableRow,
  PricingTableCell,
  PricingTablePlan,
} from '@/components/ui/pricing-table';
import { Button } from '@/components/ui/button';

export const FEATURES: FeatureItem[] = [
  {
    label: 'Website / App Build',
    values: ['5-Page Website', 'Custom 10-Page Website', 'Full Custom Web App'],
  },
  {
    label: 'Design',
    values: ['Mobile Responsive', 'Premium Custom', 'Brand Identity Design'],
  },
  {
    label: 'SEO & Local Presence',
    values: ['Basic SEO + GMB Setup', 'Full SEO + GMB Management', 'Advanced SEO & Content'],
  },
  {
    label: 'Lead Capture & Automation',
    values: ['Contact Form + WhatsApp', 'CRM + Lead Automation', 'AI Chatbot + Advanced CRM'],
  },
  {
    label: 'Advertising',
    values: [false, 'Meta / Google Ads', 'Multi-Channel Ads Management'],
  },
  {
    label: 'Reporting',
    values: ['Basic Analytics', 'Monthly Performance Reports', 'Custom Dashboards'],
  },
  {
    label: 'Support & Management',
    values: ['1 Month Free', 'Priority (3 Months)', 'Dedicated Account Manager'],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-black py-24 relative overflow-hidden text-white">
      {/* Background ambient lighting from new design */}
      <div
        className={cn(
          'absolute inset-0 z-0 size-full max-h-[800px] opacity-40',
          '[mask-image:radial-gradient(ellipse_at_center,black,transparent)]'
        )}
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center px-4 mb-16">
        <h2 className="text-3xl leading-tight font-bold text-balance sm:text-5xl text-white">
          {'Transparent Pricing '}
          <br className="md:hidden" />
          <i className="bg-gradient-to-r from-violet-500 via-violet-400 to-fuchsia-400 bg-clip-text font-serif font-extrabold text-transparent drop-shadow-[0_0_18px_rgba(167,139,250,0.55)]">
            {'for Real Results'}
          </i>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl text-pretty text-lg">
          No hidden fees. No fluff. Just systems that bring you customers.
        </p>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        <PricingTable className="mx-auto my-5">
          <PricingTableHeader>
            <PricingTableRow>
              <th />
              <th className="p-1 min-w-[250px]">
                <PricingTablePlan
                  name="Starter"
                  badge="Perfect for new local businesses"
                  price="₹10k+"
                  icon={Shield}
                  className="bg-gray-900/40 border-white/10"
                >
                  <Button variant="outline" className="w-full rounded-lg text-black hover:bg-gray-200 bg-white border-transparent" size="lg">
                    Get Started
                  </Button>
                </PricingTablePlan>
              </th>
              <th className="p-1 min-w-[250px]">
                <PricingTablePlan
                  name="Growth"
                  badge="Most Popular"
                  price="₹20k+"
                  icon={Rocket}
                  className="bg-gray-900/80 border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden"
                >
                  <Button
                    className="w-full rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    size="lg"
                  >
                    Choose Growth Plan
                  </Button>
                </PricingTablePlan>
              </th>
              <th className="p-1 min-w-[250px]">
                <PricingTablePlan
                  name="Agency"
                  badge="Complete digital package"
                  price="Custom"
                  icon={Users}
                  className="bg-gray-900/40 border-white/10"
                >
                  <Button variant="outline" className="w-full rounded-lg text-black hover:bg-gray-200 bg-white border-transparent" size="lg">
                    Contact Us
                  </Button>
                </PricingTablePlan>
              </th>
            </PricingTableRow>
          </PricingTableHeader>
          <PricingTableBody className="[&_tr]:divide-white/10 [&_tr]:border-white/10">
            {FEATURES.map((feature, index) => (
              <PricingTableRow key={index} className="border-white/10 hover:bg-white/5 transition-colors">
                <PricingTableHead className="text-gray-300 font-medium">{feature.label}</PricingTableHead>
                {feature.values.map((value, idx) => (
                  <PricingTableCell key={idx} className="text-gray-400">
                    {value}
                  </PricingTableCell>
                ))}
              </PricingTableRow>
            ))}
          </PricingTableBody>
        </PricingTable>
      </div>
    </section>
  );
}
