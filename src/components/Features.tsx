"use client";

import { motion, type Variants } from "framer-motion";
import { Award, Compass, Truck, Heart } from "lucide-react";

const FEATURES = [
  {
    icon: <Award className="w-8 h-8 text-brand-gold" />,
    title: "Premium Quality",
    description: "Every diamond and gemstone is hand-selected and crafted under rigorous luxury standards to ensure unparalleled brilliance.",
  },
  {
    icon: <Compass className="w-8 h-8 text-brand-rose" />,
    title: "Elegant Designs",
    description: "Timeless aesthetics merged with modern styling, crafted to reflect feminine grace and accentuate confidence.",
  },
  {
    icon: <Truck className="w-8 h-8 text-brand-gold" />,
    title: "Fast Delivery",
    description: "Reliable, secure, and insured delivery to your doorstep, ensuring your precious items arrive safely and swiftly.",
  },
  {
    icon: <Heart className="w-8 h-8 text-brand-rose" />,
    title: "Customer Satisfaction",
    description: "Our dedicated support team is available 24/7 on WhatsApp to assist with sizes, custom designs, and inquiries.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } as const },
};

export default function Features() {
  return (
    <section className="py-20 bg-brand-lightPink/40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -10,
                rotateY: 5,
                rotateX: -5,
                boxShadow: "0 20px 40px rgba(183, 110, 121, 0.15)",
                borderColor: "rgba(212, 175, 55, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="p-8 rounded-3xl border border-brand-pink/30 bg-white/50 backdrop-blur-md flex flex-col items-center text-center transition-all duration-300 group"
            >
              {/* Animated Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-brand-pink/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-pink/35 transition-all duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="font-playfair text-xl font-bold text-brand-dark mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-outfit text-sm text-brand-dark/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
