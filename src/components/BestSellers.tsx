"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Phone, Eye } from "lucide-react";
import Image from "next/image";
import { Product } from "./ProductModal";

interface BestSellersProps {
  onSelectProduct: (product: Product) => void;
}

const BEST_SELLERS: Product[] = [
  {
    id: "bs-1",
    name: "Classic Solitaire Platinum Ring",
    price: "$2,499",
    rating: 4.9,
    description: "A breathtaking brilliant-cut solitaire diamond set in an elegant platinum band. Designed to stand out with timeless sophistication and maximum light reflection.",
    image: "/images/ring_solitaire.png",
    category: "Rings",
    materials: ["Platinum 950", "1.5 Carat Solitaire Diamond", "VVS1 Clarity Grade", "Ideal Cut Polish"],
    sku: "GJ-R-SOL1",
  },
  {
    id: "bs-2",
    name: "Rose Gold Teardrop Pendant",
    price: "$1,850",
    rating: 4.8,
    description: "A gorgeous teardrop diamond pendant suspended from a delicate 18k rose gold chain. A feminine piece designed to complement your collarbones with warmth and grace.",
    image: "/images/necklace_rose_gold.png",
    category: "Necklaces",
    materials: ["18K Rose Gold", "0.75 Carat Teardrop Diamond", "VVS2 Clarity", "45cm Adjustable Chain"],
    sku: "GJ-N-TEA2",
  },
  {
    id: "bs-3",
    name: "South Sea Pearl Drop Earrings",
    price: "$1,200",
    rating: 4.9,
    description: "Lustrous South Sea pearls suspended from 18k gold bands with micro-pave diamond embellishments. Adds instant glamour to any evening gown or bridal wear.",
    image: "/images/earrings_pearl.png",
    category: "Earrings",
    materials: ["18K Yellow Gold", "11mm South Sea Pearls", "0.15 Carat Pave Diamonds", "Secure Leverback Post"],
    sku: "GJ-E-PEA3",
  },
  {
    id: "bs-4",
    name: "Delicate Butterfly Gold Bracelet",
    price: "$950",
    rating: 4.7,
    description: "An elegant chain bracelet displaying a charming butterfly motif studded with diamonds. A playful yet luxurious piece representing beauty and transformation.",
    image: "/images/bracelet_butterfly.png",
    category: "Bracelets",
    materials: ["18K Yellow Gold", "0.3 Carat Accent Diamonds", "Adjustable Fit 16-18cm", "Lobster Claw Clasp"],
    sku: "GJ-B-BUT4",
  },
];

export default function BestSellers({ onSelectProduct }: BestSellersProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideTimer = useRef<NodeJS.Timeout | null>(null);

  const slideNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BEST_SELLERS.length);
  };

  const slidePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + BEST_SELLERS.length) % BEST_SELLERS.length);
  };

  useEffect(() => {
    if (!isHovered) {
      autoSlideTimer.current = setInterval(slideNext, 4500);
    }
    return () => {
      if (autoSlideTimer.current) clearInterval(autoSlideTimer.current);
    };
  }, [isHovered]);

  const currentProduct = BEST_SELLERS[currentIndex];

  const getWhatsAppLink = (productName: string) => {
    const message = `Hello Glamour Jewels,

I am interested in this Best Seller item.

Product Name: ${productName}

Please share more details, price, and delivery information.

Thank you.`;
    return `https://wa.me/923279449454?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="best-sellers" className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-outfit uppercase tracking-widest text-xs font-bold text-brand-rose">
            Top Rated Jewelry
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-brand-dark mt-2 mb-4">
            Our Best Sellers
          </h2>
          <div className="w-24 h-[1px] bg-brand-gold mx-auto" />
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-brand-pink/20 shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Previous Button */}
          <button
            onClick={slidePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-brand-rose border border-brand-pink/30 hover:bg-brand-rose hover:text-white transition-all duration-300 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next Button */}
          <button
            onClick={slideNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-brand-rose border border-brand-pink/30 hover:bg-brand-rose hover:text-white transition-all duration-300 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Product Image Panel */}
          <div className="w-full md:w-1/2 aspect-square relative rounded-2xl overflow-hidden bg-white/60 p-4 border border-brand-pink/10 shadow-inner group">
            <Image
              src={currentProduct.image}
              alt={currentProduct.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>

          {/* Product Details Panel */}
          <div className="w-full md:w-1/2 flex flex-col justify-between h-full min-h-[300px]">
            <div>
              {/* Category */}
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-rose mb-2 block">
                Best Seller - {currentProduct.category}
              </span>
              
              {/* Title */}
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-brand-dark mb-3">
                {currentProduct.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-4">
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(currentProduct.rating) ? "fill-brand-gold" : "opacity-35"}
                    />
                  ))}
                </div>
                <span className="text-xs font-outfit text-brand-dark/60">
                  {currentProduct.rating} / 5.0 Rating
                </span>
              </div>

              {/* Price */}
              <div className="text-2xl font-playfair font-extrabold text-brand-rose mb-4">
                {currentProduct.price}
              </div>

              {/* Description */}
              <p className="font-outfit text-sm text-brand-dark/75 leading-relaxed mb-6">
                {currentProduct.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-brand-pink/10">
              <button
                onClick={() => onSelectProduct(currentProduct)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-brand-rose/30 bg-white/50 hover:bg-brand-rose/5 text-brand-rose font-outfit uppercase font-semibold text-xs tracking-wider transition-all duration-300"
              >
                <Eye size={14} />
                View Details
              </button>
              
              <a
                href={getWhatsAppLink(currentProduct.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white font-outfit uppercase font-bold text-xs tracking-wider shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Phone size={14} className="fill-white" />
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {BEST_SELLERS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-6 bg-brand-rose" : "bg-brand-pink/50 hover:bg-brand-rose/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
