"use client";

import { motion } from "framer-motion";

const footerLinks = {
  services: [
    { name: "Launch Site", href: "#pricing" },
    { name: "Growth Site", href: "#pricing" },
    { name: "Custom Projects", href: "#cta" },
    { name: "Support", href: "#faq" },
  ],
  contact: [
    { name: "Get Started", href: "#cta" },
    { name: "Book a Call", href: "#cta" },
    { name: "Email Us", href: "mailto:hello@quickbuild.com" },
    { name: "Support", href: "#faq" },
  ],
  links: [
    { name: "Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#1E40AF] to-[#06B6D4] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">QB</span>
              </div>
              <span className="text-lg sm:text-xl font-display font-bold">Quick Build</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Delivering professional websites in 48 hours. Fast, reliable, and ready to launch.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-[#06B6D4] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-[#06B6D4] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="font-display font-semibold text-base sm:text-lg mb-4 sm:mb-6">Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-[#06B6D4] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base"
        >
          <p>© 2025 Quick Build. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
