"use client";

import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { useState } from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80",
    alt: "Car engine bay service",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    alt: "Brake disc replacement",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=600&q=80",
    alt: "Tyre fitting service",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1632823471565-1ecdf5c6da20?w=600&q=80",
    alt: "Under car repair",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80",
    alt: "Workshop equipment",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&q=80",
    alt: "Car detail work",
    span: "col-span-2",
  },
];

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 relative">
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
            Our Work
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5">
            Workshop <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            A glimpse into our workshop — where precision meets passion. Every
            vehicle receives meticulous attention and care.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[220px]">
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${image.span}`}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                animate={{
                  scale: hoveredIndex === i ? 1.08 : 1,
                  filter:
                    hoveredIndex !== null && hoveredIndex !== i
                      ? "brightness(0.5)"
                      : "brightness(1)",
                }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-950/80 via-surface-950/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <motion.div
                  initial={false}
                  animate={
                    hoveredIndex === i
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.5, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-3"
                >
                  <Expand className="w-5 h-5 text-white" />
                </motion.div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-sm text-white font-medium">{image.alt}</p>
              </div>

              {/* Border overlay */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.06] group-hover:border-brand-500/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
