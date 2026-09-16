import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ImportProcess } from "@/components/import/ImportProcess";
import { ImportRequestForm } from "@/components/forms/ImportRequestForm";
import { FaqAccordion } from "@/components/shared/FaqAccordion";

export const metadata: Metadata = buildMetadata({
  title: "Import a Car",
  description:
    "Direct access to foreign-used vehicles, sourced and verified to your specification, shipped and cleared into Kenya.",
  path: "/import",
});

const faqs = [
  {
    question: "How much does importing a car cost?",
    answer:
      "Cost depends on the vehicle, its origin, and current duty rates. We give you a clear, itemised estimate before you commit to anything — no hidden fees added later.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Typically a matter of weeks from sourcing to delivery, depending on the vehicle's location and shipping schedules. We'll give you a realistic timeline once we've found candidate vehicles.",
  },
  {
    question: "Can I inspect the vehicle before it ships?",
    answer:
      "Yes. Every vehicle is inspected and verified before purchase, and we share that report with you before you approve the buy.",
  },
  {
    question: "What if I don't know exactly what I want?",
    answer:
      "That's fine — tell us your budget and general needs, and we'll recommend options that fit before you commit to a specific make and model.",
  },
];

export default function ImportPage() {
  return (
    <>
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="container-page">
          <p className="text-sm font-medium uppercase tracking-wide text-cyan">
            Vehicle importation
          </p>
          <h1 className="mt-2 max-w-2xl font-heading text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Import a car, managed end-to-end.
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Direct access to foreign-used vehicles, sourced and verified
            against your exact specification, then shipped and cleared into
            Kenya — not a gamble on a broker you&apos;ve never met.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container-page">
          <h2 className="font-heading text-2xl font-semibold text-navy sm:text-3xl">
            How the import process works
          </h2>
          <div className="mt-8">
            <ImportProcess />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-navy sm:text-3xl">
              Start your import request
            </h2>
            <p className="mt-2 text-muted">
              Tell us what you&apos;re after and we&apos;ll come back with real
              options and pricing.
            </p>
            <div className="mt-8">
              <ImportRequestForm />
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-navy sm:text-3xl">
              Common questions
            </h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
