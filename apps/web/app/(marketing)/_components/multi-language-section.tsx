import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { IconCheck } from "@tabler/icons-react";
import { MultiLanguageDiagram } from "./multi-language-diagram";

const BENEFITS = [
  "OpenAPI contract enforced",
  "Frontend language-agnostic",
  "Gradual migration path",
];

export function MultiLanguageSection() {
  return (
    <section className="bg-dark-bg relative py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: Diagram */}
          <AnimatedWrapper>
            <MultiLanguageDiagram />
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.2}>
            <div>
              <h2 className="mb-6">
                Start TypeScript,{" "}
                <span className="gradient-text">Scale Anywhere</span>
              </h2>
              <p className="text-dark-text-secondary mb-8 text-lg">
                Launch with our production-ready TypeScript backend. When you
                need extreme performance, add Go or Rust endpoints—your frontend
                stays unchanged.
              </p>

              <div className="mb-8 space-y-3">
                {BENEFITS.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="bg-primary-500/20 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full">
                      <IconCheck className="text-primary-400 h-4 w-4" />
                    </div>
                    <span className="text-dark-text-secondary">{benefit}</span>
                  </div>
                ))}
              </div>

              <a
                href="/docs/multi-language"
                className="glass-effect hover:bg-dark-surface/70 inline-flex items-center rounded-lg px-6 py-3 text-white transition-colors"
              >
                Learn About Multi-Language Support
              </a>
            </div>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
