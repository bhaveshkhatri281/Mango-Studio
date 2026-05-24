"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import StatsSection from "@/components/StatsSection";
import DetailsSection from "@/components/DetailsSection";
import BuyNowSection from "@/components/BuyNowSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main
      className="min-h-screen transition-all duration-1000 ease-in-out pt-[72px]"
      style={{
        background: "#0A0A0A",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Scroll Animation Section */}
      <ProductBottleScroll />

      {/* Content Sections */}
      <div className="relative z-10">
        {/* Stats */}
        <StatsSection />

        {/* Details + Freshness */}
        <DetailsSection />

        {/* Buy Now */}
        <BuyNowSection />

        {/* Next Flavor CTA */}
        <div
          className="py-32 flex flex-col items-center justify-center text-white clip-path-slant-top"
          style={{ backgroundColor: "#000000" }}
        >
          <p className="text-white/40 uppercase tracking-[0.3em] font-bold text-sm mb-6">
            Continue the Journey
          </p>
          <button className="group relative inline-flex items-center gap-4 px-12 py-5 bg-white text-black rounded-none text-xl font-bold overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
              Next Flavor
              <svg
                className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <div
              className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"
              style={{ backgroundColor: "#FF6B00" }}
            />
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
