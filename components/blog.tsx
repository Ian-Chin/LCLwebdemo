"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80",
    date: "March 28, 2026",
    title: "5 Warning Signs Your Brakes Need Attention",
    excerpt:
      "Squealing noises, vibrations, or a soft pedal? Learn the top indicators that your brake system needs professional inspection before it becomes a safety hazard.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=600&q=80",
    date: "March 15, 2026",
    title: "Why Regular Oil Changes Matter More Than You Think",
    excerpt:
      "Skipping oil changes can cost you thousands in engine repairs. Here's the science behind why fresh oil keeps your engine running at peak performance.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
    date: "February 20, 2026",
    title: "Preparing Your Car for Malaysia's Rainy Season",
    excerpt:
      "From tyre tread depth to wiper blades and battery health — a complete checklist to keep you safe on wet roads during the monsoon months.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 sm:py-32 relative">
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
            Latest Posts
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5">
            From Our <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-surface-400 text-lg max-w-2xl mx-auto">
            Tips, guides, and insights to help you take better care of your
            vehicle and stay safe on the road.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-950/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-surface-500 mb-3">
                  <Calendar className="w-3 h-3" />
                  <time>{post.date}</time>
                </div>
                <h3 className="font-heading text-lg font-semibold text-white mb-2 group-hover:text-brand-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-surface-400 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-500">
                  Read More
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
