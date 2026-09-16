"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export function HomeHero() {
  // Framer Motion animates via JS, so it doesn't automatically respect the
  // prefers-reduced-motion CSS override in globals.css. Reading the
  // preference directly here and collapsing the stagger/offset to
  // effectively-instant keeps this the one deliberate animation moment on
  // the site without ever forcing motion on someone who's asked for less.
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Diagonal cyan geometry — motion language from the logo, not a stock icon */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] lg:block"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, transparent 0%, transparent 42%, rgba(1,156,227,0.12) 42%, rgba(1,156,227,0.12) 44%, transparent 44%, transparent 60%, rgba(1,156,227,0.07) 60%, rgba(1,156,227,0.07) 63%, transparent 63%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, transparent 70%, rgba(245,47,62,0.08) 70%, rgba(245,47,62,0.08) 71.5%, transparent 71.5%)",
          }}
        />
      </div>

      <motion.div
        className="container-page relative flex min-h-[78vh] flex-col justify-center gap-6 py-24"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-sm font-medium uppercase tracking-wide text-cyan"
        >
          Local + imported vehicles
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-2xl font-heading text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl"
        >
          Find your perfect car.
        </motion.h1>

        <motion.p variants={item} className="max-w-xl text-lg text-white/70">
          Quality vehicles. Trusted sourcing. Professional automotive care.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/cars"
            className="rounded bg-red px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore vehicles
          </Link>
          <Link
            href="/request-a-car"
            className="rounded border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
          >
            Request a car
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
