import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Simiyu Motors is an automotive company in Nairobi, Kenya, handling vehicle sourcing, importation, sales, and servicing.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="container-page">
          <p className="text-sm font-medium uppercase tracking-wide text-cyan">
            About Simiyu Motors
          </p>
          <h1 className="mt-2 max-w-2xl font-heading text-3xl font-semibold sm:text-4xl lg:text-5xl">
            An automotive partner, not a listings page.
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6 text-text">
            <p className="text-lg leading-relaxed">
              Simiyu Motors handles the full arc of vehicle ownership in
              Kenya: finding the right car, buying it, importing it if it
              isn&apos;t local, and keeping it running afterward. Most
              dealerships stop at the sale. We don&apos;t.
            </p>
            <p className="leading-relaxed">
              We work with individuals buying their first serious vehicle and
              businesses building out a fleet. Either way, the process is the
              same: understand what you actually need, find a vehicle that
              matches it, verify it before you commit, and stand behind it
              after.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="font-heading text-xl font-semibold text-navy">
                Sourcing and importation
              </h2>
              <p className="mt-2 leading-relaxed text-muted">
                We have direct access to foreign-used vehicles, not just
                whatever&apos;s available locally. If you have a specific
                make, model, and spec in mind, we can find it, verify it, and
                bring it in — handling shipping and customs clearance so you
                don&apos;t have to.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-navy">
                Quality, checked before it&apos;s promised
              </h2>
              <p className="mt-2 leading-relaxed text-muted">
                Every vehicle is inspected before it&apos;s listed or
                delivered. We&apos;d rather tell you about a problem before
                you buy than have you discover it after.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-navy">
                Servicing that continues the relationship
              </h2>
              <p className="mt-2 leading-relaxed text-muted">
                Ownership doesn&apos;t end at handover. Our workshop handles
                servicing, diagnostics, and maintenance for vehicles bought
                through us and vehicles that weren&apos;t.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container-page flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-lg font-heading text-2xl font-semibold text-navy sm:text-3xl">
            Ready to talk about your next vehicle?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/cars"
              className="rounded bg-red px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Explore vehicles
            </Link>
            <Link
              href="/contact"
              className="rounded border border-navy px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
