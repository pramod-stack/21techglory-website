import { Metadata } from 'next';
import WebDevClientPage from './web-dev-client';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';
import { getServiceSchema } from '@/lib/schema/service';

export const metadata: Metadata = {
  title: "Custom Web Development & Web Apps | 21TechGlory",
  description: "Custom web development for businesses that need fast, conversion-focused websites built to rank, convert, and scale with SEO, CRM, and automation.",
  alternates: {
    canonical: "https://21techglory.com/services/web-development",
  },
  openGraph: {
    title: "Custom Web Development & Web Apps | 21TechGlory",
    description: "Custom web development for businesses that need fast, conversion-focused websites built to rank, convert, and scale with SEO, CRM, and automation.",
    url: "https://21techglory.com/services/web-development",
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
    title: "Custom Web Development & Web Apps | 21TechGlory",
    description: "Custom web development for businesses that need fast, conversion-focused websites built to rank, convert, and scale with SEO, CRM, and automation.",
    images: ["/og-image.jpg"],
  }
};

export default function Page() {
  const faqs = [
    {
      q: "Do you use templates like WordPress or Webflow?",
      a: "No, we specialize in custom development using modern frameworks like Next.js and React. Our custom sites load in under 1.5 seconds, are highly secure, and give you unlimited design and functional freedom."
    },
    {
      q: "Will my website be optimized for search engines (SEO)?",
      a: "Absolutely. Every website we build includes complete technical SEO. We write semantic HTML, structure heading elements properly, set up self-referencing canonical tags, integrate FAQ and Organization schema markup, and optimize image assets to ensure maximum indexability."
    },
    {
      q: "How does the custom website connect to our CRM or Sales team?",
      a: "We integrate your web forms directly with your internal tools (like HubSpot, Zoho, Salesforce, or Google Sheets) and setup automations so that when a lead fills out a form, your sales team is instantly notified via Slack or WhatsApp, and the client is automatically put into an email sequence."
    },
    {
      q: "What is the typical timeline for a custom web development project?",
      a: "A standard custom website takes between 4 to 6 weeks from strategy to deployment. For complex web applications or larger e-commerce systems, timelines typically range from 6 to 10 weeks depending on features."
    },
    {
      q: "Do you provide hosting and ongoing maintenance support?",
      a: "Yes. We host your site on high-speed global CDN networks to ensure 99.9% uptime. We also offer ongoing maintenance packages that cover security updates, regular backups, and content tweaks."
    }
  ];

  const faqSchema = getFaqSchema(faqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Services", item: "https://21techglory.com/services" },
    { name: "Web Development", item: "https://21techglory.com/services/web-development" }
  ]);

  const serviceSchema = getServiceSchema({
    name: "Custom Web Development",
    description: "Sub-second speed Next.js/React web solutions built specifically to rank on search engines, qualify inbound leads, and sync with your CRM pipelines.",
    url: "https://21techglory.com/services/web-development"
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <WebDevClientPage />
    </>
  );
}
