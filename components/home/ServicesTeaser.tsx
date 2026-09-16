import Link from "next/link";
import { services } from "@/data/services";

export function ServicesTeaser() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-cyanText">
              Servicing & maintenance
            </p>
            <h2 className="mt-2 max-w-lg font-heading text-3xl font-semibold text-navy sm:text-4xl">
              Already own a car? We maintain those too.
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex rounded border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Book a service
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.name} className="bg-white p-6">
              <h3 className="font-heading text-base font-semibold text-navy">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
