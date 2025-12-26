"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#1E40AF] to-[#06B6D4] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">QB</span>
            </div>
            <span
              className={`font-display font-bold text-base sm:text-xl ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Quick Build
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:text-[#1E40AF]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                scrolled
                  ? "bg-[#1E40AF] text-white hover:bg-[#1E3A8A]"
                  : "bg-white text-[#1E40AF] hover:bg-white/90"
              }`}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-medium ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-5 py-2 bg-[#1E40AF] text-white rounded-lg font-semibold text-center"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

