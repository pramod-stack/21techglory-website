import React from 'react';
import { Metadata } from 'next';
import BangaloreWebDevClientPage from './web-dev-client';
import JsonLd from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';

export const metadata: Metadata = {
  title: 'Website Development Company in Bangalore | 21TechGlory',
  description: '21TechGlory is a premier website development company in Bangalore designing high-performance Next.js websites, custom landing pages, and lead-gen systems for clinics and salons.',
  alternates: {
    canonical: 'https://21techglory.com/locations/bangalore/website-development-company',
  },
  openGraph: {
    title: 'Website Development Company in Bangalore | 21TechGlory',
    description: '21TechGlory is a premier website development company in Bangalore designing high-performance Next.js websites, custom landing pages, and lead-gen systems for clinics and salons.',
    url: 'https://21techglory.com/locations/bangalore/website-development-company',
    type: 'website',
    images: [
      {
        url: 'https://21techglory.com/og-bangalore-webdev.png',
        width: 1200,
        height: 630,
        alt: 'Website Development Company in Bangalore - 21TechGlory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development Company in Bangalore | 21TechGlory',
    description: '21TechGlory is a premier website development company in Bangalore designing high-performance Next.js websites, custom landing pages, and lead-gen systems for clinics and salons.',
    images: ['https://21techglory.com/og-bangalore-webdev.png'],
  },
};

export default function BangaloreWebDevPage() {
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
    "@id": "https://21techglory.com/locations/bangalore/website-development-company#local-business",
    "name": "21TechGlory Bangalore Web Development",
    "description": "Custom Next.js website design and CRM integration company in Bangalore.",
    "url": "https://21techglory.com/locations/bangalore/website-development-company",
    "telephone": "{{TODO: phone}}",
    "email": "{{TODO: branded_email}}",
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
    "name": "Website Development and Design Services",
    "description": "High-performance React/Next.js design, mobile optimization, booking automation, and CRM integrations for service businesses.",
    "provider": {
      "@type": "Organization",
      "name": "21TechGlory",
      "url": "https://21techglory.com"
    },
    "url": "https://21techglory.com/locations/bangalore/website-development-company",
    "areaServed": neighborhoods.map(n => ({
      "@type": "AdministrativeArea",
      "name": n
    }))
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Locations", item: "https://21techglory.com/services" },
    { name: "Bangalore", item: "https://21techglory.com/locations/bangalore" },
    { name: "Website Development", item: "https://21techglory.com/locations/bangalore/website-development-company" },
  ]);

  const faqSchema = getFaqSchema([
    {
      q: "What makes 21TechGlory a premier website development company in Bangalore?",
      a: "Unlike agencies that build slow WordPress templates, 21TechGlory develops custom Next.js websites that achieve sub-second loading speeds, top security, and flawless technical SEO. We integrate forms directly with CRMs and WhatsApp notifications for instant lead routing."
    },
    {
      q: "How long does it take to develop a custom website for a Bangalore business?",
      a: "A typical custom project takes between 3 to 6 weeks, depending on the complexity of layouts, CRM integrations, and online booking setups. We maintain transparent staging links so you can review development live."
    },
    {
      q: "Will our new custom website be mobile-friendly and optimized for local SEO?",
      a: "Yes. Every website we build features responsive design, lightweight code optimized for mobile processors, and structured schema markup (LocalBusiness, Breadcrumbs, FAQs) embedded directly into the page source."
    },
    {
      q: "Do you integrate online booking calendars for clinics and salons in Bangalore?",
      a: "Yes. We design and integrate custom online booking calendars that sync with your internal scheduler (e.g. Google Calendar, Cliniko, Zenoti) and automate reminders via WhatsApp Business API."
    },
    {
      q: "Can you help migrate our existing WordPress site to a Next.js framework?",
      a: "Yes. We rebuild WordPress sites on Next.js to improve PageSpeed scores, preserve all your existing URL structures, set up permanent redirects (301s) to retain SEO authority, and update the UI design."
    },
    {
      q: "What hosting platforms do you use for Next.js website deployments?",
      a: "We deploy Next.js platforms on Vercel or AWS. This delivers global edge caching, near-instant load times, and near-zero server downtime, which is highly favored by Google's crawl engines."
    },
    {
      q: "Do you write custom copywriting content for our Bangalore website?",
      a: "Yes. We write high-intent, SEO-optimized copy tailored to your local audience. We incorporate high-intent search terms (like 'best clinic in Indiranagar') without keyword stuffing, focusing on user conversion."
    },
    {
      q: "How do we start a website development project with 21TechGlory?",
      a: "Book a discovery call through our website audit form. We will analyze your current site's performance, layout limitations, and lead pipelines, and draft a tailored development roadmap."
    }
  ]);

  return (
    <>
      <JsonLd schema={localBusinessSchema} />
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <BangaloreWebDevClientPage />
    </>
  );
}
