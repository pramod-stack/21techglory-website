

import HeroWrapper from '@/components/ui/hero-wrapper';
import OrbitingSkills from '@/components/ui/orbiting-skills';
import { PortfolioParallax } from '@/components/ui/portfolio-parallax';
import Testimonials from '@/components/ui/testimonials-columns-1';
import PricingSection from '@/components/ui/animated-glassy-pricing';
import AnimatedShaderHero from '@/components/ui/animated-shader-hero';
import Footer from '@/components/ui/footer';
import OnboardingForm from '@/components/ui/multistep-form';

import Navbar from '@/components/ui/navbar';



export default function Home() {
  return (
    <main className="min-h-screen text-white bg-transparent">
      <Navbar />
      <HeroWrapper />
      <OrbitingSkills />
      <PortfolioParallax />
      <Testimonials />
      <PricingSection />
      <AnimatedShaderHero 
        trustBadge={{
          text: "Trusted by 50+ businesses across South India",
          icons: ["✦"]
        }}
        headline={{
          line1: "Ready to Grow?",
          line2: "Let's Build Your Digital System"
        }}
        subtitle="We don't just build websites — we build complete digital growth engines that bring customers, close deals, and scale your business 24/7."
        buttons={{
          primary: {
            text: "Book Your Free Strategy Call",
            href: "https://wa.me/919999999999"
          },
          secondary: {
            text: "See Our Pricing",
            href: "#pricing"
          }
        }}
      />
      <div id="onboarding" className="py-20 relative bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center mb-10 z-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Start Your Project</h2>
          <p className="text-gray-400 text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>
        <OnboardingForm />
      </div>
      <Footer />
    </main>
  );
}
