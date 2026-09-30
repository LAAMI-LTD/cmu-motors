import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/vehicles/VehicleCard";

export function FeaturedVehicles() {
  const featured = vehicles.slice(0, 6);

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-cyanText">
              Available now
            </p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-navy sm:text-4xl">
              Featured vehicles
            </h2>
          </div>
          <Link
            href="/cars"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-cyanText"
          >
            View all inventory
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((vehicle) => (
            <VehicleCard key={vehicle.slug} vehicle={vehicle} />
          ))}
        </div>

        <p className="mt-8 text-xs text-muted">
          Real listings — More vehicles to be added. 
        </p>
      </div>
    </section>
  );
}
