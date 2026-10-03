function Footer() {
  return (
    <footer className="bg-[#101814] px-6 py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <p className="text-2xl font-semibold">TIS</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
              Tulas International School
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white/50">
              Explore
            </p>

            <div className="flex flex-col gap-3 text-sm text-white/75">
              <a href="#about" className="transition-colors hover:text-white">
                About
              </a>
              <a href="#academics" className="transition-colors hover:text-white">
                Academics
              </a>
              <a
                href="#beyond-academics"
                className="transition-colors hover:text-white"
              >
                Beyond Academics
              </a>
              <a href="#admissions" className="transition-colors hover:text-white">
                Admissions
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white/50">
              Admissions
            </p>

            <p className="text-sm leading-6 text-white/75">
              Admissions Helpline
            </p>

            <a
              href="tel:+919837983791"
              className="mt-2 inline-block text-lg transition-opacity hover:opacity-70"
            >
              +91-9837983791
            </a>
          </div>

          {/* CTA */}
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white/50">
              Start your journey
            </p>

            <a
              href="https://tis.edu.in/contact-us/"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:-translate-y-1"
            >
              Enquire Now
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-white/15 pt-6 text-sm text-white/40">
          © {new Date().getFullYear()} Tulas International School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;