import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { ArchitectureDiagram } from "./architecture-diagram";
import { IconCheck } from "@tabler/icons-react";

const FEATURES = [
  "Multi-tenant by default",
  "Stripe billing integrated",
  "Team invitations ready",
  "Type-safe everywhere",
];

export function ArchitectureSection() {
  return (
    <section className="bg-dark-surface relative py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <AnimatedWrapper>
            <ArchitectureDiagram />
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.2}>
            <div>
              <h2 className="mb-6">
                Ship Features, Not{" "}
                <span className="gradient-text">Infrastructure</span>
              </h2>
              <p className="text-dark-text-secondary mb-8 text-lg">
                Focus on unique value proposition while LaunchPad handles
                authentication, multi-tenancy, billing, and team management out
                of the box.
              </p>

              <div className="mb-8 space-y-4">
                {FEATURES.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="bg-primary-500/20 flex size-6 flex-shrink-0 items-center justify-center rounded-full">
                      <IconCheck className="text-primary-400 size-4" />
                    </div>
                    <span className="text-dark-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="/docs/architecture"
                className="glass-effect hover:bg-dark-surface/70 inline-flex items-center rounded-lg px-6 py-3 text-white transition-colors"
              >
                Explore Architecture
              </a>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
