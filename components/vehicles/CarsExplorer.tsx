"use client";

import { useMemo, useState } from "react";
import { vehicles, Vehicle } from "@/data/vehicles";
import { VehicleCard } from "@/components/vehicles/VehicleCard";

type SortKey = "newest" | "price-asc" | "price-desc" | "mileage-asc";

const ALL = "All";

function unique<T extends string>(values: T[]): T[] {
  return Array.from(new Set(values));
}

export function CarsExplorer() {
  const makes = useMemo(() => [ALL, ...unique(vehicles.map((v) => v.make)).sort()], []);
  const bodyTypes = useMemo(
    () => [ALL, ...unique(vehicles.map((v) => v.bodyType)).sort()],
    []
  );
  const fuels = useMemo(() => [ALL, ...unique(vehicles.map((v) => v.fuel)).sort()], []);
  const transmissions = useMemo(
    () => [ALL, ...unique(vehicles.map((v) => v.transmission)).sort()],
    []
  );
  const importStatuses = useMemo(
    () => [ALL, ...unique(vehicles.map((v) => v.importStatus)).sort()],
    []
  );

  const [make, setMake] = useState(ALL);
  const [bodyType, setBodyType] = useState(ALL);
  const [fuel, setFuel] = useState(ALL);
  const [transmission, setTransmission] = useState(ALL);
  const [importStatus, setImportStatus] = useState(ALL);
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState<SortKey>("newest");

  const hasActiveFilters =
    make !== ALL ||
    bodyType !== ALL ||
    fuel !== ALL ||
    transmission !== ALL ||
    importStatus !== ALL ||
    maxPrice !== "";

  function clearFilters() {
    setMake(ALL);
    setBodyType(ALL);
    setFuel(ALL);
    setTransmission(ALL);
    setImportStatus(ALL);
    setMaxPrice("");
  }

  const results = useMemo(() => {
    const maxPriceNum = maxPrice ? Number(maxPrice) : null;

    const filtered = vehicles.filter((v) => {
      if (make !== ALL && v.make !== make) return false;
      if (bodyType !== ALL && v.bodyType !== bodyType) return false;
      if (fuel !== ALL && v.fuel !== fuel) return false;
      if (transmission !== ALL && v.transmission !== transmission) return false;
      if (importStatus !== ALL && v.importStatus !== importStatus) return false;
      if (maxPriceNum !== null && v.priceKes > maxPriceNum) return false;
      return true;
    });

    const sorters: Record<SortKey, (a: Vehicle, b: Vehicle) => number> = {
      newest: (a, b) => b.year - a.year,
      "price-asc": (a, b) => a.priceKes - b.priceKes,
      "price-desc": (a, b) => b.priceKes - a.priceKes,
      "mileage-asc": (a, b) => a.mileageKm - b.mileageKm,
    };

    return [...filtered].sort(sorters[sort]);
  }, [make, bodyType, fuel, transmission, importStatus, maxPrice, sort]);

  const selectClasses =
    "w-full rounded border border-border bg-white px-3 py-2.5 text-sm text-text focus:border-cyan focus:outline-none";

  return (
    <div className="container-page py-10 sm:py-14">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wide text-cyanText">
          Inventory
        </p>
        <h1 className="mt-2 font-heading text-3xl font-semibold text-navy sm:text-4xl">
          Find your perfect car
        </h1>
        <p className="mt-2 text-muted">
          Filter what&apos;s available now, or{" "}
          <a href="/request-a-car" className="text-navy underline underline-offset-2 hover:text-cyanText">
            request a vehicle
          </a>{" "}
          if you don&apos;t see the right one.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
        {/* Filters */}
        <aside className="h-fit rounded-lg border border-border bg-white p-5 lg:sticky lg:top-24">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-sm font-semibold text-navy">Filters</h2>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs font-medium text-cyanText hover:underline"
              >
                Clear all
              </button>
            )}
          </div>

          <div className="mt-4 space-y-4">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted">Make</span>
              <select
                className={selectClasses}
                value={make}
                onChange={(e) => setMake(e.target.value)}
              >
                {makes.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted">Body type</span>
              <select
                className={selectClasses}
                value={bodyType}
                onChange={(e) => setBodyType(e.target.value)}
              >
                {bodyTypes.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted">Fuel</span>
              <select
                className={selectClasses}
                value={fuel}
                onChange={(e) => setFuel(e.target.value)}
              >
                {fuels.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted">Transmission</span>
              <select
                className={selectClasses}
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
              >
                {transmissions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted">
                Import status
              </span>
              <select
                className={selectClasses}
                value={importStatus}
                onChange={(e) => setImportStatus(e.target.value)}
              >
                {importStatuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted">
                Max price (KES)
              </span>
              <input
                type="number"
                inputMode="numeric"
                placeholder="No limit"
                className={selectClasses}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                min={0}
              />
            </label>
          </div>
        </aside>

        {/* Results */}
        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted">
              {results.length} {results.length === 1 ? "vehicle" : "vehicles"} found
            </p>
            <label className="flex items-center gap-2 text-sm">
              <span className="text-muted">Sort by</span>
              <select
                className="rounded border border-border bg-white px-3 py-2 text-sm focus:border-cyan focus:outline-none"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
              >
                <option value="newest">Newest first</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="mileage-asc">Lowest mileage</option>
              </select>
            </label>
          </div>

          {results.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border bg-white p-12 text-center">
              <p className="font-heading text-lg font-semibold text-navy">
                No vehicles match those filters
              </p>
              <p className="mt-2 text-sm text-muted">
                Try widening your search, or let us source it for you.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="rounded border border-navy px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white"
                >
                  Clear filters
                </button>
                <a
                  href="/request-a-car"
                  className="rounded bg-red px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Request this vehicle
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((vehicle) => (
                <VehicleCard key={vehicle.slug} vehicle={vehicle} />
              ))}
            </div>
          )}

          <p className="mt-8 text-xs text-muted">
            Sample listings shown for layout. Replace with live inventory
            before launch.
          </p>
        </div>
      </div>
    </div>
  );
}
