import { useState } from "react";
import { navigationItems } from "../../data/navigation";
import ThemeSwitcher from "../ui/ThemeSwitcher";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-md">
      {/* Top bar */}
      <div className="border-b border-[var(--color-border)]">
        <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-6">
          {/* Logo */}
          <a
            href="/"
            aria-label="Tulas International School home"
            className="flex items-center"
          >
            <img
              src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
              alt="Tulas International School"
              className="h-16 w-16 object-contain"
            />
          </a>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeSwitcher />

            <a
              href="https://tis.edu.in/admission-procedure/"
              className="rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)]"
            >
              Apply Now
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] lg:hidden"
            >
              <span
                className={`absolute h-px w-4 bg-[var(--color-text)] transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45" : "-translate-y-[3px]"
                }`}
              />

              <span
                className={`absolute h-px w-4 bg-[var(--color-text)] transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute h-px w-4 bg-[var(--color-text)] transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45" : "translate-y-[3px]"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="hidden lg:block">
        <div className="mx-auto flex h-11 max-w-[1500px] items-center justify-center px-6">
          <nav className="flex items-center gap-7">
            {navigationItems.map((item) => (
              <div key={item.label} className="group relative">
                {item.children ? (
                  <button
                    type="button"
                    className="flex items-center gap-1 whitespace-nowrap text-[12px] font-medium text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-primary)]"
                  >
                    {item.label}

                    <span className="text-[10px] opacity-60 transition-transform duration-200 group-hover:rotate-180">
                      ↓
                    </span>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="whitespace-nowrap text-[13px] font-medium text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-primary)]"
                  >
                    {item.label}
                  </a>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div className={`invisible absolute top-full w-72 translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                      item.label === "About TIS"
                        ? "left-0"
                        : item.label === "Quick Links"
                          ? "right-0"
                          : "left-1/2 -translate-x-1/2"
                      }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/95 p-2 shadow-[var(--shadow-soft)] backdrop-blur-xl">
                      <div className="px-4 pb-2 pt-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                          {item.label}
                        </p>
                      </div>

                      <div className="space-y-1">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="group/link flex items-center justify-between rounded-xl px-4 py-3 text-sm text-[var(--color-text)] transition-all duration-200 hover:bg-[var(--color-surface-muted)] hover:pl-5 hover:text-[var(--color-primary)]"
                          >
                            <span>{child.label}</span>

                            <span className="translate-x-[-4px] opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100">
                              →
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile navigation - temporary */}
      {isMenuOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-6 lg :hidden">
          <nav className="flex flex-col">
            {navigationItems.map((item) => {
              const isOpen = openMobileMenu === item.label;

              return (
                <div
                  key={item.label}
                  className="border-b border-[var(--color-border)]"
                >
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileMenu(isOpen ? null : item.label)
                        }
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-[var(--color-text)]"
                      >
                        <span>{item.label}</span>

                        <span
                          className={`text-xs transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          ↓
                        </span>
                      </button>

                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="pb-3 pl-4">
                            {item.children.map((child) => (
                              <a
                                key={child.label}
                                href={child.href}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setOpenMobileMenu(null);
                                }}
                                className="block py-3 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                              >
                                {child.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-4 text-sm font-medium text-[var(--color-text)]"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              );
            })}

            <a
              href="https://tis.edu.in/admission-procedure/"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 rounded-full bg-[var(--color-primary)] px-6 py-3 text-center text-sm font-medium text-white"
            >
              Apply Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;