import type { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { getBreadcrumbSchema } from "@/lib/schema/breadcrumb";

export const metadata: Metadata = {
  title: "Engagement Terms | 21TechGlory",
  description: "Review 21TechGlory's standard professional engagement terms, client agreements, statement of work patterns, and payment structure models.",
  alternates: {
    canonical: "https://21techglory.com/engagement-terms",
  },
};

export default function Page() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "https://21techglory.com" },
    { name: "Engagement Terms", item: "https://21techglory.com/engagement-terms" }
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
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Engagement Terms</h1>
          <p className="text-sm text-gray-500">Last updated: {"{{TODO: engagement_updated_date}}"}</p>
        </div>

        <div className="space-y-8 text-gray-400 text-sm md:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">1. Professional Services</h2>
            <p>
              21TechGlory agrees to perform services as described in individual Statements of Work ("SOW") or project proposals agreed upon with the Client. Any changes, additions, or modifications to the scope of work must be documented in writing and approved by both parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">2. Fees and Billing</h2>
            <p>
              Clients will be invoiced in accordance with the billing schedules set forth in the relevant SOW. Payments are due within {"{{TODO: payment_terms_days}}"} days of the invoice date unless otherwise specified. Delayed payments may result in suspension of services or additional interest charges.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">3. Client Cooperation and Deliverables</h2>
            <p>
              The timely performance of services by 21TechGlory depends on the Client's prompt cooperation, including the provision of required credentials, content, data, and design approvals. Delays in receiving materials from the Client may impact delivery timelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">4. Confidentiality</h2>
            <p>
              Both parties agree to hold in strict confidence any proprietary or confidential information disclosed during the course of the engagement, including but not limited to business strategies, technical codebases, pricing models, and patient/customer data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">5. Term and Termination</h2>
            <p>
              Either party may terminate an ongoing engagement or SOW with {"{{TODO: termination_notice_days}}"} days written notice, subject to payment for all services completed up to the date of termination. Specific termination rights for cause are outlined in individual service agreements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">6. Dispute Resolution</h2>
            <p>
              Any disputes arising from or relating to our professional engagements shall first be addressed through good faith negotiations. If unresolved, they shall be submitted to mediation or arbitration under the jurisdiction of {"{{TODO: arbitration_city}}"}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white">7. Contact & Escalation</h2>
            <p>
              For legal notifications, escalation of service issues, or questions regarding professional terms, please contact our escalation team at tech@21techglory.com.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
