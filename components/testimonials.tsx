"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative">
      <div className="section-padding">
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

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="glass-card p-8 sm:p-12 text-center relative overflow-hidden"
            >
              {/* Decorative quote marks */}
              <div className="absolute top-6 left-8 text-8xl font-serif text-brand-500/[0.06] leading-none select-none">
                &ldquo;
              </div>
              <div className="absolute bottom-6 right-8 text-8xl font-serif text-brand-500/[0.06] leading-none select-none rotate-180">
                &ldquo;
              </div>

              {/* Quote icon */}
              <Quote className="w-10 h-10 text-brand-500/20 mx-auto mb-6" />

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Star className="w-5 h-5 text-brand-500 fill-brand-500" />
                    </motion.div>
                  )
                )}
              </div>

              {/* Text */}
              <p className="text-lg sm:text-xl text-surface-300 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              {/* Author */}
              <div>
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarColors[current]} flex items-center justify-center mx-auto mb-3`}
                >
                  <span className="text-white font-heading font-bold text-lg">
                    {testimonials[current].name[0]}
                  </span>
                </div>
                <p className="font-heading font-semibold text-white">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-surface-500">
                  {testimonials[current].vehicle}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-8 bg-brand-500"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
