import { Metadata } from 'next';
import AboutClientPage from './about-client';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';

export const metadata: Metadata = {
  title: "About 21TechGlory | Growth Marketing & Development Agency",
  description: "Learn about 21TechGlory's performance-focused engineering standards, our core pillars (custom web codebases, SEO, AI automation), and our team.",
  alternates: {
    canonical: "https://21techglory.com/about",
  },
  openGraph: {
    title: "About 21TechGlory | Growth Marketing & Development Agency",
    description: "Learn about 21TechGlory's performance-focused engineering standards, our core pillars (custom web codebases, SEO, AI automation), and our team.",
    url: "https://21techglory.com/about",
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
    title: "About 21TechGlory | Growth Marketing & Development Agency",
    description: "Learn about 21TechGlory's performance-focused engineering standards, our core pillars (custom web codebases, SEO, AI automation), and our team.",
    images: ["/og-image.jpg"],
  }
};

export default function Page() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "About", item: "https://21techglory.com/about" }
  ]);

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
