import { Metadata } from 'next';
import ContactClientPage from './contact-client';

export const metadata: Metadata = {
  title: "Contact Our Growth Specialists | 21TechGlory",
  description: "Get in touch with 21TechGlory to audit your website speed, setup CRM automations, optimize Google Business profiles, and launch B2B PPC search campaigns.",
  alternates: {
    canonical: "https://21techglory.com/contact",
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
        "name": "Contact",
        "item": "https://21techglory.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClientPage />
    </>
  );
}
