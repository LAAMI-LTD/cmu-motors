const pillars = [
  {
    n: "01",
    title: "Quality vehicles",
    copy: "Every vehicle is carefully sourced and checked before it reaches you, local or imported.",
  },
  {
    n: "02",
    title: "Trusted sourcing",
    copy: "We help you find the right vehicle, not just the one that's easiest to sell.",
  },
  {
    n: "03",
    title: "Import expertise",
    copy: "Direct access to foreign-used vehicles, handled end-to-end, not brokered blind.",
  },
  {
    n: "04",
    title: "Professional service",
    copy: "Ongoing maintenance and servicing, so the relationship doesn't end at the sale.",
  },
  {
    n: "05",
    title: "Customer first",
    copy: "Guidance from selection through ownership, from people who know cars.",
  },
];

export function WhySimiyu() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <p className="text-sm font-medium uppercase tracking-wide text-cyanText">
          Why Simiyu Motors
        </p>
        <h2 className="mt-2 max-w-xl font-heading text-3xl font-semibold text-navy sm:text-4xl">
          A serious automotive partner, not another listings page.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar) => (
            <div key={pillar.n}>
              <span className="font-heading text-sm font-semibold text-cyanText">
                {pillar.n}
              </span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-navy">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pillar.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
