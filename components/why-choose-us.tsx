"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Banknote, Clock, ThumbsUp, ArrowUpRight } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "We use only genuine and OEM-quality parts for every repair and service. All work comes with a service warranty for your peace of mind.",
    color: "from-emerald-500/20 to-emerald-600/10",
    iconColor: "text-emerald-500",
    borderHover: "hover:border-emerald-500/20",
  },
  {
    icon: Banknote,
    title: "Honest Pricing",
    description:
      "No hidden charges, no surprise fees. We provide clear quotations upfront and explain every cost before we begin any work on your vehicle.",
    color: "from-brand-500/20 to-brand-600/10",
    iconColor: "text-brand-500",
    borderHover: "hover:border-brand-500/20",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "We value your time. Most routine services are completed within the same day, and we keep you updated on progress throughout.",
    color: "from-blue-500/20 to-blue-600/10",
    iconColor: "text-blue-500",
    borderHover: "hover:border-blue-500/20",
  },
  {
    icon: ThumbsUp,
    title: "Customer First",
    description:
      "Your satisfaction drives everything we do. From the moment you walk in, our team ensures a smooth and hassle-free experience.",
    color: "from-violet-500/20 to-violet-600/10",
    iconColor: "text-violet-500",
    borderHover: "hover:border-violet-500/20",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-brand-500 uppercase tracking-[0.2em] mb-4">
            Why Us
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5">
            Why Choose <span className="gradient-text">LCL Auto</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            We go beyond just fixing cars — we build lasting relationships with
            every customer through trust, quality, and care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div
                className={`glass-card-hover p-7 h-full text-center ${reason.borderHover}`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <reason.icon className={`w-8 h-8 ${reason.iconColor}`} />
                </div>

                {/* Number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center group-hover:bg-white/[0.06] transition-colors">
                  <span className="text-xs font-heading font-bold text-surface-600 group-hover:text-surface-400 transition-colors">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-semibold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-surface-400 leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover arrow */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className={`w-4 h-4 ${reason.iconColor} mx-auto`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
