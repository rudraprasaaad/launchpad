import { FAQ_ITEMS } from "@/lib/constants";
import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { FAQAccordion } from "./faq-accordion";

export function FAQSection() {
  return (
    <section className="bg-dark-bg relative py-24">
      <div className="section-container">
        <AnimatedWrapper>
          <div className="mb-16 text-center">
            <h2 className="mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-dark-text-secondary text-xl">
              Have more questions?{" "}
              <a
                href="https://discord.gg/launchpad"
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                Join our Discord community!
              </a>
            </p>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.2}>
          <FAQAccordion items={FAQ_ITEMS} />
        </AnimatedWrapper>
      </div>
    </section>
  );
}
