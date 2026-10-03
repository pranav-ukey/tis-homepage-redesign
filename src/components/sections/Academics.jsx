import { motion } from "framer-motion";
import ScrollReveal from "../effects/ScrollReveal";
import { academicsContent } from "../../data/academics";

function Academics() {
  return (
    <section
      id="academics"
      className="bg-[var(--color-bg)] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Content */}
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-primary)]">
                {academicsContent.eyebrow}
              </p>

              <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
                {academicsContent.title}
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-text-muted)]">
                {academicsContent.description}
              </p>

              <a
                href="https://tis.edu.in/academics/affilation/"
                className="mt-8 inline-flex rounded-full border border-[var(--color-primary)] px-6 py-3 text-sm font-medium text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-primary)] hover:text-white"
              >
                Explore Academics
              </a>
            </div>

            {/* Image */}
            <motion.div
              className="relative overflow-hidden rounded-[2rem]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={academicsContent.image}
                alt={academicsContent.imageAlt}
                className="h-[420px] w-full object-cover md:h-[560px]"
              />
            </motion.div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Academics;