import { stats } from "@/data/stats";
import { cn } from "@/lib/utils";

export function StatsBand() {
  return (
    <section className="bg-navy py-16 text-white sm:py-20">
      <div className="container-page grid grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p
              className={cn(
                "font-heading text-3xl font-semibold sm:text-4xl",
                stat.isPlaceholder ? "text-cyan/50" : "text-cyan"
              )}
            >
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
