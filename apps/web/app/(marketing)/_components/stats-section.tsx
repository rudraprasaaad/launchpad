import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { STATS } from "@/lib/constants";
import { StatCard } from "./stat-card";

export function StatsSection() {
  return (
    <section className="bg-dark-bg relative py-24">
      <div className="section-container">
        <AnimatedWrapper>
          <div className="mb-16 text-center">
            <h2 className="mb-4">
              Trusted by Developers Who{" "}
              <span className="gradient-text">Ship Fast</span>
            </h2>
            <p className="text-dark-text-secondary text-xl">
              Join teams building the next generation of Saas Products
            </p>
          </div>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <AnimatedWrapper key={stat.label} delay={0.1 * index}>
              <StatCard {...stat} />
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
