const steps = [
  { n: "1", title: "Browse or request", copy: "Pick from inventory, or tell us what you're after." },
  { n: "2", title: "Inspect & confirm", copy: "We verify the vehicle and walk you through it." },
  { n: "3", title: "Buy with confidence", copy: "Clear pricing, no surprises at handover." },
  { n: "4", title: "Drive away", copy: "Plus ongoing servicing whenever you need it." },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <p className="text-sm font-medium uppercase tracking-wide text-cyanText">
          How it works
        </p>
        <h2 className="mt-2 font-heading text-3xl font-semibold text-navy sm:text-4xl">
          From first message to driving away.
        </h2>

        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.n} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-heading text-2xl font-semibold text-navy">
                  {step.n}
                </span>
                {i < steps.length - 1 && (
                  <span
                    className="hidden h-px flex-1 bg-border sm:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="mt-3 font-heading text-base font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {step.copy}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
