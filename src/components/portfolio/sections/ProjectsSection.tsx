import { NestedSection } from "../NestedSection";
import { RubberLetters } from "../RubberLetters";
import { CardTabs } from "./CardTabs";
import { CODE_TAGS } from "@/lib/code-tags";
import { PROJECTS } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <NestedSection
      id="projects"
      wideCards
      sectionTag={CODE_TAGS.title}
      innerTag={CODE_TAGS.projects}
      header={
        <RubberLetters
          text="01. PROJECTS"
          size={56}
          className="code-nest__heading"
        />
      }
    >
      <CardTabs entries={PROJECTS} accentColor="#1fffff" />
    </NestedSection>
  );
}
