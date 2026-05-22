import { motion } from "framer-motion";
import { NestedSection } from "../NestedSection";
import { RubberLetters } from "../RubberLetters";
import { HighlightText } from "../HighlightText";
import { ABOUT } from "@/data/portfolio";
import { CODE_TAGS } from "@/lib/code-tags";

export function AboutSection() {
  return (
    <NestedSection
      id="about"
      sectionTag={CODE_TAGS.title}
      innerTag={CODE_TAGS.about}
      header={
        <RubberLetters text="00. ABOUT" size={56} className="code-nest__heading" />
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <p className="portfolio-heading">{ABOUT.greeting}</p>
        <HighlightText
          text={ABOUT.paragraph}
          className="portfolio-body max-w-2xl"
        />
      </motion.div>
    </NestedSection>
  );
}
