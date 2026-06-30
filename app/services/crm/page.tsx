import { Metadata } from 'next';
import CrmClientPage from './crm-client';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';
import { getServiceSchema } from '@/lib/schema/service';

export const metadata: Metadata = {
  title: "CRM Setup & Sales Automation Services | 21TechGlory",
  description: "Organize your sales database, automate lead follow-ups, align teams, and track pipeline metrics with custom HubSpot, Zoho, and CRM integrations.",
  alternates: {
    canonical: "https://21techglory.com/services/crm",
  },
  openGraph: {
    title: "CRM Setup & Sales Automation Services | 21TechGlory",
    description: "Organize your sales database, automate lead follow-ups, align teams, and track pipeline metrics with custom HubSpot, Zoho, and CRM integrations.",
    url: "https://21techglory.com/services/crm",
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
    title: "CRM Setup & Sales Automation Services | 21TechGlory",
    description: "Organize your sales database, automate lead follow-ups, align teams, and track pipeline metrics with custom HubSpot, Zoho, and CRM integrations.",
    images: ["/og-image.jpg"],
  }
};

export default function Page() {
  const faqs = [
    {
      q: "Which CRM platform is best for my business?",
      a: "It depends on your business size, budget, and sales complexity. For local clinics and growing services, HubSpot or Zoho is often ideal because they offer powerful features with reasonable entry pricing. For large enterprises with custom workflows, Salesforce provides maximum scalability. We audit your business and recommend the exact tool you need."
    },
    {
      q: "Can you migrate our old data from spreadsheets?",
      a: "Yes. We clean, format, and map your legacy customer spreadsheets and contact databases, then import them safely into your new CRM system without losing contact notes or history."
    },
    {
      q: "What is sales pipeline automation?",
      a: "It's the process of using rule-based triggers to handle manual database updates. For example, when a lead submits a booking form, the system automatically creates a deal, assigns a rep, schedules a follow-up task, and sends the client a confirmation email, requiring zero manual clicks."
    },
    {
      q: "How does the CRM connect with our marketing campaigns?",
      a: "We set up tracking integrations so that when a lead arrives, the CRM records the source (e.g. Google Ads, SEO keyword, Facebook Campaign), allowing you to see exactly which marketing investments are producing closed revenue."
    },
    {
      q: "Do you train our team on how to use the CRM?",
      a: "Yes. We create customized Loom walkthrough videos and simple cheat sheets tailored to your specific pipeline layouts, ensuring your team has zero learning friction and adopts the system immediately."
    }
  ];

  const faqSchema = getFaqSchema(faqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Services", item: "https://21techglory.com/services" },
    { name: "CRM Setup", item: "https://21techglory.com/services/crm" }
  ]);

  const serviceSchema = getServiceSchema({
    name: "CRM Setup & Integrations",
    description: "HubSpot, Zoho, and Salesforce database setup, data cleaning/migration, custom pipeline triggers, and team notification automations.",
    url: "https://21techglory.com/services/crm"
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
      <CrmClientPage />
    </>
  );
}
