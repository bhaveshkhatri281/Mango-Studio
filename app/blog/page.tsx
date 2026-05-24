"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { blogPosts, BlogPost } from "@/lib/blogData";

const CATEGORIES = ["All", "Science", "Health", "Technology", "Fruit Guide", "Our Story"];

const getCategoryGradient = (category: string) => {
  switch (category) {
    case "Science":
      return "from-blue-600 to-blue-900";
    case "Health":
      return "from-green-600 to-green-900";
    case "Technology":
      return "from-purple-600 to-purple-900";
    case "Fruit Guide":
      return "from-yellow-500 to-yellow-800";
    case "Our Story":
      return "from-[#FF6B00] to-red-900";
    default:
      return "from-gray-600 to-gray-900";
  }
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const remainingPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-[72px]">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full py-24 px-6 flex flex-col items-center justify-center overflow-hidden">
        {/* Watermark text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span
            className="text-white font-extrabold whitespace-nowrap"
            style={{ fontSize: "15vw", lineHeight: 1, opacity: 0.025 }}
          >
            MANGO STUDIO
          </span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-6"
          >
            <span className="text-[#FF6B00] font-bold tracking-widest text-sm uppercase mb-4">
              Blog
            </span>
            <div className="w-[60px] h-[2px] bg-[#FF6B00]"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Fresh Ideas.<br />Freshly Pressed.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg text-gray-400 max-w-xl mx-auto"
          >
            Science, stories, and everything mango.
          </motion.p>
        </div>
      </section>

      {/* CATEGORY FILTER BAR */}
      <section className="py-8 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto custom-scrollbar pb-4 -mb-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full font-bold transition-all duration-300 text-sm ${
                  activeCategory === cat
                    ? "bg-[#FF6B00] text-white border-transparent"
                    : "bg-transparent border border-white/20 text-gray-400 hover:border-white/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="py-16 px-6 max-w-7xl mx-auto min-h-[50vh]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-12"
        >
          {featuredPost && (
            <motion.div variants={fadeUpVariant} className="w-full">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block bg-[#1A1A1A] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all flex flex-col md:flex-row shadow-2xl"
              >
                {/* Left Colored Placeholder */}
                <div
                  className={`w-full md:w-1/2 h-[300px] md:h-auto bg-gradient-to-br ${getCategoryGradient(
                    featuredPost.category
                  )} relative overflow-hidden flex items-center justify-center`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <span className="text-white/20 font-black text-9xl absolute -bottom-10 -right-10 transform -rotate-12">
                    01
                  </span>
                </div>

                {/* Right Details */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-[#FF6B00]/20 text-[#FF6B00] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm font-medium">
                      {featuredPost.date} · {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 group-hover:text-[#FF6B00] transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <span className="text-[#FF6B00] font-bold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                    Read Article <span className="text-xl">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          {remainingPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
              {remainingPosts.map((post, index) => (
                <motion.div variants={fadeUpVariant} key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col h-full bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all"
                  >
                    {/* Top Colored Placeholder */}
                    <div
                      className={`w-full h-[180px] bg-gradient-to-br ${getCategoryGradient(
                        post.category
                      )} relative overflow-hidden flex items-center justify-center`}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                      <span className="text-white/20 font-black text-7xl absolute -bottom-4 -right-4 transform -rotate-12">
                        0{index + 2}
                      </span>
                    </div>

                    {/* Bottom Details */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#FF6B00]/20 text-[#FF6B00] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-xs font-medium">
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF6B00] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-6 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                        <span className="text-xs text-gray-500">{post.date}</span>
                        <span className="text-[#FF6B00] font-bold text-sm">Read →</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="w-full text-center py-20">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
            </div>
          )}
        </motion.div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="w-full bg-[#0F0F0F] border-t border-white/5 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Get Fresh Content Weekly
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Health tips, mango science, and exclusive recipes. Zero spam.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 bg-[#1A1A1A] border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#FF6B00] text-white font-bold px-8 py-4 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
