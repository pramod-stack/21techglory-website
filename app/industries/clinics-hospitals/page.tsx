import { Metadata } from 'next';
import HospitalsClientPage from './hospitals-client';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';
import { getServiceSchema } from '@/lib/schema/service';
import { posts } from '@/lib/blog/posts-data';

export const metadata: Metadata = {
  title: "Clinic Website Development & Patient Growth Systems | 21TechGlory",
  description: "Scale your healthcare practice with premium clinic website design, hospital website development, local SEO services, and AI appointment booking reminders.",
  alternates: {
    canonical: "https://21techglory.com/industries/clinics-hospitals",
  },
  openGraph: {
    title: "Clinic Website Development & Patient Growth Systems | 21TechGlory",
    description: "Scale your healthcare practice with premium clinic website design, hospital website development, local SEO services, and AI appointment booking reminders.",
    url: "https://21techglory.com/industries/clinics-hospitals",
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
    title: "Clinic Website Development & Patient Growth Systems | 21TechGlory",
    description: "Scale your healthcare practice with premium clinic website design, hospital website development, local SEO services, and AI appointment booking reminders.",
    images: ["/og-image.jpg"],
  }
};

export default function Page() {
  const faqs = [
    {
      q: "How much does clinic website development cost?",
      a: "Our healthcare website development packages start at ₹15,000 for solo doctors and small clinics, ₹40,000–₹80,000 for full-featured clinic websites with online appointment booking and WhatsApp automation, and custom pricing for multi-specialty hospital website development with patient portals and multi-branch architecture. Every package includes mobile responsive design, Google Maps SEO setup, and three months of free support."
    },
    {
      q: "How long does it take to build a doctor website?",
      a: "A standard doctor website with appointment booking goes live in 2–3 weeks. A complete clinic appointment booking website with patient management and WhatsApp integration takes 3–4 weeks. Full hospital website development projects with 10+ departments typically launch in 6–10 weeks. We share a detailed week-by-week timeline before kick-off."
    },
    {
      q: "Do you provide ongoing clinic SEO services?",
      a: "Yes. Our monthly clinic SEO services include keyword tracking, on-page optimization, Google Business Profile management, weekly Google Posts, citation building, monthly content publishing, link building from medical directories, and detailed performance reporting. Most clients begin seeing significant Google Maps ranking improvements within 60–90 days."
    },
    {
      q: "Can patients book appointments without an account?",
      a: "Absolutely. Our clinic appointment booking website is designed for zero-friction booking — patients enter name, phone, preferred slot, and they're done. No signup, no password, no app download. Existing patients can optionally create accounts to view history and rebook in one tap."
    },
    {
      q: "How does WhatsApp appointment reminder integration work?",
      a: "We connect your clinic to WhatsApp Business API. Once integrated, every booking triggers an automatic confirmation, a 24-hour reminder, a 2-hour reminder, and a post-visit follow-up — all branded with your clinic name. You can also broadcast festival messages, health tips, and re-engagement campaigns to your patient list (with consent)."
    },
    {
      q: "Will my clinic show up on Google Maps?",
      a: "Yes. Our Google Maps SEO process is structured to rank your clinic in the local 3-pack for high-intent searches in your service area. We optimize 30+ ranking factors including categories, NAP consistency, review velocity, photo geotags, citation profile, and Google Posts frequency. Realistic timeline: visible improvements in 30–45 days, top 3 rankings in 60–120 days for most specialties."
    },
    {
      q: "Do you work with hospitals outside India?",
      a: "While most of our healthcare clients are in India, we also serve clinics and hospitals across the UAE, Singapore, the UK and the US. Our hospital website development frameworks are localized for region-specific compliance (HIPAA, GDPR, etc.) and language requirements."
    },
    {
      q: "Can you migrate my existing website without losing SEO?",
      a: "Yes. We perform full SEO migrations — preserving URL structure, setting up 301 redirects, transferring schema, and protecting your existing rankings. In most cases our clients see rankings improve post-migration because of the technical performance upgrade."
    }
  ];

  const faqSchema = getFaqSchema(faqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Healthcare growth solutions", item: "https://21techglory.com/industries/clinics-hospitals" }
  ]);

  const serviceSchema = getServiceSchema({
    name: "Clinic Website Development & Patient Growth Systems",
    description: "Clinic website design, hospital website development, local SEO services, and AI appointment booking reminders.",
    url: "https://21techglory.com/industries/clinics-hospitals"
  });

  const relatedPosts = posts.filter(post => 
    post.category === 'Local SEO' || 
    post.slug.includes('clinic') || 
    post.slug.includes('doctor') || 
    post.slug.includes('hospital')
  ).slice(0, 3);

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
      <HospitalsClientPage relatedPosts={relatedPosts} />
    </>
  );
}
