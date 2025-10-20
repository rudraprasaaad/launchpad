import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { IconBook, IconRocket } from "@tabler/icons-react";
import { HeroVisual } from "./hero-visual";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#1A1F2E] to-[#0A0A0A]" />
      <div className="bg-primary-600/20 absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="text-primary-500/10 animate-float absolute font-mono text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            {["<>", "{}", "[]", "()"][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xxl mx-auto text-center">
          <AnimatedWrapper>
            <h1 className="mb-6">
              Launch your SaaS in{" "}
              <span className="gradient-text">Days, Not Months</span>
            </h1>
          </AnimatedWrapper>

          <AnimatedWrapper>
            <p className="text-dark-text-secondary mx-auto mb-8 max-w-2xl text-xl">
              Production-ready multi-tenant boilerplate with authentication,
              billing, and team management built-in
            </p>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.4}>
            <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="gradient-bg inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold text-white transition-opacity hover:opacity-90"
              >
                <IconRocket className="mr-2 size-5" />
                Start Building Now
              </a>
              <a
                href="/docs"
                className="glass-effect </div> inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold text-white"
              >
                <IconBook className="mr-2 size-5" />
                View Documentation
              </a>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.6}>
            <HeroVisual />
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
