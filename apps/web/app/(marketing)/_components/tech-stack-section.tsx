import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { TechOrbit } from "./tech-orbit";

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="realtive bg-dark-bg overflow-hidden py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="section-container relative z-10">
        <AnimatedWrapper>
          <div className="mb-16 text-center">
            <h2 className="mb-4">
              Modern Stack,{" "}
              <span className="gradient-text">Zero Configuration</span>
            </h2>
            <p className="text-dark-text-secondary text-xl">
              Built with the tools you already love
            </p>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.2}>
          <TechOrbit />
        </AnimatedWrapper>
      </div>
    </section>
  );
}
