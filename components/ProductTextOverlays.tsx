"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface Props {
  scrollYProgress: MotionValue<number>;
}

const overlayGradient =
  "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)";

const textShadow = "0 2px 20px rgba(0,0,0,0.8)";

export default function ProductTextOverlays({ scrollYProgress }: Props) {
  // Hero: 0% - 5% — Fades out immediately on scroll
  const opacityHero = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const yHero = useTransform(scrollYProgress, [0, 0.05], [0, -40]);

  // Section 1: 5% - 20%
  const opacity1 = useTransform(scrollYProgress, [0.05, 0.08, 0.17, 0.20], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.05, 0.08, 0.17, 0.20], [50, 0, 0, -30]);

  // Section 2: 22% - 42%
  const opacity2 = useTransform(scrollYProgress, [0.20, 0.24, 0.38, 0.42], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.20, 0.24, 0.38, 0.42], [50, 0, 0, -30]);

  // Section 3: 45% - 65%
  const opacity3 = useTransform(scrollYProgress, [0.43, 0.47, 0.61, 0.65], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.43, 0.47, 0.61, 0.65], [50, 0, 0, -30]);

  // Section 4: 68% - 85%
  const opacity4 = useTransform(scrollYProgress, [0.66, 0.70, 0.81, 0.85], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.66, 0.70, 0.81, 0.85], [50, 0, 0, -30]);

  // Section 5: 87% - 98% — CTA
  const opacity5 = useTransform(scrollYProgress, [0.86, 0.90, 0.96, 1.0], [0, 1, 1, 0]);
  const y5 = useTransform(scrollYProgress, [0.86, 0.90, 0.96, 1.0], [50, 0, 0, -30]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* ===== HERO — Bottom-Left, fades out by 5% ===== */}
      <motion.div
        style={{ opacity: opacityHero, y: yHero }}
        className="absolute bottom-20 left-12 z-20 pointer-events-none"
      >
        <div className="flex items-stretch gap-6">
          {/* White accent border */}
          <div className="w-1 bg-white/80 self-stretch" />
          <div className="max-w-lg">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: "#FF6B00" }}
            >
              MANGO STUDIO
            </p>
            <div className="w-20 h-0.5 bg-white/60 mb-6" />
            <h1
              className="text-5xl md:text-7xl font-extrabold text-white leading-none mb-6 text-shadow-overlay"
              style={{ textShadow }}
            >
              Crafted for
              <br />
              the Bold.
            </h1>
            <p className="text-base text-white/70 font-medium">
              Pure. Raw. Unfiltered.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ===== Section 1 — Cream Mango / Pure Sunshine ===== */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute bottom-32 left-0 right-0 pointer-events-none"
      >
        <div
          className="py-10 px-12"
          style={{ background: overlayGradient }}
        >
          <div className="max-w-7xl mx-auto flex items-stretch gap-6">
            <div className="w-1 flex-shrink-0 bg-white/80" style={{ minHeight: 60 }} />
            <div className="max-w-lg">
              <h2
                className="text-5xl md:text-6xl font-extrabold text-white tracking-tight text-shadow-overlay"
                style={{ textShadow }}
              >
                Cream Mango.
              </h2>
              <p
                className="text-base md:text-lg font-medium text-white/90 mt-3 text-shadow-overlay"
                style={{ textShadow }}
              >
                Pure sunshine.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== Section 2 — Bursting with fresh mango ===== */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute bottom-32 left-0 right-0 pointer-events-none"
      >
        <div
          className="py-10 px-12"
          style={{ background: overlayGradient }}
        >
          <div className="max-w-7xl mx-auto flex items-stretch gap-6">
            <div className="w-1 flex-shrink-0 bg-white/80" style={{ minHeight: 60 }} />
            <div className="max-w-lg">
              <h2
                className="text-5xl md:text-6xl font-extrabold text-white leading-tight text-shadow-overlay"
                style={{ textShadow }}
              >
                Bursting with fresh mango.
              </h2>
              <p
                className="mt-4 text-base md:text-lg font-medium text-white/90 text-shadow-overlay"
                style={{ textShadow }}
              >
                Hand-picked Alphonso mangoes, perfectly ripened under the summer sun.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== Section 3 — Vitamin-packed refreshment ===== */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute bottom-32 left-0 right-0 pointer-events-none"
      >
        <div
          className="py-10 px-12"
          style={{ background: overlayGradient }}
        >
          <div className="max-w-7xl mx-auto flex items-stretch gap-6">
            <div className="w-1 flex-shrink-0 bg-white/80" style={{ minHeight: 60 }} />
            <div className="max-w-lg">
              <h2
                className="text-5xl md:text-6xl font-extrabold text-white leading-tight text-shadow-overlay"
                style={{ textShadow }}
              >
                Vitamin-packed refreshment.
              </h2>
              <p
                className="mt-4 text-base md:text-lg font-medium text-white/90 text-shadow-overlay"
                style={{ textShadow }}
              >
                A natural energy boost that revitalizes your body and mind instantly.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== Section 4 — Made from fruit, not concentrate ===== */}
      <motion.div
        style={{ opacity: opacity4, y: y4 }}
        className="absolute bottom-32 left-0 right-0 pointer-events-none"
      >
        <div
          className="py-10 px-12"
          style={{ background: overlayGradient }}
        >
          <div className="max-w-7xl mx-auto flex items-stretch gap-6">
            <div className="w-1 flex-shrink-0 bg-white/80" style={{ minHeight: 60 }} />
            <div className="max-w-lg">
              <h2
                className="text-5xl md:text-6xl font-extrabold text-white leading-tight text-shadow-overlay"
                style={{ textShadow }}
              >
                Made from fruit,
                <br />
                not concentrate.
              </h2>
              <div className="mt-8 flex gap-12">
                <div>
                  <div className="text-4xl font-extrabold text-white" style={{ textShadow }}>0g</div>
                  <div className="text-sm uppercase font-bold mt-1" style={{ color: "#FF6B00" }}>
                    Sugar
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white" style={{ textShadow }}>0%</div>
                  <div className="text-sm uppercase font-bold mt-1" style={{ color: "#FF6B00" }}>
                    Water
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white" style={{ textShadow }}>100%</div>
                  <div className="text-sm uppercase font-bold mt-1" style={{ color: "#FF6B00" }}>
                    Pulp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== Section 5 — CTA ===== */}
      <motion.div
        style={{ opacity: opacity5, y: y5 }}
        className="absolute bottom-32 left-0 right-0 pointer-events-none"
      >
        <div
          className="py-10 px-12"
          style={{ background: overlayGradient }}
        >
          <div className="max-w-7xl mx-auto flex items-stretch gap-6">
            <div className="w-1 flex-shrink-0 bg-white/80" style={{ minHeight: 60 }} />
            <div className="max-w-lg">
              <h2
                className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight text-shadow-overlay"
                style={{ textShadow }}
              >
                Be You. Be Raw.
              </h2>
              <div className="flex flex-col items-start gap-6">
                <button
                  className="pointer-events-auto px-10 py-4 rounded-none text-lg font-bold shadow-2xl hover:scale-105 transform transition-all duration-300"
                  style={{ backgroundColor: "#FF6B00", color: "white" }}
                >
                  Shop Mango Studio
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
