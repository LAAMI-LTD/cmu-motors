import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { RequestCarForm } from "@/components/forms/RequestCarForm";

export const metadata: Metadata = buildMetadata({
  title: "Request a Car",
  description:
    "Can't find the right car in our inventory? Tell Simiyu Motors what you're looking for and we'll source it for you.",
  path: "/request-a-car",
});

export default function RequestCarPage() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container-page max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wide text-cyanText">
          Custom sourcing
        </p>
        <h1 className="mt-2 font-heading text-3xl font-semibold text-navy sm:text-4xl">
          Can&apos;t find the right car?
        </h1>
        <p className="mt-3 text-muted">
          Tell us what you&apos;re looking for and let Simiyu Motors source
          it for you — locally or imported.
        </p>

        <div className="mt-10 rounded-lg border border-border bg-white p-6 sm:p-8">
          <RequestCarForm />
        </div>
      </div>
    </section>
  );
}
