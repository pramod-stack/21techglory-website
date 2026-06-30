import { Metadata } from 'next';
import SeoClientPage from './seo-client';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';
import { getServiceSchema } from '@/lib/schema/service';
import { posts } from '@/lib/blog/posts-data';

export const metadata: Metadata = {
  title: "SEO & Google Business Profile Services | 21TechGlory",
  description: "Data-driven SEO services for businesses that want better rankings, more qualified traffic, stronger local visibility, and measurable lead growth.",
  alternates: {
    canonical: "https://21techglory.com/services/seo",
  },
  openGraph: {
    title: "SEO & Google Business Profile Services | 21TechGlory",
    description: "Data-driven SEO services for businesses that want better rankings, more qualified traffic, stronger local visibility, and measurable lead growth.",
    url: "https://21techglory.com/services/seo",
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
    title: "SEO & Google Business Profile Services | 21TechGlory",
    description: "Data-driven SEO services for businesses that want better rankings, more qualified traffic, stronger local visibility, and measurable lead growth.",
    images: ["/og-image.jpg"],
  }
};

export default function Page() {
  const faqs = [
    {
      q: "How long does it take to see results from SEO?",
      a: "SEO is a long-term compound growth strategy. While local optimizations and technical fixes can show ranking improvements within 4 to 8 weeks, significant organic traffic growth and consistent lead volume typically take 3 to 6 months of continuous campaign work."
    },
    {
      q: "What is Google Business Profile (GMB) optimization?",
      a: "It's the process of improving your Google Maps listing visibility. Over 50% of mobile searches look for local directions. By optimizing your GMB photos, reviews, business descriptors, categories, and attributes, we help your business rank at the top of local maps searches."
    },
    {
      q: "Do you guarantee #1 rankings on Google?",
      a: "Any agency guaranteeing a #1 search ranking is misleading you. Google's algorithm changes constantly. Instead, we guarantee to follow Google's white-hat guidelines, optimize code for speed, write high-authority content, and focus on delivering qualified leads and positive ROI."
    },
    {
      q: "What is Schema Markup and why does it matter?",
      a: "Schema markup is code that helps search engine crawlers understand context. For example, local business schema highlights your location and phone number, while FAQ schema renders questions and answers directly in search results, increasing organic click-through rates."
    },
    {
      q: "How do you track and report campaign progress?",
      a: "We set up tracking via Google Search Console and Google Analytics. Every month, you receive a dashboard report showing keyword positions, organic impressions, organic traffic clicks, and the exact count of phone calls and lead form submissions."
    }
  ];

  const faqSchema = getFaqSchema(faqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Services", item: "https://21techglory.com/services" },
    { name: "SEO & GMB", item: "https://21techglory.com/services/seo" }
  ]);

  const serviceSchema = getServiceSchema({
    name: "Search Engine Optimization (SEO)",
    description: "Ethical search campaigns target ready-to-buy queries, optimize code for indexability, and rank Google listings to scale your lead acquisitions.",
    url: "https://21techglory.com/services/seo"
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
      <SeoClientPage relatedPosts={posts.filter(p => p.category === 'Local SEO' || p.category === 'Web & Conversion').slice(0, 3)} />
    </>
  );
}
