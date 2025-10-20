import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { FEATURES } from "@/lib/constants";
import { FeatureCards } from "./feature-cards";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-dark-surface relative py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <AnimatedWrapper>
            <div>
              <h2 className="mb-6">
                Everything you need,{" "}
                <span className="gradient-text">Out of the box</span>
              </h2>
              <p className="text-dark-text-secondary mb-8 text-lg">
                Stop Rebuilding the same features for every project. LaunchPad
                includes everything modern SaaS application need.
              </p>

              <div className="mb-8 space-y-3">
                {FEATURES.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="flex items-start gap-3">
                      <div className="bg-primary-500/20 mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
                        <Icon className="text-primary-400 h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium text-white">
                          {feature.title}
                        </div>
                        <div className="text-dark-text-tertiary text-sm">
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <a
                href="/docs/features"
                className="glass-effect hover:bg-dark-surface/70 inline-flex items-center rounded-lg px-6 py-3 text-white transition-colors"
              >
                See All Features
              </a>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.2}>
            <FeatureCards />
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
