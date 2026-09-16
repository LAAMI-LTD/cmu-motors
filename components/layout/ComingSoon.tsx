export function ComingSoon({
  title,
  phase,
}: {
  title: string;
  phase: string;
}) {
  return (
    <section className="container-page flex min-h-[50vh] flex-col justify-center gap-3 py-24">
      <p className="text-sm font-medium uppercase tracking-wide text-cyan">
        {phase}
      </p>
      <h1 className="font-heading text-3xl font-semibold sm:text-4xl">
        {title}
      </h1>
      <p className="max-w-lg text-muted">
        This page is scaffolded and routed but not yet built out — it lands
        in a later implementation phase.
      </p>
    </section>
  );
}
