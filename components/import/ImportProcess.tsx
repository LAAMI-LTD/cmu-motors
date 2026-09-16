const steps = [
  { n: "1", title: "Tell us what you want", copy: "Make, model, budget, and timeline." },
  { n: "2", title: "Vehicle sourcing", copy: "We find matching vehicles from our network abroad." },
  { n: "3", title: "Inspection & verification", copy: "Every candidate vehicle is checked before purchase." },
  { n: "4", title: "Purchase", copy: "We buy on your behalf once you approve the vehicle." },
  { n: "5", title: "Shipping", copy: "The vehicle is shipped to Kenya." },
  { n: "6", title: "Customs & clearance", copy: "We handle documentation and clearance." },
  { n: "7", title: "Delivery", copy: "Your vehicle is delivered, ready to drive." },
];

export function ImportProcess() {
  return (
    <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step) => (
        <li key={step.n} className="rounded-lg border border-border bg-white p-5">
          <span className="font-heading text-2xl font-semibold text-cyan">
            {step.n}
          </span>
          <h3 className="mt-3 font-heading text-base font-semibold text-navy">
            {step.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {step.copy}
          </p>
        </li>
      ))}
    </ol>
  );
}
