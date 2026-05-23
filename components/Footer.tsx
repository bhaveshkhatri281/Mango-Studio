"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer
      className="text-white pt-20 pb-10"
      style={{
        backgroundColor: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-12">
        {/* Brand */}
        <div className="space-y-4">
          <h4 className="text-2xl font-black tracking-tight text-white">
            Mango Studio
          </h4>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Pure mango. Zero compromise.
          </p>
        </div>

        {/* Shop */}
        <div className="space-y-4">
          <h5 className="text-xs font-bold uppercase tracking-widest text-white">
            Shop
          </h5>
          <ul className="space-y-2 text-sm text-gray-500">
            {["Cream Mango", "Dutch Chocolate", "Ruby Pomegranate", "Variety Pack"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-4">
          <h5 className="text-xs font-bold uppercase tracking-widest text-white">
            Support
          </h5>
          <ul className="space-y-2 text-sm text-gray-500">
            {["FAQ", "Shipping", "Returns", "Contact Us"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h5 className="text-xs font-bold uppercase tracking-widest text-white">
            Stay Fresh
          </h5>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="border-none rounded-none px-4 py-3 text-sm text-white outline-none"
              style={{
                backgroundColor: "#151515",
              }}
            />
            <button
              type="submit"
              className="text-white font-bold py-3 rounded-none text-sm transition-colors hover:opacity-90"
              style={{ backgroundColor: "#FF6B00" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© 2026 Mango Studio. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
