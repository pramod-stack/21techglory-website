import { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import FooterMega from '@/components/ui/footer-mega';
import SmartCTA from '@/components/ui/smart-cta';
import GrowthAudit from '@/components/ui/growth-audit';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';

export const metadata: Metadata = {
  title: "Digital Growth System Diagnostic & Audit Tool | 21TechGlory",
  description: "Evaluate your business across Visibility, Conversion, Automation, Follow-Up, and Digital Infrastructure. Get a custom system blueprint reviewed within 4 business hours.",
  alternates: {
    canonical: "https://21techglory.com/tools/growth-audit",
  }
};

export default function GrowthAuditPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Tools", item: "https://21techglory.com/tools/growth-audit" },
    { name: "Growth Diagnostic", item: "https://21techglory.com/tools/growth-audit" }
  ]);

  return (
    <div className="relative min-h-screen text-white bg-[#0B1220] overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <div className="pt-28 md:pt-36">
        <GrowthAudit />
      </div>

      <FooterMega />
      <SmartCTA />
    </div>
  );
}
