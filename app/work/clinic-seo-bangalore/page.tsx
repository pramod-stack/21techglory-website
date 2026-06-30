import type { Metadata } from "next";
import ClinicSeoClientPage from "./clinic-seo-client";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = {
  title: "Bangalore Clinic Local SEO Campaign Case Study | 21TechGlory",
  description: "Read how 21TechGlory optimized search rankings, structured localized clinic pages, and automated GMB review generation to multiply inbound calls.",
  alternates: {
    canonical: "https://21techglory.com/work/clinic-seo-bangalore",
  },
  openGraph: {
    title: "Bangalore Clinic Local SEO Campaign Case Study | 21TechGlory",
    description: "Read how 21TechGlory optimized search rankings, structured localized clinic pages, and automated GMB review generation to multiply inbound calls.",
    url: "https://21techglory.com/work/clinic-seo-bangalore",
    type: "article",
  },
};

export default function Page() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Work", item: "https://21techglory.com/work" },
    { name: "Bangalore Clinic Local SEO", item: "https://21techglory.com/work/clinic-seo-bangalore" }
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bangalore Clinic Local SEO Campaign Case Study",
    "description": "Read how 21TechGlory optimized search rankings, structured localized clinic pages, and automated GMB review generation.",
    "url": "https://21techglory.com/work/clinic-seo-bangalore",
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
      <ClinicSeoClientPage />
    </>
  );
}
