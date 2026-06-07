"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Light Overlay Gradients to protect text readability over the 3D Canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF9FB]/30 via-transparent to-[#FFF9FB]/70 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Floating Sparkle Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-pink/40 bg-white/40 backdrop-blur-md shadow-sm mb-6"
        >
          <span className="text-brand-gold text-xs">✦</span>
          <span className="font-outfit uppercase tracking-widest text-[10px] md:text-xs font-bold text-brand-rose">
            Exclusive Luxury Collection 2026
          </span>
          <span className="text-brand-gold text-xs">✦</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="font-playfair text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-brand-dark mb-6 leading-[1.15] md:leading-[1.1]"
        >
          Elegance That <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-brand-rose via-brand-gold to-brand-rose bg-clip-text text-transparent">
            Shines With You
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-outfit text-base md:text-xl text-brand-dark/80 max-w-2xl mx-auto leading-relaxed mb-10 font-light"
        >
          Discover stunning jewelry designed to enhance your beauty, inspire confidence, and capture life&apos;s special moments.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          {/* Shop Collection Button */}
          <a
            href="#collection"
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-gradient-to-r from-brand-pink to-brand-rose hover:from-brand-rose hover:to-brand-pink text-white font-outfit uppercase font-semibold text-xs tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shine-effect"
          >
            Shop Collection
            <ArrowRight size={14} />
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/923279449454"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-8 rounded-full border border-brand-rose/30 bg-white/40 hover:bg-brand-rose/5 text-brand-rose font-outfit uppercase font-semibold text-xs tracking-wider transition-all duration-300"
          >
            <Phone size={14} className="fill-brand-rose/10" />
            Order on WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-outfit uppercase tracking-widest text-brand-dark/40">
            Scroll
          </span>
          <div className="w-5 h-8 border border-brand-rose/40 rounded-full flex justify-center p-1 relative">
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-brand-rose rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
