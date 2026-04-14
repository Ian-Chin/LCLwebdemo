"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-surface-950/80 backdrop-blur-xl border-b border-white/[0.06] py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="section-padding flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="LCL Auto Service"
              width={140}
              height={48}
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 p-1 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm rounded-xl transition-all duration-300",
                  activeLink === link.href
                    ? "text-white"
                    : "text-surface-400 hover:text-white"
                )}
              >
                {activeLink === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/[0.08] rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 font-medium">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+60123456789"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2.5 text-surface-400 hover:text-white rounded-xl hover:bg-white/[0.05] transition-colors"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-surface-950/98 backdrop-blur-2xl lg:hidden"
          >
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-1 px-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => setIsMobileOpen(false)}
                  className="w-full max-w-sm flex items-center justify-between text-xl font-heading font-medium text-surface-300 hover:text-white px-6 py-4 rounded-2xl hover:bg-white/[0.05] transition-all"
                >
                  {link.label}
                  <ChevronRight className="w-5 h-5 text-surface-600" />
                </motion.a>
              ))}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                href="tel:+60123456789"
                className="mt-6 flex items-center gap-2 px-8 py-3.5 bg-brand-500 text-white font-semibold rounded-2xl"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
