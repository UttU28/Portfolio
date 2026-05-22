import { motion } from "framer-motion";
import { DiscPlayer } from "./DiscPlayer";
import { DISC_PLAYER } from "@/data/portfolio";

/** Always-visible vinyl player fixed bottom-right (replaces scroll chakra). */
export function FixedDiscPlayer() {
  return (
    <motion.aside
      className="disc-widget"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
      aria-label="Music player"
    >
      <div className="disc-widget__inner">
        <DiscPlayer
          floating
          audioFile={DISC_PLAYER.audioFile}
          discImage={DISC_PLAYER.discImage}
          accentColor={DISC_PLAYER.accentColor}
          needleDotColor={DISC_PLAYER.needleDotColor}
          stylusPlayingColor={DISC_PLAYER.stylusPlayingColor}
        />
      </div>
    </motion.aside>
  );
}
