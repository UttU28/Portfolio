import { motion } from "framer-motion";
import { CodeTag } from "./CodeTag";
import { SOCIAL_LINKS } from "@/data/portfolio";
import { CODE_TAGS } from "@/lib/code-tags";

export function SocialNav() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      className="social-nav fixed bottom-4 md:bottom-6 z-40 pointer-events-auto hidden md:block"
      style={{ left: "var(--social-nav-left)" }}
    >
      <CodeTag
        tag={CODE_TAGS.social}
        placement="sidebar"
        rotate={-12}
        withEntrance={false}
        className="mb-2"
      />
      <ul className="social-nav__list">
        {SOCIAL_LINKS.map((s, i) => (
          <motion.li
            key={s.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
            className="social-nav__item"
          >
            <div className="social-nav__block">
              <motion.a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="social-button animate-flicker"
                whileHover={{ scale: 1.1, rotate: -6 }}
                whileTap={{ scale: 0.9 }}
              >
                <s.Icon className="social-button__icon" aria-hidden />
              </motion.a>
            </div>
            <span className="social-nav__text" aria-hidden>
              {s.label}
            </span>
          </motion.li>
        ))}
      </ul>
      <CodeTag
        tag={CODE_TAGS.social}
        closing
        placement="sidebar"
        rotate={-12}
        withEntrance={false}
        className="mt-2"
      />
    </motion.aside>
  );
}
