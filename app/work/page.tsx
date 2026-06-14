import { Metadata } from 'next';
import WorkClientPage from './work-client';

export const metadata: Metadata = {
  title: "B2B Case Studies and Client Success Stories | 21TechGlory",
  description: "Explore our web development integrations, local SEO ranking campaigns, and CRM system automations that drive bookings and revenue for clinics and B2B brands.",
  alternates: {
    canonical: "https://21techglory.com/work",
  },
};

export default function Page() {
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
        "name": "Work",
        "item": "https://21techglory.com/work"
      }
    ]
  };

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
