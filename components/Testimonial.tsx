"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Finally, a service that actually delivers on time. Our website is perfect and saved us months of development.",
    name: "Marcus Rodriguez",
    title: "Operations Director, GrowthCorp",
    avatar: "MR",
  },
  {
    quote:
      "The quality exceeded our expectations. Professional design, clean code, and delivered exactly when promised.",
    name: "Sarah Chen",
    title: "Founder, TechStart",
    avatar: "SC",
  },
  {
    quote:
      "Quick Build transformed our online presence in just 48 hours. The team was responsive and the result is stunning.",
    name: "David Thompson",
    title: "CEO, InnovateLabs",
    avatar: "DT",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-900 px-4"
        >
          What Our Clients Say
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-lg border border-gray-100"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6 sm:mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 text-center mb-8 sm:mb-10 leading-relaxed px-2">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1E40AF] to-[#06B6D4] rounded-full flex items-center justify-center text-white font-display font-bold text-lg sm:text-xl">
                  {testimonials[currentIndex].avatar}
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-display font-bold text-gray-900 text-base sm:text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    {testimonials[currentIndex].title}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#06B6D4] w-8"
                    : "bg-gray-300 w-2 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
