"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function OurStoryPage() {
  const heroHeadline = "We Believe Fruit\nShould Taste\nLike Fruit.".split("\n");

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const timelineEntries = [
    {
      year: "2019",
      title: "The Idea",
      desc: "Standing in the orchard, Aryan decides to create India's first truly unprocessed mango juice.",
    },
    {
      year: "2020",
      title: "First Batch",
      desc: "500 bottles hand-filled in a small facility in Ratnagiri. Sold out in 3 days at a local farmers market.",
    },
    {
      year: "2021",
      title: "HPP Technology",
      desc: "Partnered with a Swiss HPP facility to pressure-process juice without heat, preserving 100% of nutrients.",
    },
    {
      year: "2023",
      title: "Going National",
      desc: "Expanded to Mumbai, Delhi, Bangalore. 10,000 bottles per month. Listed on Blinkit and Zepto.",
    },
    {
      year: "2026",
      title: "Mango Studio",
      desc: "Rebranded as Mango Studio. Launching new flavors and expanding to international markets.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden pt-[72px]">
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative w-full min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
        {/* Watermark text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span
            className="text-white font-extrabold whitespace-nowrap"
            style={{ fontSize: "15vw", lineHeight: 1, opacity: 0.025 }}
          >
            MANGO STUDIO
          </span>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-8"
          >
            <span className="text-[#FF6B00] font-bold tracking-widest text-sm uppercase mb-4">
              Our Story
            </span>
            <div className="w-[60px] h-[2px] bg-[#FF6B00]"></div>
          </motion.div>

          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8"
          >
            {heroHeadline.map((line, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="block">
                {line}
              </motion.div>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            No shortcuts. No concentrates. No compromises. Just pure mango, the way
            nature intended.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — ORIGIN STORY */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-6"
          >
            <motion.div variants={fadeUpVariant}>
              <span className="text-[#FF6B00] font-bold tracking-widest text-xs uppercase mb-2 block">
                How It Started
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Born from a Mango Farm in Ratnagiri
              </h2>
            </motion.div>
            <motion.p variants={fadeUpVariant} className="text-gray-400 text-lg leading-relaxed">
              In 2019, our founder Aryan Mehta stood in his family&apos;s Alphonso mango
              orchard in Ratnagiri, Maharashtra — watching truckloads of the world&apos;s
              finest mangoes get shipped off to juice factories that would dilute,
              heat-treat, and concentrate them beyond recognition. He made a simple
              decision: what if we just bottled the mango, exactly as it is?
            </motion.p>
            <motion.div
              variants={fadeUpVariant}
              className="mt-8 p-6 border-l-4 border-[#FF6B00] bg-white/5 rounded-r-xl"
            >
              <p className="text-xl italic font-semibold text-white mb-4">
                &quot;What if we just bottled the mango, exactly as it is?&quot;
              </p>
              <p className="text-sm text-gray-400 font-bold">— Aryan Mehta, Founder</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-[#1A1A1A] rounded-3xl p-10 grid grid-cols-2 gap-8 shadow-2xl border border-white/5"
          >
            <div>
              <p className="text-4xl font-extrabold text-[#FF6B00] mb-2">2019</p>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Founded</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#FF6B00] mb-2">MH</p>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Ratnagiri, Maharashtra</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#FF6B00] mb-2">500</p>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">First Batch (Bottles)</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-[#FF6B00] mb-2">50k+</p>
              <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Now (Bottles/Month)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — TIMELINE */}
      <section className="py-32 px-6 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl font-extrabold">Our Journey</h2>
          </motion.div>

          <div className="relative flex flex-col items-center">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

            <div className="w-full flex flex-col space-y-16">
              {timelineEntries.map((entry, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center w-full ${
                      isEven ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Desktop Center Dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF6B00] rounded-full z-10 shadow-[0_0_15px_rgba(255,107,0,0.5)]"></div>

                    {/* Content Container */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`w-full md:w-[45%] flex flex-col ${
                        isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"
                      }`}
                    >
                      <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-white/5 w-full hover:border-white/10 transition-colors">
                        <span className="text-3xl font-black text-[#FF6B00] mb-4 block">
                          {entry.year}
                        </span>
                        <h3 className="text-2xl font-bold mb-3">{entry.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{entry.desc}</p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — VALUES */}
      <section className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold">What We Stand For</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeUpVariant} className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-orange-500/10 rounded-xl p-3 w-fit mb-6">
                <svg className="w-8 h-8 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  {/* Leaf SVG Alternative */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.5C12 21.5 20.5 16 20.5 8C20.5 3 16 3 12 7C8 3 3.5 3 3.5 8C3.5 16 12 21.5 12 21.5Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">100% Raw</h3>
              <p className="text-gray-400">
                Never heated above 4°C. HPP processing kills bacteria without destroying a single vitamin or enzyme.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUpVariant} className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-orange-500/10 rounded-xl p-3 w-fit mb-6">
                <svg className="w-8 h-8 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Zero Dilution</h3>
              <p className="text-gray-400">
                No added water. No added sugar. What&apos;s in the bottle is pure Alphonso mango pulp and nothing else.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUpVariant} className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-orange-500/10 rounded-xl p-3 w-fit mb-6">
                <svg className="w-8 h-8 text-[#FF6B00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Farm Direct</h3>
              <p className="text-gray-400">
                We work directly with 42 mango farmers in Ratnagiri. Fair price, zero middlemen, maximum freshness.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — TEAM CTA */}
      <section className="py-32 px-6 bg-[#0A0A0A]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl font-extrabold mb-8">Join the Mission</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            We&apos;re a small team of fruit obsessives, food scientists, and designers
            who believe the best products come from the best ingredients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/shop"
              className="w-full sm:w-auto px-10 py-4 bg-[#FF6B00] text-white font-bold tracking-widest uppercase text-sm hover:bg-[#e66000] transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/blog"
              className="w-full sm:w-auto px-10 py-4 border-2 border-white text-white font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-black transition-colors"
            >
              Read Our Blog
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
