import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { ServiceBookingForm } from "@/components/forms/ServiceBookingForm";

export const metadata: Metadata = buildMetadata({
  title: "Vehicle Servicing & Maintenance",
  description:
    "Professional vehicle servicing, diagnostics, inspection, and preventive maintenance in Nairobi, Kenya.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="container-page">
          <p className="text-sm font-medium uppercase tracking-wide text-cyan">
            Servicing & maintenance
          </p>
          <h1 className="mt-2 max-w-2xl font-heading text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Professional care for the vehicle you already have.
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            Whether you bought from us or not, our workshop keeps your
            vehicle running the way it should.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col rounded-lg border border-border bg-white p-6"
              >
                <h2 className="font-heading text-lg font-semibold text-navy">
                  {service.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <a
                  href="#book"
                  className="mt-4 text-sm font-semibold text-navy hover:text-cyanText"
                >
                  Book a service →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="scroll-mt-20 bg-white py-16 sm:py-20">
        <div className="container-page max-w-2xl">
          <h2 className="font-heading text-2xl font-semibold text-navy sm:text-3xl">
            Book a service
          </h2>
          <p className="mt-2 text-muted">
            Tell us about your vehicle and preferred date, and we&apos;ll
            confirm your appointment.
          </p>
          <div className="mt-8 rounded-lg border border-border bg-background p-6 sm:p-8">
            <ServiceBookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
