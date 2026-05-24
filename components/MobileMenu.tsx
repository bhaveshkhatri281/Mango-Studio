"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSample: () => void;
  onOpenSearch: () => void;
}

const navLinks = [
  { num: "01", name: "Juices", href: "/#products" },
  { num: "02", name: "Our Story", href: "/our-story" },
  { num: "03", name: "Health Benefits", href: "/health-benefits" },
  { num: "04", name: "Shop", href: "/shop" },
  { num: "05", name: "Blog", href: "/blog" },
];

export default function MobileMenu({ isOpen, onClose, onOpenSample, onOpenSearch }: MobileMenuProps) {
  const router = useRouter();

  const handleLinkClick = (href: string) => {
    onClose();
    router.push(href);
  };

  const handleSampleClick = () => {
    onClose();
    onOpenSample();
  };

  const handleSearchClick = () => {
    onClose();
    onOpenSearch();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150]">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[#0A0A0A] flex flex-col pt-24 pb-10 px-6"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-6 text-white hover:text-[#FF6B00] transition-colors"
            >
              <X className="w-10 h-10" />
            </button>

            <div className="flex-1 flex flex-col justify-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.num}
                  onClick={() => handleLinkClick(link.href)}
                  className="group cursor-pointer flex items-baseline gap-4"
                >
                  <span className="text-[#FF6B00] font-bold text-lg md:text-xl">
                    {link.num}
                  </span>
                  <span className="text-white text-4xl md:text-5xl font-extrabold group-hover:text-[#FF6B00] transition-colors">
                    {link.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-6">
              <button
                onClick={handleSearchClick}
                className="flex items-center gap-3 text-xl font-bold text-white py-4 border-b border-white/10"
              >
                <Search className="w-6 h-6 text-[#FF6B00]" />
                Search
              </button>

              <button
                onClick={handleSampleClick}
                className="w-full bg-white text-black font-bold py-4 text-lg hover:bg-[#FF6B00] hover:text-white transition-colors"
              >
                Try Free Sample
              </button>

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  Follow Us
                </span>
                <div className="flex gap-6 text-white font-bold">
                  <a href="#" className="hover:text-[#FF6B00] transition-colors">Instagram</a>
                  <a href="#" className="hover:text-[#FF6B00] transition-colors">Twitter</a>
                  <a href="#" className="hover:text-[#FF6B00] transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
