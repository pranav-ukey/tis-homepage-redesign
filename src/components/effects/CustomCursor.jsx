import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleMouseOver = (event) => {
      const interactiveElement = event.target.closest("a, button");

      setIsHovering(Boolean(interactiveElement));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-4 w-4 rounded-full border-2 border-[var(--color-primary)] md:block"
      animate={{
        x: position.x - (isHovering ? 20 : 8),
        y: position.y - (isHovering ? 20 : 8),
        width: isHovering ? 40 : 16,
        height: isHovering ? 40 : 16,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 0.3,
      }}
    />
  );
}

export default CustomCursor;