import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { NestedSection } from "../NestedSection";
import { RubberLetters } from "../RubberLetters";
import {
  CERTIFICATION_BADGES,
  CERTIFICATION_ENTRIES,
  CERTIFICATIONS_ACCENT,
} from "@/data/portfolio";
import { CODE_TAGS } from "@/lib/code-tags";

export function CertificationsSection() {
  return (
    <NestedSection
      id="certifications"
      sectionTag={CODE_TAGS.title}
      innerTag={CODE_TAGS.certifications}
      header={
        <RubberLetters
          text="03. CERTIFICATIONS"
          size={56}
          className="code-nest__heading"
        />
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="certifications"
      >
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="certifications__card neon-panel p-4 sm:p-5 md:p-6"
          style={{
            borderColor: CERTIFICATIONS_ACCENT,
            boxShadow: "var(--blue-border)",
          }}
        >
          <ul
            className="certifications__badges"
            aria-label="Certification badges"
          >
            {CERTIFICATION_BADGES.map((badge) => (
              <li key={badge.alt}>
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className="certifications__badge-img"
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>

          <div className="certifications__entries">
            {CERTIFICATION_ENTRIES.map((entry, i) => (
              <div
                key={entry.id}
                className="certifications__entry"
                data-first={i === 0 ? "" : undefined}
              >
                <h3 className="portfolio-heading text-left text-xl sm:text-2xl md:text-3xl">
                  <motion.a
                    href={entry.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="certifications__title-link"
                    aria-label={`${entry.title} — ${entry.credentialLabel}`}
                    style={
                      {
                        "--cert-accent": CERTIFICATIONS_ACCENT,
                      } as React.CSSProperties
                    }
                  >
                    {entry.title}
                    <ExternalLink
                      className="certifications__title-link-icon"
                      aria-hidden
                    />
                  </motion.a>
                </h3>

                {entry.lines.length > 0 ? (
                  <ul className="certifications__lines portfolio-body text-left space-y-1 mt-2">
                    {entry.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </motion.article>
      </motion.div>
    </NestedSection>
  );
}
