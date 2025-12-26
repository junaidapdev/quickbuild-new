"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How can you guarantee 48-hour delivery?",
    answer:
      "We have a streamlined process, dedicated team, and proven workflow that allows us to work efficiently. We focus on one project at a time per team member, ensuring full attention and rapid progress. Our experience with 50+ successful deliveries has refined our process to be both fast and high-quality.",
  },
  {
    question: "What if I need revisions after delivery?",
    answer:
      "We include one round of minor revisions within 7 days of delivery at no extra cost. For major changes or additional features, we offer competitive hourly rates or can quote a fixed price for the work needed.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, industry-standard technologies including React/Next.js, TypeScript, Tailwind CSS, and other best-in-class tools. All code is clean, maintainable, and follows current best practices. We choose the right stack for each project's specific needs.",
  },
  {
    question: "Do you handle hosting and deployment?",
    answer:
      "Yes! We set up hosting for you at no extra cost. We typically use Vercel, Netlify, or your preferred hosting provider. We handle the entire deployment process and ensure everything is live and working perfectly before we consider the project complete.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "If we fail to deliver your website within the promised timeframe due to our error, we offer a full refund. However, delays caused by client-side factors (such as delayed feedback or content) may extend the timeline. We're committed to transparency and will always communicate clearly about timelines and expectations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-900 px-4"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors duration-300"
              >
                <span className="font-display font-semibold text-base sm:text-lg md:text-xl text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#06B6D4] flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
