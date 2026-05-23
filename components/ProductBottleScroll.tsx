"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll } from "framer-motion";
import ProductTextOverlays from "./ProductTextOverlays";

const TOTAL_FRAMES = 200;

function getFramePath(index: number): string {
  const padded = String(index).padStart(3, "0");
  return `/images/mango/ezgif-frame-${padded}.jpg`;
}

export default function ProductBottleScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Draw a frame onto the canvas with "contain" fit
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    // Set canvas to device pixel ratio for sharpness
    const dpr = window.devicePixelRatio || 1;
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, displayWidth, displayHeight);

    const scale = Math.max(
      displayWidth / img.naturalWidth,
      displayHeight / img.naturalHeight
    );
    const x = (displayWidth - img.naturalWidth * scale) / 2;
    const y = (displayHeight - img.naturalHeight * scale) / 2;
    ctx.drawImage(img, x, y, 
      img.naturalWidth * scale, 
      img.naturalHeight * scale
    );
  }, []);

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoading(false);
          // Draw first frame
          drawFrame(0);
        }
      };
      img.onerror = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoading(false);
          drawFrame(0);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, [drawFrame]);

  // Animate canvas on scroll using requestAnimationFrame
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const frameIndex = Math.min(
        Math.floor(progress * (TOTAL_FRAMES - 1)),
        TOTAL_FRAMES - 1
      );

      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = requestAnimationFrame(() => {
          drawFrame(frameIndex);
        });
      }
    });

    return () => {
      unsubscribe();
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [scrollYProgress, drawFrame]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      drawFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  return (
    <div ref={sectionRef} className="relative h-[500vh] bg-transparent">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-sm bg-black/20 transition-opacity duration-300">
          <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4" />
          <p className="text-white font-medium animate-pulse drop-shadow-md">
            Blending Fresh Ingredients...
          </p>
          <div className="mt-4 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full transition-all duration-300"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <p className="text-white/60 text-sm mt-2">{loadProgress}%</p>
        </div>
      )}

      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-[100vw] ml-[calc(-50vw+50%)] overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-[100vw] h-[100vh]"
        />

        {/* Text Overlays */}
        <ProductTextOverlays scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}
