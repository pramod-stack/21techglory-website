import { Metadata } from 'next';
import PaidAdsClientPage from './paid-ads-client';

export const metadata: Metadata = {
  title: "Paid Ads & PPC Campaign Management Services | 21TechGlory",
  description: "Generate immediate B2B and local clinic leads with expert Google Search, Meta Ads, and Local Services Ads optimized for high conversions and ROI.",
  alternates: {
    canonical: "https://21techglory.com/services/paid-ads",
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What ad spend budget do you recommend starting with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For local service providers and clinics, we recommend a starting ad spend of at least $1,000 to $1,500 per month (paid directly to Google/Meta). This budget size allows the ad networks to gather sufficient conversion data to optimize bidding algorithms quickly."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Google Search Ads and Facebook Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Search Ads capture searchers with immediate intent (e.g., 'skin specialist near me'). Facebook/Instagram Ads build brand demand by showing visual creatives to users matched by demographics and interests. A combination of both represents the optimal acquisition structure."
        }
      },
      {
        "@type": "Question",
        "name": "Do you design the landing pages for the ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Driving paid traffic to a generic homepage is the fastest way to waste budget. We design custom, high-speed landing pages containing specific offers, trust reviews, and direct forms to maximize lead conversion."
        }
      },
      {
        "@type": "Question",
        "name": "How do you filter out spam or irrelevant clicks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We actively manage negative keyword lists on Google Search campaigns, disabling placement for terms like 'free', 'jobs', or unrelated cities. On Meta, we restrict audience boundaries and add filters to keep lead quality high."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see leads from a new ad campaign?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike SEO which takes months, paid ad campaigns deliver traffic and leads within 24 to 48 hours of launch. The first 30 days are focused on gathering performance metrics and refining negative keyword lists to maximize ROI."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://21techglory.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://21techglory.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Paid Ads",
        "item": "https://21techglory.com/services/paid-ads"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PaidAdsClientPage />
    </>
  );
}
