"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Launch Site",
    price: "$799",
    badge: null,
    features: [
      "1-2 page responsive website",
      "Copywriting polish (headline, CTA)",
      "Mobile + speed optimized",
      "Free hosting setup included",
      "Delivered in 24-48 hours",
    ],
  },
  {
    name: "Growth Site",
    price: "$1,499",
    badge: "MOST POPULAR",
    features: [
      "Multi-page responsive website",
      "Blog + easy-to-edit content",
      "SEO optimization (titles, speed, mobile)",
      "Free hosting + Google Analytics setup",
      "Delivered in 48 hours",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-900 px-4"
        >
          Simple, Transparent Pricing
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border-2 transition-all duration-300 ${
                plan.badge
                  ? "border-[#1E40AF] shadow-xl"
                  : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] text-white text-xs sm:text-sm font-bold rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8 lg:mb-10">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-2 sm:mb-3">
                  {plan.name}
                </h3>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-2">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 lg:mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base lg:text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#cta"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full px-6 py-4 rounded-lg text-center font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.badge
                    ? "bg-gradient-to-r from-[#1E40AF] to-[#06B6D4] text-white hover:shadow-lg"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-gray-600 mt-12 sm:mt-16 text-base sm:text-lg px-4"
        >
          Need custom features?{" "}
          <a href="#cta" className="text-[#06B6D4] font-semibold hover:underline">
            Contact for a quote
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
