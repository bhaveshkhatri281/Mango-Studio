"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navLinks = ["Juices", "Our Story", "Health Benefits", "Shop"];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "backdrop-blur-xl py-4"
          : "bg-transparent border-transparent py-8"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
        borderBottomColor: scrolled
          ? "rgba(255,255,255,0.1)"
          : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer group flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Abstract mango slice SVG */}
            <svg
              className="w-9 h-9 transition-transform duration-500 group-hover:rotate-12"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M16 2C16 2 28 8 28 18C28 24.627 22.627 30 16 30C9.373 30 4 24.627 4 18C4 14 8 10 12 8"
                fill="#FF6B00"
              />
              <path
                d="M16 2C14 4 12 8 12 8C8 10 4 14 4 18"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.4"
              />
            </svg>
          </div>
          <span className="text-2xl font-extrabold text-white">
            Mango Studio
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm uppercase font-bold transition-all duration-300 relative group text-white/80 hover:text-white"
            >
              {link}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "#FF6B00" }}
              />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <button className="relative px-8 py-3 rounded-none text-xs font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden group bg-white text-black hover:bg-[#FF6B00] hover:text-white">
            Order Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
