"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PATTERNS = [
  "repeating-linear-gradient(115deg, #08152e 0px, #08152e 40px, #0b1f42 40px, #0b1f42 80px)",
  "repeating-linear-gradient(65deg, #08152e 0px, #08152e 36px, #0c2447 36px, #0c2447 72px)",
  "repeating-linear-gradient(150deg, #08152e 0px, #08152e 44px, #0a1c3a 44px, #0a1c3a 88px)",
];

export function VehicleGallery({
  images,
  photoCount,
  label,
}: {
  /** Real photo paths under /public/vehicles/, in display order. */
  images?: string[];
  /** Placeholder slide count, used only when `images` isn't supplied yet. */
  photoCount: number;
  label: string;
}) {
  const [active, setActive] = useState(0);
  const count = images?.length ?? photoCount;
  const placeholderSlots = Array.from({ length: count });

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-navy sm:aspect-[16/10]">
        {images?.[active] ? (
          <Image
            src={images[active]}
            alt={`${label} — photo ${active + 1}`}
            fill
            sizes="(max-width: 1023px) 100vw, 55vw"
            className="object-cover"
            priority={active === 0}
          />
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-90"
              style={{ background: PATTERNS[active % PATTERNS.length] }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-medium uppercase tracking-wide text-white/50">
                Photo {active + 1} pending
              </span>
            </div>
          </>
        )}
      </div>

      {count > 1 && (
        <div
          className="mt-3 flex gap-2 overflow-x-auto pb-1"
          role="tablist"
          aria-label={`${label} photos`}
        >
          {placeholderSlots.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`View photo ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "relative h-16 w-20 shrink-0 overflow-hidden rounded border transition-opacity",
                active === i
                  ? "border-cyan"
                  : "border-border opacity-70 hover:opacity-100"
              )}
            >
              {images?.[i] ? (
                <Image
                  src={images[i]}
                  alt={`${label} thumbnail ${i + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{ background: PATTERNS[i % PATTERNS.length] }}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
