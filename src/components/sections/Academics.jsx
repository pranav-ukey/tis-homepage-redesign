import { motion } from "framer-motion";
import ScrollReveal from "../effects/ScrollReveal";
import { academicsContent } from "../../data/academics";

function Academics() {
  return (
    <section id="academics" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Text */}
          <ScrollReveal>
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-primary)]">
                {academicsContent.eyebrow}
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
                {academicsContent.title}
              </h2>

              <p className="mt-7 max-w-lg text-base leading-8 text-[var(--color-text-muted)] md:text-lg">
                {academicsContent.description}
              </p>

              <motion.a
                href="https://tis.edu.in/academics/affilation/"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="mt-9 inline-flex items-center gap-3 rounded-full border border-[var(--color-primary)] px-6 py-3 text-sm font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
              >
                Explore Academics
                <span aria-hidden="true">→</span>
              </motion.a>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -left-4 top-10 hidden h-32 w-px bg-[var(--color-secondary)] lg:block" />

              <motion.div
                className="group relative overflow-hidden rounded-[2rem]"
                whileHover="hover"
              >
                <motion.img
                  src={academicsContent.image}
                  alt={academicsContent.imageAlt}
                  className="h-[420px] w-full object-cover md:h-[520px]"
                  variants={{
                    hover: { scale: 1.04 },
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                <motion.div
                  className="absolute inset-0 bg-black/5"
                  variants={{
                    hover: {
                      backgroundColor: "rgba(0, 0, 0, 0.12)",
                    },
                  }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  className="absolute bottom-6 left-6 rounded-full border border-white/40 bg-black/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md"
                  variants={{
                    hover: { y: -5 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  Curious Minds · Creative Thinkers
                </motion.div>
              </motion.div>

              <div className="mt-4 flex items-center justify-end gap-3 text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                <span className="h-px w-10 bg-[var(--color-secondary)]" />
                TIS Academics
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Academics;