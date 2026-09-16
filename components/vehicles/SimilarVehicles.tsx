import { Vehicle } from "@/data/vehicles";
import { VehicleCard } from "@/components/vehicles/VehicleCard";

export function SimilarVehicles({ vehicles }: { vehicles: Vehicle[] }) {
  if (vehicles.length === 0) return null;

  return (
    <section className="border-t border-border bg-background py-16">
      <div className="container-page">
        <h2 className="font-heading text-2xl font-semibold text-navy">
          Similar vehicles
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.slug} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}
