import { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import FooterMega from '@/components/ui/footer-mega';
import SmartCTA from '@/components/ui/smart-cta';
import SystemBuilder from '@/components/ui/system-builder';
import { getBreadcrumbSchema } from '@/lib/schema/breadcrumb';

export const metadata: Metadata = {
  title: "Interactive System Builder & Connected Pipeline Visualizer | 21TechGlory",
  description: "Select from 10 modular growth components or 1-click industry presets to assemble your custom customer acquisition and lead automation engine.",
  alternates: {
    canonical: "https://21techglory.com/tools/build-your-system",
  }
};

export default function BuildYourSystemPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Tools", item: "https://21techglory.com/tools/build-your-system" },
    { name: "System Builder", item: "https://21techglory.com/tools/build-your-system" }
  ]);

  return (
    <div className="relative min-h-screen text-white bg-[#0B1220] overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <div className="pt-28 md:pt-36">
        <SystemBuilder />
      </div>

      <FooterMega />
      <SmartCTA />
    </div>
  );
}
