import { motion } from "framer-motion";
import ScrollReveal from "../effects/ScrollReveal";

function About() {
  return (
    <section
      id="about"
      className="px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* Content */}
            <div className="relative z-10">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-primary)]">
                About TIS
              </p>

              <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
                We feel supported in what we do and nudged further to do more.
              </h2>

              <div className="mt-8 max-w-xl">
                <p className="text-lg leading-8 text-[var(--color-text-muted)]">
                  At Tulas, we believe in bringing out the best in every
                  student—whether it&apos;s academics, music, art, or drama.
                  With the right support and inspiration, creativity finds its
                  way.
                </p>

                <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
                  For us, school isn&apos;t just about lessons, it&apos;s about
                  endless opportunities waiting to be explored.
                </p>
              </div>

              <motion.a
                href="https://tis.edu.in/about-tis/"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="mt-9 inline-flex rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-medium text-[var(--color-bg)]"
              >
                Explore TIS
              </motion.a>
            </div>

            {/* Campus image */}
            <motion.div
              className="group relative"
              whileHover="hover"
            >
              <div className="relative overflow-hidden rounded-[2rem]">
                <motion.img
                  src="https://tis.edu.in/_next/static/media/schoolTopView.6e263e02.webp"
                  alt="Aerial view of Tulas International School campus"
                  className="h-[420px] w-full object-cover md:h-[560px]"
                  variants={{
                    hover: { scale: 1.04 },
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                <motion.div
                  className="absolute inset-0 bg-black/0"
                  variants={{
                    hover: { backgroundColor: "rgba(0, 0, 0, 0.08)" },
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <motion.div
                className="absolute -bottom-5 -left-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-4 shadow-[var(--shadow-soft)]"
                variants={{
                  hover: { y: -6 },
                }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-2xl font-semibold text-[var(--color-text)]">
                  22
                </p>
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                  Acre Campus
                </p>
              </motion.div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default About;