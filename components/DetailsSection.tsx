"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function DetailsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-32 px-6 md:px-12"
      style={{ backgroundColor: "#0F0F0F" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* The King of Fruits */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 border-l-4 pl-6"
          style={{ borderColor: "#FF6B00" }}
        >
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            The King of Fruits
          </h3>
          <p className="text-lg leading-relaxed text-gray-400">
            Our Cream Mango juice uses only the finest Ratnagiri Alphonso
            mangoes. Known for their rich sweetness and vibrant color, these
            mangoes are cold-pressed within hours of harvest to preserve every
            drop of nutrient-rich goodness. It&apos;s not just juice; it&apos;s
            a liquid gold experience.
          </p>
        </motion.div>

        {/* Farm to Bottle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-6 border-l-4 pl-6"
          style={{ borderColor: "#FF6B00" }}
        >
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            Farm to Bottle
          </h3>
          <p className="text-lg leading-relaxed text-gray-400">
            We believe in absolute transparency. From the orchard to the bottle,
            our process is designed to minimize oxidation and maximize flavor.
            HPP (High Pressure Processing) ensures that our juice stays safe and
            fresh without any heat treatment, keeping the vital enzymes and
            vitamins intact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
