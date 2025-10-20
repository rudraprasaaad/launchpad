import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { IconCheck, IconStar } from "@tabler/icons-react";

const FEATURES = [
  "Complete source code",
  "All features included",
  "Unlimited projects",
  "Lifetime updates",
  "Discord community access",
  "Priority email support",
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-dark-surface relative py-24">
      <div className="section-container">
        <AnimatedWrapper>
          <div className="mb-16 text-center">
            <h2 className="mb-4">
              One Price,{" "}
              <span className="gradient-text">Unlimited Projects</span>
            </h2>
            <p className="text-dark-text-secondary text-xl">
              No subscriptions. Buy once, use forever.
            </p>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.2}>
          <div className="mx-auto max-w-lg">
            <div className="glass-effect border-primary-500/30 animate-pulse-glow relative rounded-xl border-2 p-8">
              {/* Launch offer badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="gradient-bg flex items-center gap-2 rounded-full px-4 py-1 text-sm font-semibold text-white">
                  <IconStar className="h-4 w-4" />
                  Launch Offer
                </div>
              </div>

              {/* Price */}
              <div className="mt-4 mb-8 text-center">
                <div className="mb-2 flex items-center justify-center gap-3">
                  <span className="text-5xl font-bold text-white">$299</span>
                  <span className="text-dark-text-tertiary text-2xl line-through">
                    $499
                  </span>
                </div>
                <p className="text-dark-text-secondary">
                  One-time payment • Lifetime updates
                </p>
              </div>

              {/* Features */}
              <div className="mb-8 space-y-3">
                {FEATURES.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="bg-primary-500/20 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
                      <IconCheck className="text-primary-400 h-4 w-4" />
                    </div>
                    <span className="text-dark-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="gradient-bg w-full rounded-lg py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90">
                Get LaunchPad Now
              </button>

              {/* Guarantee */}
              <p className="text-dark-text-tertiary mt-4 text-center text-sm">
                30-day money-back guarantee
              </p>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
