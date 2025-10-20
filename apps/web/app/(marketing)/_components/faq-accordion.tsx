"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronDown } from "@tabler/icons-react";
import type { FAQItem } from "@/types/landing";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={item.question}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="glass-effect overflow-hidden rounded-xl"
        >
          <button
            onClick={() => toggleItem(index)}
            className="hover:bg-dark-surface/50 flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="pr-8 text-lg font-semibold text-white">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <IconChevronDown className="text-dark-text-secondary h-6 w-6 flex-shrink-0" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-dark-text-secondary px-6 pb-5">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
