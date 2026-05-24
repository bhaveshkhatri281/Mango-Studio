"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import product from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { ChevronDown } from "lucide-react";

export default function ShopPage() {
  const { addItem, openDrawer } = useCart();

  const [selectedSizeId, setSelectedSizeId] = useState(product.sizes[0].id);
  const [selectedPackId, setSelectedPackId] = useState(product.packs[0].id);
  const [quantity, setQuantity] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const selectedSize = product.sizes.find((s) => s.id === selectedSizeId)!;
  const selectedPack = product.packs.find((p) => p.id === selectedPackId)!;

  const totalItemPrice = selectedSize.price * selectedPack.multiplier;
  const grandTotal = totalItemPrice * quantity;
  const originalTotalPrice = selectedSize.originalPrice * selectedPack.multiplier * quantity;
  const savings = originalTotalPrice - grandTotal;

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedSizeId}-${selectedPackId}`,
      productId: product.id,
      name: product.name,
      size: selectedSize.label,
      pack: selectedPack.label,
      price: totalItemPrice,
      quantity,
      imagePath: product.imagePath,
    });
    openDrawer();
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const reviews = [
    {
      stars: 5,
      title: "Tastes Exactly Like Biting Into a Mango",
      body: "I've tried every mango juice brand in India. This is on another level. You can actually taste the fiber and freshness. No weird aftertaste.",
      author: "Priya S., Mumbai",
      date: "May 2026",
    },
    {
      stars: 5,
      title: "My Kids Refuse Every Other Juice Now",
      body: "Ordered the pack of 12. My children won't touch Tropicana anymore. That's the best review I can give.",
      author: "Rajesh K., Delhi",
      date: "April 2026",
    },
    {
      stars: 5,
      title: "Worth Every Rupee",
      body: "Yes it's more expensive than supermarket juice. But once you taste it you understand why. Reordering every 2 weeks.",
      author: "Ananya M., Bangalore",
      date: "April 2026",
    },
    {
      stars: 4,
      title: "Genuinely Impressed",
      body: "Skeptical at first about cold pressed juice but the difference is real. Vitamin C boost is noticeable within days.",
      author: "Vikram P., Pune",
      date: "March 2026",
    },
    {
      stars: 5,
      title: "Best Gift I've Given",
      body: "Sent the pack of 6 to my parents in Chennai. They called immediately to ask where I got it. Now they order every month themselves.",
      author: "Sneha R., Chennai",
      date: "March 2026",
    },
    {
      stars: 5,
      title: "The HPP Process Is Real",
      body: "I'm a nutritionist. The difference between HPP juice and regular juice in terms of live enzymes is massive. Finally a brand that does it right.",
      author: "Dr. Mehta, Ahmedabad",
      date: "Feb 2026",
    },
  ];

  const faqs = [
    {
      q: "How long does it stay fresh?",
      a: "45 days unopened when refrigerated. Once opened, consume within 3 days for best taste.",
    },
    {
      q: "Is there really no added sugar?",
      a: "Absolutely none. The sweetness you taste is 100% natural fruit sugar from the Alphonso mango itself.",
    },
    {
      q: "How is it different from Tropicana or Real?",
      a: "Those brands use heat-treated concentrate mixed with water. We cold press whole Alphonso mangoes and HPP treat them. Zero water, zero concentrate, zero heat.",
    },
    {
      q: "What is HPP treatment?",
      a: "High Pressure Processing applies 600MPa of cold water pressure for 3 minutes. It eliminates 99.9% of bacteria without destroying a single vitamin, enzyme, or nutrient.",
    },
    {
      q: "Do you deliver pan-India?",
      a: "Yes! We deliver across India in cold-chain packaging. Metro cities get next-day delivery. Tier 2/3 cities get 2-3 day delivery.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-[72px]">
      <Navbar />

      {/* SECTION 1 — HERO BANNER */}
      <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
        {/* Watermark text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span
            className="text-white font-extrabold whitespace-nowrap"
            style={{ fontSize: "15vw", lineHeight: 1, opacity: 0.025 }}
          >
            MANGO STUDIO
          </span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-6"
          >
            <span className="text-[#FF6B00] font-bold tracking-widest text-sm uppercase mb-4">
              Shop
            </span>
            <div className="w-[60px] h-[2px] bg-[#FF6B00]"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            One Ingredient.<br />Infinite Freshness.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg text-gray-400 max-w-xl mx-auto mb-10"
          >
            Free delivery on orders above ₹499. Next-day delivery in metro cities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-300"
          >
            <span className="flex items-center gap-2">🚚 Free delivery above ₹499</span>
            <span className="hidden sm:block text-white/20">|</span>
            <span className="flex items-center gap-2">❄️ Cold packed</span>
            <span className="hidden sm:block text-white/20">|</span>
            <span className="flex items-center gap-2">✅ 100% satisfaction guarantee</span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — PRODUCT CONFIGURATOR */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* LEFT COLUMN (sticky) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-square rounded-3xl bg-[#111111] border border-white/5 overflow-hidden flex items-center justify-center p-8"
              style={{ boxShadow: "0 0 120px rgba(255,107,0,0.15)" }}
            >
              <img
                src={product.imagePath}
                alt={product.name}
                className="w-full h-full object-contain drop-shadow-2xl z-10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col items-center text-center gap-2"
            >
              <div className="flex items-center gap-1 text-[#FF6B00] text-2xl">
                ★★★★★
                <span className="text-white font-bold ml-2">{product.rating}</span>
              </div>
              <p className="text-gray-400 font-medium">
                {product.reviewCount.toLocaleString()} verified reviews
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN (scrollable) */}
          <div className="w-full lg:w-1/2 flex flex-col pb-20">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              <motion.span variants={fadeUpVariant} className="text-xs tracking-widest text-[#FF6B00] uppercase font-bold mb-3 block">
                Mango Studio
              </motion.span>
              <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                {product.name}
              </motion.h2>
              <motion.p variants={fadeUpVariant} className="text-xl text-gray-400 mb-8">
                {product.tagline}
              </motion.p>
              
              <motion.div variants={fadeUpVariant} className="w-full h-px bg-[#FF6B00]/30 mb-10"></motion.div>

              {/* STEP 1: SIZE */}
              <motion.div variants={fadeUpVariant} className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-300">
                  01 — Choose Your Size
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSizeId === size.id;
                    return (
                      <div
                        key={size.id}
                        onClick={() => setSelectedSizeId(size.id)}
                        className={`border rounded-xl p-4 cursor-pointer transition-all duration-300 flex flex-col items-center text-center ${
                          isSelected
                            ? "border-[#FF6B00] bg-[#FF6B00]/10 scale-105 shadow-[0_0_20px_rgba(255,107,0,0.1)]"
                            : "border-white/10 bg-[#1A1A1A] hover:border-white/30"
                        }`}
                      >
                        <span className={`font-bold mb-2 ${isSelected ? "text-white" : "text-gray-300"}`}>
                          {size.label}
                        </span>
                        <span className="text-lg font-extrabold text-white">₹{size.price}</span>
                        <span className="text-xs text-gray-500 line-through">₹{size.originalPrice}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* STEP 2: PACK */}
              <motion.div variants={fadeUpVariant} className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-300">
                  02 — Choose Your Pack
                </h3>
                <div className="flex flex-col gap-3">
                  {product.packs.map((pack) => {
                    const isSelected = selectedPackId === pack.id;
                    return (
                      <div
                        key={pack.id}
                        onClick={() => setSelectedPackId(pack.id)}
                        className={`border rounded-xl p-4 cursor-pointer transition-all duration-300 flex items-center justify-between ${
                          isSelected
                            ? "border-[#FF6B00] bg-[#FF6B00]/10"
                            : "border-white/10 bg-[#1A1A1A] hover:border-white/30"
                        }`}
                      >
                        <span className={`font-bold ${isSelected ? "text-white" : "text-gray-300"}`}>
                          {pack.label}
                        </span>
                        {pack.badge && (
                          <span className="bg-[#FF6B00] text-white text-xs font-bold rounded-full px-3 py-1">
                            {pack.badge}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* STEP 3: QUANTITY */}
              <motion.div variants={fadeUpVariant} className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gray-300">
                  03 — Quantity
                </h3>
                <div className="flex items-center gap-6">
                  <div className="flex items-center bg-[#1A1A1A] border border-white/20 rounded-full">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white transition-colors text-xl font-medium"
                    >
                      −
                    </button>
                    <span className="w-10 text-center text-xl font-bold text-white">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(Math.min(20, quantity + 1))}
                      className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white transition-colors text-xl font-medium"
                    >
                      +
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* PRICE DISPLAY */}
              <motion.div variants={fadeUpVariant} className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-white">₹{grandTotal}</span>
                  <span className="text-gray-500 font-medium">per order</span>
                </div>
                {savings > 0 && (
                  <p className="text-[#FF6B00] font-bold mt-2">
                    You save ₹{savings}!
                  </p>
                )}
              </motion.div>

              {/* ADD TO CART BUTTON */}
              <motion.div variants={fadeUpVariant}>
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-[#FF6B00] text-white font-extrabold text-lg py-5 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all mb-8 shadow-[0_10px_30px_rgba(255,107,0,0.3)]"
                >
                  Add to Cart — ₹{grandTotal}
                </button>

                {/* TRUST SIGNALS */}
                <div className="flex items-center justify-center gap-6 text-sm text-gray-400 font-medium">
                  <span className="flex items-center gap-2">
                    <span>🔒</span> Secure checkout
                  </span>
                  <span className="flex items-center gap-2">
                    <span>🔄</span> Easy returns
                  </span>
                  <span className="flex items-center gap-2">
                    <span>📦</span> Ships in 24hrs
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — REVIEWS */}
      <section className="py-24 px-6 bg-[#0F0F0F] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold">What People Are Saying</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Overall Rating */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 bg-[#1A1A1A] p-8 rounded-3xl border border-white/5 flex flex-col justify-center"
            >
              <div className="text-center mb-8">
                <span className="text-7xl font-black text-white leading-none block mb-2">4.8</span>
                <span className="text-[#FF6B00] text-2xl tracking-widest block mb-2">★★★★★</span>
                <p className="text-gray-400 font-medium">Based on 2,847 reviews</p>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { stars: 5, pct: 78 },
                  { stars: 4, pct: 14 },
                  { stars: 3, pct: 5 },
                  { stars: 2, pct: 2 },
                  { stars: 1, pct: 1 },
                ].map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400 w-4">{row.stars}★</span>
                    <div className="flex-1 h-2 bg-black rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#FF6B00] rounded-full"
                        style={{ width: `${row.pct}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-500 w-8 text-right">{row.pct}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Reviews Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors flex flex-col"
                >
                  <div className="text-[#FF6B00] text-lg mb-3">
                    {"★".repeat(review.stars)}
                    {"☆".repeat(5 - review.stars)}
                  </div>
                  <h4 className="font-bold text-white mb-2 leading-snug">{review.title}</h4>
                  <p className="text-gray-400 text-sm mb-6 flex-1">{review.body}</p>
                  <div className="flex items-center justify-between text-xs mt-auto pt-4 border-t border-white/5">
                    <span className="text-gray-500 font-medium">
                      {review.author} · {review.date}
                    </span>
                    <span className="text-green-500 font-bold bg-green-500/10 px-2 py-1 rounded">
                      Verified Purchase
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FAQ */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold">Common Questions</h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-[#1A1A1A] rounded-xl border border-white/5 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-bold text-white pr-8">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FF6B00] transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
