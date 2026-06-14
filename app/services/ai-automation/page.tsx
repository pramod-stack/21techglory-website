import { Metadata } from 'next';
import AiClientPage from './ai-client';

export const metadata: Metadata = {
  title: "AI Automation Services for Smarter Business Growth | 21TechGlory",
  description: "Automate lead handling, follow-ups, WhatsApp flows, customer support, and repetitive workflows with practical AI automation built for growth.",
  alternates: {
    canonical: "https://21techglory.com/services/ai-automation",
  },
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is AI Automation and how does it help my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI Automation involves using artificial intelligence models (like GPT-4 or Gemini) and webhook triggers to handle repetitive customer interactions, qualifying leads, and transferring data between systems. It saves hours of manual work and ensures clients get replies within seconds."
        }
      },
      {
        "@type": "Question",
        "name": "Can the AI handle bookings and appointments directly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We can integrate AI agents directly with calendar APIs like Google Calendar or Calendly. The agent chats with the customer, identifies open slots matching their preferences, and books the appointment directly in your system."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if the AI agent cannot answer a question?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We design every AI system with a built-in safety net. If a query is too complex, requires human decision-making, or indicates frustration, the AI marks the conversation and instantly forwards the details to your support team via email or Slack."
        }
      },
      {
        "@type": "Question",
        "name": "Is it secure? How do you protect customer data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Security is built into our core designs. We use official API channels, encrypt data during transfers, and ensure that customer transcripts are not stored or used to train public LLM models, complying with local data privacy guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to deploy a custom AI automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A basic lead capture or support agent takes about 3 to 4 weeks. Complex enterprise integrations (custom databases, multi-step agent actions) typically take 6 to 8 weeks depending on system requirements."
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
        "name": "AI Automation",
        "item": "https://21techglory.com/services/ai-automation"
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
      <AiClientPage />
    </>
  );
}
