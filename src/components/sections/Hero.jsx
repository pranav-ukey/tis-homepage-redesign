import { motion } from "framer-motion";
import { heroImages } from "../../data/hero";

function Hero() {
  const [science, shooting, pottery] = heroImages;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--color-bg)]">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-6 py-32 lg:grid-cols-2">
        
        {/* Hero content */}
        <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-primary)]">
                Tulas International School
            </p>

            <h1 className="max-w-3xl text-6xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                Let&apos;s Do
                <span className="block font-serif italic text-[var(--color-primary)]">
                it
                </span>
                <span className="block">With Tulas</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-text-muted)]">
                At Tulas, we believe in bringing out the best in every student
                through academics, creativity, sports, and endless opportunities
                to explore.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                href="https://tis.edu.in/admission-procedure/"
                className="rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-medium text-[var(--color-bg)] transition-transform duration-300 hover:-translate-y-1"
                >
                Apply Now
                </a>

                <a
                href="#about"
                className="rounded-full border border-[var(--color-primary)] px-7 py-3.5 text-sm font-medium text-[var(--color-primary)] transition-colors duration-300 hover:bg-[var(--color-primary)] hover:text-white"
                >
                Explore TIS
                </a>
            </div>
        </motion.div>
        {/* Hero visual */}
        <div className="relative h-[560px] w-full lg:h-[650px]">

        {/* Primary — Science */}
        <motion.img
            src={science.src}
            alt={science.alt}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 z-20 w-[68%] max-w-[460px] -translate-x-1/2 -translate-y-1/2 object-contain"
        />

        {/* Secondary — Shooting */}
        <motion.img
            src={shooting.src}
            alt={shooting.alt}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="absolute right-[2%] top-[4%] z-30 w-[28%] max-w-[190px] object-contain"
        />

        {/* Secondary — Pottery */}
        <motion.img
            src={pottery.src}
            alt={pottery.alt}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="absolute bottom-[10%] left-[-2%] z-30 w-[32%] max-w-[220px] object-contain"
        />

        </div>
      </div>
    </section>
  );
}

export default Hero;