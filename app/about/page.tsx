import { Metadata } from 'next';
import AboutClientPage from './about-client';

export const metadata: Metadata = {
  title: "About 21TechGlory | Growth Marketing & Development Agency",
  description: "Learn about 21TechGlory's performance-focused engineering standards, our core pillars (custom web codebases, SEO, AI automation), and our team.",
  alternates: {
    canonical: "https://21techglory.com/about",
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
        "name": "About",
        "item": "https://21techglory.com/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClientPage />
    </>
  );
}
