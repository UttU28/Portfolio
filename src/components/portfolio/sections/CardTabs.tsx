import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { CardEntry } from "@/data/portfolio";

type CardTabsProps = {
  entries: CardEntry[];
  accentColor?: string;
};

export function CardTabs({ entries, accentColor = "#1fffff" }: CardTabsProps) {
  const [active, setActive] = useState(0);
  const entry = entries[active];

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex md:flex-col gap-2 md:min-w-[64px] overflow-x-auto md:overflow-visible">
        {entries.map((_, i) => {
          const isActive = i === active;
          return (
            <motion.button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "shrink-0 grid place-items-center font-display text-lg font-extrabold rounded-md transition-all px-3 py-3 md:w-[60px] md:h-[60px] neon-panel",
              )}
              style={
                isActive
                  ? {
                      backgroundColor: accentColor,
                      color: "#000",
                    }
                  : { color: accentColor, borderColor: accentColor }
              }
              aria-pressed={isActive}
              aria-label={`Show entry ${i + 1}`}
            >
              {String(i).padStart(2, "0")}
            </motion.button>
          );
        })}
      </div>

      <div className="flex-1 min-w-0">
        <AnimatePresence mode="wait">
          <motion.article
            key={entry.title}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="neon-panel p-5 md:p-6 space-y-3"
            style={{ borderColor: accentColor }}
          >
            <h3 className="portfolio-heading text-left text-2xl md:text-3xl">
              {entry.title}
            </h3>
            <div
              className="font-hand text-sm md:text-base tracking-wide text-left py-2 border-y"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              {entry.meta}
            </div>
            <p className="portfolio-body text-left max-w-none">
              {entry.body}
            </p>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
