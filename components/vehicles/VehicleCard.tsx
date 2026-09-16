import Link from "next/link";
import { Vehicle, formatKes, formatKm } from "@/data/vehicles";
import { cn } from "@/lib/utils";

const availabilityStyles: Record<Vehicle["availability"], string> = {
  Available: "bg-white/90 text-navy",
  Reserved: "bg-navy/80 text-white",
  Sold: "bg-muted/80 text-white",
};

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const specs = [
    { label: "Year", value: vehicle.year },
    { label: "Mileage", value: formatKm(vehicle.mileageKm) },
    { label: "Fuel", value: vehicle.fuel },
    { label: "Transmission", value: vehicle.transmission },
  ];

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-card transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-navy">
        {/* Placeholder photo treatment — replace with real vehicle photography */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "repeating-linear-gradient(115deg, #08152e 0px, #08152e 40px, #0b1f42 40px, #0b1f42 80px)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium uppercase tracking-wide text-white/50">
            Photo pending
          </span>
        </div>
        <span
          className={cn(
            "absolute left-3 top-3 rounded px-2.5 py-1 text-xs font-semibold",
            availabilityStyles[vehicle.availability]
          )}
        >
          {vehicle.availability}
        </span>
        <span className="absolute right-3 top-3 rounded bg-cyan px-2.5 py-1 text-xs font-semibold text-white">
          {vehicle.importStatus === "Imported" ? "Imported" : "Local"}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="font-heading text-lg font-semibold text-navy">
            {vehicle.make} {vehicle.model}
          </h3>
          <p className="text-sm text-muted">{vehicle.location}</p>
        </div>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-2.5 border-y border-border py-4">
          {specs.map((spec) => (
            <div key={spec.label}>
              <dt className="text-xs text-muted">{spec.label}</dt>
              <dd className="text-sm font-medium text-text">{spec.value}</dd>
            </div>
          ))}
        </dl>

        <div className="flex items-center justify-between pt-1">
          <p className="font-heading text-xl font-semibold text-navy">
            {formatKes(vehicle.priceKes)}
          </p>
        </div>

        <div className="mt-auto flex gap-2 pt-2">
          <Link
            href={`/cars/${vehicle.slug}`}
            className="flex-1 rounded border border-navy px-3 py-2.5 text-center text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            View details
          </Link>
          <Link
            href={`/cars/${vehicle.slug}#enquire`}
            className="flex-1 rounded bg-red px-3 py-2.5 text-center text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Enquire now
          </Link>
        </div>
      </div>
    </article>
  );
}
