import ScrollReveal from "../effects/ScrollReveal";
import { stats } from "../../data/stats";

function Stats() {
  return (
    <section className="bg-[var(--color-primary)] px-6 py-20 text-[var(--color-bg)] md:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l border-[var(--color-bg)]/30 pl-6"
              >
                <p className="text-5xl font-semibold tracking-tight md:text-6xl">
                  {stat.value}
                </p>

                <p className="mt-3 max-w-[180px] text-sm leading-6 text-[var(--color-bg)]/75">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Stats;