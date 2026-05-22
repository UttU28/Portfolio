import { useState } from "react";
import { motion } from "framer-motion";
import { CodeTag } from "./CodeTag";
import { NAV_ITEMS, type NavItem } from "@/data/portfolio";
import { CODE_TAGS } from "@/lib/code-tags";

function NavButton({ item }: { item: NavItem }) {
  const [hovered, setHovered] = useState(false);
  const [showHindi, setShowHindi] = useState(false);

  const handleHover = () => {
    setHovered(true);
    setShowHindi(true);
    window.setTimeout(() => setShowHindi(false), 800);
  };

  const baseStyle: React.CSSProperties = hovered
    ? {
        color: item.color,
        textShadow: item.shadowVar,
        boxShadow: item.borderVar,
      }
    : {};

  return (
    <motion.a
      href={item.href}
      target={item.download ? "_blank" : undefined}
      rel={item.download ? "noopener noreferrer" : undefined}
      download={item.download ? "Utsav_Chaudhary_Resume.pdf" : undefined}
      onMouseEnter={handleHover}
      onMouseLeave={() => setHovered(false)}
      onFocus={handleHover}
      onBlur={() => setHovered(false)}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="nav-button inline-flex items-center justify-center"
      style={baseStyle}
      aria-label={item.label}
    >
      {showHindi ? (
        <motion.span
          key="hindi"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="font-hindi text-[22px]"
          style={{ color: item.color }}
        >
          {item.hindi}
        </motion.span>
      ) : (
        <span className="text-[20px] md:text-[24px] tracking-tight">
          {item.label}
        </span>
      )}
    </motion.a>
  );
}

export function NavigationBar() {
  return (
    <header className="fixed top-0 left-0 w-full z-40 pointer-events-none">
      <div className="flex flex-col items-end gap-2 px-6 pt-5 lg:pt-7 lg:pr-12">
        <div className="hidden md:flex w-full justify-end pointer-events-none pr-2">
          <CodeTag
            tag={CODE_TAGS.menu}
            placement="nav"
            rotate={-12}
            withEntrance={false}
          />
        </div>
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pointer-events-auto flex flex-wrap items-center justify-end gap-2 md:gap-3"
        >
          <ul className="flex flex-wrap items-center gap-2 md:gap-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <NavButton item={item} />
              </li>
            ))}
          </ul>
        </motion.nav>
        <div className="hidden md:flex w-full justify-end pointer-events-none pr-2">
          <CodeTag
            tag={CODE_TAGS.menu}
            closing
            placement="nav"
            rotate={-12}
            withEntrance={false}
          />
        </div>
      </div>
    </header>
  );
}
