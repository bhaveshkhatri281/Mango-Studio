"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HealthBenefitsPage() {
  const heroHeadline = "Liquid Gold.\nProven by Science.".split("\n");

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const nutrients = [
    { name: "Calories", value: "180 kcal", dv: "" },
    { name: "Total Carbs", value: "42g", dv: "" },
    { name: "Natural Sugars", value: "38g", dv: "" },
    { name: "Protein", value: "2g", dv: "" },
    { name: "Dietary Fiber", value: "3g", dv: "" },
    { name: "Vitamin C", value: "60mg", dv: "(67% DV)" },
    { name: "Vitamin A", value: "1262 IU", dv: "(25% DV)" },
    { name: "Potassium", value: "325mg", dv: "" },
    { name: "Iron", value: "0.4mg", dv: "" },
  ];

  const benefits = [
    {
      num: "01",
      title: "Immunity Booster",
      desc: "67% of your daily Vitamin C in one bottle. Strengthens immune response naturally.",
    },
    {
      num: "02",
      title: "Gut Health",
      desc: "3g of natural dietary fiber supports digestion and feeds good gut bacteria.",
    },
    {
      num: "03",
      title: "Eye Health",
      desc: "25% daily Vitamin A supports sharp vision and protects against macular degeneration.",
    },
    {
      num: "04",
      title: "Natural Energy",
      desc: "38g of natural fruit sugars provide clean, crash-free energy without caffeine.",
    },
  ];

  const comparisonTable = [
    { feature: "Cold Pressed", ms: "✅", t: "❌", rf: "❌", fs: "✅" },
    { feature: "No Added Sugar", ms: "✅", t: "❌", rf: "❌", fs: "✅" },
    { feature: "No Preservatives", ms: "✅", t: "❌", rf: "❌", fs: "✅" },
    { feature: "HPP Treated", ms: "✅", t: "❌", rf: "❌", fs: "❌" },
    { feature: "Shelf Life", ms: "45 days", t: "12 months", rf: "12 months", fs: "3 days" },
    { feature: "Vitamin C (per serving)", ms: "60mg", t: "18mg", rf: "22mg", fs: "35mg" },
    { feature: "Price per 300ml", ms: "₹120", t: "₹85", rf: "₹75", fs: "₹150" },
  ];

  const processSteps = [
    {
      icon: "🥭",
      title: "Hand Picked",
      desc: "Selected at peak ripeness from Ratnagiri orchards every morning.",
    },
    {
      icon: "🧃",
      title: "Cold Pressed",
      desc: "Pressed at 4°C within 2 hours of harvest. Zero heat applied.",
    },
    {
      icon: "🔬",
      title: "HPP Treated",
      desc: "3 minutes at 600MPa pressure. Kills 99.9% of bacteria. Zero nutrients lost.",
    },
    {
      icon: "🚚",
      title: "Cold Shipped",
      desc: "Delivered in refrigerated packaging directly to your door.",
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
              Health Benefits
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
            Every bottle of Mango Studio contains more vitamins and nutrients than a
            freshly cut Alphonso mango — because nothing is lost in our process.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2 — NUTRITION FACTS */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold">
              What&apos;s Inside Every 300ml Bottle
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left: Nutrition Label */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-[#1A1A1A] rounded-2xl p-8 border-t-8 border-t-[#FF6B00] shadow-2xl"
            >
              <div className="border-b-8 border-white pb-2 mb-4">
                <h3 className="text-4xl font-black mb-1">Nutrition Facts</h3>
                <p className="text-gray-400 text-sm">Serving size: 300ml (1 bottle)</p>
              </div>

              <div className="flex flex-col">
                {nutrients.map((n, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-3 border-b border-white/10 last:border-0"
                  >
                    <span className="font-semibold text-lg">{n.name}</span>
                    <div className="text-right">
                      <span className="font-bold text-lg">{n.value}</span>
                      {n.dv && <span className="text-[#FF6B00] ml-2 text-sm font-bold">{n.dv}</span>}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-gray-500 text-xs">
                * No added sugar. No preservatives. Cold pressed. HPP treated.
              </p>
            </motion.div>

            {/* Right: Benefits Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col space-y-4 justify-center"
            >
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariant}
                  className="bg-[#1A1A1A] rounded-xl p-5 flex gap-6 items-start hover:bg-[#222] transition-colors border border-white/5"
                >
                  <span className="text-4xl font-black text-[#FF6B00]">{b.num}</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{b.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — COMPARISON TABLE */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Mango Studio vs The Rest</h2>
            <p className="text-gray-400 text-lg">See how we compare against leading juice brands in India</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-x-auto"
          >
            <div className="min-w-[800px] bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              {/* Header */}
              <div className="grid grid-cols-5 bg-[#2A2A2A] text-white p-4 font-bold text-sm uppercase tracking-wider">
                <div className="col-span-1 pl-4">Feature</div>
                <div className="col-span-1 text-center text-[#FF6B00]">Mango Studio</div>
                <div className="col-span-1 text-center">Tropicana</div>
                <div className="col-span-1 text-center">Real Fruit</div>
                <div className="col-span-1 text-center pr-4">Fresh Squeezed</div>
              </div>

              {/* Rows */}
              {comparisonTable.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-5 p-4 items-center border-b border-white/5 last:border-0 ${
                    i % 2 === 0 ? "bg-[#1A1A1A]" : "bg-[#141414]"
                  }`}
                >
                  <div className="col-span-1 pl-4 font-semibold text-gray-300">{row.feature}</div>
                  <div className="col-span-1 text-center font-bold text-white border-l-2 border-[#FF6B00]/30 py-2">
                    {row.ms}
                  </div>
                  <div className="col-span-1 text-center text-gray-500">{row.t}</div>
                  <div className="col-span-1 text-center text-gray-500">{row.rf}</div>
                  <div className="col-span-1 text-center text-gray-500 pr-4">{row.fs}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — INGREDIENTS */}
      <section className="py-32 px-6 bg-[#0F0F0F] text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-[#FF6B00] font-bold tracking-widest text-sm uppercase mb-8">
            Only 1 Ingredient
          </h2>
          <h3 className="text-6xl md:text-8xl font-extrabold text-[#FF6B00] mb-8 tracking-tight">
            Alphonso Mango.
          </h3>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            That&apos;s it. No water. No sugar. No citric acid. No preservatives. No
            natural flavors. No color. Just Alphonso mango pulp.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Added Sugar",
              "Water",
              "Preservatives",
              "Concentrates",
              "Artificial Flavors",
              "Color",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-gray-500 line-through bg-black/20"
              >
                <span className="text-[#FF6B00] font-bold text-sm no-underline">✕</span>
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 5 — PROCESS */}
      <section className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold">The Mango Studio Process</h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center w-full lg:w-1/4"
              >
                <span className="text-[#FF6B00] font-black text-2xl mb-4">0{i + 1}</span>
                <div className="bg-[#1A1A1A] rounded-2xl p-8 w-full border border-white/5 h-full flex flex-col items-center">
                  <span className="text-5xl mb-6 block">{step.icon}</span>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Connecting Arrows for Desktop */}
            <div className="hidden lg:flex absolute top-1/2 left-0 right-0 justify-between px-[12%] pointer-events-none -mt-4">
              {[1, 2, 3].map((arr) => (
                <div key={arr} className="text-[#FF6B00] text-3xl font-black">
                  →
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CTA */}
      <section className="py-32 px-6 bg-[#0A0A0A] text-center border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-5xl font-extrabold mb-6">Ready to Feel the Difference?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Try one bottle. We&apos;re confident you&apos;ll taste the difference instantly.
          </p>
          <Link
            href="/#buy"
            className="inline-block px-12 py-5 bg-[#FF6B00] text-white font-bold tracking-widest uppercase text-lg hover:bg-[#e66000] transition-colors hover:scale-105 active:scale-95 duration-300"
          >
            Order Now — ₹120
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
