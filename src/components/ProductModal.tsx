"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Star, Heart, Check, Phone } from "lucide-react";
import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  price: string;
  rating: number;
  description: string;
  image: string;
  category: string;
  materials?: string[];
  sku?: string;
  availability?: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) return null;

  // Compile WhatsApp URL
  const whatsappNumber = "923279449454";
  const message = `Hello Glamour Jewels,

I am interested in this jewelry item.

Product Name: ${product.name}
Category: ${product.category}
Price: ${product.price}

Please share more details, price, and delivery information.

Thank you.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/45 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glassmorphism shadow-2xl border border-white/20 p-6 md:p-8 flex flex-col md:flex-row gap-8 z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/60 hover:bg-brand-rose hover:text-white text-brand-dark/80 transition-all duration-300 shadow-md focus:outline-none"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Left Column: Image Showcase */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white/40 border border-brand-pink/10 shadow-inner group">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Floating Tags */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-3.5 py-1 bg-brand-rose/90 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest rounded-full shadow-sm">
                    {product.category}
                  </span>
                  <span className="px-3.5 py-1 bg-brand-gold/90 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest rounded-full shadow-sm">
                    Premium Cut
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <div>
                {/* Product Name */}
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-brand-dark tracking-wide mb-2 leading-tight">
                  {product.name}
                </h2>

                {/* Rating & SKU */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-brand-pink/20">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-brand-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className={i < Math.floor(product.rating) ? "fill-brand-gold" : "opacity-35"}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-outfit font-medium text-brand-dark/70">
                      ({product.rating} / 5.0)
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-brand-dark/50 uppercase">
                    SKU: {product.sku || `GJ-${product.id.substring(0, 4).toUpperCase()}`}
                  </span>
                </div>

                {/* Pricing & Stock */}
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-playfair text-2xl md:text-3xl font-extrabold text-brand-rose">
                    {product.price}
                  </span>
                  <span className="text-xs font-outfit text-emerald-600 font-semibold px-2 py-0.5 bg-emerald-50 border border-emerald-200 rounded-md">
                    {product.availability || "In Stock (Ready to Ship)"}
                  </span>
                </div>

                {/* Description */}
                <p className="font-outfit text-sm md:text-base text-brand-dark/80 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Specifications Checklist */}
                <div className="mb-6">
                  <h4 className="font-outfit font-bold text-xs uppercase tracking-wider text-brand-dark/90 mb-3">
                    Premium Product Specifications
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-outfit text-brand-dark/70">
                    {(product.materials || ["18K Rose Gold Overlay", "VVS1 Diamond Sparkle", "Lead & Nickel Free", "Luxury Gift Packaging included"]).map((spec, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={14} className="text-brand-rose flex-shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-brand-pink/20">
                {/* Favorite toggle */}
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
                    isFavorite
                      ? "bg-brand-pink/20 border-brand-rose text-brand-rose scale-105"
                      : "border-brand-pink/30 hover:border-brand-rose/60 text-brand-dark/60"
                  }`}
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} className={isFavorite ? "fill-brand-rose" : ""} />
                </button>

                {/* Main WhatsApp CTA */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white font-outfit font-bold uppercase tracking-wider text-xs md:text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Phone size={16} className="fill-white animate-pulse" />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
