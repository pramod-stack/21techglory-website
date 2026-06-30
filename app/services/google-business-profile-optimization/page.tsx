import React from 'react';
import { Metadata } from 'next';
import GbpClientPage from './gbp-client';
import JsonLd from '@/components/seo/JsonLd';
import { getServiceSchema } from '@/lib/schema/service';
import { getFaqSchema } from '@/lib/schema/faq';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';

export const metadata: Metadata = {
  title: 'Google Business Profile Optimization Services | 21TechGlory',
  description: 'Get more Maps calls, direction requests, and bookings with full Google Business Profile optimization, review strategy, category fixes, posts, and tracking.',
  alternates: {
    canonical: 'https://21techglory.com/services/google-business-profile-optimization',
  },
  openGraph: {
    title: 'Google Business Profile Optimization Services | 21TechGlory',
    description: 'Get more Maps calls, direction requests, and bookings with full Google Business Profile optimization, review strategy, category fixes, posts, and tracking.',
    url: 'https://21techglory.com/services/google-business-profile-optimization',
    type: 'website',
    images: [
      {
        url: 'https://21techglory.com/og-gbp-optimization.png',
        width: 1200,
        height: 630,
        alt: 'Google Business Profile Optimization - 21TechGlory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Business Profile Optimization Services | 21TechGlory',
    description: 'Get more Maps calls, direction requests, and bookings with full Google Business Profile optimization, review strategy, category fixes, posts, and tracking.',
    images: ['https://21techglory.com/og-gbp-optimization.png'],
  },
};

export default function GbpPage() {
  const serviceSchema = getServiceSchema({
    name: "Google Business Profile Optimization Services",
    description: "End-to-end GMB/GBP profile setup, category and attribute mapping, photo optimization, Google posts management, spam redressal, review campaigns, and call tracking metrics.",
    url: "https://21techglory.com/services/google-business-profile-optimization",
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Services", item: "https://21techglory.com/services" },
    { name: "GBP Optimization", item: "https://21techglory.com/services/google-business-profile-optimization" },
  ]);

  const faqSchema = getFaqSchema([
    {
      q: "Why is the primary category selection critical for Google Maps?",
      a: "The primary category is the strongest relevance signal in Google's local algorithm. Selecting the wrong primary category can completely prevent your business from ranking for your main services, even if you include them in your description or secondary categories."
    },
    {
      q: "How does image optimization affect maps indexing?",
      a: "Uploading real, high-resolution images of your physical location, team, and services builds user trust and signals profile activity. While Google no longer reads EXIF metadata directly, image labeling, file names, and visual contents are parsed by Google Vision AI to verify category relevance."
    },
    {
      q: "What is Google Business Profile spam and how do you combat it?",
      a: "Spam includes fake listings, keyword-stuffed business names, and virtual addresses used by competitors to manipulate rankings. We audit your local search area, file redressal forms, and report spam listings to restore fair rankings for verified local businesses."
    },
    {
      q: "How often should we publish Google Business Profile posts?",
      a: "We recommend publishing updates at least once a week. Frequent posting shows Google that your profile is active, and provides local searchers with current offers, updates, and direct call-to-actions."
    },
    {
      q: "Can we use a virtual office address for verification?",
      a: "Google's guidelines strictly prohibit using virtual offices, PO boxes, or shared co-working spaces unless they are staffed during normal business hours. Using unapproved addresses often leads to profile suspension."
    },
    {
      q: "How do you track direction requests and phone calls from GMB?",
      a: "We append custom UTM parameters to all website URLs on your profile, allowing Google Analytics to track maps traffic. We also implement call forwarding numbers to trace inbound call volume back to your GBP."
    },
    {
      q: "What is the impact of review responses on local SEO?",
      a: "Responding to all reviews—both positive and negative—signals to Google that your business is active and values feedback. Responding quickly and including relevant keywords naturally can help improve your overall prominence."
    },
    {
      q: "What should we do if our Google Business Profile is suspended?",
      a: "Profile suspensions usually occur due to guideline violations, such as keyword stuffing or address issues. We audit your profile details, correct any violations, compile verification documents, and submit a reinstatement request."
    }
  ]);

  return (
    <>
      <JsonLd schema={serviceSchema} />
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={faqSchema} />
      <GbpClientPage />
    </>
  );
}
