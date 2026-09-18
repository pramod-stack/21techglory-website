"use client";

import React from 'react';
import CaseStudyFlow from '@/components/ui/case-study-flow';

const skincareData = {
  id: "skincare-website-conversion",
  client: "DermaElite Aesthetic Clinic",
  title: "Premium Skincare Clinic Conversion Website",
  subtitle: "Rebuilding sluggish legacy websites with Next.js App Router, optimizing Core Web Vitals to sub-second load times, and boosting patient bookings.",
  category: "Conversion Design & Web Development",
  industry: "Beauty & Dermatology",
  location: "Bangalore, India",
  duration: "4 Weeks",
  stack: ["Next.js App Router", "Tailwind CSS", "Framer Motion", "WhatsApp API"],
  businessOverview: "A specialized Bangalore aesthetic dermatology practice offering premium skin rejuvenation, laser therapy, and clinical skincare consultations. They needed a luxury digital experience that matched their clinic standard.",
  problemSummary: "The clinic's legacy WordPress platform suffered from 3.8s load times, plugin script collisions, and high mobile bounce rates that cost them hundreds of prospective patient bookings every month.",
  problemPoints: [
    "Slow initial page load (~3.8s LCP on mobile) causing 60%+ visitor abandonment.",
    "Unresponsive multi-step booking forms that failed on mobile devices.",
    "Console errors and plugin conflicts preventing WhatsApp chat widget from loading."
  ],
  implementations: [
    {
      area: "DESIGN" as const,
      title: "Luxury Clinical Visual Architecture",
      description: "Designed a clean, clinical aesthetic with treatment previews, dermatologist profiles, and patient transformation galleries."
    },
    {
      area: "TECHNOLOGY" as const,
      title: "Sub-Second Next.js Frontend",
      description: "Re-engineered frontend using Next.js Server Components, cutting LCP to under 1.1s and scoring 99+ on Lighthouse."
    },
    {
      area: "CONVERSION" as const,
      title: "Frictionless 3-Click Intake Modal",
      description: "Replaced heavy plugin forms with a lightweight React modal allowing patients to choose procedures and consultation slots instantly."
    },
    {
      area: "AUTOMATION" as const,
      title: "WhatsApp Booking Notification",
      description: "Integrated direct WhatsApp alert pipeline sending patient booking parameters to clinic coordinators in real time."
    }
  ],
  beforeFlow: [
    "Google / Instagram Visitor",
    "Slow WordPress Load (>3.5s)",
    "Clunky 10-Field Form",
    "No Confirmation",
    "Patient Abandons"
  ],
  afterFlow: [
    "Targeted Search / Referral",
    "Instant <1.1s Mobile Paint",
    "3-Click Procedure Intake",
    "Instant WhatsApp Confirmation",
    "Auto-Reminder Sent 2h Before",
    "Consultation Completed"
  ],
  outcomes: [
    "Sub-second load times (<1.1s LCP) across all mobile devices.",
    "+45% increase in verified patient consultation bookings.",
    "Zero script crashes or intake submission drop-offs."
  ],
  verifiedMetrics: [
    { label: "Bookings Increase", value: "+45%" },
    { label: "Mobile LCP", value: "<1.1s" },
    { label: "Lighthouse Score", value: "99/100" }
  ],
  recommendedPreset: "Clinic / Salon",
  recommendedModules: ["website", "gmb", "booking", "whatsapp", "crm"]
};

export default function SkincareWebsiteClientPage() {
  return <CaseStudyFlow data={skincareData} />;
}
