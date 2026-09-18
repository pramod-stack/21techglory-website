import type { Metadata } from "next";
import CaseStudyFlow from "@/components/ui/case-study-flow";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = {
  title: "Education to Career Bridge Case Study | Web Development & Local Ranking | 21TechGlory",
  description: "How 21TechGlory developed a high-converting education platform, implemented local SEO ranking, and boosted student inquiries by 250% for Education to Career Bridge.",
  alternates: {
    canonical: "https://21techglory.com/work/education-career-bridge",
  },
  openGraph: {
    title: "Education to Career Bridge Case Study | 21TechGlory",
    description: "How 21TechGlory developed a high-converting education platform, implemented local SEO ranking, and boosted student inquiries by 250% for Education to Career Bridge.",
    url: "https://21techglory.com/work/education-career-bridge",
    type: "article",
  },
};

const educationBridgeData = {
  id: "education-career-bridge",
  client: "Education to Career Bridge",
  title: "Education to Career Bridge: Web Development, Education Marketing & Local Ranking Engine",
  subtitle: "Engineering a high-performance career guidance platform with sub-second Next.js speed, structured academic roadmaps, and #1 local search ranking dominance.",
  category: "Web Development, Education Marketing & Local Ranking",
  industry: "Education & Career Counseling",
  location: "India",
  duration: "4 Weeks",
  stack: ["Next.js", "Tailwind CSS", "Educational SEO Schema", "WhatsApp Business API"],
  liveUrl: "https://educationtocareerbridge.com/",
  businessOverview: "Education to Career Bridge is an authoritative educational counseling and career development platform dedicated to bridging the critical gap between academic learning and industry careers. They empower students and recent graduates with personalized career transition guidance, specialized skills development tracks, and university pathway advisory.",
  problemSummary: "Prior to partnering with 21TechGlory, Education to Career Bridge was virtually invisible in localized search queries for career counseling and skill transition programs. Their previous digital layout suffered from high mobile bounce rates, lacked clear program discovery hierarchies, and leaked high-intent student leads due to slow manual follow-ups.",
  problemPoints: [
    "Invisible in regional search results and Google Maps for high-intent career guidance queries.",
    "Unoptimized, sluggish mobile layouts leading to high bounce rates during peak academic decision cycles.",
    "Manual inquiry handling causing multi-hour response delays and lost candidate enrollments."
  ],
  implementations: [
    {
      area: "DESIGN" as const,
      title: "Authoritative Student-Centric Interface",
      description: "Designed a clean, trustworthy visual layout highlighting program pathways, mentor credentials, transparent curricula, and frictionless consultation CTAs."
    },
    {
      area: "TECHNOLOGY" as const,
      title: "Sub-Second Next.js Architecture",
      description: "Constructed an ultra-fast App Router frontend delivering sub-1.1s LCP on mobile 4G networks for seamless browsing."
    },
    {
      area: "AUTOMATION" as const,
      title: "Direct WhatsApp Counselor Booking Flow",
      description: "Implemented an automated 1-click consultation pipeline that routes prospective student inquiries directly to assigned educational counselors in under 60 seconds."
    },
    {
      area: "MARKETING" as const,
      title: "Hyper-Local SEO & Google Business Authority",
      description: "Deployed specialized EducationalOrganization schema, citation networks, and targeted localized SEO strategies to capture high-intent regional student queries."
    }
  ],
  beforeFlow: [
    "Student Searches for Career Guidance",
    "Invisible on Search & Maps",
    "Slow Mobile Landing Page",
    "Unstructured Form & 4-Hour Delay",
    "Student Enrolls with Competitor"
  ],
  afterFlow: [
    "High-Intent Search Discovery",
    "Ranked #1 on Google Local Pack",
    "<1.1s Fast Landing Experience",
    "1-Click Counselor Booking",
    "Instant WhatsApp Confirmation",
    "Student Successfully Enrolled"
  ],
  outcomes: [
    "Secured #1 local ranking for core career guidance, counseling, and vocational pathway queries.",
    "Delivered a +250% increase in verified student enrollment inquiries within 60 days.",
    "Reduced counselor first-response time to under 2 minutes via automated WhatsApp routing."
  ],
  verifiedMetrics: [
    { label: "Student Inquiries", value: "+250%" },
    { label: "Local Search Rank", value: "#1 Local Pack" },
    { label: "Response Speed", value: "<2 Mins" },
    { label: "Mobile Speed", value: "<1.1s LCP" }
  ],
  recommendedPreset: "Education / Professional Services",
  recommendedModules: ["website", "seo", "whatsapp", "automation"]
};

export default function EducationCareerBridgeCaseStudyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Work", item: "https://21techglory.com/work" },
    { name: "Education to Career Bridge", item: "https://21techglory.com/work/education-career-bridge" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CaseStudyFlow data={educationBridgeData} />
    </>
  );
}
