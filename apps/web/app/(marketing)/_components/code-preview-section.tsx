import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { CodeWindow } from "./code-window";

export function CodePreviewSection() {
  return (
    <section className="relative bg-[#121212] py-24">
      <div className="section-container">
        <AnimatedWrapper>
          <div className="mb-16 text-center">
            <h2 className="mb-4">
              Type-Safe from{" "}
              <span className="gradient-text">Database to UI</span>
            </h2>
            <p className="text-dark-text-secondary text-xl">
              Full TypeScript support with zero `any` types
            </p>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.2}>
          <CodeWindow />
        </AnimatedWrapper>
      </div>
    </section>
  );
}
