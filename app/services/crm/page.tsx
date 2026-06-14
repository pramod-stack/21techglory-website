import { Metadata } from 'next';
import CrmClientPage from './crm-client';

export const metadata: Metadata = {
  title: "CRM Setup & Sales Automation Services | 21TechGlory",
  description: "Organize your sales database, automate lead follow-ups, align teams, and track pipeline metrics with custom HubSpot, Zoho, and CRM integrations.",
  alternates: {
    canonical: "https://21techglory.com/services/crm",
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which CRM platform is best for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on your business size, budget, and sales complexity. For local clinics and growing services, HubSpot or Zoho is often ideal because they offer powerful features with reasonable entry pricing. For large enterprises with custom workflows, Salesforce provides maximum scalability. We audit your business and recommend the exact tool you need."
        }
      },
      {
        "@type": "Question",
        "name": "Can you migrate our old data from spreadsheets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We clean, format, and map your legacy customer spreadsheets and contact databases, then import them safely into your new CRM system without losing contact notes or history."
        }
      },
      {
        "@type": "Question",
        "name": "What is sales pipeline automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's the process of using rule-based triggers to handle manual database updates. For example, when a lead submits a booking form, the system automatically creates a deal, assigns a rep, schedules a follow-up task, and sends the client a confirmation email, requiring zero manual clicks."
        }
      },
      {
        "@type": "Question",
        "name": "How does the CRM connect with our marketing campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We set up tracking integrations so that when a lead arrives, the CRM records the source (e.g. Google Ads, SEO keyword, Facebook Campaign), allowing you to see exactly which marketing investments are producing closed revenue."
        }
      },
      {
        "@type": "Question",
        "name": "Do you train our team on how to use the CRM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We create customized Loom walkthrough videos and simple cheat sheets tailored to your specific pipeline layouts, ensuring your team has zero learning friction and adopts the system immediately."
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
        "name": "CRM Setup",
        "item": "https://21techglory.com/services/crm"
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
      <CrmClientPage />
    </>
  );
}
