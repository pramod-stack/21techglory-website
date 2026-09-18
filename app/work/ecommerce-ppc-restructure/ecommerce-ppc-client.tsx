"use client";

import React from 'react';
import CaseStudyFlow from '@/components/ui/case-study-flow';

const ecommercePpcData = {
  id: "ecommerce-ppc-restructure",
  client: "AuraVogue D2C Lifestyle Brand",
  title: "E-Commerce Fashion Brand Paid PPC Restructure",
  subtitle: "Restructuring broad Google Search keywords to exact high-intent queries, setting up pixel attribution, and deploying high-conversion landers.",
  category: "Paid Facebook & Google Ads Campaigns",
  industry: "E-Commerce & D2C",
  location: "Pan-India",
  duration: "6 Weeks",
  stack: ["Google Ads", "Meta Ads Manager", "Next.js Landers", "Server-Side Pixel Tracking"],
  businessOverview: "A fast-growing direct-to-consumer apparel and lifestyle brand targeting fashion-conscious urban professionals across tier-1 Indian metros.",
  problemSummary: "The brand was spending heavily on Google and Meta ads with diminishing returns. Broad-match keywords drained ad budgets on irrelevant searches, and landing page bounce rates hovered above 65%.",
  problemPoints: [
    "High Customer Acquisition Cost (CAC) driven by loose broad match keyword targeting.",
    "Generic collection pages loading slowly on mobile 4G connections.",
    "Broken attribution tracking leading to wasted ad spend on unoptimized channels."
  ],
  implementations: [
    {
      area: "MARKETING" as const,
      title: "Exact Intent Search Query Architecture",
      description: "Restructured Google Ads campaigns to focus strictly on high-intent transactional buyer keywords with negative keyword filters."
    },
    {
      area: "CONVERSION" as const,
      title: "Sub-Second Next.js Product Landers",
      description: "Designed dedicated, high-speed single-product landers tailored to specific ad creative angles."
    },
    {
      area: "TECHNOLOGY" as const,
      title: "Server-Side Conversions API (CAPI)",
      description: "Implemented server-side pixel tracking to ensure 100% accurate purchase attribution and ROAS measurement."
    },
    {
      area: "AUTOMATION" as const,
      title: "WhatsApp Abandoned Cart Recovery",
      description: "Automated instant WhatsApp reminders for visitors who dropped off during checkout."
    }
  ],
  beforeFlow: [
    "Broad Paid Ad Click",
    "Slow Generic Home Page",
    "Unclear Product Value",
    "High Bounce (>65%)",
    "Wasted Ad Budget"
  ],
  afterFlow: [
    "Exact Intent PPC Ad",
    "Instant Dedicated Product Lander",
    "1-Click Checkout / WhatsApp Order",
    "Server-Side Conversion Logged",
    "Automated Cart Recovery Sync",
    "Profitable Scaled Purchase"
  ],
  outcomes: [
    "ROAS scaled from 1.8x to a profitable 4.2x within 45 days.",
    "Customer Acquisition Cost reduced by 38% through exact query filtering.",
    "+28% recovery of previously abandoned carts via automated WhatsApp sequences."
  ],
  verifiedMetrics: [
    { label: "ROAS Multiplier", value: "4.2x" },
    { label: "Acquisition Cost Reduction", value: "-38%" },
    { label: "Cart Recovery", value: "+28%" }
  ],
  recommendedPreset: "E-commerce",
  recommendedModules: ["website", "ads", "analytics", "whatsapp", "automation"]
};

export default function EcommercePpcClientPage() {
  return <CaseStudyFlow data={ecommercePpcData} />;
}
