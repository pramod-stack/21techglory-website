import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service | 21TechGlory",
  description: "Review 21TechGlory's website usage terms, client agreements, licensing parameters, and liability disclaimers.",
  alternates: {
    canonical: "https://21techglory.com/terms-of-service",
  },
};

export default function Page() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Terms of Service", item: "https://21techglory.com/terms-of-service" }
  ]);

  return (
    <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Background gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <Navbar />

      <main className="max-w-4xl mx-auto pt-36 pb-24 px-6 relative z-10">
        {/* LEGAL: Replace placeholder content with approved text prior to deployment */}
        <div className="space-y-4 mb-12">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Terms of Service</h1>
          <p className="text-sm text-gray-500">Last updated: {"{{TODO: terms_updated_date}}"}</p>
        </div>

        <div className="space-y-8 text-gray-400 text-sm md:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and 21TechGlory ("we," "us," or "our"), concerning your access to and use of the {"https://21techglory.com"} website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. User Representations</h2>
            <p>
              By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update it; (3) you have the legal capacity and you agree to comply with these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Prohibited Activities</h2>
            <p>
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of {"{{TODO: governing_jurisdiction}}"}. 21TechGlory and yourself irrevocably consent that the courts of {"{{TODO: governing_city}}"} shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Disclaimers and Limitations of Liability</h2>
            <p>
              The site is provided on an as-is and as-available basis. You agree that your use of the site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the site and your use thereof.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at {"{{TODO: branded_email}}"}.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
