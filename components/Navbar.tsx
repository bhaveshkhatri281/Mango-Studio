"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";
import FreeSampleModal from "./FreeSampleModal";
import SearchModal from "./SearchModal";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { cartCount, openDrawer } = useCart();

  const [showSampleModal, setShowSampleModal] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: "Juices", href: "/#scroll" },
    { name: "Our Story", href: "/our-story" },
    { name: "Health Benefits", href: "/health-benefits" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 border-b ${
          scrolled ? "py-4" : "py-8"
        }`}
        style={{
          backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0.85)",
          backdropFilter: "blur(20px)",
          borderBottomColor: scrolled
            ? "rgba(255,255,255,0.12)"
            : "rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 cursor-pointer group flex items-center gap-3">
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
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === '/#scroll' && pathname === '/');
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm uppercase font-bold transition-all duration-300 relative group ${
                    isActive ? "text-[#FF6B00]" : "text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${
                      isActive ? "w-full bg-[#FF6B00]" : "w-0 group-hover:w-full bg-[#FF6B00]"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-white hover:text-[#FF6B00] transition-colors"
              aria-label="Search"
            >
              <Search className="w-6 h-6" />
            </button>

            <button
              onClick={openDrawer}
              className="relative text-white hover:text-[#FF6B00] transition-colors"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FF6B00] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setShowSampleModal(true)}
              className="hidden md:block bg-white text-black font-bold px-5 py-2 rounded-none hover:bg-orange-500 hover:text-white transition-colors text-xs uppercase tracking-widest"
            >
              Try Free Sample
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="block md:hidden text-white hover:text-[#FF6B00] transition-colors"
              aria-label="Open Menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
        <CartDrawer />
      </motion.nav>

      {showSampleModal && (
        <FreeSampleModal onClose={() => setShowSampleModal(false)} />
      )}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSample={() => setShowSampleModal(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
    </>
  );
}
