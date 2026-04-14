"use client";

import { motion, useInView } from "framer-motion";
import { Award, Users, Clock, ShieldCheck } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { icon: Clock, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 3000, suffix: "+", label: "Happy Customers" },
  { icon: Award, value: 15, suffix: "+", label: "Expert Technicians" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Quality Parts" },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/30 to-surface-950" />

      <div className="section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80"
                alt="LCL Auto Service workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 sm:right-6 glass-card p-5 sm:p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-500 flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-white">
                    10+
                  </p>
                  <p className="text-sm text-surface-400">Years of Trust</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative border */}
            <div className="absolute -inset-1 rounded-3xl border border-brand-500/10 -z-10" />

            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-brand-500/30 rounded-tl-lg" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-brand-500/30 rounded-br-lg" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-medium text-brand-500 uppercase tracking-[0.2em] mb-4">
              About Us
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Your Trusted{" "}
              <span className="gradient-text">Auto Partner</span> in Ipoh
            </h2>
            <div className="space-y-4 text-surface-400 leading-relaxed mb-10">
              <p>
                LCL Auto Service has been serving the Ipoh community for over a
                decade, building a reputation for honest, reliable, and
                high-quality automotive care. What started as a small workshop
                has grown into a full-service auto centre trusted by thousands of
                vehicle owners across Perak.
              </p>
              <p>
                Our team of experienced technicians is trained to handle
                everything from routine maintenance to complex engine diagnostics
                and repairs. We use quality parts, modern equipment, and
                transparent pricing — because we believe every customer deserves
                to know exactly what they&apos;re paying for.
              </p>
              <p>
                Whether you drive a Proton, Perodua, Honda, Toyota, or any other
                make, we treat every vehicle with the same level of care and
                attention to detail.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="group text-center p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-brand-500/20 hover:bg-brand-500/[0.03] transition-all duration-500"
                >
                  <stat.icon className="w-5 h-5 text-brand-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-heading text-xl font-bold text-white">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </p>
                  <p className="text-xs text-surface-500 mt-0.5">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
