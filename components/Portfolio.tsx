"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

const projects = [
  {
    name: "FinFlow",
    description: "Personal Finance App",
    gradient: "from-pink-500 to-rose-600",
    builtIn: "2 days",
    initial: "F",
    url: "https://quickbuild-ai-finance.vercel.app/",
  },
  {
    name: "ShopSphere",
    description: "E-commerce Dashboard",
    gradient: "from-blue-500 to-cyan-600",
    builtIn: "2 days",
    initial: "S",
    url: "https://quickbuild-ecom.vercel.app/",
  },
  {
    name: "GlowSpa",
    description: "Spa Booking Platform",
    gradient: "from-green-500 to-emerald-600",
    builtIn: "2 days",
    initial: "G",
    url: "https://quickbuild-glowspa.vercel.app/",
  },
];

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-12 sm:mb-16 lg:mb-20 text-gray-900 px-4"
        >
          Built in Two Days, Built to Last
        </motion.h2>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="flex-shrink-0 w-[85vw] sm:w-96 snap-start"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                {/* Gradient Section with Letter Icon */}
                <div
                  className={`h-48 sm:h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
                >
                  {/* Rounded square with letter */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/30 flex items-center justify-center shadow-lg">
                    <span className="text-4xl sm:text-6xl font-display font-bold text-white">
                      {project.initial}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="bg-white p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0 mb-3">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900">
                      {project.name}
                    </h3>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full whitespace-nowrap self-start sm:self-auto">
                      Built in {project.builtIn}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#1E40AF] font-semibold hover:text-[#1E3A8A] transition-colors duration-300 group text-sm sm:text-base"
                  >
                    View Live{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
