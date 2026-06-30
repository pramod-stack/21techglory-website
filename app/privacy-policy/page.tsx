import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | 21TechGlory",
  description: "Review 21TechGlory's privacy policies, user data collection processes, cookies, and regulatory compliance standards.",
  alternates: {
    canonical: "https://21techglory.com/privacy-policy",
  },
};

export default function Page() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Privacy Policy", item: "https://21techglory.com/privacy-policy" }
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
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: {"{{TODO: policy_updated_date}}"}</p>
        </div>

        <div className="space-y-8 text-gray-400 text-sm md:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
            <p>
              Welcome to 21TechGlory ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal info, please contact us at {"{{TODO: branded_email}}"}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
            <p>
              We collect personal info that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on our website, or when you contact us.
            </p>
            <p>
              The personal info we collect depends on the context of your interactions with us and our website, and may include names, phone numbers, email addresses, mailing addresses, and company details.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
            <p>
              We process your info for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. Specifically, we use the info to send administrative updates, respond to inquiries, request feedback, and deliver targeted advertising or marketing campaigns.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Sharing Your Information</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell or trade your personal data to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Security of Your Information</h2>
            <p>
              We use appropriate technical and organizational security measures designed to protect the security of any personal info we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have rights under applicable privacy laws (such as the right to request access to and obtain a copy of your personal data, request rectification or erasure, or restrict processing). To make such a request, please contact us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Updates to This Policy</h2>
            <p>
              We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
