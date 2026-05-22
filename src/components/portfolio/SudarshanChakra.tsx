import { useId } from "react";

/**
 * Mandala / tantra-inspired disc — lotus rings, wheel flames, Shri Yantra center, bindu.
 * ViewBox 240×240, center (120, 120).
 */

const CX = 120;
const CY = 120;

/** Lotus petal pointing upward, rotated around center */
function LotusPetal({
  index,
  count,
  innerR,
  outerR,
  width,
  className,
}: {
  index: number;
  count: number;
  innerR: number;
  outerR: number;
  width: number;
  className: string;
}) {
  const angle = (360 / count) * index;
  return (
    <g transform={`rotate(${angle} ${CX} ${CY})`}>
      <path
        d={`M ${CX} ${CY - innerR}
           C ${CX + width} ${CY - (innerR + outerR) * 0.52}
             ${CX + width * 0.65} ${CY - outerR}
             ${CX} ${CY - outerR - 3}
           C ${CX - width * 0.65} ${CY - outerR}
             ${CX - width} ${CY - (innerR + outerR) * 0.52}
             ${CX} ${CY - innerR}
           Z`}
        className={className}
      />
    </g>
  );
}

/** Traditional curved sudarshan flame */
function WheelFlame({ index }: { index: number }) {
  const angle = (360 / 8) * index;
  return (
    <g transform={`rotate(${angle} ${CX} ${CY})`}>
      <path
        d={`M ${CX} ${CY - 44}
           C ${CX + 11} ${CY - 78} ${CX + 9} ${CY - 94}
             ${CX} ${CY - 98}
           C ${CX - 9} ${CY - 94} ${CX - 11} ${CY - 78}
             ${CX} ${CY - 44}
           Z`}
        className="chakra__flame"
      />
    </g>
  );
}

/** Outer lotus — 16 petals (mantra-wheel ring) */
export function SudarshanChakraOuter() {
  return (
    <svg viewBox="0 0 240 240" className="chakra__svg" aria-hidden>
      <circle cx={CX} cy={CY} r={100} className="chakra__aura" />
      <g className="chakra__lotus-outer">
        {Array.from({ length: 16 }, (_, i) => (
          <LotusPetal
            key={i}
            index={i}
            count={16}
            innerR={74}
            outerR={96}
            width={11}
            className="chakra__petal chakra__petal--outer"
          />
        ))}
      </g>
      <g className="chakra__flames">
        {Array.from({ length: 8 }, (_, i) => (
          <WheelFlame key={i} index={i} />
        ))}
      </g>
    </svg>
  );
}

/** Inner mandala — 8 petals, intersecting triangles, bindu */
export function SudarshanChakraInner() {
  const gradId = `chakra-bindu-${useId().replace(/:/g, "")}`;

  return (
    <svg viewBox="0 0 240 240" className="chakra__svg" aria-hidden>
      <defs>
        <radialGradient id={gradId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255, 220, 255, 0.5)" />
          <stop offset="40%" stopColor="rgba(31, 255, 255, 0.25)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      <circle cx={CX} cy={CY} r={68} className="chakra__veil" />
      <circle cx={CX} cy={CY} r={58} className="chakra__veil chakra__veil--inner" />

      <g className="chakra__lotus-inner">
        {Array.from({ length: 8 }, (_, i) => (
          <LotusPetal
            key={i}
            index={i}
            count={8}
            innerR={46}
            outerR={64}
            width={16}
            className="chakra__petal chakra__petal--inner"
          />
        ))}
      </g>

      {/* Shri Yantra — Shakti (down) + Shiva (up) */}
      <g className="chakra__yantra">
        <path
          d={`M ${CX} ${CY + 22} L ${CX - 20} ${CY - 8} L ${CX + 20} ${CY - 8} Z`}
          className="chakra__triangle chakra__triangle--shakti"
        />
        <path
          d={`M ${CX} ${CY - 20} L ${CX - 18} ${CY + 10} L ${CX + 18} ${CY + 10} Z`}
          className="chakra__triangle chakra__triangle--shiva"
        />
      </g>

      {/* Bindu — kundalini focal point */}
      <circle cx={CX} cy={CY} r={22} fill={`url(#${gradId})`} />
      <circle cx={CX} cy={CY} r={12} className="chakra__bindu-ring" />
      <circle cx={CX} cy={CY} r={5} className="chakra__bindu" />
      <circle cx={CX} cy={CY} r={1.5} className="chakra__bindu-core" />
    </svg>
  );
}

/** Full mandala (single-layer spin) */
export function SudarshanChakra() {
  return (
    <>
      <SudarshanChakraOuter />
      <SudarshanChakraInner />
    </>
  );
}
