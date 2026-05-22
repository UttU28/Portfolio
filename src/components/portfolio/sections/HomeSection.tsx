import { motion } from "framer-motion";
import { NestedSection } from "../NestedSection";
import { RubberLetters } from "../RubberLetters";
import { Typewriter } from "../Typewriter";
import { TYPED_STRINGS } from "@/data/portfolio";
import { CODE_TAGS } from "@/lib/code-tags";

export function HomeSection() {
  return (
    <NestedSection id="home" sectionTag={CODE_TAGS.introduction}>
      <div className="space-y-4">
        <RubberLetters text="Hi," size={52} />
        <RubberLetters text="I'm Utsav Chaudhary." size={56} delay={3} />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pt-2 text-white font-display text-4xl md:text-5xl"
        >
          A&nbsp;
          <span className="neon-text">
            <Typewriter strings={TYPED_STRINGS} />
          </span>
        </motion.div>
      </div>
    </NestedSection>
  );
}
