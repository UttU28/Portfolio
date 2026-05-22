import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CodeTag } from "./CodeTag";
import { CodeNest } from "./CodeNest";
import type { CodeTagName } from "@/lib/code-tags";

type NestedSectionProps = {
  id: string;
  /** Outer wrapper tag: `title`, `introduction`, etc. */
  sectionTag: CodeTagName;
  /** Inner block tag: `about`, `projects`, … Omit for single-level sections (e.g. home). */
  innerTag?: CodeTagName;
  /** Section heading (usually RubberLetters) — one tab in. Omit for intro-only blocks. */
  header?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  /** Wider content area for tabbed cards (projects, experience). */
  wideCards?: boolean;
};

/**
 * Editor-style nested pseudo-HTML layout:
 *
 * <sectionTag>
 *     {header}
 *     <innerTag>        (optional)
 *         {children}    (two tabs when innerTag set)
 *     </innerTag>
 * </sectionTag>
 */
export function NestedSection({
  id,
  sectionTag,
  innerTag,
  header,
  children,
  className,
  wideCards = false,
}: NestedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "code-section code-section--nested",
        wideCards && "code-section--wide-cards",
        className,
      )}
    >
      <CodeTag tag={sectionTag} placement="section" className="mb-2" />

      <CodeNest level={1} data-nav-target>
        {header ?? null}

        {innerTag ? (
          <>
            <CodeTag tag={innerTag} placement="content" rotate={-8} />
            <CodeNest level={2}>
              <div className="code-nest__body">{children}</div>
            </CodeNest>
            <CodeTag
              tag={innerTag}
              closing
              placement="content"
              rotate={-8}
              className="mt-1"
            />
          </>
        ) : (
          <div className="code-nest__body">{children}</div>
        )}
      </CodeNest>

      <CodeTag
        tag={sectionTag}
        closing
        placement="section"
        rotate={-8}
        className="mt-4"
      />
    </motion.section>
  );
}
