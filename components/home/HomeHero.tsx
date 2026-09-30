"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { HeroSlider } from "@/components/home/HeroSlider";

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
      <motion.div
        className="container-page relative grid grid-cols-1 gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-24"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col gap-6">
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
        </div>

        <motion.div variants={item}>
          <HeroSlider />
        </motion.div>
      </motion.div>
    </section>
  );
}
