import { Metadata } from 'next';
import TermsClientPage from './terms-client';

export const metadata: Metadata = {
  title: "Terms and Conditions | 21TechGlory",
  description: "Read the Terms and Conditions of 21TechGlory to understand the service terms, project deliverables, and operational guidelines for clients.",
  alternates: {
    canonical: "https://21techglory.com/terms",
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
        "name": "Terms and Conditions",
        "item": "https://21techglory.com/terms"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TermsClientPage />
    </>
  );
}
