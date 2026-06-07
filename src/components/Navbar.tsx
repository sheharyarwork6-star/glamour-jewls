"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Globe, Menu, X, Phone } from "lucide-react";

const MENU_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#collection" },
  { label: "Best Sellers", href: "#best-sellers" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "glassmorphism shadow-md py-3 border-b border-brand-pink/20"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full bg-white border border-brand-pink/20 flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="Glamour Jewels Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <span className="font-playfair text-xl md:text-2xl font-bold tracking-wider text-brand-dark group-hover:text-brand-rose transition-colors duration-300">
              Glamour Jewels
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-outfit uppercase tracking-widest text-brand-dark/80 hover:text-brand-rose font-medium transition-colors duration-300 group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-rose transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://glamourjewels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-dark/75 hover:text-brand-rose hover:scale-110 transition-all duration-300"
              aria-label="Visit website"
            >
              <Globe size={20} />
            </a>
            
            <a
              href="https://wa.me/923279449454"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white font-outfit font-semibold uppercase tracking-wider text-xs rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <Phone size={14} className="fill-white" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Hamburguer Menu Button */}
          <div className="flex items-center lg:hidden gap-4">
            <a
              href="https://wa.me/923279449454"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#128C7E]"
              aria-label="WhatsApp Us"
            >
              <Phone size={20} className="fill-current" />
            </a>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-brand-dark/90 hover:text-brand-rose focus:outline-none transition-colors duration-300"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/35 backdrop-blur-sm lg:hidden"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 max-w-full bg-brand-bg/95 border-l border-brand-pink/20 shadow-2xl p-8 flex flex-col justify-between lg:hidden"
            >
              <div className="flex flex-col gap-8">
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-brand-pink/20">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={30}
                      height={30}
                      className="object-contain rounded-full bg-white border border-brand-pink/20 p-0.5"
                    />
                    <span className="font-playfair text-lg font-bold text-brand-dark">
                      Glamour Jewels
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="text-brand-dark hover:text-brand-rose transition-colors duration-300"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <nav className="flex flex-col gap-6">
                  {MENU_ITEMS.map((item) => (
                    <motion.a
                      whileTap={{ scale: 0.98 }}
                      key={item.label}
                      href={item.href}
                      onClick={handleLinkClick}
                      className="text-sm font-outfit uppercase tracking-widest text-brand-dark/95 hover:text-brand-rose font-medium border-b border-brand-pink/10 pb-2 block"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Mobile Footer Drawer Actions */}
              <div className="flex flex-col gap-4 mt-auto">
                <a
                  href="https://instagram.com/GlamourJewels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 border border-brand-rose/25 text-brand-rose font-outfit uppercase font-semibold text-xs tracking-wider rounded-full hover:bg-brand-rose/5 transition-all duration-300"
                >
                  <Globe size={16} />
                  Follow Instagram
                </a>
                
                <a
                  href="https://wa.me/923279449454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-outfit uppercase font-bold text-xs tracking-wider rounded-full shadow-md transition-all duration-300"
                >
                  <Phone size={14} className="fill-white" />
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
