import { motion } from "framer-motion";
import { SiYoutube } from "react-icons/si";
import { NestedSection } from "../NestedSection";
import { RubberLetters } from "../RubberLetters";
import { HighlightText } from "../HighlightText";
import { YOUTUBE } from "@/data/portfolio";
import { CODE_TAGS } from "@/lib/code-tags";

export function YouTubeSection() {
  return (
    <NestedSection
      id="youtube"
      sectionTag={CODE_TAGS.title}
      innerTag={CODE_TAGS.youtube}
      header={
        <RubberLetters
          text="04. YOUTUBE"
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
        className="space-y-5"
      >
        <p className="portfolio-heading">{YOUTUBE.greeting}</p>
        <HighlightText
          text={YOUTUBE.body}
          className="portfolio-body max-w-2xl"
          highlightClassName="text-cyan-300 hover:text-cyan-200"
        />

        <motion.a
          href={YOUTUBE.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ rotate: -5, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex max-w-full items-center gap-2 sm:gap-3 md:gap-4 bg-red-600 hover:bg-red-500 rounded-full pr-3 sm:pr-5 md:pr-6 pl-1.5 sm:pl-2 py-1.5 sm:py-2 mt-3 shadow-lg shadow-red-500/30"
        >
          <img
            src="/logo.png"
            alt="ThatInsaneGuy"
            className="h-[42px] w-[42px] sm:h-[52px] sm:w-[52px] md:h-[60px] md:w-[60px] rounded-full bg-white border-2 border-black object-cover shrink-0"
          />
          <SiYoutube className="text-white w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 shrink-0" />
          <span className="font-hand text-white text-xl sm:text-2xl md:text-4xl truncate">
            {YOUTUBE.channelName}
          </span>
        </motion.a>
      </motion.div>
    </NestedSection>
  );
}
