"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-surface-900/90 backdrop-blur-md border-b border-white/[0.06]">
      <div className="section-padding flex items-center justify-between h-10 text-xs sm:text-sm">
        {/* Left — Phone */}
        <a
          href="tel:+60123456789"
          className="flex items-center gap-1.5 text-surface-300 hover:text-brand-400 transition-colors"
        >
          <Phone className="w-3 h-3 text-brand-500" />
          <span>+6012-345 6789</span>
        </a>

        {/* Center — Address (hidden on mobile) */}
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 text-surface-300 hover:text-brand-400 transition-colors"
        >
          <MapPin className="w-3 h-3 text-brand-500" />
          <span>123 Jalan Auto, 30000 Ipoh, Perak</span>
        </a>

        {/* Right — Email */}
        <a
          href="mailto:info@lclauto.com"
          className="flex items-center gap-1.5 text-surface-300 hover:text-brand-400 transition-colors"
        >
          <Mail className="w-3 h-3 text-brand-500" />
          <span className="hidden sm:inline">info@lclauto.com</span>
          <span className="sm:hidden">Email Us</span>
        </a>
      </div>
    </div>
  );
}
