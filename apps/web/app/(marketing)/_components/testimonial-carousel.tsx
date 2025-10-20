"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import type { Testimonial } from "@/types/landing";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = (): void => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = (): void => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Stacked cards */}
      <div className="relative h-[400px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <div className="glass-effect flex h-full flex-col rounded-xl p-8">
              <blockquote className="mb-4 text-2xl font-bold text-white">
                "{testimonials[activeIndex]?.quote}"
              </blockquote>
              <p className="text-dark-text-secondary mb-6 flex-1">
                {testimonials[activeIndex]?.body}
              </p>
              <div className="flex items-center gap-4">
                <div className="from-primary-500 to-accent-500 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br font-bold text-white">
                  {testimonials[activeIndex]?.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonials[activeIndex]?.author.name}
                  </div>
                  <div className="text-dark-text-tertiary text-sm">
                    {testimonials[activeIndex]?.author.title}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prevTestimonial}
          className="glass-effect hover:bg-dark-surface/70 rounded-lg p-2 transition-colors"
          aria-label="Previous testimonial"
        >
          <IconChevronLeft className="h-6 w-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-white"
                  : "bg-dark-border hover:bg-dark-text-tertiary w-2"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextTestimonial}
          className="glass-effect hover:bg-dark-surface/70 rounded-lg p-2 transition-colors"
          aria-label="Next testimonial"
        >
          <IconChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
}
