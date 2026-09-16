import Link from "next/link";

const steps = [
  { n: "1", title: "Tell us what you want", copy: "Make, model, budget, timeline." },
  { n: "2", title: "We source & verify", copy: "Vehicles are found, inspected, and confirmed." },
  { n: "3", title: "We deliver", copy: "Shipping, clearance, and handover, managed for you." },
];

export function ImportTeaser() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[40%] lg:block"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, transparent 55%, rgba(1,156,227,0.10) 55%, rgba(1,156,227,0.10) 58%, transparent 58%)",
        }}
      />
      <div className="container-page relative grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-cyan">
            Vehicle importation
          </p>
          <h2 className="mt-2 font-heading text-3xl font-semibold sm:text-4xl">
            Can&apos;t find it locally? We&apos;ll import it.
          </h2>
          <p className="mt-4 max-w-md text-white/70">
            Direct access to foreign-used vehicles, sourced and verified
            against your exact specification, not whatever happens to be on
            the lot.
          </p>
          <Link
            href="/import"
            className="mt-6 inline-flex rounded bg-red px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Start your import request
          </Link>
        </div>

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-4">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-lg border border-white/10 bg-white/5 p-5"
            >
              <span className="font-heading text-2xl font-semibold text-cyan">
                {step.n}
              </span>
              <h3 className="mt-3 font-heading text-base font-semibold">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm text-white/60">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
