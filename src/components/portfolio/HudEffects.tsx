import { motion } from "framer-motion";

const SHAPES: Array<"bar" | "dot"> = ["bar", "dot", "bar", "dot", "dot"];

export function HudEffects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-row gap-2 z-30 pointer-events-none"
      aria-hidden
    >
      {SHAPES.map((s, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
          className={s === "bar" ? "hud-bar" : "hud-dot"}
        />
      ))}
    </motion.div>
  );
}
