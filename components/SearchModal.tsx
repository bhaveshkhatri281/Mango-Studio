"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, ShoppingBag, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchData = [
  { type: "page", title: "Shop", desc: "Buy Alphonso Mango Juice", href: "/shop" },
  { type: "page", title: "Our Story", desc: "Learn about Mango Studio", href: "/our-story" },
  { type: "page", title: "Health Benefits", desc: "Nutrition facts and benefits", href: "/health-benefits" },
  { type: "page", title: "Blog", desc: "Articles on health and juice", href: "/blog" },
  { type: "product", title: "300ml Bottle", desc: "Alphonso Mango Juice · ₹120", href: "/shop" },
  { type: "product", title: "500ml Bottle", desc: "Alphonso Mango Juice · ₹180", href: "/shop" },
  { type: "product", title: "1 Litre Bottle", desc: "Alphonso Mango Juice · ₹320", href: "/shop" },
  { type: "product", title: "Pack of 6", desc: "300ml × 6 · Save 10%", href: "/shop" },
  { type: "blog", title: "Why Cold Pressed?", desc: "The science behind HPP juice", href: "/blog/why-cold-pressed" },
  { type: "blog", title: "Alphonso vs Kesar", desc: "Which mango reigns supreme?", href: "/blog/alphonso-vs-kesar" },
  { type: "blog", title: "5 Benefits of Mango Juice", desc: "Health guide", href: "/blog/5-benefits-mango-juice" },
];

const popularSearches = [
  "Cold Pressed",
  "HPP Juice",
  "Alphonso Mango",
  "Free Sample",
  "Pack of 6",
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      // slight delay to ensure the modal is mounted before focusing
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredResults = query.trim() === "" 
    ? [] 
    : searchData.filter((item) => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.desc.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);

  const getIcon = (type: string) => {
    switch (type) {
      case "page": return <FileText className="w-5 h-5 text-gray-400" />;
      case "product": return <ShoppingBag className="w-5 h-5 text-gray-400" />;
      case "blog": return <BookOpen className="w-5 h-5 text-gray-400" />;
      default: return <FileText className="w-5 h-5 text-gray-400" />;
    }
  };

  const handleResultClick = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center pt-32 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            onClick={onClose}
          />

          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors z-[101]"
          >
            <X className="w-10 h-10" />
          </button>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative z-[101] w-full max-w-[700px] flex flex-col items-center"
          >
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Mango Studio..."
              className="w-full bg-transparent border-none outline-none text-3xl md:text-5xl text-white font-bold placeholder-gray-600 border-b-2 border-[#FF6B00] pb-4 mb-8 text-center"
            />

            <div className="w-full">
              {query.trim() === "" ? (
                <div className="text-center">
                  <h4 className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-4">
                    Popular Searches
                  </h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {popularSearches.map((term, i) => (
                      <button
                        key={i}
                        onClick={() => setQuery(term)}
                        className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:border-[#FF6B00] hover:text-[#FF6B00] transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((result, i) => (
                      <div
                        key={i}
                        onClick={() => handleResultClick(result.href)}
                        className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/5">
                            {getIcon(result.type)}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-white font-bold text-lg">{result.title}</span>
                            <span className="text-gray-400 text-sm">{result.desc}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-transparent group-hover:text-[#FF6B00] transition-colors -translate-x-4 group-hover:translate-x-0" />
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No results found for &quot;{query}&quot;
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
