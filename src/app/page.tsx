"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThreeDCanvas from "@/components/ThreeDCanvas";
import Features from "@/components/Features";
import BestSellers from "@/components/BestSellers";
import FAQAccordion from "@/components/FAQAccordion";
import ProductModal, { Product } from "@/components/ProductModal";
import LoadingScreen from "@/components/LoadingScreen";

const FAQ_ITEMS = [
  {
    question: "How long does delivery take?",
    answer:
      "We ship luxury jewelry with trusted partners. Standard delivery typically takes 5-7 business days, and express shipping is available on request.",
  },
  {
    question: "Can I request a custom size or design?",
    answer:
      "Yes. Our team can help create a custom piece or resize an existing design. Contact us on WhatsApp for personalized support and order details.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We want you to love your jewelry. If there is a sizing or quality issue, we can help with exchanges or store credit within 14 days of delivery.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Browse our collection, choose your favorite piece, and use the WhatsApp purchase link to confirm your order with our concierge team.",
  },
];

const REVIEWS = [
  {
    name: "Ayesha Khan",
    review:
      "Absolutely stunning craftsmanship. The ring exceeded my expectations and arrived beautifully packaged.",
  },
  {
    name: "Sara Ali",
    review:
      "The team was so helpful on WhatsApp — they guided me through the whole process and delivered on time.",
  },
  {
    name: "Mariam Ahmed",
    review:
      "Elegant pieces with real attention to detail. I love the sparkle and the luxurious finish.",
  },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className="min-h-screen bg-brand-bg text-brand-dark">
        <Navbar />

        <main className="relative overflow-hidden pt-32">
          <ThreeDCanvas />
          <Hero />
        </main>

        <section id="collection" className="py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <span className="font-outfit uppercase tracking-widest text-xs font-bold text-brand-rose">
                Signature Collection
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-dark mt-4">
                Crafted For Unforgettable Moments
              </h2>
              <p className="mt-4 text-base md:text-lg text-brand-dark/70 max-w-3xl mx-auto leading-relaxed">
                Discover luxury pieces designed to elevate your everyday look or make your special occasion truly unforgettable.
              </p>
            </div>

            <Features />
          </div>
        </section>

        <BestSellers onSelectProduct={handleSelectProduct} />

        <section id="about" className="py-24 bg-white/70">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="font-outfit uppercase tracking-widest text-xs font-bold text-brand-rose">
                About Glamour Jewels
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-dark mt-4">
                Luxury jewelry crafted with modern elegance.
              </h2>
              <p className="mt-6 text-base md:text-lg text-brand-dark/75 leading-relaxed">
                Our pieces combine classic silhouettes with contemporary polish. Every gemstone and metal finish is selected to create timeless silhouettes that shine in every moment.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://wa.me/923279449454"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] py-4 px-8 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  Order on WhatsApp
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center justify-center rounded-full border border-brand-rose/30 py-4 px-8 text-sm font-semibold uppercase tracking-widest text-brand-rose transition-all duration-300 hover:bg-brand-rose/10"
                >
                  View FAQ
                </a>
              </div>
            </div>

            <div className="grid gap-6">
              {REVIEWS.map((review, index) => (
                <div key={index} className="rounded-3xl border border-brand-pink/20 bg-brand-bg/80 p-8 shadow-xl">
                  <p className="font-outfit text-base text-brand-dark/80 leading-relaxed mb-6">
                    “{review.review}”
                  </p>
                  <span className="block font-playfair text-lg font-bold text-brand-rose">
                    {review.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <span className="font-outfit uppercase tracking-widest text-xs font-bold text-brand-rose">
                Frequently Asked Questions
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-dark mt-4">
                Everything you need to know before ordering
              </h2>
            </div>
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        <section id="contact" className="py-24 bg-brand-lightPink/40">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <span className="font-outfit uppercase tracking-widest text-xs font-bold text-brand-rose">
              Get In Touch
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-brand-dark mt-4">
              Ready to shop or request a custom design?
            </h2>
            <p className="mt-4 text-base md:text-lg text-brand-dark/75 max-w-2xl mx-auto leading-relaxed">
              Chat directly with our style consultant on WhatsApp for fast support, order confirmation, and bespoke jewelry requests.
            </p>
            <a
              href="https://wa.me/923279449454"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:bg-[#128C7E]"
            >
              Contact on WhatsApp
            </a>
          </div>
        </section>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
