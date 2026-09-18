import type { Metadata } from "next";
import CaseStudyFlow from "@/components/ui/case-study-flow";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = {
  title: "Liger Fitness Case Study | Multi-Branch Gym Web Development & Local Ranking | 21TechGlory",
  description: "How 21TechGlory engineered a sub-second Next.js web platform, automated trial bookings, and ranked #1 on Google Maps across 4 branches (3 in Kerala, 1 in Bangalore) for Liger Fitness.",
  alternates: {
    canonical: "https://21techglory.com/work/liger-fitness",
  },
  openGraph: {
    title: "Liger Fitness Case Study | 21TechGlory",
    description: "How 21TechGlory engineered a sub-second Next.js web platform, automated trial bookings, and ranked #1 on Google Maps across 4 branches (3 in Kerala, 1 in Bangalore) for Liger Fitness.",
    url: "https://21techglory.com/work/liger-fitness",
    type: "article",
  },
};

const ligerFitnessData = {
  id: "liger-fitness",
  client: "Liger Fitness",
  title: "Liger Fitness: Multi-Branch Gym Brand, Web Development & Local Acquisition Engine",
  subtitle: "Rebuilding brand presence with sub-second Next.js speed, seamless trial bookings, and #1 Google Map Pack rankings across 4 branches (3 in Kerala, 1 in Bangalore).",
  category: "Fitness Web Development, Marketing & Local Ranking",
  industry: "Fitness & Gyms",
  location: "4 Branches (3 in Kerala, 1 in Bangalore)",
  duration: "4 Weeks",
  stack: ["Next.js", "Tailwind CSS", "WhatsApp Business API", "Multi-Location Local SEO"],
  liveUrl: "https://www.ligerfitness.co.in/",
  businessOverview: "Liger Fitness is a premier fitness and strength training brand operating 4 state-of-the-art facilities: 3 high-demand branches in Kerala and 1 flagship fitness center in Bangalore. With ambitious expansion, they needed an online presence that mirrored their physical training excellence, unified their brand across regions, and seamlessly converted digital visitors into booked trial workouts for every individual branch.",
  problemSummary: "Despite great physical training facilities, Liger Fitness struggled with multi-location lead leakage. Mobile visitors bounced due to slow external links, local search visibility was fragmented across Kerala and Bangalore, and trial requests were lost in unstructured direct message threads with no automated follow-up.",
  problemPoints: [
    "High bounce rate on mobile devices from unoptimized social bio links across multiple branch accounts.",
    "Fragmented local search presence and inconsistent Google Business Profiles across the 3 Kerala and 1 Bangalore locations.",
    "Manual trial session coordination resulting in 4+ hour lead response delays and lost memberships."
  ],
  implementations: [
    {
      area: "DESIGN" as const,
      title: "Cinematic High-Impact Multi-Location Aesthetic",
      description: "Crafted a dark, high-contrast visual identity showcasing facility equipment, coaching authority, branch selectors, and clear trial booking CTAs."
    },
    {
      area: "TECHNOLOGY" as const,
      title: "Sub-Second Next.js Architecture",
      description: "Engineered a lightweight App Router frontend achieving sub-1.2s LCP on mobile 4G connections with intelligent branch routing."
    },
    {
      area: "AUTOMATION" as const,
      title: "Direct WhatsApp Multi-Branch Trial Routing",
      description: "Integrated instant WhatsApp trial session confirmation and automatic reminders routed directly to the specific branch desk coordinator."
    },
    {
      area: "MARKETING" as const,
      title: "Multi-Location Local SEO & Google Maps Ranking",
      description: "Structured localized gym schema, individual Google Business Profiles, and hyper-local citation workflows for all 3 Kerala locations and the Bangalore facility."
    }
  ],
  beforeFlow: [
    "Instagram/Search Visitor",
    "Slow External Link",
    "Unclear Branch Selection",
    "4-Hour Delay in Manual DMs",
    "Lead Lost to Competitor"
  ],
  afterFlow: [
    "Local Search / Social",
    "<1.2s Fast Landing Page",
    "1-Click Branch & Trial Selection",
    "Instant WhatsApp Confirmation",
    "Branch Desk Coordinator Alert",
    "Prospect Shows Up for Workout"
  ],
  outcomes: [
    "Sub-1.2s mobile load time guaranteeing immediate visitor engagement.",
    "Over 180% increase in verified trial workout bookings across all 4 branches within 60 days.",
    "#1 local search ranking for primary fitness search queries in all 4 branch vicinities (3 in Kerala, 1 in Bangalore)."
  ],
  verifiedMetrics: [
    { label: "Trial Bookings", value: "+180%" },
    { label: "Local Map Rank", value: "#1 (4 Branches)" },
    { label: "Active Branches", value: "3 Kerala + 1 BLR" },
    { label: "Mobile Speed", value: "<1.2s LCP" }
  ],
  recommendedPreset: "Local Business",
  recommendedModules: ["website", "gmb", "whatsapp", "automation"]
};

export default function LigerFitnessCaseStudyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Work", item: "https://21techglory.com/work" },
    { name: "Liger Fitness", item: "https://21techglory.com/work/liger-fitness" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CaseStudyFlow data={ligerFitnessData} />
    </>
  );
}
