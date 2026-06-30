import { Metadata } from 'next';
import AiClientPage from './ai-client';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';
import { getFaqSchema } from '@/lib/schema/faq';
import { getServiceSchema } from '@/lib/schema/service';

export const metadata: Metadata = {
  title: "AI Automation & Agentic Workflows | 21TechGlory",
  description: "Automate lead handling, follow-ups, WhatsApp flows, customer support, and repetitive workflows with practical AI automation built for growth.",
  alternates: {
    canonical: "https://21techglory.com/services/ai-automation",
  },
  openGraph: {
    title: "AI Automation & Agentic Workflows | 21TechGlory",
    description: "Automate lead handling, follow-ups, WhatsApp flows, customer support, and repetitive workflows with practical AI automation built for growth.",
    url: "https://21techglory.com/services/ai-automation",
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
    title: "AI Automation & Agentic Workflows | 21TechGlory",
    description: "Automate lead handling, follow-ups, WhatsApp flows, customer support, and repetitive workflows with practical AI automation built for growth.",
    images: ["/og-image.jpg"],
  }
};

export default function Page() {
  const faqs = [
    {
      q: "What is AI Automation and how does it help my business?",
      a: "AI Automation involves using artificial intelligence models (like GPT-4 or Gemini) and webhook triggers to handle repetitive customer interactions, qualifying leads, and transferring data between systems. It saves hours of manual work and ensures clients get replies within seconds."
    },
    {
      q: "Can the AI handle bookings and appointments directly?",
      a: "Yes. We can integrate AI agents directly with calendar APIs like Google Calendar or Calendly. The agent chats with the customer, identifies open slots matching their preferences, and books the appointment directly in your system."
    },
    {
      q: "What happens if the AI agent cannot answer a question?",
      a: "We design every AI system with a built-in safety net. If a query is too complex, requires human decision-making, or indicates frustration, the AI marks the conversation and instantly forwards the details to your support team via email or Slack."
    },
    {
      q: "Is it secure? How do you protect customer data?",
      a: "Security is built into our core designs. We use official API channels, encrypt data during transfers, and ensure that customer transcripts are not stored or used to train public LLM models, complying with local data privacy guidelines."
    },
    {
      q: "How long does it take to deploy a custom AI automation?",
      a: "A basic lead capture or support agent takes about 3 to 4 weeks. Complex enterprise integrations (custom databases, multi-step agent actions) typically take 6 to 8 weeks depending on system requirements."
    }
  ];

  const faqSchema = getFaqSchema(faqs);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Services", item: "https://21techglory.com/services" },
    { name: "AI Automation", item: "https://21techglory.com/services/ai-automation" }
  ]);

  const serviceSchema = getServiceSchema({
    name: "AI Automation",
    description: "Intelligent AI chat assistants, WhatsApp automation, and custom workflow triggers to qualify, schedule, and route leads automatically.",
    url: "https://21techglory.com/services/ai-automation"
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
      <AiClientPage />
    </>
  );
}
