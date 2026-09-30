export type HeroSlide = {
  id: string;
  /** Path under /public. Files live in public/hero/. */
  src: string | null;
  alt: string;
  caption: string;
};

/**
 * Hero slideshow — independent of the featured vehicles list, since the
 * client's hero photos are a different set of cars.
 *
 * Put the image files in public/hero/ using these exact filenames (case
 * sensitive). See README "Hero slider images" for naming conventions.
 */
export const heroSlides: HeroSlide[] = [
  { id: "lexus-v8", src: "/hero/lexus-v8.jpeg", alt: "Lexus V8", caption: "Lexus V8" },
  { id: "mazda-cx3", src: "/hero/mazda-cx3.jpeg", alt: "Mazda CX-3", caption: "Mazda CX-3" },
  { id: "peugeot-blue", src: "/hero/pigeot-blue.jpeg", alt: "Peugeot", caption: "Peugeot" },
  { id: "toyota-hilux", src: "/hero/toyota-hilux.jpeg", alt: "Toyota Hilux", caption: "Toyota Hilux" },
  { id: "toyota-rav4-jaos", src: "/hero/toyota-rav4-jaos.jpeg", alt: "Toyota RAV4", caption: "Toyota RAV4" },
];
