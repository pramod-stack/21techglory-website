import { Metadata } from 'next';
import WorkClientPage from './work-client';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';

export const metadata: Metadata = {
  title: "B2B Case Studies and Client Success Stories | 21TechGlory",
  description: "Explore our web development integrations, local SEO ranking campaigns, and CRM system automations that drive bookings and revenue for clinics and B2B brands.",
  alternates: {
    canonical: "https://21techglory.com/work",
  },
  openGraph: {
    title: "B2B Case Studies and Client Success Stories | 21TechGlory",
    description: "Explore our web development integrations, local SEO ranking campaigns, and CRM system automations that drive bookings and revenue for clinics and B2B brands.",
    url: "https://21techglory.com/work",
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
    title: "B2B Case Studies and Client Success Stories | 21TechGlory",
    description: "Explore our web development integrations, local SEO ranking campaigns, and CRM system automations that drive bookings and revenue for clinics and B2B brands.",
    images: ["/og-image.jpg"],
  }
};

export default function Page() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Work", item: "https://21techglory.com/work" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <WorkClientPage />
    </>
  );
}
