import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/useTheme";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      whileTap={{ scale: 0.9 }}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition-colors duration-300"
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? <FiSun size={17} /> : <FiMoon size={17} />}
      </motion.span>
    </motion.button>
  );
}

export default ThemeSwitcher;