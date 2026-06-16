import { Metadata } from 'next';
import PrivacyClientPage from './privacy-client';

export const metadata: Metadata = {
  title: "Privacy Policy | 21TechGlory",
  description: "Read the Privacy Policy of 21TechGlory to understand how we collect, process, secure, and protect your personal information, cookies, and project data.",
  alternates: {
    canonical: "https://21techglory.com/privacy",
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
        "name": "Privacy Policy",
        "item": "https://21techglory.com/privacy"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PrivacyClientPage />
    </>
  );
}
