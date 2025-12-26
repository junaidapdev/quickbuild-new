"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/20 via-transparent to-[#06B6D4]/20 animate-pulse" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6 sm:mb-8 leading-[1.1] text-white px-2"
          >
            Your Website.
            <br />
            <span className="bg-gradient-to-r from-[#06B6D4] via-white to-[#06B6D4] bg-clip-text text-transparent">
              Built in 48 Hours.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Modern, responsive websites with clean code—no templates, no shortcuts. Professional results in just two days.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0f172a] font-semibold rounded-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 text-base sm:text-lg"
            >
              Start Your Project <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:border-white/50 hover:bg-white/5 transition-all duration-300 text-base sm:text-lg"
            >
              See Our Work
            </motion.a>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center justify-center gap-2 text-gray-400"
          >
            {/* <span className="text-green-400 text-xl">✓</span> */}
            {/* <span className="text-lg">50+ websites delivered on time</span> */}
          </motion.div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[#06B6D4]/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#1E40AF]/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}
