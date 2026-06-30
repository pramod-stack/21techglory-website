import type { Metadata } from "next";
import EcommercePpcClientPage from "./ecommerce-ppc-client";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = {
  title: "E-Commerce Brand PPC Restructuring Case Study | 21TechGlory",
  description: "Read how 21TechGlory restructured Google Search keyword bidding, set up accurate conversion pixel tracking, and reduced lead costs by 30%.",
  alternates: {
    canonical: "https://21techglory.com/work/ecommerce-ppc-restructure",
  },
  openGraph: {
    title: "E-Commerce Brand PPC Restructuring Case Study | 21TechGlory",
    description: "Read how 21TechGlory restructured Google Search keyword bidding, set up accurate conversion pixel tracking, and reduced lead costs by 30%.",
    url: "https://21techglory.com/work/ecommerce-ppc-restructure",
    type: "article",
  },
};

export default function Page() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Work", item: "https://21techglory.com/work" },
    { name: "E-Commerce PPC Restructuring", item: "https://21techglory.com/work/ecommerce-ppc-restructure" }
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "E-Commerce Brand PPC Restructuring Case Study",
    "description": "Read how 21TechGlory restructured Google Search keyword bidding, set up accurate conversion pixel tracking, and reduced lead costs by 30%.",
    "url": "https://21techglory.com/work/ecommerce-ppc-restructure",
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
      <EcommercePpcClientPage />
    </>
  );
}
