import { motion } from "framer-motion";

function CampusVideo() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[70vh] min-h-[520px] w-full">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://tis.edu.in/_next/static/media/schoolTopView.6e263e02.webp"
        >
          {/* Mobile video */}
          <source
            src="https://assets.tulas.edu.in/Mobile_TIS.mp4"
            type="video/mp4"
            media="(max-width: 767px)"
          />

          {/* Desktop / tablet video */}
          <source
            src="https://assets.tulas.edu.in/Desktop_TIS.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-end px-6 pb-12 md:pb-16 lg:px-12 lg:pb-20">
          <div className="max-w-3xl text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/75"
            >
              Tulas International School
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
            >
              Experience Tulas.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-xl text-base leading-7 text-white/80 md:text-lg"
            >
              A campus designed for learning, exploration and growth.
            </motion.p>

            <motion.a
              href="https://tis.edu.in/boarding-life/facilities/"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium backdrop-blur-md transition-colors hover:bg-white hover:text-black"
            >
              Explore Campus
              <span aria-hidden="true">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampusVideo;