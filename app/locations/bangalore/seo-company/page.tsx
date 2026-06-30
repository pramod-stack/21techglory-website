import React from 'react';
import { Metadata } from 'next';
import BangaloreSeoClientPage from './bangalore-seo-client';
import JsonLd from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';

export const metadata: Metadata = {
  title: 'SEO Company in Bangalore | 21TechGlory',
  description: '21TechGlory is a Bangalore-based SEO company helping clinics, salons, and service businesses rank higher, capture local leads, and convert search traffic into revenue.',
  alternates: {
    canonical: 'https://21techglory.com/locations/bangalore/seo-company',
  },
  openGraph: {
    title: 'SEO Company in Bangalore | 21TechGlory',
    description: '21TechGlory is a Bangalore-based SEO company helping clinics, salons, and service businesses rank higher, capture local leads, and convert search traffic into revenue.',
    url: 'https://21techglory.com/locations/bangalore/seo-company',
    type: 'website',
    images: [
      {
        url: 'https://21techglory.com/og-bangalore-seo.png',
        width: 1200,
        height: 630,
        alt: 'SEO Company in Bangalore - 21TechGlory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Company in Bangalore | 21TechGlory',
    description: '21TechGlory is a Bangalore-based SEO company helping clinics, salons, and service businesses rank higher, capture local leads, and convert search traffic into revenue.',
    images: ['https://21techglory.com/og-bangalore-seo.png'],
  },
};

export default function BangaloreSeoPage() {
  const neighborhoods = [
    "Indiranagar",
    "Koramangala",
    "HSR Layout",
    "Jayanagar",
    "JP Nagar",
    "Whitefield",
    "Marathahalli",
    "MG Road",
    "Malleshwaram"
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Search Engine Optimization (SEO) Services",
    "description": "Premium search engine optimization, web core vitals performance engineering, keyword planning, and GMB optimization for medical clinics, local salons, and B2B businesses.",
    "provider": {
      "@type": "Organization",
      "name": "21TechGlory",
      "url": "https://21techglory.com"
    },
    "url": "https://21techglory.com/locations/bangalore/seo-company",
    "areaServed": neighborhoods.map(n => ({
      "@type": "AdministrativeArea",
      "name": n
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://21techglory.com/locations/bangalore/seo-company#local-business",
    "name": "21TechGlory Bangalore Office",
    "description": "Local SEO, GMB optimization, and custom Next.js website design company in Bangalore serving clinics, salons, and local service businesses.",
    "url": "https://21techglory.com/locations/bangalore/seo-company",
    "telephone": "+91 77953 54043",
    "email": "pramodn276@gmail.com",
    "priceRange": "$$",
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
    "@id": "https://21techglory.com/locations/bangalore/seo-company#professional-service",
    "name": "21TechGlory",
    "description": "Specialized B2B search engine optimization, local maps pack ranking, and citation listing auditing.",
    "url": "https://21techglory.com/locations/bangalore/seo-company",
    "telephone": "+91 77953 54043",
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
    { name: "Bangalore", item: "https://21techglory.com/locations/bangalore/seo-company" },
  ]);

  const faqSchema = getFaqSchema([
    {
      q: "Why should a Bangalore business hire a specialized SEO agency instead of a generalist agency?",
      a: "Generalist agencies focus on vanity metrics like clicks and impressions. A specialized SEO agency like 21TechGlory focuses on intent-driven local rankings and custom React engineering. This ensures your site loads fast, ranks for terms that drive business, and converts visitors."
    },
    {
      q: "What is the difference between custom-coded sites and WordPress for SEO?",
      a: "Custom-coded Next.js sites provide clean code, sub-second loading speeds, and complete control over metadata and schema. WordPress sites are often slowed down by bloated themes and plugins, which negatively impacts mobile rankings."
    },
    {
      q: "Which Bangalore neighborhoods do you serve for local SEO campaigns?",
      a: "We support businesses throughout the greater Bangalore region, with active campaigns running in Indiranagar, Koramangala, HSR Layout, Jayanagar, JP Nagar, Whitefield, Marathahalli, MG Road, and Malleshwaram."
    },
    {
      q: "How do you identify high-intent keywords for local clinics and salons?",
      a: "We analyze search queries to separate informational searches from transactional local searches. By targeting transactional queries, we capture visitors who are ready to book a service."
    },
    {
      q: "What is local business schema and why is it important?",
      a: "Local business schema is a structured JSON-LD code block that provides search engine crawlers with your exact NAP details, GPS coordinates, operating hours, and services, improving maps visibility."
    },
    {
      q: "Do you guarantee top Google Map Pack rankings in Bangalore?",
      a: "No reputable agency can guarantee specific rankings due to search engine algorithm updates. However, our process has a proven track record of securing first-page placements."
    },
    {
      q: "How do you track and verify offline leads like calls and walk-ins?",
      a: "We use UTM tracking parameters on your Google Business Profile links and implement call tracking numbers to trace calls and direction requests directly from map results."
    },
    {
      q: "How do we get started with a local SEO audit for our Bangalore location?",
      a: "You can book a consultation through our website or contact us directly. Our engineers will audit your current search visibility and provide a clear optimization strategy."
    }
  ]);

  return (
    <>
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={professionalServiceSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <BangaloreSeoClientPage />
    </>
  );
}
