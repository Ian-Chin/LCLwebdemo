"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

const testimonials = [
  {
    name: "Ahmad Razif",
    vehicle: "Honda City 2020",
    rating: 5,
    text: "Been coming to LCL for 3 years now. Always honest about what needs to be fixed and what can wait. Fair pricing and quick service. Highly recommended for anyone in Ipoh looking for a trustworthy workshop.",
  },
  {
    name: "Siti Nurhaliza",
    vehicle: "Perodua Myvi 2022",
    rating: 5,
    text: "Very professional service. They explained everything clearly before starting work on my car. The aircond service was done perfectly — cold like new! Will definitely come back for my next service.",
  },
  {
    name: "David Tan",
    vehicle: "Toyota Vios 2019",
    rating: 5,
    text: "I've tried many workshops in Ipoh but LCL is by far the best. The technicians really know what they're doing. My engine issue was diagnosed quickly and fixed at a reasonable price. Top notch!",
  },
  {
    name: "Priya Devi",
    vehicle: "Proton X50 2023",
    rating: 5,
    text: "First time bringing my new X50 here for routine service. The team was very careful and thorough. They even pointed out a minor issue I hadn't noticed. Great attention to detail and friendly staff.",
  },
  {
    name: "Lee Wei Ming",
    vehicle: "Honda Civic 2018",
    rating: 5,
    text: "Brake pads and alignment done here. The difference is night and day — car drives perfectly straight now and braking is smooth. Good quality parts and reasonable pricing. LCL is my go-to workshop.",
  },
];

const avatarColors = [
  "from-brand-500 to-brand-700",
  "from-blue-500 to-blue-700",
  "from-emerald-500 to-emerald-700",
  "from-violet-500 to-violet-700",
  "from-pink-500 to-pink-700",
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative overflow-hidden">
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
            Testimonials
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            Real feedback from real customers who trust us with their vehicles.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] min-w-0 pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%]"
                >
                  <div className="glass-card p-6 sm:p-8 relative flex flex-col h-full group">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-500/[0.08]" />
                    
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-6 flex-shrink-0">
                      {Array.from({ length: testimonial.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-brand-500 fill-brand-500" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-surface-300 leading-relaxed mb-8 italic text-sm sm:text-base flex-grow">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 mt-auto flex-shrink-0 border-t border-white/[0.06] pt-4">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                          avatarColors[i % avatarColors.length]
                        } flex items-center justify-center shrink-0`}
                      >
                        <span className="text-white font-heading font-bold text-sm">
                          {testimonial.name[0]}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-white text-sm group-hover:text-brand-400 transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-surface-500">
                          {testimonial.vehicle}
                        </p>
                      </div>
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
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 -right-3 sm:-right-5 -translate-y-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
