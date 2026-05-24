"use client";

import { useState } from "react";
import Link from "next/link";

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
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-12 border-b border-white/5 pb-12">
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
                  <Link
                    href="/shop"
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h5 className="text-xs font-bold uppercase tracking-widest text-white">
            Company
          </h5>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/our-story" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link href="/health-benefits" className="hover:text-white transition-colors">Health Benefits</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-4">
          <h5 className="text-xs font-bold uppercase tracking-widest text-white">
            Support
          </h5>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/blog/hpp-explained" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Shipping</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Returns</Link></li>
            <li><a href="mailto:hello@mangostudio.in" className="hover:text-white transition-colors">Contact Us</a></li>
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

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
        <p>© 2026 Mango Studio. All rights reserved.</p>
        
        {/* Social Links */}
        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition flex items-center justify-center w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition flex items-center justify-center w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition flex items-center justify-center w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>

        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
