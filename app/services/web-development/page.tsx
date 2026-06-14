import { Metadata } from 'next';
import WebDevClientPage from './web-dev-client';

export const metadata: Metadata = {
  title: "Web Development Services for High-Converting Websites | 21TechGlory",
  description: "Custom web development for businesses that need fast, conversion-focused websites built to rank, convert, and scale with SEO, CRM, and automation.",
  alternates: {
    canonical: "https://21techglory.com/services/web-development",
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you use templates like WordPress or Webflow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we specialize in custom development using modern frameworks like Next.js and React. Our custom sites load in under 1.5 seconds, are highly secure, and give you unlimited design and functional freedom."
        }
      },
      {
        "@type": "Question",
        "name": "Will my website be optimized for search engines (SEO)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Every website we build includes complete technical SEO. We write semantic HTML, structure heading elements properly, set up self-referencing canonical tags, integrate FAQ and Organization schema markup, and optimize image assets to ensure maximum indexability."
        }
      },
      {
        "@type": "Question",
        "name": "How does the custom website connect to our CRM or Sales team?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We integrate your web forms directly with your internal tools (like HubSpot, Zoho, Salesforce, or Google Sheets) and setup automations so that when a lead fills out a form, your sales team is instantly notified via Slack or WhatsApp, and the client is automatically put into an email sequence."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical timeline for a custom web development project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard custom website takes between 4 to 6 weeks from strategy to deployment. For complex web applications or larger e-commerce systems, timelines typically range from 6 to 10 weeks depending on features."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide hosting and ongoing maintenance support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We host your site on high-speed global CDN networks to ensure 99.9% uptime. We also offer ongoing maintenance packages that cover security updates, regular backups, and content tweaks."
        }
      }
    ]
  };

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
        "name": "Services",
        "item": "https://21techglory.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Web Development",
        "item": "https://21techglory.com/services/web-development"
      }
    ]
  };

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
      <WebDevClientPage />
    </>
  );
}
