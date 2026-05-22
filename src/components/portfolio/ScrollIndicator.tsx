import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";
import {
  SudarshanChakraInner,
  SudarshanChakraOuter,
} from "./SudarshanChakra";

/** Degrees of rotation per pixel scrolled — tune for how fast the wheel “fills” */
const SCROLL_ROTATE_RATIO = 6;

export function ScrollIndicator() {
  const { scrollToTop } = useSmoothScroll();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const scrollRotation = useMotionValue(0);
  const smoothScrollRotate = useSpring(scrollRotation, {
    stiffness: 90,
    damping: 24,
  });

  /** Inner ring drifts opposite on scroll for depth */
  const scrollRotationInner = useTransform(
    scrollY,
    (v) => -v / (SCROLL_ROTATE_RATIO * 1.15),
  );
  const smoothScrollRotateInner = useSpring(scrollRotationInner, {
    stiffness: 90,
    damping: 24,
  });

  useEffect(() => {
    const sync = (v: number) => {
      setVisible(v > 180);
      scrollRotation.set(v / SCROLL_ROTATE_RATIO);
    };
    sync(scrollY.get());
    return scrollY.on("change", sync);
  }, [scrollY, scrollRotation]);

  const spinOuter = hovered ? 18 : 36;
  const spinInner = hovered ? 24 : 48;

  return (
    <motion.div
      className="scroll-widget"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.85,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <motion.button
        type="button"
        className="scroll-widget__hit"
        onClick={() => scrollToTop()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        aria-label="Scroll to top"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
      >
        <div className="scroll-widget__inner">
          {/* Scroll-driven rotation + continuous mandala spin */}
          <motion.div
            className="scroll-widget__scroll-drive"
            style={{ rotate: smoothScrollRotate }}
            aria-hidden
          >
            <svg viewBox="0 0 240 240" className="scroll-widget__svg scroll-widget__aura-svg">
              <circle cx={120} cy={120} r={104} className="scroll-widget__aura" />
            </svg>

            <motion.div
              className="scroll-widget__chakra-layer scroll-widget__chakra-layer--outer"
              animate={{ rotate: 360 }}
              transition={{
                duration: spinOuter,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <SudarshanChakraOuter />
            </motion.div>
          </motion.div>

          <motion.div
            className="scroll-widget__scroll-drive scroll-widget__scroll-drive--inner"
            style={{ rotate: smoothScrollRotateInner }}
            aria-hidden
          >
            <motion.div
              className="scroll-widget__chakra-layer scroll-widget__chakra-layer--inner"
              animate={{ rotate: -360 }}
              transition={{
                duration: spinInner,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <SudarshanChakraInner />
            </motion.div>
          </motion.div>
        </div>

        <motion.span
          className="scroll-widget__pulse"
          animate={{
            scale: hovered ? [1, 1.12, 1] : [1, 1.06, 1],
            opacity: hovered ? [0.45, 0.18, 0.45] : [0.3, 0.12, 0.3],
          }}
          transition={{
            duration: hovered ? 1.4 : 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden
        />
      </motion.button>
    </motion.div>
  );
}
