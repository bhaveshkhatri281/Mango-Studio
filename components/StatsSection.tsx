"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "0g", label: "Added Sugar" },
    { value: "0%", label: "Added Water" },
    { value: "100%", label: "Pure Pulp" },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-6 md:px-12"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="relative group"
            >
              <div className="rounded-3xl p-12 text-center border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{ backgroundColor: "#111111" }}
              >
                <div className="text-7xl md:text-8xl font-black text-white mb-4">
                  {stat.value}
                </div>
                <div
                  className="text-sm uppercase tracking-[0.3em] font-bold"
                  style={{ color: "#FF6B00" }}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
