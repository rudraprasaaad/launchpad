import { TESTIMONIALS } from "@/lib/constants";
import { AnimatedWrapper } from "@/components/shared/animated-wrapper";
import { TestimonialCarousel } from "./testimonial-carousel";

export function TestimonialsSection() {
  return (
    <section className="bg-dark-surface relative py-24">
      <div className="section-container">
        <AnimatedWrapper>
          <div className="mb-16 text-center">
            <h2 className="mb-4">
              Built by Developers,{" "}
              <span className="gradient-text">for Developers</span>
            </h2>
            <p className="text-dark-text-secondary text-xl">
              Join indie hackers and agencies shipping faster
            </p>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.2}>
          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </AnimatedWrapper>
      </div>
    </section>
  );
}
