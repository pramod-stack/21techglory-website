import type { Metadata } from "next";
import CaseStudyFlow from "@/components/ui/case-study-flow";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = {
  title: "Namo Cranes Case Study | B2B Industrial Quotation Portal | 21TechGlory",
  description: "How 21TechGlory engineered a high-authority B2B material handling portal and automated quotation request pipeline for Namo Cranes & Services.",
  alternates: {
    canonical: "https://21techglory.com/work/namo-cranes",
  },
  openGraph: {
    title: "Namo Cranes Case Study | 21TechGlory",
    description: "How 21TechGlory engineered a high-authority B2B material handling portal and automated quotation request pipeline for Namo Cranes & Services.",
    url: "https://21techglory.com/work/namo-cranes",
    type: "article",
  },
};

const namoCranesData = {
  id: "namo-cranes",
  client: "Namo Cranes & Services",
  title: "Namo Cranes: Industrial Engineering & B2B Quotation Engine",
  subtitle: "Transforming industrial material handling catalogs into a structured, high-conversion engineering quotation portal.",
  category: "Industrial Web Infrastructure & B2B Inquiries",
  industry: "Cranes & Material Handling",
  location: "India",
  duration: "6 Weeks",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "CRM Integration", "B2B SEO"],
  liveUrl: "https://namocranes.com/",
  businessOverview: "Namo Cranes & Services is a prominent manufacturer of industrial overhead cranes, gantry systems, and heavy material handling solutions. Their sales cycle depends on structured technical specifications and accurate Request-For-Quotation (RFQ) submissions from industrial buyers.",
  problemSummary: "Prior to the rebuild, Namo Cranes relied on an outdated static website with unstructured contact boxes. Potential industrial clients couldn't easily browse product load capacities, and complex engineering enquiries were delayed in email back-and-forths.",
  problemPoints: [
    "Unstructured enquiry forms requiring extensive manual follow-up to obtain technical specs.",
    "Lack of responsive technical catalog for plant managers browsing on tablets and phones.",
    "Absence of CRM deal card synchronization for sales engineers."
  ],
  implementations: [
    {
      area: "DESIGN" as const,
      title: "Authoritative Industrial UI",
      description: "Designed a clean, heavy-engineering aesthetic organizing crane models by tonnage, span, and industrial duty cycles."
    },
    {
      area: "TECHNOLOGY" as const,
      title: "Structured Specification Viewer",
      description: "Engineered fast interactive spec sheets and technical brochure downloads with zero client-side lag."
    },
    {
      area: "CONVERSION" as const,
      title: "Guided RFQ Quotation Builder",
      description: "Built a 3-step quotation workflow that prompts plant buyers for required span, capacity, and hoist speeds."
    },
    {
      area: "AUTOMATION" as const,
      title: "Direct CRM Deal Card Creation",
      description: "Integrated real-time CRM routing that instantly notifies senior application engineers when new RFQs arrive."
    }
  ],
  beforeFlow: [
    "Industrial Buyer Search",
    "Generic Contact Box",
    "Missing Technical Details",
    "Days of Email Follow-Up",
    "Lost RFQ Deal"
  ],
  afterFlow: [
    "High-Intent Search / Referral",
    "Structured Crane Catalog",
    "Guided 3-Step RFQ Intake",
    "Instant Technical Deal Card in CRM",
    "Engineer Phone Response <2h",
    "Formal Quotation Issued"
  ],
  outcomes: [
    "+220% increase in structured B2B technical quotation requests.",
    "3.5x increase in product catalog and specification engagement time.",
    "99.9% portal uptime with resilient database queuing for high-value tenders."
  ],
  verifiedMetrics: [
    { label: "B2B Enquiries", value: "+220%" },
    { label: "Catalog Engagement", value: "3.5x" },
    { label: "Platform Uptime", value: "99.9%" }
  ],
  recommendedPreset: "Full Growth Engine",
  recommendedModules: ["website", "seo", "crm", "automation"]
};

export default function NamoCranesCaseStudyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Work", item: "https://21techglory.com/work" },
    { name: "Namo Cranes", item: "https://21techglory.com/work/namo-cranes" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CaseStudyFlow data={namoCranesData} />
    </>
  );
}
