import { Metadata } from 'next';
import SeoClientPage from './seo-client';

export const metadata: Metadata = {
  title: "SEO Services for Local Growth and Qualified Leads | 21TechGlory",
  description: "Data-driven SEO services for businesses that want better rankings, more qualified traffic, stronger local visibility, and measurable lead growth.",
  alternates: {
    canonical: "https://21techglory.com/services/seo",
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to see results from SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO is a long-term compound growth strategy. While local optimizations and technical fixes can show ranking improvements within 4 to 8 weeks, significant organic traffic growth and consistent lead volume typically take 3 to 6 months of continuous campaign work."
        }
      },
      {
        "@type": "Question",
        "name": "What is Google Business Profile (GMB) optimization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's the process of improving your Google Maps listing visibility. Over 50% of mobile searches look for local directions. By optimizing your GMB photos, reviews, business descriptors, categories, and attributes, we help your business rank at the top of local maps searches."
        }
      },
      {
        "@type": "Question",
        "name": "Do you guarantee #1 rankings on Google?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Any agency guaranteeing a #1 search ranking is misleading you. Google's algorithm changes constantly. Instead, we guarantee to follow Google's white-hat guidelines, optimize code for speed, write high-authority content, and focus on delivering qualified leads and positive ROI."
        }
      },
      {
        "@type": "Question",
        "name": "What is Schema Markup and why does it matter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Schema markup is code that helps search engine crawlers understand context. For example, local business schema highlights your location and phone number, while FAQ schema renders questions and answers directly in search results, increasing organic click-through rates."
        }
      },
      {
        "@type": "Question",
        "name": "How do you track and report campaign progress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We set up tracking via Google Search Console and Google Analytics. Every month, you receive a dashboard report showing keyword positions, organic impressions, organic traffic clicks, and the exact count of phone calls and lead form submissions."
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
        "name": "SEO & GMB",
        "item": "https://21techglory.com/services/seo"
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
      <SeoClientPage />
    </>
  );
}
