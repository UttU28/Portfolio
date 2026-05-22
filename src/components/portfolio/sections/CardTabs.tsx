import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { CardEntry } from "@/data/portfolio";
import { ProjectLinks } from "./ProjectLinks";

type CardTabsProps = {
  entries: CardEntry[];
  accentColor?: string;
};

function accentGlowFor(color: string): string {
  const key = color.toUpperCase();
  if (key === "#FFE700") return "var(--yellow-border)";
  if (key === "#74EE15") return "var(--green-border)";
  if (key === "#F000FF") return "var(--pink-border)";
  if (key === "#FF7700") return "var(--orange-border)";
  return "var(--blue-border)";
}

export function CardTabs({ entries, accentColor = "#1fffff" }: CardTabsProps) {
  const [active, setActive] = useState(0);
  const entry = entries[active];

  const accentStyle = {
    "--card-accent": accentColor,
    "--card-glow": accentGlowFor(accentColor),
  } as React.CSSProperties;

  return (
    <div
      className="card-tabs w-full flex flex-col gap-3"
      style={accentStyle}
    >
      <nav
        className="card-tabs__selector flex flex-wrap gap-2"
        aria-label="Select entry"
      >
        {entries.map((item, i) => {
          const isActive = i === active;
          return (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "card-tabs__tab shrink-0 grid place-items-center font-display text-lg font-extrabold rounded-md transition-all neon-panel",
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
      </nav>

      <article
        className="card-tabs__panel neon-panel p-3 sm:p-4 md:p-6"
        style={{ borderColor: accentColor }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={entry.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="card-tabs__detail flex flex-col gap-3 sm:gap-4 md:gap-[1.25rem]"
          >
            <header className="card-tabs__header">
              <h3 className="portfolio-heading text-left text-xl sm:text-2xl md:text-3xl break-words">
                {entry.title}
              </h3>
              <div
                className="card-tabs__meta font-hand text-xs sm:text-sm md:text-base tracking-wide text-left py-2 border-y break-words"
                style={{ borderColor: accentColor, color: accentColor }}
              >
                {entry.meta}
              </div>
            </header>

            {entry.image ? (
              <div className="card-tabs__body card-tabs__body--with-media">
                <figure
                  className="card-tabs__figure"
                  style={{ borderColor: accentColor }}
                >
                  <img
                    src={entry.image}
                    alt={entry.imageAlt ?? ""}
                    className="card-tabs__img"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption
                    className="card-tabs__caption font-hand text-xs tracking-wider"
                    style={{ color: accentColor }}
                  >
                    preview
                  </figcaption>
                </figure>
                <p className="card-tabs__text portfolio-body text-left max-w-none">
                  {entry.body}
                </p>
                {entry.links ? (
                  <ProjectLinks
                    links={entry.links}
                    accentColor={accentColor}
                    className="card-tabs__links--wrap"
                  />
                ) : null}
              </div>
            ) : (
              <div className="card-tabs__content">
                <p className="portfolio-body text-left max-w-none">
                  {entry.body}
                </p>
                {entry.links ? (
                  <ProjectLinks
                    links={entry.links}
                    accentColor={accentColor}
                  />
                ) : null}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </article>
    </div>
  );
}
