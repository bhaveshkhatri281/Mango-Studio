"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    isDrawerOpen,
    closeDrawer,
    cartItems,
    cartTotal,
    cartCount,
    updateQuantity,
    removeItem,
  } = useCart();

  const FREE_SHIPPING_THRESHOLD = 499;
  const progressPercentage = Math.min((cartTotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const amountToFreeShipping = FREE_SHIPPING_THRESHOLD - cartTotal;

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            onClick={closeDrawer}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-[420px] bg-[#111111] z-[101] flex flex-col border-l border-white/10 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-extrabold text-white">Your Cart</h2>
                <div className="bg-[#FF6B00] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </div>
              </div>
              <button
                onClick={closeDrawer}
                className="p-2 text-gray-400 hover:text-white transition-colors hover:bg-white/5 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 custom-scrollbar">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-orange-500/10 flex items-center justify-center mb-4">
                    <ShoppingBag className="w-10 h-10 text-[#FF6B00]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Your cart is empty</h3>
                  <p className="text-gray-400 max-w-[250px]">
                    Add some mango goodness to your cart to get started.
                  </p>
                  <button
                    onClick={closeDrawer}
                    className="mt-6 px-8 py-3 bg-[#1A1A1A] border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      {/* Image */}
                      <div className="w-20 h-20 shrink-0 bg-[#1A1A1A] rounded-xl overflow-hidden relative border border-white/5">
                        <img
                          src={item.imagePath}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-white leading-tight mb-1">{item.name}</h4>
                            <p className="text-xs text-gray-400 mb-2">
                              {item.size} · {item.pack}
                            </p>
                          </div>
                          <p className="font-bold text-white">₹{item.price}</p>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-4 bg-[#1A1A1A] rounded-lg border border-white/10 px-2 py-1">
                            <button
                              onClick={() => {
                                if (item.quantity > 1) {
                                  updateQuantity(item.id, item.quantity - 1);
                                } else {
                                  removeItem(item.id);
                                }
                              }}
                              className="text-gray-400 hover:text-white px-2"
                            >
                              −
                            </button>
                            <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-gray-400 hover:text-white px-2"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-xs text-gray-500 hover:text-red-500 font-medium underline underline-offset-2"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 bg-[#1A1A1A] border-t border-white/10 shrink-0">
                {/* Free Shipping Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-medium mb-2">
                    {cartTotal >= FREE_SHIPPING_THRESHOLD ? (
                      <span className="text-green-500 flex items-center gap-1">
                        <span className="text-base leading-none">🎉</span> You&apos;ve unlocked free delivery!
                      </span>
                    ) : (
                      <span className="text-gray-400">
                        Add <span className="text-white font-bold">₹{amountToFreeShipping}</span> more for free delivery
                      </span>
                    )}
                  </div>
                  <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        cartTotal >= FREE_SHIPPING_THRESHOLD ? "bg-green-500" : "bg-[#FF6B00]"
                      }`}
                    />
                  </div>
                </div>

                {/* Subtotal */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-400 font-medium">Subtotal</span>
                  <span className="text-2xl font-black text-white">₹{cartTotal}</span>
                </div>

                {/* Checkout Button */}
                <Link
                  href="/cart"
                  onClick={closeDrawer}
                  className="w-full flex items-center justify-center py-4 bg-[#FF6B00] text-white font-bold rounded-xl text-lg hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  View Cart & Checkout
                </Link>

                <button
                  onClick={closeDrawer}
                  className="w-full mt-4 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
