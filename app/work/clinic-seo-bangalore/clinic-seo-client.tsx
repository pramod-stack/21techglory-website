"use client";

import React from 'react';
import CaseStudyFlow from '@/components/ui/case-study-flow';

const clinicSeoData = {
  id: "clinic-seo-bangalore",
  client: "Asteria Specialized Healthcare Clinic",
  title: "Bangalore Clinic Local SEO & Google Maps Domination",
  subtitle: "Structuring localized patient-acquisition funnels, automating GMB reviews, and dominating high-intent healthcare search queries.",
  category: "Search Engine Optimization & GMB",
  industry: "Healthcare & Clinics",
  location: "Bangalore, India",
  duration: "8 Weeks",
  stack: ["Next.js", "LocalBusiness Schema", "Google Business Profile API", "Review Automation"],
  businessOverview: "A premier private medical clinic in central Bangalore providing specialized pediatrics, ENT, and family medicine services to surrounding urban neighborhoods.",
  problemSummary: "Despite having highly rated doctors and clean modern facilities, the clinic was practically invisible on Google Maps. Nearby patients searching for local doctors consistently visited competing clinics that had superior Local SEO optimization.",
  problemPoints: [
    "Unranked for high-intent queries like 'pediatrician near me' and 'ENT specialist Bangalore'.",
    "Missing structured LocalBusiness schema and inconsistent citation data across directories.",
    "No systematic post-consultation Google review collection workflow."
  ],
  implementations: [
    {
      area: "MARKETING" as const,
      title: "Google Business Profile Map Pack Optimization",
      description: "Restructured categories, optimized geotagged photos, and aligned primary treatment service descriptions."
    },
    {
      area: "TECHNOLOGY" as const,
      title: "Neighborhood Landing Page Silos",
      description: "Deployed localized Next.js service pages targeting major surrounding neighborhoods with high search volume."
    },
    {
      area: "AUTOMATION" as const,
      title: "WhatsApp 1-Click Review Pipeline",
      description: "Implemented post-visit automated WhatsApp review requests that drove a surge of verified 5-star patient reviews."
    },
    {
      area: "CONVERSION" as const,
      title: "Direct Maps Click-to-Call & WhatsApp",
      description: "Optimized primary GMB call-to-action buttons directly linking to clinic reception desks."
    }
  ],
  beforeFlow: [
    "Nearby Patient Searches 'Clinic Near Me'",
    "Clinic Buried on Page 2 / #14 on Maps",
    "Patient Calls Competitor #1",
    "Zero Inbound Inquiry"
  ],
  afterFlow: [
    "Nearby Patient Searches Treatment",
    "Clinic Shows in Top 3 Map Pack",
    "1-Click WhatsApp / Call Reception",
    "Instant Appointment Slot Confirmed",
    "Patient Consultation & Automated 5-Star Review"
  ],
  outcomes: [
    "Achieved #1 to #3 rankings across 20+ primary medical search queries in Bangalore.",
    "+300% increase in direct inbound phone calls and WhatsApp appointment requests.",
    "Generated 140+ verified 5-star Google patient reviews within 60 days."
  ],
  verifiedMetrics: [
    { label: "Google Maps Rank", value: "#1 Top 3" },
    { label: "Inbound Call Growth", value: "+300%" },
    { label: "Verified 5-Star Reviews", value: "140+" }
  ],
  recommendedPreset: "Local Business",
  recommendedModules: ["website", "seo", "gmb", "whatsapp", "automation"]
};

export default function ClinicSeoClientPage() {
  return <CaseStudyFlow data={clinicSeoData} />;
}
