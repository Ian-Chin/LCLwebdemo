"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Mail,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+6012-345 6789",
    href: "tel:+60123456789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "lclautoservice@gmail.com",
    href: "mailto:lclautoservice@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Taman Mas Falim, 30200 Ipoh, Perak",
    href: "https://maps.google.com/?q=Taman+Mas+Falim+Ipoh+Perak",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat: 9:00 AM – 6:00 PM",
    href: null,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/30 to-surface-950" />

      <div className="section-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-brand-500 uppercase tracking-[0.2em] mb-4">
            Get in Touch
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            Ready to book a service or have questions? Reach out to us via the
            form below, give us a call, or message us on WhatsApp.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-6 sm:p-8 relative overflow-hidden">
              {/* Form glow effect */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 bg-brand-500/[0.05] rounded-full blur-[60px] pointer-events-none transition-opacity duration-500"
                style={{ opacity: focusedField ? 1 : 0 }}
              />

              <h3 className="font-heading text-xl font-semibold text-white mb-6">
                Send us a message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      bounce: 0.5,
                      duration: 0.6,
                    }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  </motion.div>
                  <h4 className="font-heading text-xl font-semibold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-surface-400">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm text-surface-400 mb-2 font-medium"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="Your name"
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-surface-600 focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm text-surface-400 mb-2 font-medium"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="012-345 6789"
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-surface-600 focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm text-surface-400 mb-2 font-medium"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      onFocus={() => setFocusedField("service")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-surface-400 focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 focus:outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="general">General Servicing</option>
                      <option value="engine">Engine Repair</option>
                      <option value="oil">Oil & Fluid Service</option>
                      <option value="tyre">Tyre & Alignment</option>
                      <option value="aircond">Aircond Service</option>
                      <option value="battery">Battery Replacement</option>
                      <option value="brake">Brake System</option>
                      <option value="suspension">
                        Suspension & Steering
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-surface-400 mb-2 font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Describe your issue or the service you need..."
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-surface-600 focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-heading font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact cards */}
            <div className="space-y-3">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noopener noreferrer"
                      className="group glass-card-hover p-4 flex items-start gap-4 block"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                        <item.icon className="w-5 h-5 text-brand-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-surface-500 uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm text-white">{item.value}</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-surface-600 group-hover:text-brand-500 transition-colors flex-shrink-0 mt-1" />
                    </a>
                  ) : (
                    <div className="glass-card p-4 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-brand-500" />
                      </div>
                      <div>
                        <p className="text-xs text-surface-500 uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm text-white">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/60123456789?text=Hi%20LCL%20Auto%20Service%2C%20I'd%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-heading font-semibold rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/25"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </motion.a>

            {/* Map */}
            <div className="glass-card overflow-hidden rounded-2xl h-[220px] relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5!2d101.08!3d4.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTaman+Mas+Falim+Ipoh!5e0!3m2!1sen!2smy!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LCL Auto Service Location"
              />
              <div className="absolute inset-0 border border-white/[0.06] rounded-2xl pointer-events-none group-hover:border-brand-500/20 transition-colors duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
