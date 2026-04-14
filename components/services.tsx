"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

const services = [
  {
    icon: Wrench,
    title: "General Servicing",
    description:
      "Complete routine maintenance including oil changes, filter replacements, and multi-point inspections to keep your vehicle running smoothly.",
    image:
      "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&q=80",
  },
  {
    icon: Settings,
    title: "Engine Repair",
    description:
      "Expert diagnostics and repair for all engine issues. From minor tune-ups to major overhauls, we handle it all with precision.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
  },
  {
    icon: Droplets,
    title: "Oil & Fluid Service",
    description:
      "Premium engine oil changes, transmission fluid, brake fluid, coolant, and power steering fluid replacement using quality products.",
    image:
      "/oil_service.png",
  },
  {
    icon: CircleDot,
    title: "Tyre & Alignment",
    description:
      "Tyre sales, fitting, balancing, rotation, and computerised wheel alignment for safer driving and longer tyre lifespan.",
    image:
      "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=600&q=80",
  },
  {
    icon: Thermometer,
    title: "Aircond Service",
    description:
      "Full air conditioning diagnostics, gas refill, compressor repair, and cooling system maintenance for maximum cabin comfort.",
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=600&q=80",
  },
  {
    icon: Battery,
    title: "Battery Replacement",
    description:
      "Battery testing, jump-start service, and quality battery replacements with warranty. We stock batteries for all vehicle makes.",
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600&q=80",
  },
  {
    icon: Gauge,
    title: "Brake System",
    description:
      "Brake pad replacement, disc machining, brake fluid flush, and complete brake system overhaul for your safety on the road.",
    image:
      "/brake_service.png",
  },
  {
    icon: Car,
    title: "Suspension & Steering",
    description:
      "Shock absorber replacement, spring repair, steering rack service, and complete suspension system diagnostics and repairs.",
    image:
      "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=600&q=80",
  },
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

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

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className="flex-[0_0_100%] min-w-0 pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%]"
                >
                  <div className="bg-surface-900 border border-white/[0.06] rounded-2xl overflow-hidden group hover:border-brand-500/50 transition-colors h-full flex flex-col">
                    <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-950/90 to-transparent" />
                      <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-brand-500/20 backdrop-blur-sm flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-brand-400" />
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="font-heading text-lg font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-surface-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Controls */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -left-3 sm:-left-5 -translate-y-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] transition-all z-10"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 -right-3 sm:-right-5 -translate-y-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] transition-all z-10"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
