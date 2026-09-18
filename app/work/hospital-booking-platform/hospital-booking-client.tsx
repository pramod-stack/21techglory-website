"use client";

import React from 'react';
import CaseStudyFlow from '@/components/ui/case-study-flow';

const hospitalData = {
  id: "hospital-booking-platform",
  client: "CarePulse Multi-Specialty Hospital",
  title: "Multi-Specialty Hospital Booking Platform",
  subtitle: "Developing secure custom scheduling portals, integrating automated CRM pipelines, and eliminating appointment abandonment.",
  category: "Custom Software & CRM Automation",
  industry: "Healthcare & Medical",
  location: "Bangalore, India",
  duration: "6 Weeks",
  stack: ["Next.js", "TypeScript", "HubSpot API", "Serverless Functions", "PostgreSQL Buffer"],
  businessOverview: "A 120-bed multi-specialty healthcare facility operating outpatient departments across cardiology, orthopedics, neurology, and pediatrics, processing over 300 daily patient inquiries.",
  problemSummary: "The hospital's patient intake was burdened by fragmented spreadsheets and manual data entry. Nearly 25% of submitted patient requests suffered from delayed routing, and coordinators struggled to follow up promptly.",
  problemPoints: [
    "High booking dropout: patients abandoned complicated, slow multi-page intake forms.",
    "Manual routing delay: administrative staff spent 3+ hours daily retyping patient details into CRM systems.",
    "Data loss risks during peak OPD hours when servers hit connection limits."
  ],
  implementations: [
    {
      area: "DESIGN" as const,
      title: "Mobile-First Patient Intake UI",
      description: "Designed an intuitive 3-step triage and department selector with clear doctor schedules and location options."
    },
    {
      area: "TECHNOLOGY" as const,
      title: "Resilient Serverless API & Queue",
      description: "Implemented queue-buffered database endpoints ensuring zero form loss even during hospital peak traffic."
    },
    {
      area: "AUTOMATION" as const,
      title: "Instant HubSpot CRM Sync",
      description: "Automated direct patient deal card generation in HubSpot within 500ms of form submission."
    },
    {
      area: "CONVERSION" as const,
      title: "Real-Time Coordinator Webhook Alerts",
      description: "Configured automated WhatsApp and SMS alerts to desk teams, reducing patient contact time to under 5 minutes."
    }
  ],
  beforeFlow: [
    "Patient Searches OPD",
    "Complicated 5-Page Form",
    "Data Sent to Unchecked Email",
    "Manual Entry into Sheets",
    "Patient Calls Another Hospital"
  ],
  afterFlow: [
    "Patient Searches OPD",
    "Fast 3-Step Department Picker",
    "Instant Queue Buffer",
    "HubSpot Deal Card Created",
    "Coordinator WhatsApp Alert <5m",
    "Confirmed OPD Consultation"
  ],
  outcomes: [
    "0% intake data loss achieved through resilient serverless buffer design.",
    "+60% increase in verified patient appointment bookings.",
    "Intake coordination time dropped from 3 hours to instantaneous automated sync."
  ],
  verifiedMetrics: [
    { label: "Intake Data Loss", value: "0%" },
    { label: "Booking Growth", value: "+60%" },
    { label: "Sync Speed", value: "<500ms" }
  ],
  recommendedPreset: "Clinic / Salon",
  recommendedModules: ["website", "booking", "crm", "whatsapp", "automation"]
};

export default function HospitalBookingClientPage() {
  return <CaseStudyFlow data={hospitalData} />;
}
