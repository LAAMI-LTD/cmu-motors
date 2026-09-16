import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  vehicles,
  getVehicleBySlug,
  getSimilarVehicles,
  formatKes,
  formatKm,
} from "@/data/vehicles";
import { buildWhatsAppLink } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { VehicleGallery } from "@/components/vehicles/VehicleGallery";
import { SimilarVehicles } from "@/components/vehicles/SimilarVehicles";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const vehicle = getVehicleBySlug(params.slug);
  if (!vehicle) return { title: "Vehicle not found" };

  const title = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
  return buildMetadata({
    title,
    description: `${title} — ${formatKm(vehicle.mileageKm)}, ${vehicle.fuel}, ${vehicle.transmission}. ${vehicle.location}, Kenya. ${formatKes(vehicle.priceKes)}.`,
    path: `/cars/${vehicle.slug}`,
  });
}

const availabilityStyles: Record<string, string> = {
  Available: "bg-white text-navy",
  Reserved: "bg-navy/70 text-white",
  Sold: "bg-muted text-white",
};

export default function VehicleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const vehicle = getVehicleBySlug(params.slug);
  if (!vehicle) notFound();

  const similar = getSimilarVehicles(vehicle);
  const whatsappHref = buildWhatsAppLink(
    `Hi Simiyu Motors, I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} (${vehicle.slug}).`
  );

  const specs = [
    { label: "Year", value: vehicle.year },
    { label: "Mileage", value: formatKm(vehicle.mileageKm) },
    { label: "Fuel", value: vehicle.fuel },
    { label: "Transmission", value: vehicle.transmission },
    { label: "Engine", value: `${vehicle.engineCc} cc` },
    { label: "Body type", value: vehicle.bodyType },
    { label: "Location", value: vehicle.location },
    { label: "Import status", value: vehicle.importStatus },
  ];

  return (
    <>
      <div className="container-page py-8 sm:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
          <Link href="/cars" className="hover:text-navy">
            Inventory
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text">
            {vehicle.make} {vehicle.model}
          </span>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <VehicleGallery
              photoCount={vehicle.photoCount}
              label={`${vehicle.make} ${vehicle.model}`}
            />

            <div className="mt-8">
              <h2 className="font-heading text-xl font-semibold text-navy">
                Description
              </h2>
              <p className="mt-3 leading-relaxed text-text">
                {vehicle.description}
              </p>
            </div>

            <div className="mt-8">
              <h2 className="font-heading text-xl font-semibold text-navy">
                Features
              </h2>
              <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
                {vehicle.features.map((feature) => (
                  <li key={feature} className="text-sm text-text">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="rounded-lg border border-border bg-white p-6 lg:sticky lg:top-24">
              <span
                className={cn(
                  "inline-block rounded px-2.5 py-1 text-xs font-semibold",
                  availabilityStyles[vehicle.availability]
                )}
                style={
                  vehicle.availability === "Available"
                    ? { border: "1px solid var(--color-border)" }
                    : undefined
                }
              >
                {vehicle.availability}
              </span>

              <h1 className="mt-3 font-heading text-2xl font-semibold text-navy sm:text-3xl">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
              <p className="mt-1 text-sm text-muted">{vehicle.location}</p>

              <p className="mt-4 font-heading text-3xl font-semibold text-navy">
                {formatKes(vehicle.priceKes)}
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-y border-border py-5">
                {specs.map((spec) => (
                  <div key={spec.label}>
                    <dt className="text-xs text-muted">{spec.label}</dt>
                    <dd className="text-sm font-medium text-text">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div id="enquire" className="mt-6 flex flex-col gap-3 scroll-mt-24">
                <a
                  href={`mailto:?subject=${encodeURIComponent(
                    `Enquiry: ${vehicle.year} ${vehicle.make} ${vehicle.model}`
                  )}`}
                  className="rounded bg-red px-5 py-3 text-center text-sm font-semibold text-white transition-transform hover:scale-[1.01]"
                >
                  Enquire about this vehicle
                </a>
                {whatsappHref ? (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded border border-navy px-5 py-3 text-center text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
                  >
                    WhatsApp Simiyu Motors
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className="rounded border border-navy px-5 py-3 text-center text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
                  >
                    Contact Simiyu Motors
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SimilarVehicles vehicles={similar} />
    </>
  );
}
