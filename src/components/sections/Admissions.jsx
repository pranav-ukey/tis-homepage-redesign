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
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--color-primary)] px-8 py-16 text-[var(--color-bg)] md:px-16 md:py-24">
            <div className="relative z-10 max-w-3xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-bg)]/70">
                {admissionsContent.eyebrow}
              </p>

              <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
                {admissionsContent.title}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-bg)]/75">
                {admissionsContent.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <motion.a
                  href="https://tis.edu.in/contact-us/"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full bg-[var(--color-bg)] px-7 py-3.5 text-sm font-medium text-[var(--color-primary)]"
                >
                  {admissionsContent.primaryAction}
                </motion.a>

                <motion.a
                  href="https://tis.edu.in/admission-procedure/"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full border border-[var(--color-bg)]/40 px-7 py-3.5 text-sm font-medium text-white"
                >
                  {admissionsContent.secondaryAction}
                </motion.a>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10 md:h-96 md:w-96" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Admissions;