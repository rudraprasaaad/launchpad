import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { IconRocket } from "@tabler/icons-react";

export function CTABanner() {
  return (
    <section className="bg-dark-bg relative py-24">
      <div className="section-container">
        <AnimatedWrapper>
          <div className="glass-effect from-dark-surface/50 to-dark-surface/30 mx-auto max-w-4xl rounded-2xl bg-gradient-to-br p-12 text-center">
            <h2 className="mb-4">
              Stop Building Boilerplate,{" "}
              <span className="gradient-text">Start Building Products</span>
            </h2>
            <p className="text-dark-text-secondary mb-8 text-xl">
              Join developers who ship SaaS products in days, not months
            </p>
            <a
              href="#pricing"
              className="text-dark-bg inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold transition-colors hover:bg-gray-100"
            >
              <IconRocket className="mr-2 h-5 w-5" />
              Start Building Now
            </a>
            <p className="text-dark-text-tertiary mt-4 text-sm">
              Clone repo → Configure .env → Ship
            </p>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
