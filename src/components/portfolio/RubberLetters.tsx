import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type RubberLettersProps = {
  text: string;
  className?: string;
  letterClassName?: string;
  size?: number;
  delay?: number;
};

const rubberBand = {
  initial: { scaleX: 1, scaleY: 1 },
  animate: {
    scaleX: [1, 1.2, 0.9, 1.1, 1.1, 1],
    scaleY: [1, 0.75, 1.25, 0.85, 0.95, 1],
    transition: { duration: 0.8, ease: "easeInOut" as const },
  },
};

const enter = {
  hidden: { opacity: 0, y: 24, rotateX: -30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: 0.04 * i, duration: 0.4, ease: "easeOut" as const },
  }),
};

export function RubberLetters({
  text,
  className,
  letterClassName,
  size = 55,
  delay = 0,
}: RubberLettersProps) {
  // Responsive scaling: shrink to ~48% on the smallest phones, grow up to `size`
  // (the original desktop value) on wider viewports. Tweak factors here if a
  // particular line feels too small/large on mobile.
  const minPx = Math.max(20, Math.round(size * 0.48));
  const vwFactor = +(size * 0.05).toFixed(2);
  const offsetPx = Math.round(size * 0.3);
  const fontSize = `clamp(${minPx}px, ${vwFactor}vw + ${offsetPx}px, ${size}px)`;

  return (
    <div
      className={cn("flex flex-wrap", className)}
      style={{ perspective: 600 }}
    >
      {Array.from(text).map((char, i) => {
        const isSpace = char === " ";
        return (
          <motion.span
            key={`${char}-${i}`}
            custom={i + delay}
            variants={enter}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            whileHover="animate"
            className={cn(
              "rubber-letter cursor-default",
              "hover:is-neon",
              letterClassName,
            )}
            style={{ fontSize, width: isSpace ? "0.35em" : "auto" }}
          >
            <motion.span
              variants={rubberBand}
              className="inline-block"
              whileHover={{
                color: "var(--neon-cyan)",
                textShadow: "var(--blue-text-shadow)",
              }}
            >
              {isSpace ? "\u00A0" : char}
            </motion.span>
          </motion.span>
        );
      })}
    </div>
  );
}
