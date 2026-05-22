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
          text="03. YOUTUBE"
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
          highlightClassName="text-red-400 hover:text-red-300"
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
          className="inline-flex items-center gap-4 bg-red-600 hover:bg-red-500 rounded-full pr-6 pl-2 py-2 mt-3 shadow-lg shadow-red-500/30"
        >
          <img
            src="/logo.png"
            alt="ThatInsaneGuy"
            className="h-[60px] w-[60px] rounded-full bg-white border-2 border-black object-cover"
          />
          <SiYoutube className="text-white w-9 h-9" />
          <span className="font-hand text-white text-3xl md:text-4xl">
            {YOUTUBE.channelName}
          </span>
        </motion.a>
      </motion.div>
    </NestedSection>
  );
}
