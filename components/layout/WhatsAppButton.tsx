"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/data/site";

const DEFAULT_MESSAGE = "Hi Simiyu Motors, I'd like to know more about a vehicle.";

export function WhatsAppButton() {
  const href = buildWhatsAppLink(DEFAULT_MESSAGE);

  const baseClasses =
    "fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 ease-premium sm:bottom-6 sm:right-6";

  if (!href) {
    // WhatsApp number not yet supplied — render an inert placeholder in the
    // correct position rather than inventing a number or hiding the affordance.
    return (
      <button
        type="button"
        disabled
        title="WhatsApp number not yet configured"
        aria-label="WhatsApp — coming soon"
        className={`${baseClasses} cursor-not-allowed bg-muted/50`}
      >
        <MessageCircle className="h-6 w-6 text-white" aria-hidden="true" />
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Simiyu Motors on WhatsApp"
      className={`${baseClasses} bg-[#25D366] hover:scale-105 active:scale-95`}
    >
      <MessageCircle className="h-6 w-6 text-white" aria-hidden="true" />
    </a>
  );
}
