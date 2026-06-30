import type { Metadata } from "next";
import SkincareWebsiteClientPage from "./skincare-website-client";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = {
  title: "Premium Skincare Clinic Conversion Website Case Study | 21TechGlory",
  description: "Read how 21TechGlory engineered a custom Next.js skincare clinic frontend, optimized Core Web Vitals to sub-second load times, and boosted online bookings.",
  alternates: {
    canonical: "https://21techglory.com/work/skincare-website-conversion",
  },
  openGraph: {
    title: "Premium Skincare Clinic Conversion Website Case Study | 21TechGlory",
    description: "Read how 21TechGlory engineered a custom Next.js skincare clinic frontend, optimized Core Web Vitals to sub-second load times, and boosted online bookings.",
    url: "https://21techglory.com/work/skincare-website-conversion",
    type: "article",
  },
};

export default function Page() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Work", item: "https://21techglory.com/work" },
    { name: "Skincare Website Conversion", item: "https://21techglory.com/work/skincare-website-conversion" }
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Premium Skincare Clinic Conversion Website Case Study",
    "description": "Read how 21TechGlory engineered a custom Next.js skincare clinic frontend, optimized Core Web Vitals to sub-second load times, and boosted online bookings.",
    "url": "https://21techglory.com/work/skincare-website-conversion",
    "author": {
      "@type": "Organization",
      "name": "21TechGlory"
    },
    "publisher": {
      "@type": "Organization",
      "name": "21TechGlory",
      "logo": {
        "@type": "ImageObject",
        "url": "https://21techglory.com/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <SkincareWebsiteClientPage />
    </>
  );
}
