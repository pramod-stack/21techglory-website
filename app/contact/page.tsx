import { Metadata } from 'next';
import ContactClientPage from './contact-client';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getLocalBusinessSchema } from '@/lib/schema/localBusiness';

export const metadata: Metadata = {
  title: "Contact Our Growth Specialists | 21TechGlory",
  description: "Get in touch with 21TechGlory to audit your website speed, setup CRM automations, optimize Google Business profiles, and launch B2B PPC search campaigns.",
  alternates: {
    canonical: "https://21techglory.com/contact",
  },
  openGraph: {
    title: "Contact Our Growth Specialists | 21TechGlory",
    description: "Get in touch with 21TechGlory to audit your website speed, setup CRM automations, optimize Google Business profiles, and launch B2B PPC search campaigns.",
    url: "https://21techglory.com/contact",
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
    title: "Contact Our Growth Specialists | 21TechGlory",
    description: "Get in touch with 21TechGlory to audit your website speed, setup CRM automations, optimize Google Business profiles, and launch B2B PPC search campaigns.",
    images: ["/og-image.jpg"],
  }
};

export default function Page() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Contact", item: "https://21techglory.com/contact" }
  ]);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Our Growth Specialists | 21TechGlory",
    "description": "Get in touch with 21TechGlory to audit your website speed, setup CRM automations, optimize Google Business profiles, and launch B2B PPC search campaigns.",
    "url": "https://21techglory.com/contact"
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "21TechGlory",
    "description": "AI Growth & Digital Infrastructure Partner in Bangalore",
    "url": "https://21techglory.com",
    "telephone": "{{TODO: contact_phone}}",
    "email": "{{TODO: branded_email}}",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bangalore, Karnataka, India",
      "addressLocality": "Bangalore",
      "addressRegion": "Karnataka",
      "addressCountry": "IN"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <ContactClientPage />
    </>
  );
}
