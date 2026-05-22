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
            style={{ fontSize: size, width: isSpace ? size * 0.35 : "auto" }}
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
