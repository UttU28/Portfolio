import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CodeTag } from "./CodeTag";
import { NAV_ITEMS, SOCIAL_LINKS, type NavItem } from "@/data/portfolio";
import { CODE_TAGS } from "@/lib/code-tags";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";

/**
 * Mobile-only navigation drawer.
 *
 * Renders a hamburger button in the top-right corner on small screens; when
 * opened it slides a panel in from the right containing nav links + social
 * links. Hidden entirely on `md+` viewports where the desktop NavigationBar
 * and SocialNav take over.
 */
function MobileNavLink({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => void;
}) {
  const [showHindi, setShowHindi] = useState(false);

  const handleEnter = () => {
    setShowHindi(true);
    window.setTimeout(() => setShowHindi(false), 900);
  };

  return (
    <motion.a
      href={item.href}
      onClick={(e) => onNavigate(e, item)}
      target={item.download ? "_blank" : undefined}
      rel={item.download ? "noopener noreferrer" : undefined}
      download={item.download ? "Utsav_Chaudhary_Resume.pdf" : undefined}
      onTouchStart={handleEnter}
      onMouseEnter={handleEnter}
      onFocus={handleEnter}
      whileTap={{ scale: 0.97 }}
      className="mobile-drawer__link"
      style={{
        borderColor: item.color,
        color: item.color,
        textShadow: item.shadowVar,
        boxShadow: item.borderVar,
      }}
    >
      <span className="mobile-drawer__link-en font-display">
        {item.label}
      </span>
      <span
        className="mobile-drawer__link-hi font-hindi"
        style={{ opacity: showHindi ? 1 : 0.55 }}
      >
        {item.hindi}
      </span>
    </motion.a>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { lenis, scrollToHash, scrollToTop } = useSmoothScroll();

  // Pause Lenis (and lock body scroll) while the drawer is open
  useEffect(() => {
    if (!lenis) return;
    if (open) lenis.stop();
    else lenis.start();
    return () => {
      lenis.start();
    };
  }, [open, lenis]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Tap on a nav link: download links pass through normally; in-page anchors
  // close the drawer first, then trigger the smooth scroll once Lenis has
  // resumed (otherwise the SmoothScrollProvider's capture handler fires while
  // Lenis is still stopped and the scroll is dropped).
  const handleNavigate = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
      if (item.download) {
        setOpen(false);
        return;
      }
      e.preventDefault();
      setOpen(false);
      const href = item.href;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToHash(href);
        });
      });
    },
    [scrollToHash],
  );

  return (
    <div className="md:hidden">
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        whileTap={{ scale: 0.92 }}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        className="mobile-drawer__toggle"
        aria-controls="mobile-drawer"
      >
        <motion.span
          key={open ? "x" : "menu"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid place-items-center"
        >
          {open ? (
            <X className="w-6 h-6" strokeWidth={2.5} />
          ) : (
            <Menu className="w-6 h-6" strokeWidth={2.5} />
          )}
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              tabIndex={-1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setOpen(false)}
              className="mobile-drawer__backdrop"
            />

            <motion.aside
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 240, damping: 30 }}
              className="mobile-drawer"
            >
              <div className="mobile-drawer__inner">
                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06, duration: 0.35, ease: "easeOut" }}
                  onClick={() => {
                    setOpen(false);
                    scrollToTop();
                  }}
                  className="mobile-drawer__brand"
                >
                  Utsav Chaudhary
                </motion.button>

                <div className="mobile-drawer__group">
                  <CodeTag
                    tag={CODE_TAGS.menu}
                    placement="content"
                    rotate={-6}
                    withEntrance={false}
                    className="self-start"
                  />
                  <ul className="mobile-drawer__list">
                    {NAV_ITEMS.map((item, i) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.12 + i * 0.05,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <MobileNavLink
                          item={item}
                          onNavigate={handleNavigate}
                        />
                      </motion.li>
                    ))}
                  </ul>
                  <CodeTag
                    tag={CODE_TAGS.menu}
                    closing
                    placement="content"
                    rotate={-6}
                    withEntrance={false}
                    className="self-end"
                  />
                </div>

                <div className="mobile-drawer__group">
                  <CodeTag
                    tag={CODE_TAGS.social}
                    placement="content"
                    rotate={-6}
                    withEntrance={false}
                    className="self-start"
                  />
                  <ul className="mobile-drawer__socials">
                    {SOCIAL_LINKS.map((s, i) => (
                      <motion.li
                        key={s.id}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.35 + i * 0.05,
                          duration: 0.3,
                          ease: "easeOut",
                        }}
                      >
                        <motion.a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          onClick={() => setOpen(false)}
                          whileTap={{ scale: 0.9 }}
                          className="social-button"
                        >
                          <s.Icon aria-hidden />
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                  <CodeTag
                    tag={CODE_TAGS.social}
                    closing
                    placement="content"
                    rotate={-6}
                    withEntrance={false}
                    className="self-end"
                  />
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
