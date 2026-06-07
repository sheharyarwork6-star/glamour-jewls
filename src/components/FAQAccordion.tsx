"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto w-full">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className="rounded-2xl border border-brand-pink/20 overflow-hidden glass-card transition-all duration-300 hover:border-brand-rose/40"
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-playfair text-base md:text-lg font-bold text-brand-dark pr-4">
                {item.question}
              </span>
              <span
                className={`w-8 h-8 rounded-full border border-brand-pink/30 flex items-center justify-center text-brand-rose flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-brand-pink/20 border-brand-rose/40" : ""
                }`}
              >
                <ChevronDown size={16} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-5 pb-5 pt-1 border-t border-brand-pink/10 font-outfit text-sm md:text-base text-brand-dark/75 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
