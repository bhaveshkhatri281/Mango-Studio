"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cartItems, cartCount, cartTotal, updateQuantity, removeItem, clearCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const FREE_SHIPPING_THRESHOLD = 499;
  const deliveryFee = cartTotal >= FREE_SHIPPING_THRESHOLD || cartTotal === 0 ? 0 : 49;
  const grandTotal = cartTotal + deliveryFee;

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    clearCart();
    setIsModalOpen(false);
    router.push("/");
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-[72px] flex flex-col">
      <Navbar />

      <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold">Your Cart ({cartCount} items)</h1>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="text-[#FF6B00] mb-6 text-6xl">🛒</div>
            <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Looks like you haven&apos;t added any mango goodness to your cart yet.
            </p>
            <Link
              href="/shop"
              className="px-10 py-4 bg-[#FF6B00] text-white font-bold rounded-xl hover:brightness-110 transition-all"
            >
              Start Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* LEFT COLUMN: Cart Items */}
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 flex gap-6 items-center"
                >
                  {/* Image */}
                  <div className="w-[120px] h-[120px] shrink-0 bg-[#111] rounded-xl overflow-hidden border border-white/5">
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
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {item.size} · {item.pack}
                      </p>
                      <p className="font-extrabold text-[#FF6B00] text-lg">
                        ₹{item.price} <span className="text-xs text-gray-500 font-medium">each</span>
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end justify-between h-full gap-6">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-500 hover:text-red-500 text-sm font-medium self-start sm:self-end"
                      >
                        Remove
                      </button>

                      <div className="flex items-center bg-[#111] border border-white/20 rounded-full px-2 py-1 w-fit">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              updateQuantity(item.id, item.quantity - 1);
                            } else {
                              removeItem(item.id);
                            }
                          }}
                          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="flex justify-between items-center mt-6">
                <Link
                  href="/shop"
                  className="text-gray-400 hover:text-white font-medium transition-colors"
                >
                  ← Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-400 font-bold transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full lg:w-1/3 lg:sticky lg:top-32"
            >
              <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-white/5 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Order Summary</h3>

                <div className="flex flex-col gap-4 mb-6 text-gray-300">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-white">₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className="font-bold text-white">
                      {deliveryFee === 0 ? <span className="text-green-500">Free</span> : `₹${deliveryFee}`}
                    </span>
                  </div>
                  {deliveryFee > 0 && (
                    <div className="text-xs text-gray-500 text-right">
                      Add ₹{FREE_SHIPPING_THRESHOLD - cartTotal} more for free delivery
                    </div>
                  )}
                  {/* Discount row placeholder if needed */}
                  {/* <div className="flex justify-between text-[#FF6B00]">
                    <span>Discount</span>
                    <span>-₹0</span>
                  </div> */}
                </div>

                <div className="w-full h-px bg-white/10 mb-6"></div>

                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg">Total</span>
                  <span className="text-4xl font-black text-white">₹{grandTotal}</span>
                </div>

                {/* Promo Code Input */}
                <div className="flex gap-2 mb-8">
                  <input
                    type="text"
                    placeholder="Promo code"
                    className="flex-1 bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B00] transition-colors"
                  />
                  <button className="px-6 bg-white/10 hover:bg-white/20 text-white text-sm font-bold rounded-xl transition-colors">
                    Apply
                  </button>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#FF6B00] text-white font-extrabold text-lg py-5 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(255,107,0,0.2)] mb-6"
                >
                  Proceed to Checkout
                </button>

                <div className="flex justify-center items-center gap-4 text-xs text-gray-500 font-medium">
                  <span className="flex items-center gap-1">🔒 SSL secured</span>
                  <span>|</span>
                  <span className="flex items-center gap-1">🔄 Easy returns</span>
                  <span>|</span>
                  <span className="flex items-center gap-1">❄️ Cold chain delivery</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      <Footer />

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[200] flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-[#1A1A1A] border border-white/10 rounded-3xl p-10 max-w-lg w-full text-center shadow-2xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </motion.div>
                <h2 className="text-3xl font-extrabold mb-4">Order Placed! 🎉</h2>
                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                  Thank you for your order. You&apos;ll receive a confirmation email shortly. Your cold-pressed mango juice will arrive tomorrow!
                </p>
                <div className="bg-[#111] border border-white/5 rounded-xl p-4 mb-8">
                  <p className="text-sm text-gray-500 mb-1">Order Number</p>
                  <p className="text-xl font-bold text-[#FF6B00]">
                    #MS{Math.floor(100000 + Math.random() * 900000)}
                  </p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="w-full px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Back to Home
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
