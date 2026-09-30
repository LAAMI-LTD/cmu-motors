"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/heroSlides";
import { cn } from "@/lib/utils";

const PATTERNS = [
  "repeating-linear-gradient(115deg, #08152e 0px, #08152e 40px, #0b1f42 40px, #0b1f42 80px)",
  "repeating-linear-gradient(65deg, #08152e 0px, #08152e 36px, #0c2447 36px, #0c2447 72px)",
  "repeating-linear-gradient(150deg, #08152e 0px, #08152e 44px, #0a1c3a 44px, #0a1c3a 88px)",
  "repeating-linear-gradient(95deg, #08152e 0px, #08152e 38px, #0d2952 38px, #0d2952 76px)",
];

const AUTO_ADVANCE_MS = 5000;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  const goTo = useCallback((index: number) => {
    setActive((index + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    // Respect reduced-motion by not auto-advancing at all — manual controls
    // still work either way. Also pause on hover/focus so it never fights
    // someone trying to read a caption or click through.
    if (reducedMotionRef.current || isPaused) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [isPaused]);

  if (heroSlides.length === 0) return null;

  return (
    <div
      className="relative overflow-hidden rounded-lg border border-white/10"
      role="region"
      aria-label="Featured vehicles"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="relative aspect-[4/3] sm:aspect-[16/11]">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${heroSlides.length}: ${slide.caption}`}
            aria-hidden={i !== active}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === active ? "opacity-100" : "opacity-0"
            )}
          >
            {slide.src ? (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={i === 0}
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{ background: PATTERNS[i % PATTERNS.length] }}
              />
            )}
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/0 to-navy/0"
              aria-hidden="true"
            />
            <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white">
              {slide.caption}
              {!slide.src && (
                <span className="ml-2 text-xs uppercase tracking-wide text-white/50">
                  Photo pending
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      {heroSlides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            aria-label="Previous vehicle"
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-navy/60 text-white transition-colors hover:bg-navy/80"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label="Next vehicle"
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-navy/60 text-white transition-colors hover:bg-navy/80"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}: ${slide.caption}`}
                aria-current={i === active}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === active ? "w-6 bg-cyan" : "w-1.5 bg-white/40"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
