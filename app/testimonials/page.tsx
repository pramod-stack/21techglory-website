import type { Metadata } from "next";
import TestimonialsClientPage from "./testimonials-client";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | 21TechGlory",
  description: "Read what clinics, salons, and service businesses say about working with 21TechGlory for websites, SEO, AI automation, and lead generation.",
  alternates: {
    canonical: "https://21techglory.com/testimonials",
  },
  openGraph: {
    title: "Client Testimonials & Reviews | 21TechGlory",
    description: "Read what clinics, salons, and service businesses say about working with 21TechGlory for websites, SEO, AI automation, and lead generation.",
    url: "https://21techglory.com/testimonials",
    type: "website",
  },
};

export default function Page() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Testimonials", item: "https://21techglory.com/testimonials" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TestimonialsClientPage />
    </>
  );
}
