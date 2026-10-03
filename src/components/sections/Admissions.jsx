import { motion } from "framer-motion";
import ScrollReveal from "../effects/ScrollReveal";
import { admissionsContent } from "../../data/admissions";

function Admissions() {
  return (
    <section
      id="admissions"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="grid overflow-hidden rounded-[2rem] bg-[var(--color-surface-muted)] lg:grid-cols-[0.95fr_1.05fr]">
            {/* Image */}
            <motion.div
              className="group relative min-h-[420px] overflow-hidden lg:min-h-[620px]"
              whileHover="hover"
            >
              <motion.img
                src="https://tis.edu.in/_next/static/media/Image%201.0a814859.webp"
                alt="Student participating in a sporting activity at Tulas International School"
                className="absolute inset-0 h-full w-full object-cover"
                variants={{
                  hover: {
                    scale: 1.08,
                  },
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <motion.div
                className="absolute inset-0 bg-black/10"
                variants={{
                  hover: {
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                  },
                }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className="absolute bottom-6 left-6 rounded-full border border-white/40 bg-black/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm"
                variants={{
                  hover: {
                    y: -6,
                  },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                Tulas International School
              </motion.div>
            </motion.div>

            {/* Content */}
            <div className="relative flex flex-col justify-center px-8 py-16 md:px-14 md:py-20 lg:px-16">
              <div className="relative z-10">
                <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-text-muted)]">
                  {admissionsContent.eyebrow}
                </p>

                <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--color-text)] md:text-5xl lg:text-6xl">
                  {admissionsContent.title}
                </h2>

                <p className="mt-7 max-w-xl text-base leading-8 text-[var(--color-text-muted)] md:text-lg">
                  {admissionsContent.description}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <motion.a
                    href="https://tis.edu.in/contact-us/"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-full bg-[var(--color-text)] px-7 py-3.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-85"
                  >
                    {admissionsContent.primaryAction}
                  </motion.a>

                  <motion.a
                    href="https://tis.edu.in/admission-procedure/"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-full border border-[var(--color-text)]/25 px-7 py-3.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-text)] hover:text-[var(--color-bg)]"
                  >
                    {admissionsContent.secondaryAction}
                  </motion.a>
                </div>
              </div>

              {/* Decorative detail */}
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full border border-[var(--color-text)]/10 md:h-80 md:w-80" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Admissions;