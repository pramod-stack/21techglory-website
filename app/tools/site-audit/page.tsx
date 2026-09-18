import { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import FooterMega from '@/components/ui/footer-mega';
import SmartCTA from '@/components/ui/smart-cta';
import WebsiteAudit from '@/components/ui/website-audit';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';

export const metadata: Metadata = {
  title: "Preliminary Website Speed & Conversion Audit Tool | 21TechGlory",
  description: "Honest preliminary technical scanner checking HTTPS, server latency, mobile viewport, and conversion funnel structure. Free 4-business-hour engineer review.",
  alternates: {
    canonical: "https://21techglory.com/tools/site-audit",
  }
};

export default function SiteAuditPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Tools", item: "https://21techglory.com/tools/site-audit" },
    { name: "Website Scanner", item: "https://21techglory.com/tools/site-audit" }
  ]);

  return (
    <div className="relative min-h-screen text-white bg-[#0B1220] overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <div className="pt-28 md:pt-36">
        <WebsiteAudit />
      </div>

      <FooterMega />
      <SmartCTA />
    </div>
  );
}
