import { useState } from "react";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";

const CX = 50;
const CY = 50;

/** Planet dot orbiting the logo center via SVG animateTransform. */
function OrbitPlanet({
  orbitR,
  duration,
  reverse,
  color,
  dotR,
  startAngle = 0,
}: {
  orbitR: number;
  duration: number;
  reverse?: boolean;
  color: string;
  dotR: number;
  startAngle?: number;
}) {
  const from = reverse ? "360 50 50" : "0 50 50";
  const to = reverse ? "0 50 50" : "360 50 50";

  return (
    <g transform={`rotate(${startAngle} ${CX} ${CY})`}>
      <g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from={from}
          to={to}
          dur={`${duration}s`}
          repeatCount="indefinite"
        />
        <circle cx={CX} cy={CY - orbitR} r={dotR} fill={color} />
      </g>
    </g>
  );
}

/**
 * Top-left avatar logo — morphing gooey blob, planetary orbit dots,
 * rotating conic halo. Click scrolls to top.
 */
export function Logo() {
  const { scrollToTop } = useSmoothScroll();
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.button
      type="button"
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      onFocus={() => setRevealed(true)}
      onBlur={() => setRevealed(false)}
      onClick={() => scrollToTop()}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "backOut", delay: 0.2 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="site-logo fixed top-2 left-3 md:top-4 md:left-5 z-50 grid place-items-center overflow-visible"
      aria-label="Scroll to top"
    >
      {/* Rotating conic halo */}
      <div
        aria-hidden
        className="logo-halo-spin absolute inset-1 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(31,255,255,0) 0deg, rgba(31,255,255,0.55) 70deg, rgba(31,255,255,0) 140deg, rgba(234,0,255,0.5) 200deg, rgba(31,255,255,0) 270deg, rgba(255,251,0,0.45) 320deg, rgba(31,255,255,0) 360deg)",
          filter: "blur(10px)",
          opacity: revealed ? 0.85 : 0.55,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Gooey blob + planets (behind avatar) */}
      <svg
        className="absolute inset-0 z-[5] w-full h-full pointer-events-none overflow-visible"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <defs>
          <filter id="logo-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
          <radialGradient id="logo-blob-grad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#9bffff" />
            <stop offset="60%" stopColor="#1fffff" />
            <stop offset="100%" stopColor="#00d0ff" />
          </radialGradient>
        </defs>

        <g filter="url(#logo-goo)" opacity={revealed ? 0.95 : 0.75}>
          <motion.circle
            r="20"
            fill="url(#logo-blob-grad)"
            initial={{ cx: 50, cy: 50 }}
            animate={{
              cx: [50, 56, 50, 44, 50],
              cy: [50, 46, 56, 50, 50],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            r="20"
            fill="#1fffff"
            initial={{ cx: 50, cy: 50 }}
            animate={{
              cx: [50, 44, 50, 56, 50],
              cy: [50, 56, 44, 52, 50],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            r="16"
            fill="#1fffff"
            initial={{ cx: 45, cy: 42 }}
            animate={{
              cx: [45, 58, 50, 42, 45],
              cy: [42, 50, 60, 48, 42],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            r="14"
            fill="#1fffff"
            initial={{ cx: 56, cy: 58 }}
            animate={{
              cx: [56, 44, 58, 50, 56],
              cy: [58, 48, 42, 56, 58],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* Planets behind the avatar — visible only around the edges */}
        <g>
          <OrbitPlanet
            orbitR={32}
            duration={14}
            color="#fffb00"
            dotR={3}
            startAngle={0}
          />
          <OrbitPlanet
            orbitR={40}
            duration={20}
            reverse
            color="#1fffff"
            dotR={2.6}
            startAngle={120}
          />
          <OrbitPlanet
            orbitR={46}
            duration={28}
            color="#ea00ff"
            dotR={3}
            startAngle={240}
          />
        </g>
      </svg>

      <motion.img
        src="/logo.png"
        alt="ThatInsaneGuy logo"
        className="relative z-20 h-[78px] w-auto select-none"
        draggable={false}
        style={{
          filter:
            "drop-shadow(1px 1px 0 #ff1fff) drop-shadow(-1px -1px 0 #fbff1f) drop-shadow(0 0 10px rgba(31,255,255,0.4))",
        }}
        animate={{
          y: revealed ? -3 : 0,
          scale: revealed ? 1.05 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.button>
  );
}
