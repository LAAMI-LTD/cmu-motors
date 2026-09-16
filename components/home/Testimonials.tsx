import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container-page">
        <p className="text-sm font-medium uppercase tracking-wide text-cyanText">
          Customer stories
        </p>
        <h2 className="mt-2 font-heading text-3xl font-semibold text-navy sm:text-4xl">
          What customers say
        </h2>

        {testimonials.length === 0 ? (
          <div className="mt-10 rounded-lg border border-dashed border-border bg-white p-10 text-center">
            <p className="text-sm text-muted">
              Customer reviews will appear here once submitted. This section
              stays empty rather than showing invented quotes.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="rounded-lg border border-border bg-white p-6"
              >
                <p className="text-sm leading-relaxed text-text">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-semibold text-navy">
                  {t.author}
                  {t.vehicle && (
                    <span className="font-normal text-muted"> · {t.vehicle}</span>
                  )}
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
