"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";

interface FreeSampleModalProps {
  onClose: () => void;
}

export default function FreeSampleModal({ onClose }: FreeSampleModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, onClose]);

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-[#1A1A1A] rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl border border-white/10"
      >
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring" }}
              className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </motion.div>
            <h3 className="text-2xl font-extrabold text-white mb-4">You&apos;re on the list! 🎉</h3>
            <p className="text-gray-400 mb-2">We&apos;ll ship your free sample within 3-5 business days.</p>
            <p className="text-gray-400 mb-8">Check your email for confirmation.</p>
            <button
              onClick={handleClose}
              className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <span className="inline-block bg-[#FF6B00]/20 text-[#FF6B00] text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Limited Offer
            </span>
            <h3 className="text-3xl font-extrabold text-white mb-2">Claim Your Free Sample</h3>
            <p className="text-gray-400 mb-8">
              First 100 customers only. No credit card required.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full bg-[#2A2A2A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#FF6B00] focus:outline-none transition-colors"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full bg-[#2A2A2A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#FF6B00] focus:outline-none transition-colors"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number"
                className="w-full bg-[#2A2A2A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#FF6B00] focus:outline-none transition-colors"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  required
                  placeholder="City"
                  className="w-full bg-[#2A2A2A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#FF6B00] focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  required
                  placeholder="Pincode"
                  className="w-full bg-[#2A2A2A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#FF6B00] focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6B00] text-white font-bold rounded-xl py-3 mt-4 hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_5px_15px_rgba(255,107,0,0.2)]"
              >
                Claim My Free Sample →
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
