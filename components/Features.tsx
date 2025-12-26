"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Smartphone,
  Search,
  Server,
  HeadphonesIcon,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Clean Custom Code",
    description: "Hand-crafted, maintainable code that follows best practices",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with modern performance techniques",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Perfect experience on all devices, from phone to desktop",
  },
  {
    icon: Search,
    title: "SEO Ready",
    description: "Built with search engine optimization in mind from day one",
  },
  {
    icon: Server,
    title: "Free Hosting Setup",
    description: "We handle deployment and hosting configuration for you",
  },
  {
    icon: HeadphonesIcon,
    title: "Lifetime Support",
    description: "Ongoing assistance and updates whenever you need them",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-900 px-4"
        >
          Everything You Need to Launch
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1E40AF] to-[#06B6D4] rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
