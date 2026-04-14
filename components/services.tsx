"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";
import {
  Wrench,
  Droplets,
  Gauge,
  CircleDot,
  Thermometer,
  Battery,
  Car,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "General Servicing",
    description:
      "Complete routine maintenance including oil changes, filter replacements, and multi-point inspections to keep your vehicle running smoothly.",
  },
  {
    icon: Settings,
    title: "Engine Repair",
    description:
      "Expert diagnostics and repair for all engine issues. From minor tune-ups to major overhauls, we handle it all with precision.",
  },
  {
    icon: Droplets,
    title: "Oil & Fluid Service",
    description:
      "Premium engine oil changes, transmission fluid, brake fluid, coolant, and power steering fluid replacement using quality products.",
  },
  {
    icon: CircleDot,
    title: "Tyre & Alignment",
    description:
      "Tyre sales, fitting, balancing, rotation, and computerised wheel alignment for safer driving and longer tyre lifespan.",
  },
  {
    icon: Thermometer,
    title: "Aircond Service",
    description:
      "Full air conditioning diagnostics, gas refill, compressor repair, and cooling system maintenance for maximum cabin comfort.",
  },
  {
    icon: Battery,
    title: "Battery Replacement",
    description:
      "Battery testing, jump-start service, and quality battery replacements with warranty. We stock batteries for all vehicle makes.",
  },
  {
    icon: Gauge,
    title: "Brake System",
    description:
      "Brake pad replacement, disc machining, brake fluid flush, and complete brake system overhaul for your safety on the road.",
  },
  {
    icon: Car,
    title: "Suspension & Steering",
    description:
      "Shock absorber replacement, spring repair, steering rack service, and complete suspension system diagnostics and repairs.",
  },
];

function SpotlightCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300 });

  const spotlightOpacity = useMotionValue(0);
  const smoothOpacity = useSpring(spotlightOpacity, { damping: 20, stiffness: 300 });

  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) =>
      `radial-gradient(300px circle at ${x}px ${y}px, rgba(249,115,22,0.08), transparent 60%)`
  );

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    spotlightOpacity.set(1);
  };

  const handleMouseLeave = () => {
    spotlightOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative glass-card-hover p-6 sm:p-7 overflow-hidden"
    >
      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background, opacity: smoothOpacity }}
      />

      {/* Top border gradient on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-500/50 transition-all duration-700" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-5 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-500">
          <service.icon className="w-6 h-6 text-brand-500" />
        </div>
        <h3 className="font-heading text-lg font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-sm text-surface-400 leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="section-padding relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-brand-500 uppercase tracking-[0.2em] mb-4">
            What We Offer
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            Comprehensive auto care solutions for all vehicle makes and models.
            Every service is performed by experienced technicians using quality
            parts.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <SpotlightCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
