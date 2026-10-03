import ScrollReveal from "../effects/ScrollReveal";

function About() {
  return (
    <section
      id="about"
      className="bg-[var(--color-surface-muted)] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* Content */}
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-primary)]">
                About TIS
              </p>

              <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-6xl">
                We feel supported in what we do and nudged further to do more.
              </h2>

              <div className="mt-8">
                <p className="max-w-xl text-lg leading-8 text-[var(--color-text-muted)]">
                  At Tulas, we believe in bringing out the best in every
                  student—whether it&apos;s academics, music, art, or drama.
                  With the right support and inspiration, creativity finds its
                  way.
                </p>

                <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-text-muted)]">
                  For us, school isn&apos;t just about lessons, it&apos;s about
                  endless opportunities waiting to be explored.
                </p>
              </div>
            </div>

            {/* Campus image */}
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src="https://tis.edu.in/_next/static/media/schoolTopView.6e263e02.webp"
                alt="Aerial view of Tulas International School campus"
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default About;