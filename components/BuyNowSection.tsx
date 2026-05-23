"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BuyNowSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="px-6 md:px-12 max-w-7xl mx-auto my-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-24 px-6 md:px-12 rounded-[3rem] shadow-sm border border-white/10 overflow-hidden"
        style={{ backgroundColor: "#0F0F0F" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Purchase Details */}
          <div className="space-y-8">
            <div>
              <span
                className="font-bold uppercase text-sm"
                style={{ color: "#FF6B00" }}
              >
                Purchase
              </span>
              <h3 className="text-6xl font-extrabold text-white mt-2 mb-4">
                ₹120
              </h3>
              <p className="text-gray-400 font-medium">per 300ml bottle</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {["Cold Pressed", "Never Heated", "HPP Treated"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1 rounded-full text-sm font-bold border border-white/20 text-white transition-transform hover:-translate-y-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Delivery & Return */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-green-100 rounded-full text-green-600 group-hover:bg-green-200 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-white">
                    Guaranteed Fresh Delivery
                  </h5>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Next-day delivery available in metro cities. Chilled packaging
                    ensures peak freshness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-2 bg-blue-100 rounded-full text-blue-600 group-hover:bg-blue-200 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-white">
                    Satisfaction Policy
                  </h5>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    100% Satisfaction Guarantee. Not happy? We&apos;ll replace it,
                    no questions asked.
                  </p>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              className="w-full py-4 rounded-xl text-lg font-bold text-white transition-all hover:brightness-110"
              style={{ backgroundColor: "#FF6B00" }}
            >
              Add to Cart — ₹120
            </button>
          </div>

          {/* Right: Product Visual */}
          <div className="relative h-full min-h-[400px] flex items-center justify-center rounded-3xl border border-white/10 p-8" style={{ backgroundColor: "#151515" }}>
            <div className="text-center space-y-4">
              <div
                className="w-48 h-48 mx-auto rounded-full flex items-center justify-center mb-6 shadow-inner cursor-pointer hover:scale-105 transition-transform duration-300"
                style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.08), rgba(255,107,0,0.15))" }}
              >
                <svg
                  className="w-24 h-24"
                  style={{ color: "rgba(255,107,0,0.4)" }}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.75l-2.5 1.25L12 11zm0 2.25l-5-2.5-5 2.5 10 5 10-5-5-2.5-5 2.5z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white">
                Mango Studio Processing™
              </h4>
              <p className="text-gray-400 max-w-sm mx-auto">
                Our proprietary extraction technology retains 99.9% of
                nutrients. Pure nature, amplified by science.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
