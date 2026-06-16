import { Metadata } from 'next';
import SkincareClientPage from './skincare-client';

export const metadata: Metadata = {
  title: "Salon Website Design, Booking Systems & SEO | 21TechGlory",
  description: "Scale your beauty business with premium salon website design, automated booking systems, WhatsApp appointment reminders, and local SEO services.",
  alternates: {
    canonical: "https://21techglory.com/skincare",
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to launch my salon website + booking system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most projects go live in 15–30 days from kickoff. The website typically takes 2–3 weeks, with booking, WhatsApp, and SEO setups happening in parallel. We move fast, but never at the cost of quality."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to be tech-savvy to run this?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all. Our dashboards are designed for salon owners — not engineers. We train your front desk in under 60 minutes. If you can use WhatsApp and Google, you can run our entire system."
        }
      },
      {
        "@type": "Question",
        "name": "How is your booking system different from Fresha or Zenoti?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Off-the-shelf platforms work, but they're rigid, expensive on scale, and your booking page lives on their domain. We build your booking system on your own website, fully branded, with WhatsApp + Instagram + SEO baked in — and no per-booking commissions ever."
        }
      },
      {
        "@type": "Question",
        "name": "What if my salon is in a Tier-2 or Tier-3 city?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Even better. Competition is lower, which means ranking #1 on Google is faster and cheaper. We've built systems for salons everywhere from Bangalore to small-town Tamil Nadu and Kerala."
        }
      },
      {
        "@type": "Question",
        "name": "Can you handle multi-branch salons?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our system supports unlimited branches, individual GMB management, branch-wise analytics, centralized inventory, and unified branding. We've helped chains scale from 2 outlets to 12+."
        }
      },
      {
        "@type": "Question",
        "name": "Do you guarantee results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We guarantee a system that's professionally built and fully functional. Real results depend on execution — but our 50+ salon clients consistently see 3x+ booking growth in 90 days. We share case studies on our discovery call."
        }
      },
      {
        "@type": "Question",
        "name": "What does pricing look like?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Salon packages start at ₹25,000 for a starter website + booking setup, going up to ₹2L+ for full multi-branch growth systems with ongoing SEO and marketing. We tailor every quote to your goals. Book a free audit to get pricing for your specific needs."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You get a dedicated growth manager, monthly performance reports, and ongoing optimization on SEO, ads, automations, and content. We're not a 'build and bounce' agency — we stick around to scale you."
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
        "name": "Salon & Spa growth solutions",
        "item": "https://21techglory.com/skincare"
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
      <SkincareClientPage />
    </>
  );
}
