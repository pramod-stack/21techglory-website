import React from 'react';
import { Metadata } from 'next';
import LocalSeoClientPage from './local-seo-client';
import JsonLd from '@/components/seo/JsonLd';
import { getServiceSchema } from '@/lib/schema/service';
import { getFaqSchema } from '@/lib/schema/faq';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { posts } from '@/lib/blog/posts-data';

export const metadata: Metadata = {
  title: 'Local SEO Services in Bangalore | 21TechGlory',
  description: 'Rank higher for "near me" and city searches with local SEO, GBP optimization, citation cleanup, local landing pages, and review systems built for service businesses.',
  alternates: {
    canonical: 'https://21techglory.com/services/local-seo',
  },
  openGraph: {
    title: 'Local SEO Services in Bangalore | 21TechGlory',
    description: 'Rank higher for "near me" and city searches with local SEO, GBP optimization, citation cleanup, local landing pages, and review systems built for service businesses.',
    url: 'https://21techglory.com/services/local-seo',
    type: 'website',
    images: [
      {
        url: 'https://21techglory.com/og-local-seo.png',
        width: 1200,
        height: 630,
        alt: 'Local SEO Services Bangalore - 21TechGlory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Services in Bangalore | 21TechGlory',
    description: 'Rank higher for "near me" and city searches with local SEO, GBP optimization, citation cleanup, local landing pages, and review systems built for service businesses.',
    images: ['https://21techglory.com/og-local-seo.png'],
  },
};

export default function LocalSeoPage() {
  const serviceSchema = getServiceSchema({
    name: "Local SEO Services",
    description: "Full-service local search engine optimization, Google Business Profile scaling, manual citation auditing, and hyper-targeted neighborhood page construction designed to drive inbound pipeline for service businesses.",
    url: "https://21techglory.com/services/local-seo",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Services", item: "https://21techglory.com/services" },
    { name: "Local SEO", item: "https://21techglory.com/services/local-seo" },
  ]);

  const faqSchema = getFaqSchema([
    {
      q: "What is local SEO and how is it different from traditional SEO?",
      a: "Traditional SEO focuses on ranking websites for queries without geographic boundaries. Local SEO focuses on optimization specifically for search queries that contain geographical qualifiers or indicate local intent, leveraging Proximity, Prominence, and Relevance signals."
    },
    {
      q: "How does the Google Map Pack algorithm rank local businesses?",
      a: "The Map Pack ranking algorithm is governed by three primary pillars: Proximity (how close the searcher is to your verified physical address), Relevance (how well your business categories and profile descriptions match the search term), and Prominence (the authority of your main website, reviews, and links)."
    },
    {
      q: "What is NAP consistency and why does it affect search ranking?",
      a: "NAP stands for Name, Address, and Phone number. Inconsistent NAP entries across third-party directories create search engine distrust, resulting in lower maps and search visibility."
    },
    {
      q: "How do review velocity and review sentiment impact local maps SEO?",
      a: "Review velocity and positive keyword-rich sentiment are critical ranking factors that indicate to search engines that your business is active and trusted by local clients."
    },
    {
      q: "Do we need location-specific landing pages for every neighborhood?",
      a: "Yes. If your business serves multiple suburbs or clinics, creating targeted, light-weight, highly structured local pages allows you to rank for long-tail, high-conversion geo queries."
    },
    {
      q: "How do you track calls and directions from Google Maps?",
      a: "We configure tracking variables, UTM parameters on GMB profile website links, and integrate call tracking platforms to trace clicks, map direction requests, and phone calls."
    },
    {
      q: "What are citation directories and how do you manage them?",
      a: "Citations are online mentions of your business NAP. We clean up duplicate listings and optimize citations manually, avoiding automatic API synchronization services that create messy overrides."
    },
    {
      q: "How long does it take to see rankings change for local keywords in Bangalore?",
      a: "Achieving top Map Pack placements for competitive local queries typically takes between 60 to 90 days, depending on historical citation issues, review velocity, and landing page deployment."
    }
  ]);

  const relatedPosts = posts.filter(post => 
    post.category === 'Local SEO'
  ).slice(0, 3);

  return (
    <>
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <LocalSeoClientPage relatedPosts={relatedPosts} />
    </>
  );
}
