import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SellCarForm } from "@/components/forms/SellCarForm";

export const metadata: Metadata = buildMetadata({
  title: "Sell Your Car",
  description:
    "Looking to sell your car or trade it in? Request a valuation from Simiyu Motors.",
  path: "/sell-your-car",
});

export default function SellYourCarPage() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container-page max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wide text-cyanText">
          Sell or trade in
        </p>
        <h1 className="mt-2 font-heading text-3xl font-semibold text-navy sm:text-4xl">
          Looking to sell your car?
        </h1>
        <p className="mt-3 text-muted">
          Tell us about your vehicle and we&apos;ll follow up with a
          valuation — not an instant number, a real assessment from someone
          who&apos;ll actually look at it.
        </p>

        <div className="mt-10 rounded-lg border border-border bg-white p-6 sm:p-8">
          <SellCarForm />
        </div>
      </div>
    </section>
  );
}
