import { Metadata } from 'next';
import PaidAdsClientPage from './paid-ads-client';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';
import { getServiceSchema } from '@/lib/schema/service';

export const metadata: Metadata = {
  title: "Paid Ads & PPC Campaign Management Services | 21TechGlory",
  description: "Generate immediate B2B and local clinic leads with expert Google Search, Meta Ads, and Local Services Ads optimized for high conversions and ROI.",
  alternates: {
    canonical: "https://21techglory.com/services/paid-ads",
  },
  openGraph: {
    title: "Paid Ads & PPC Campaign Management Services | 21TechGlory",
    description: "Generate immediate B2B and local clinic leads with expert Google Search, Meta Ads, and Local Services Ads optimized for high conversions and ROI.",
    url: "https://21techglory.com/services/paid-ads",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_IN",
    siteName: "21TechGlory",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paid Ads & PPC Campaign Management Services | 21TechGlory",
    description: "Generate immediate B2B and local clinic leads with expert Google Search, Meta Ads, and Local Services Ads optimized for high conversions and ROI.",
    images: ["/og-image.jpg"],
  }
};

export default function Page() {
  const faqs = [
    {
      q: "What ad spend budget do you recommend starting with?",
      a: "For local service providers and clinics, we recommend a starting ad spend of at least $1,000 to $1,500 per month (paid directly to Google/Meta). This budget size allows the ad networks to gather sufficient conversion data to optimize bidding algorithms quickly."
    },
    {
      q: "What is the difference between Google Search Ads and Facebook Ads?",
      a: "Google Search Ads capture searchers with immediate intent (e.g., 'skin specialist near me'). Facebook/Instagram Ads build brand demand by showing visual creatives to users matched by demographics and interests. A combination of both represents the optimal acquisition structure."
    },
    {
      q: "Do you design the landing pages for the ads?",
      a: "Yes. Driving paid traffic to a generic homepage is the fastest way to waste budget. We design custom, high-speed landing pages containing specific offers, trust reviews, and direct forms to maximize lead conversion."
    },
    {
      q: "How do you filter out spam or irrelevant clicks?",
      a: "We actively manage negative keyword lists on Google Search campaigns, disabling placement for terms like 'free', 'jobs', or unrelated cities. On Meta, we restrict audience boundaries and add filters to keep lead quality high."
    },
    {
      q: "How long does it take to see leads from a new ad campaign?",
      a: "Unlike SEO which takes months, paid ad campaigns deliver traffic and leads within 24 to 48 hours of launch. The first 30 days are focused on gathering performance metrics and refining negative keyword lists to maximize ROI."
    }
  ];

  const faqSchema = getFaqSchema(faqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Services", item: "https://21techglory.com/services" },
    { name: "Paid Ads", item: "https://21techglory.com/services/paid-ads" }
  ]);

  const serviceSchema = getServiceSchema({
    name: "Paid PPC Ads",
    description: "High-ROI Google Search Ads, negative keyword control, and Meta visual conversion campaigns optimized to capture ready-to-buy searchers.",
    url: "https://21techglory.com/services/paid-ads"
  });

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PaidAdsClientPage />
    </>
  );
}
