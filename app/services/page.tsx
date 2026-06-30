import { Metadata } from 'next';
import ServicesClientPage from './services-client';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';

export const metadata: Metadata = {
  title: "SEO, Web Development & AI Automation Services in Bangalore | 21TechGlory",
  description: "Explore 21TechGlory services for websites, local SEO, Google Business Profile optimization, paid ads, CRM setup, and AI automation built for service businesses.",
  alternates: {
    canonical: "https://21techglory.com/services",
  },
  openGraph: {
    title: "SEO, Web Development & AI Automation Services in Bangalore | 21TechGlory",
    description: "Explore 21TechGlory services for websites, local SEO, Google Business Profile optimization, paid ads, CRM setup, and AI automation built for service businesses.",
    url: "https://21techglory.com/services",
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
    title: "SEO, Web Development & AI Automation Services in Bangalore | 21TechGlory",
    description: "Explore 21TechGlory services for websites, local SEO, Google Business Profile optimization, paid ads, CRM setup, and AI automation built for service businesses.",
    images: ["/og-image.jpg"],
  }
};

export default function Page() {
  const breadcrumbData = [
    { name: "Home", item: "https://21techglory.com" },
    { name: "Services", item: "https://21techglory.com/services" }
  ];

  const faqs = [
    {
      q: "What types of businesses do you work with?",
      a: "We specialize in B2B service companies, local clinics, hospitals, spas, salons, and professional service providers who want to automate lead capture and build custom, high-speed digital systems."
    },
    {
      q: "Do you work with templates like WordPress or custom code?",
      a: "We only build custom codebases using Next.js and React. We do not use WordPress or Webflow. This ensures your site loads in under 1.5 seconds, has zero security vulnerabilities, and gives you total design freedom."
    },
    {
      q: "How does the CRM setup work with our website?",
      a: "We connect your website forms directly to your CRM (HubSpot, Zoho, or Salesforce) via APIs. When a lead is captured, it is instantly routed to your sales team with automated notifications on Slack or WhatsApp."
    },
    {
      q: "What is your process for local SEO and GMB optimization?",
      a: "We optimize your Google Business Profile (GMB) for the Local 3-Pack, build local citations, structure local service pages, and run localized schema markup campaigns to ensure maximum visibility for geo-specific searches."
    },
    {
      q: "Can you automate our customer support and lead follow-ups?",
      a: "Yes, we build custom AI automation agents and workflows that qualify incoming leads, sync appointments with calendars (Google Calendar, Calendly), and trigger immediate follow-up sequences."
    },
    {
      q: "What budget do you recommend for paid search ads?",
      a: "We recommend a minimum monthly ad spend of $1,000 to $1,500 for Google Search or Meta Ads. This budget is paid directly to the ad platforms and allows search algorithms to optimize conversions quickly."
    },
    {
      q: "How do you track and report campaign success?",
      a: "We configure Google Analytics 4 and Google Search Console to track actual business actions (form submissions, calls, bookings). You receive a transparent monthly dashboard report showing exact ROI and metrics."
    },
    {
      q: "How long does a typical web development and setup project take?",
      a: "A standard custom website and integration project takes 4 to 6 weeks. More complex web applications, full CRM migrations, or custom AI agent implementations typically take 6 to 10 weeks."
    }
  ];

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbData);
  const faqSchema = getFaqSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicesClientPage />
    </>
  );
}
