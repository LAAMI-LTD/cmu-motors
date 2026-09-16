/**
 * Central brand + contact data.
 *
 * IMPORTANT: fields marked `isPlaceholder: true` have not been supplied by
 * the business yet. Never present these as real information — components
 * consuming them should render a visibly marked placeholder state.
 */

export const siteConfig = {
  name: "Simiyu Motors",
  tagline: "Drive Your Dream. We Deliver.",
  description:
    "Simiyu Motors sources, sells, imports, and services vehicles for individuals and businesses in Nairobi, Kenya, and internationally.",
  location: "Nairobi, Kenya",
};

export const contact = {
  phone: { value: "0702 038 877", isPlaceholder: false },
  phoneHref: "tel:+254702038877",
  email: { value: "simiyu51@gmail.com", isPlaceholder: false },
  // Stored in international format (digits only after the '+') so
  // buildWhatsAppLink() below produces a correct wa.me link.
  whatsappNumber: { value: "+254 787 480 175", isPlaceholder: false },
  address: { value: "Kerarapon Drive, off Ngong Road, Karen, Nairobi", isPlaceholder: false },
  // Not yet supplied — keep as a flagged placeholder until confirmed.
  hours: { value: "[BUSINESS HOURS]", isPlaceholder: true },
} as const;

export const social = {
  instagram: { value: "https://instagram.com/simiyumotors", isPlaceholder: false },
  facebook: { value: "https://facebook.com/simiyumotors", isPlaceholder: false },
  tiktok: { value: "https://tiktok.com/@simiyumotors", isPlaceholder: false },
  // Not yet supplied.
  twitter: { value: "[X / TWITTER URL]", isPlaceholder: true },
} as const;

/**
 * Builds a wa.me link with a pre-filled message. Returns null while the
 * WhatsApp number is still a placeholder, so callers can hide/disable the
 * button instead of linking to a broken number.
 */
export function buildWhatsAppLink(message: string): string | null {
  if (contact.whatsappNumber.isPlaceholder) return null;
  const digits = contact.whatsappNumber.value.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
