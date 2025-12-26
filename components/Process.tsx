"use client";

import { motion } from "framer-motion";
import { Phone, Zap, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Discovery Call",
    description: "We discuss your vision, brand, and technical requirements in detail",
  },
  {
    number: "02",
    icon: Zap,
    title: "Rapid Build",
    description: "Our team codes your website with daily progress updates and milestone previews",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch Ready",
    description: "Complete delivery with hosting, documentation, and full source code access",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-900 px-4"
        >
          From Kickoff to Launch in 48 Hours
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
                  {/* Number */}
                  <div className="text-5xl sm:text-6xl font-display font-bold text-gray-100 mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1E40AF] to-[#06B6D4] rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
