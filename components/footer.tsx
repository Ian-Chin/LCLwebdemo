"use client";

import { Phone, MapPin, Mail, Facebook, ArrowUp, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "General Servicing", href: "#services" },
      { label: "Engine Repair", href: "#services" },
      { label: "Tyre & Alignment", href: "#services" },
      { label: "Aircond Service", href: "#services" },
      { label: "Brake System", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Work", href: "#gallery" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-brand-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-padding py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-5">
              <Image
                src="/logo.png"
                alt="LCL Auto Service"
                width={140}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-surface-500 leading-relaxed mb-6 max-w-xs">
              Professional auto care you can trust. Serving the Ipoh community
              with quality workmanship and honest pricing for over a decade.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/p/LCL-Auto-Service-100086620791364/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-surface-400 hover:text-brand-500 hover:border-brand-500/30 hover:bg-brand-500/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading font-semibold text-white text-sm mb-5 uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group text-sm text-surface-500 hover:text-brand-400 transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-brand-500" />
                </div>
                <span className="text-sm text-surface-400">
                  +6012-345 6789
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-brand-500" />
                </div>
                <span className="text-sm text-surface-400">
                  lclautoservice@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-500" />
                </div>
                <span className="text-sm text-surface-400">
                  Taman Mas Falim, 30200 Ipoh, Perak
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-600">
            &copy; {new Date().getFullYear()} LCL Auto Service. All rights
            reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 text-xs text-surface-600 hover:text-surface-400 transition-colors"
          >
            Back to top
            <span className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:border-brand-500/30 group-hover:text-brand-500 group-hover:bg-brand-500/10 transition-all duration-300">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
