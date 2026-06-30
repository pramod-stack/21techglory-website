"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { getFaqSchema } from '@/lib/schema/faq';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqInPostProps {
  faqs: FaqItem[];
}

export default function FaqInPost({ faqs }: FaqInPostProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schema = getFaqSchema(faqs);

  return (
    <div className="my-12 p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-3xl backdrop-blur-md relative overflow-hidden">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -z-10" />
      
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
          <HelpCircle className="w-5 h-5" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen ? 'bg-white/[0.02] border-white/10' : 'bg-transparent'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer group"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-white group-hover:text-cyan-400 transition-colors text-base md:text-lg">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    isOpen ? 'rotate-180 text-cyan-400' : ''
                  }`}
                />
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-1 border-t border-white/5 text-gray-300 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
