"use client";

import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ComparisonRow {
  feature: string;
  agency: {
    included: boolean;
    text: string;
  };
  competitor: {
    included: boolean;
    text: string;
  };
}

interface ComparisonTableProps {
  title?: string;
  subtitle?: string;
  rows: ComparisonRow[];
}

export default function ComparisonTable({
  title = "Why Service Businesses Choose 21TechGlory",
  subtitle = "How our specialized engineering stack compares to traditional generalist agencies",
  rows,
}: ComparisonTableProps) {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-md shadow-2xl"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="p-6 text-sm font-bold tracking-wider text-gray-400 uppercase">Capabilities & Features</th>
                <th className="p-6 text-sm font-bold tracking-wider text-cyan-400 uppercase bg-cyan-950/10">21TechGlory System</th>
                <th className="p-6 text-sm font-bold tracking-wider text-gray-500 uppercase">Traditional SEO Agency</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="p-6 align-middle font-medium text-white text-base md:text-lg">
                    {row.feature}
                  </td>
                  <td className="p-6 align-middle bg-cyan-950/5">
                    <div className="flex items-start gap-2.5">
                      {row.agency.included ? (
                        <Check className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm md:text-base text-gray-300">
                        {row.agency.text}
                      </span>
                    </div>
                  </td>
                  <td className="p-6 align-middle">
                    <div className="flex items-start gap-2.5">
                      {row.competitor.included ? (
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm md:text-base text-gray-500">
                        {row.competitor.text}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
