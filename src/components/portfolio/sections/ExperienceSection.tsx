import { NestedSection } from "../NestedSection";
import { RubberLetters } from "../RubberLetters";
import { CardTabs } from "./CardTabs";
import { CODE_TAGS } from "@/lib/code-tags";
import { EXPERIENCES } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <NestedSection
      id="experience"
      wideCards
      sectionTag={CODE_TAGS.title}
      innerTag={CODE_TAGS.experience}
      header={
        <RubberLetters
          text="02. EXPERIENCE"
          size={56}
          className="code-nest__heading"
        />
      }
    >
      <CardTabs entries={EXPERIENCES} accentColor="#FFE700" />
    </NestedSection>
  );
}
