export type Testimonial = {
  quote: string;
  author: string;
  vehicle?: string;
};

/**
 * Intentionally empty. The brief explicitly forbids inventing customer
 * testimonials. Add real, attributable reviews here once the business
 * supplies them — the homepage renders an honest "coming soon" state
 * while this stays empty rather than fabricating quotes.
 */
export const testimonials: Testimonial[] = [];
