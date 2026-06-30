import type { Metadata } from "next";
import HospitalBookingClientPage from "./hospital-booking-client";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = {
  title: "Multi-Specialty Hospital Booking Platform Case Study | 21TechGlory",
  description: "Read how 21TechGlory built a custom healthcare intake system, eliminated booking drops, and routed patient data directly into CRM databases.",
  alternates: {
    canonical: "https://21techglory.com/work/hospital-booking-platform",
  },
  openGraph: {
    title: "Multi-Specialty Hospital Booking Platform Case Study | 21TechGlory",
    description: "Read how 21TechGlory built a custom healthcare intake system, eliminated booking drops, and routed patient data directly into CRM databases.",
    url: "https://21techglory.com/work/hospital-booking-platform",
    type: "article",
  },
};

export default function Page() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Work", item: "https://21techglory.com/work" },
    { name: "Hospital Booking Platform", item: "https://21techglory.com/work/hospital-booking-platform" }
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Multi-Specialty Hospital Booking Platform Case Study",
    "description": "Read how 21TechGlory built a custom healthcare intake system, eliminated booking drops, and routed patient data directly into CRM databases.",
    "url": "https://21techglory.com/work/hospital-booking-platform",
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
      <HospitalBookingClientPage />
    </>
  );
}
