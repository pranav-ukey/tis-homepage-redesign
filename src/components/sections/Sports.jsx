import { motion } from "framer-motion";
import ScrollReveal from "../effects/ScrollReveal";
import { sportsContent } from "../../data/sports";

function Sports() {
  return (
    <section
      id="beyond-academics"
      className="overflow-hidden bg-[var(--color-surface-muted)] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-primary)]">
                {sportsContent.eyebrow}
              </p>

              <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
                Sports are not just a facility.
                <span className="block text-[var(--color-primary)]">
                  They are the foundation.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
                {sportsContent.description}
              </p>
            </div>

            <div className="shrink-0">
              <p className="text-7xl font-semibold tracking-tight md:text-9xl">
                16<span className="text-[var(--color-primary)]">+</span>
              </p>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                Sports
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {sportsContent.images.map((sport, index) => (
            <ScrollReveal key={sport.id}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-[1.5rem] ${
                  index === 0
                    ? "md:col-span-2 md:row-span-2"
                    : index === 5 || index === 10
                      ? "md:col-span-2"
                      : ""
                }`}
              >
                <div
                  className={`relative ${
                    index === 0
                      ? "h-[420px] md:h-full"
                      : "h-[220px] md:h-[260px]"
                  }`}
                >
                  <img
                    src={sport.src}
                    alt={sport.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-0 p-5 md:p-6">
                    <p className="text-lg font-medium text-white md:text-xl">
                      {sport.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sports;