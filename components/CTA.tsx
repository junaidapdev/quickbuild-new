"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/20 via-transparent to-[#06B6D4]/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 sm:mb-8 leading-tight px-4">
            Ready to Launch in 48 Hours?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
            Let's talk today and get your project started. No commitments, just a friendly conversation about your needs.
          </p>
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-[#0f172a] font-semibold text-base sm:text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Get Started Today <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
