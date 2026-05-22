import { useEffect, useId, useRef, useState, startTransition } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Neon vinyl player — disc + tonearm styled for the portfolio theme.
 * @see https://framer.com/m/DiscPlayer-mPbY.js@7vFoVOLqCdOhQeAstLq2
 */
export type DiscPlayerProps = {
  audioFile?: string;
  backgroundColor?: string;
  discImage?: string;
  needleDotColor?: string;
  stylusPlayingColor?: string;
  accentColor?: string;
  floating?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const DEFAULT_AUDIO =
  "https://framerusercontent.com/assets/8w3IUatLX9a5JVJ6XPCVuHi94.mp3";

const GROOVE_RADII = [92, 82, 72, 62, 52, 44, 38];

function DiscSvg({
  discImage,
  uid,
  showHint,
}: {
  discImage?: string;
  uid: string;
  showHint: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="disc-player__disc-svg"
      aria-hidden
    >
      <defs>
        {/* Upper arc on the groove band — "Click to play" follows the curve */}
        <path
          id={`${uid}-hint-arc`}
          d="M 32 100 A 68 68 0 0 1 168 100"
          fill="none"
        />
        <radialGradient id={`${uid}-sheen`} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.18)" />
          <stop offset="45%" stopColor="rgba(31, 255, 255, 0.06)" />
          <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
        </radialGradient>
        <radialGradient id={`${uid}-hub`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#1fffff" stopOpacity="0.35" />
          <stop offset="55%" stopColor="#0a0a0f" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        <clipPath id={`${uid}-label`}>
          <circle cx="100" cy="100" r="34" />
        </clipPath>
      </defs>

      <circle cx="100" cy="100" r="96" className="disc-player__rim" />
      {GROOVE_RADII.map((r, i) => (
        <circle
          key={r}
          cx="100"
          cy="100"
          r={r}
          className={
            i % 2 === 0 ? "disc-player__groove--bright" : "disc-player__groove"
          }
        />
      ))}
      <circle
        cx="100"
        cy="100"
        r="96"
        className="disc-player__sheen"
        fill={`url(#${uid}-sheen)`}
      />
      <circle cx="100" cy="100" r="36" className="disc-player__label-ring" />
      {discImage ? (
        <image
          href={discImage}
          x="66"
          y="66"
          width="68"
          height="68"
          clipPath={`url(#${uid}-label)`}
          preserveAspectRatio="xMidYMid slice"
          className="disc-player__label-img"
        />
      ) : null}
      <circle
        cx="100"
        cy="100"
        r="10"
        className="disc-player__hub"
        fill={`url(#${uid}-hub)`}
      />
      <circle
        cx="100"
        cy="100"
        r="3"
        fill="#1fffff"
        opacity="0.9"
        style={{ filter: "drop-shadow(0 0 4px #1fffff)" }}
      />
      <text
        className={cn("disc-player__hint", !showHint && "disc-player__hint--hidden")}
      >
        <textPath
          href={`#${uid}-hint-arc`}
          startOffset="50%"
          textAnchor="middle"
        >
          Click to play &nbsp; sound onn
        </textPath>
      </text>
    </svg>
  );
}

/** Pivot at top-right; default pose = playing (stylus on outer groove, not center). */
const TONEARM_PIVOT = { x: 124, y: 14 };
const TONEARM_REST_ROTATE = 42;
const TONEARM_PLAY_ROTATE = 10;

function TonearmSvg({
  stylusColor,
  uid,
}: {
  stylusColor: string;
  uid: string;
}) {
  const { x: px, y: py } = TONEARM_PIVOT;

  return (
    <svg
      viewBox="0 0 140 120"
      className="disc-player__tonearm-svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={`${uid}-arm`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2a2a35" />
          <stop offset="40%" stopColor="#0f0f14" />
          <stop offset="100%" stopColor="#1a1a22" />
        </linearGradient>
        <filter
          id={`${uid}-glow`}
          x="-80%"
          y="-80%"
          width="260%"
          height="260%"
        >
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx={px} cy={py} r="11" className="disc-player__pivot" />
      <circle cx={px} cy={py} r="4.5" className="disc-player__pivot-cap" />

      {/* Arm: pivot → outer groove (left-mid on disc, not label) */}
      <path
        d={`M ${px} ${py} L ${px - 4} ${py - 6} L 72 38 L 38 58 L 26 66`}
        className="disc-player__arm"
        fill={`url(#${uid}-arm)`}
      />
      <rect
        x={px - 8}
        y={py - 10}
        width="10"
        height="8"
        rx="1.5"
        fill="#0a0a0f"
        stroke="rgba(31, 255, 255, 0.5)"
        strokeWidth="0.6"
        transform={`rotate(-10 ${px} ${py - 4})`}
      />

      <path
        d="M 26 66 L 18 69 L 12 71 L 8 73 L 10 75 L 16 72 L 28 67 Z"
        className="disc-player__headshell"
      />

      <ellipse
        cx="7"
        cy="74"
        rx="5"
        ry="3"
        className="disc-player__stylus-glow"
        style={{ fill: stylusColor }}
      />
      <path
        d="M 8 74 L 5 78 L 7 79 L 9 75 Z"
        className="disc-player__stylus"
        style={{ fill: stylusColor, filter: `url(#${uid}-glow)` }}
      />
    </svg>
  );
}

export function DiscPlayer({
  audioFile = DEFAULT_AUDIO,
  backgroundColor = "transparent",
  discImage,
  needleDotColor = "#ea00ff",
  stylusPlayingColor = "#fffb00",
  accentColor = "#1fffff",
  floating = false,
  className,
  style,
}: DiscPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const discControls = useAnimation();
  const needleControls = useAnimation();
  const discRotationRef = useRef(0);
  const uid = useId().replace(/:/g, "");

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioFile);
      audioRef.current.loop = false;
      audioRef.current.addEventListener("ended", () => {
        startTransition(() => setIsPlaying(false));
      });
    } else {
      audioRef.current.src = audioFile;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, [audioFile]);

  const togglePlayback = () => {
    if (!audioRef.current) return;
    setIsPlaying((p) => !p);
  };

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      void audioRef.current.play();
      void needleControls.start({
        rotate: TONEARM_PLAY_ROTATE,
        transition: { duration: 1.1, ease: [0.32, 0.72, 0, 1] },
      });
      void discControls.start({
        rotate: [discRotationRef.current, discRotationRef.current + 360],
        transition: {
          duration: 3,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    } else {
      audioRef.current.pause();
      discControls.stop();
      const currentTime = audioRef.current.currentTime || 0;
      const rotationsPerSecond = 1 / 3;
      const additionalRotation =
        (currentTime * rotationsPerSecond * 360) % 360;
      discRotationRef.current =
        (discRotationRef.current + additionalRotation) % 360;
      discControls.set({ rotate: discRotationRef.current });
      void needleControls.start({
        rotate: TONEARM_REST_ROTATE,
        transition: { duration: 0.85, ease: [0.32, 0.72, 0, 1] },
      });
    }
  }, [isPlaying, discControls, needleControls]);

  const stylusColor = isPlaying ? stylusPlayingColor : needleDotColor;

  const stageStyle = {
    "--disc-accent": accentColor,
    "--disc-stylus": stylusColor,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "disc-player",
        floating && "disc-player--floating",
        isPlaying && "disc-player--playing",
        className,
      )}
      style={
        floating
          ? { position: "relative", backgroundColor: "transparent", padding: 0, ...stageStyle, ...style }
          : {
              position: "relative",
              backgroundColor,
              borderRadius: 24,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              ...stageStyle,
              ...style,
            }
      }
    >
      <div
        className="disc-player__stage"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: floating ? undefined : 280,
          height: floating ? "100%" : undefined,
          aspectRatio: floating ? undefined : "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="disc-player__platter" aria-hidden />

        <motion.button
          type="button"
          animate={discControls}
          initial={{ rotate: 0 }}
          className="disc-player__disc-btn"
          aria-label={isPlaying ? "Pause audio" : "Play audio"}
          onClick={togglePlayback}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              togglePlayback();
            }
          }}
        >
          <DiscSvg discImage={discImage} uid={uid} showHint={!isPlaying} />
        </motion.button>

        <div className="disc-player__tonearm">
          <motion.div
            animate={needleControls}
            initial={{ rotate: TONEARM_REST_ROTATE }}
            style={{
              width: "100%",
              height: "100%",
              transformOrigin: `${(TONEARM_PIVOT.x / 140) * 100}% ${(TONEARM_PIVOT.y / 120) * 100}%`,
            }}
          >
            <TonearmSvg stylusColor={stylusColor} uid={`${uid}-arm`} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
