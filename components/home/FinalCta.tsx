import Link from "next/link";
import { buildWhatsAppLink } from "@/data/site";

export function FinalCta() {
  const whatsappHref = buildWhatsAppLink(
    "Hi Simiyu Motors, I'd like to talk about a vehicle."
  );

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page flex flex-col items-center gap-6 rounded-lg border border-border bg-background px-8 py-16 text-center">
        <h2 className="max-w-xl font-heading text-3xl font-semibold text-navy sm:text-4xl">
          Ready to find your perfect car?
        </h2>
        <p className="max-w-md text-muted">
          Browse what&apos;s available, or tell us exactly what you&apos;re
          looking for and let us source it.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/cars"
            className="rounded bg-red px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Explore vehicles
          </Link>
          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              WhatsApp us
            </a>
          ) : (
            <Link
              href="/contact"
              className="rounded border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Contact us
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
