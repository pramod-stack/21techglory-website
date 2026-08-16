import React from 'react';
import { Metadata } from 'next';
import BangaloreClientPage from './bangalore-client';
import JsonLd from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency in Bangalore | 21TechGlory',
  description: '21TechGlory is a Bangalore digital agency for websites, local SEO, GBP optimization, PPC, and AI automation. Built for clinics, salons, and growing service businesses.',
  alternates: {
    canonical: 'https://21techglory.com/locations/bangalore',
  },
  openGraph: {
    title: 'Digital Marketing Agency in Bangalore | 21TechGlory',
    description: '21TechGlory is a Bangalore digital agency for websites, local SEO, GBP optimization, PPC, and AI automation. Built for clinics, salons, and growing service businesses.',
    url: 'https://21techglory.com/locations/bangalore',
    type: 'website',
    images: [
      {
        url: 'https://21techglory.com/og-bangalore.png',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Agency in Bangalore - 21TechGlory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency in Bangalore | 21TechGlory',
    description: '21TechGlory is a Bangalore digital agency for websites, local SEO, GBP optimization, PPC, and AI automation. Built for clinics, salons, and growing service businesses.',
    images: ['https://21techglory.com/og-bangalore.png'],
  },
};

export default function BangaloreHubPage() {
  // neighborhoods suggestion: Whitefield, Indiranagar, Koramangala, HSR Layout, MG Road, Electronic City
  const neighborhoods = [
    "{{TODO: neighborhood - Whitefield}}",
    "{{TODO: neighborhood - Indiranagar}}",
    "{{TODO: neighborhood - Koramangala}}",
    "{{TODO: neighborhood - HSR Layout}}",
    "{{TODO: neighborhood - MG Road}}",
    "{{TODO: neighborhood - Electronic City}}"
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://21techglory.com/locations/bangalore#local-business",
    "name": "21TechGlory Bangalore Hub",
    "description": "Bangalore digital agency for websites, local SEO, GBP optimization, PPC, and AI automation.",
    "url": "https://21techglory.com/locations/bangalore",
    "telephone": "+91 77953 54043, +91 91102 91339",
    "email": "tech@21techglory.com",
    "priceRange": "$$",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "{{TODO: latitude}}",
      "longitude": "{{TODO: longitude}}"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bangalore, Karnataka, India",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    },
    "areaServed": neighborhoods.map(n => ({
      "@type": "AdministrativeArea",
      "name": n
    }))
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://21techglory.com/locations/bangalore#professional-service",
    "name": "21TechGlory",
    "description": "Specialized B2B website development, search engine optimization, and local maps pack ranking in Bangalore.",
    "url": "https://21techglory.com/locations/bangalore",
    "telephone": "+91 77953 54043, +91 91102 91339",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bangalore, Karnataka, India",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "postalCode": "560001",
      "addressCountry": "IN"
    }
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Locations", item: "https://21techglory.com/services" },
    { name: "Bangalore", item: "https://21techglory.com/locations/bangalore" },
  ]);

  const faqSchema = getFaqSchema([
    {
      q: "What digital services does 21TechGlory offer in Bangalore?",
      a: "We offer custom website development (React/Next.js), local SEO campaigns, Google Business Profile (GBP) optimization, paid advertising management, CRM configuration (HubSpot, Zoho), and automated WhatsApp messaging systems."
    },
    {
      q: "Which local business niches do you specialize in serving in Bangalore?",
      a: "Our core specializations in the Bangalore market include clinic and hospital growth systems (for doctors, dentists, multi-specialty clinics) and premium salon & spa marketing systems (for luxury hair, wellness, and beauty studios)."
    },
    {
      q: "What areas of Bangalore does your local marketing agency cover?",
      a: "We actively serve businesses across the entire Bangalore region, including major commercial and retail districts such as Whitefield, Indiranagar, Koramangala, HSR Layout, MG Road, and Electronic City."
    },
    {
      q: "How does local SEO help Bangalore clinics and salons get more appointments?",
      a: "Local SEO focuses on ranking your business in the Google Maps 3-Pack and local search. By targeting queries like 'dentist in Koramangala' or 'hair salon in HSR Layout', we connect you directly with customers searching for your services in your immediate neighborhood."
    },
    {
      q: "Why do you develop custom Next.js websites instead of WordPress templates?",
      a: "Custom Next.js websites load under 1.5 seconds, are highly secure, and feature flawless technical SEO architecture. This out-performs slow, bloated WordPress templates, leading to higher search rankings and better visitor-to-lead conversion rates."
    },
    {
      q: "Can you automate our clinic or salon appointment reminders in Bangalore?",
      a: "Yes. We integrate your website booking calendar with WhatsApp Business API. This sends automated confirmations, 24-hour and 2-hour reminders, and review requests directly to clients, reducing no-show rates by up to 68%."
    },
    {
      q: "How does 21TechGlory track the ROI of our local marketing campaigns?",
      a: "We set up tracking parameters on all digital assets. This allows us to track phone calls, map direction requests, website form fills, and online bookings to show you exactly how many leads and sales your campaign generates."
    },
    {
      q: "How can my Bangalore business get started with 21TechGlory?",
      a: "You can book a free local digital audit through our website or contact us directly. Our engineers will evaluate your current website speed, local SEO standings, and CRM setups, and map out a growth blueprint."
    }
  ]);

  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={professionalServiceSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <BangaloreClientPage />
    </>
  );
}
