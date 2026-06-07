"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface LoadingScreenProps {
  onComplete: () => void;
}

interface Sparkle {
  top: string;
  left: string;
  fontSize: string;
  duration: number;
  delay: number;
}

const createSparkles = (): Sparkle[] =>
  Array.from({ length: 20 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    fontSize: `${Math.random() * 12 + 8}px`,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
    const [sparkles] = useState<Sparkle[]>(createSparkles());

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800); // Allow exit animation to play
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-bg"
        >
          {/* Decorative Sparkles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            {sparkles.map((sparkle, i) => (
              <motion.div
                key={i}
                className="absolute text-brand-gold"
                style={{
                  top: sparkle.top,
                  left: sparkle.left,
                  fontSize: sparkle.fontSize,
                }}
                animate={{
                  opacity: [0.1, 0.8, 0.1],
                  scale: [0.5, 1.2, 0.5],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: sparkle.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: sparkle.delay,
                }}
              >
                ✦
              </motion.div>
            ))}
          </div>

          {/* Core Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-40 h-40 mb-6 flex items-center justify-center bg-white rounded-full shadow-lg border border-brand-pink/30 p-2"
            >
              <Image
                src="/logo.png"
                alt="Glamour Jewels Logo"
                width={150}
                height={150}
                className="object-contain"
                priority
              />
              {/* Rotating Gold Shimmer Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-brand-gold/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Brand Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-playfair text-3xl md:text-4xl text-brand-rose tracking-wider font-semibold mb-2"
            >
              Glamour Jewels
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="font-outfit text-sm md:text-base text-brand-dark tracking-widest uppercase font-light text-center"
            >
              Elegance That Shines With You
            </motion.p>

            {/* Progress bar */}
            <div className="w-48 h-[2px] bg-brand-pink/30 mt-8 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  duration: 2.2,
                  repeat: 0,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-brand-gold to-brand-rose"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
