import { Metadata } from 'next';
import IndustriesClientPage from './industries-client';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';

export const metadata: Metadata = {
  title: "Service Industry Digital Growth Solutions | 21TechGlory",
  description: "High-performance digital growth systems, custom web apps, local SEO, and AI appointment scheduling tailored specifically for clinics, hospitals, salons, and spas.",
  alternates: {
    canonical: "https://21techglory.com/industries",
  },
  openGraph: {
    title: "Service Industry Digital Growth Solutions | 21TechGlory",
    description: "High-performance digital growth systems, custom web apps, local SEO, and AI appointment scheduling tailored specifically for clinics, hospitals, salons, and spas.",
    url: "https://21techglory.com/industries",
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
    title: "Service Industry Digital Growth Solutions | 21TechGlory",
    description: "High-performance digital growth systems, custom web apps, local SEO, and AI appointment scheduling tailored specifically for clinics, hospitals, salons, and spas.",
    images: ["/og-image.jpg"],
  }
};

export default function Page() {
  const faqs = [
    {
      q: "What industries do you specialize in?",
      a: "We design and build growth solutions tailored to local service businesses. Our core specializations are healthcare (Clinics & Hospitals, dental practices, diagnostic labs, therapy centers) and wellness/beauty (Premium Salons, Day Spas, nail lounges, skin care studios)."
    },
    {
      q: "Do you offer custom designs or templates?",
      a: "We build fully custom, high-speed Next.js frontends to ensure absolute design freedom, lightning-fast load times, and reliable mobile responsiveness. We do not use slow, generic WordPress templates."
    },
    {
      q: "Can you connect our booking platform to our existing CRM?",
      a: "Yes. We regularly connect custom booking engines, appointment calendars, and contact forms to leading CRM platforms like HubSpot, Zoho, and Salesforce, as well as medical-specific software and messaging apps like WhatsApp."
    },
    {
      q: "How does local SEO help my service business?",
      a: "Local SEO focuses on ranking your business in the Google Maps 3-Pack and local organic search. By optimizing your Google Business Profile, cleaning citation listings, and structuring city-specific service pages, we make sure local buyers find you when searching for your services."
    }
  ];

  const faqSchema = getFaqSchema(faqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Industries", item: "https://21techglory.com/industries" }
  ]);

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
      <IndustriesClientPage />
    </>
  );
}
