import { HeroSection } from "./_components/hero-section";
import { StatsSection } from "./_components/stats-section";
import { ArchitectureSection } from "./_components/architecture-section";
import { TechStackSection } from "./_components/tech-stack-section";
import { FeaturesSection } from "./_components/features-section";
import { CodePreviewSection } from "./_components/code-preview-section";
import { MultiLanguageSection } from "./_components/multi-language-section";
import { TestimonialsSection } from "./_components/testimonials-section";
import { FAQSection } from "./_components/faq-section";
import { PricingSection } from "./_components/pricing-section";
import { CTABanner } from "./_components/cta-banner";
import { Footer } from "./_components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LaunchPad - Ship Your SaaS in Days, Not Months",
  description:
    "Production-ready multi-tenant SaaS boilerplate with Next.js 15, tRPC, Better Auth, Stripe billing, and Drizzle ORM. Start building your SaaS today.",
  keywords: [
    "SaaS boilerplate",
    "Next.js starter",
    "TypeScript template",
    "tRPC",
    "Better Auth",
    "Stripe integration",
    "Multi-tenant",
  ],
};

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ArchitectureSection />
      <TechStackSection />
      <FeaturesSection />
      <CodePreviewSection />
      <MultiLanguageSection />
      <TestimonialsSection />
      <FAQSection />
      <PricingSection />
      <CTABanner />
      <Footer />
    </>
  );
}
