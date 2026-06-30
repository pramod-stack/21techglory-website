import { Metadata } from 'next';
import SkincareClientPage from './skincare-client';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';
import { getServiceSchema } from '@/lib/schema/service';
import { posts } from '@/lib/blog/posts-data';

export const metadata: Metadata = {
  title: "Salon Website Design, Booking Systems & SEO | 21TechGlory",
  description: "Scale your beauty business with premium salon website design, automated booking systems, WhatsApp appointment reminders, and local SEO services.",
  alternates: {
    canonical: "https://21techglory.com/industries/salons-spas",
  },
  openGraph: {
    title: "Salon Website Design, Booking Systems & SEO | 21TechGlory",
    description: "Scale your beauty business with premium salon website design, automated booking systems, WhatsApp appointment reminders, and local SEO services.",
    url: "https://21techglory.com/industries/salons-spas",
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
    title: "Salon Website Design, Booking Systems & SEO | 21TechGlory",
    description: "Scale your beauty business with premium salon website design, automated booking systems, WhatsApp appointment reminders, and local SEO services.",
    images: ["/og-image.jpg"],
  }
};

export default function Page() {
  const faqs = [
    {
      q: "How long does it take to launch my salon website + booking system?",
      a: "Most projects go live in 15–30 days from kickoff. The website typically takes 2–3 weeks, with booking, WhatsApp, and SEO setups happening in parallel. We move fast, but never at the cost of quality."
    },
    {
      q: "Do I need to be tech-savvy to run this?",
      a: "Not at all. Our dashboards are designed for salon owners — not engineers. We train your front desk in under 60 minutes. If you can use WhatsApp and Google, you can run our entire system."
    },
    {
      q: "How is your booking system different from Fresha or Zenoti?",
      a: "Off-the-shelf platforms work, but they're rigid, expensive on scale, and your booking page lives on their domain. We build your booking system on your own website, fully branded, with WhatsApp + Instagram + SEO baked in — and no per-booking commissions ever."
    },
    {
      q: "What if my salon is in a Tier-2 or Tier-3 city?",
      a: "Even better. Competition is lower, which means ranking #1 on Google is faster and cheaper. We've built systems for salons everywhere from Bangalore to small-town Tamil Nadu and Kerala."
    },
    {
      q: "Can you handle multi-branch salons?",
      a: "Absolutely. Our system supports unlimited branches, individual GMB management, branch-wise analytics, centralized inventory, and unified branding. We've helped chains scale from 2 outlets to 12+."
    },
    {
      q: "Do you guarantee results?",
      a: "We guarantee a system that's professionally built and fully functional. Real results depend on execution — but our 50+ salon clients consistently see 3x+ booking growth in 90 days. We share case studies on our discovery call."
    },
    {
      q: "What does pricing look like?",
      a: "Salon packages start at ₹25,000 for a starter website + booking setup, going up to ₹2L+ for full multi-branch growth systems with ongoing SEO and marketing. We tailor every quote to your goals. Book a free audit to get pricing for your specific needs."
    },
    {
      q: "What happens after launch?",
      a: "You get a dedicated growth manager, monthly performance reports, and ongoing optimization on SEO, ads, automations, and content. We're not a 'build and bounce' agency — we stick around to scale you."
    }
  ];

  const faqSchema = getFaqSchema(faqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Salon & Spa growth solutions", item: "https://21techglory.com/industries/salons-spas" }
  ]);

  const serviceSchema = getServiceSchema({
    name: "Salon & Spa Growth Solutions",
    description: "Premium salon website design, automated booking systems, WhatsApp reminders, and local SEO services.",
    url: "https://21techglory.com/industries/salons-spas"
  });

  const relatedPosts = posts.filter(post => 
    post.category === 'Salon Growth' || 
    post.slug.includes('salon') || 
    post.slug.includes('spa') || 
    post.slug.includes('skincare')
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
      <SkincareClientPage relatedPosts={relatedPosts} />
    </>
  );
}
