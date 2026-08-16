import React from 'react';
import { Metadata } from 'next';
import BangaloreGbpClientPage from './gbp-client';
import JsonLd from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';

export const metadata: Metadata = {
  title: 'Google Business Profile Optimization in Bangalore | GBP SEO',
  description: '21TechGlory specializes in Google Business Profile optimization in Bangalore, helping local service clinics, hospitals, and salons rank higher on Google Maps.',
  alternates: {
    canonical: 'https://21techglory.com/locations/bangalore/google-business-profile-optimization',
  },
  openGraph: {
    title: 'Google Business Profile Optimization in Bangalore | GBP SEO',
    description: '21TechGlory specializes in Google Business Profile optimization in Bangalore, helping local service clinics, hospitals, and salons rank higher on Google Maps.',
    url: 'https://21techglory.com/locations/bangalore/google-business-profile-optimization',
    type: 'website',
    images: [
      {
        url: 'https://21techglory.com/og-bangalore-gbp.png',
        width: 1200,
        height: 630,
        alt: 'Google Business Profile Optimization in Bangalore - 21TechGlory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Business Profile Optimization in Bangalore | GBP SEO',
    description: '21TechGlory specializes in Google Business Profile optimization in Bangalore, helping local service clinics, hospitals, and salons rank higher on Google Maps.',
    images: ['https://21techglory.com/og-bangalore-gbp.png'],
  },
};

export default function BangaloreGbpPage() {
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
    "@id": "https://21techglory.com/locations/bangalore/google-business-profile-optimization#local-business",
    "name": "21TechGlory Bangalore GBP Optimization",
    "description": "Professional Google Business Profile audit, citations cleanup, and local SEO services in Bangalore.",
    "url": "https://21techglory.com/locations/bangalore/google-business-profile-optimization",
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Business Profile Optimization Services",
    "description": "Google Maps local pack ranking, geotagged updates, automated review management, citation audits, and profile optimization.",
    "provider": {
      "@type": "Organization",
      "name": "21TechGlory",
      "url": "https://21techglory.com"
    },
    "url": "https://21techglory.com/locations/bangalore/google-business-profile-optimization",
    "areaServed": neighborhoods.map(n => ({
      "@type": "AdministrativeArea",
      "name": n
    }))
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Locations", item: "https://21techglory.com/services" },
    { name: "Bangalore", item: "https://21techglory.com/locations/bangalore" },
    { name: "GBP Optimization", item: "https://21techglory.com/locations/bangalore/google-business-profile-optimization" },
  ]);

  const faqSchema = getFaqSchema([
    {
      q: "What is Google Business Profile optimization and why is it crucial for Bangalore service businesses?",
      a: "GBP optimization is the process of updating, configuring, and maintaining your Google Maps listing (NAP details, category settings, hours, reviews, images) so Google ranks your business in the high-intent Map 3-Pack, driving free calls and directions requests."
    },
    {
      q: "How does 21TechGlory help our Bangalore clinic or salon rank higher on Google Maps?",
      a: "We perform a comprehensive citation audit, correct inconsistent listings, structure category hierarchies, optimize your business description with high-intent keywords, configure geotagged local photos, set up custom Google Q&As, and deploy automated review pipelines."
    },
    {
      q: "Do you guarantee our business will rank in the top 3 Map Pack in Bangalore?",
      a: "No professional agency can guarantee specific rankings due to Google's complex local algorithms. However, our data-backed methods have a strong track record of elevating local clinics and salons into page-one local packs."
    },
    {
      q: "What is a citation audit and how does it affect our local SEO score?",
      a: "A citation audit verifies that your Name, Address, and Phone number (NAP) are identical across directory sites (Justdial, Sulekha, IndiaLIMS, etc.). Inconsistencies confuse Google's crawlers, lowering your local search trustworthiness and rankings."
    },
    {
      q: "Can you help automate client review generation on our Google Maps profile?",
      a: "Yes. We integrate your appointment scheduling system with custom SMS or WhatsApp templates that automatically request reviews from satisfied clients immediately after their appointment."
    },
    {
      q: "How do you handle negative reviews on our Google Business Profile?",
      a: "We provide guidance on responding professionally to negative feedback to preserve brand reputation. We focus on building a high volume of positive reviews to naturally dilute isolated negative ratings."
    },
    {
      q: "How do you track the volume of calls and directions coming from our maps listing?",
      a: "We add UTM tracking codes to your profile website link to trace traffic in Google Analytics. We also monitor monthly Google Business Profile performance insights for calls, messages, and directions requests."
    },
    {
      q: "How do we get started with a Google Business Profile optimization campaign?",
      a: "Schedule a local SEO discovery call with us. We will audit your current maps listing, check for duplicate listings, analyze local competitor positions, and outline an optimization plan."
    }
  ]);

  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <BangaloreGbpClientPage />
    </>
  );
}
