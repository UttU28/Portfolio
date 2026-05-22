import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import type { CodeTagName, CodeTagPlacement } from "@/lib/code-tags";

export type CodeTagProps = HTMLMotionProps<"div"> & {
  /** Semantic tag name, e.g. "introduction" → `<introduction>` */
  tag: CodeTagName;
  closing?: boolean;
  placement?: CodeTagPlacement;
  rotate?: number;
  /** If false, tag stays visible without scroll-in animation (nav / sidebar) */
  withEntrance?: boolean;
};

const PLACEMENT_CLASS: Record<CodeTagPlacement, string> = {
  default: "code-tag--default",
  section: "code-tag--section",
  nav: "code-tag--nav",
  sidebar: "code-tag--sidebar",
  content: "code-tag--content",
};

export function CodeTag({
  tag,
  closing = false,
  placement = "default",
  rotate = -10,
  withEntrance = true,
  className,
  ...rest
}: CodeTagProps) {
  const motionProps = withEntrance
    ? {
        initial: { opacity: 0, y: -6, rotate } as const,
        whileInView: { opacity: 1, y: 0, rotate } as const,
        viewport: { once: true, amount: 0.2 } as const,
        transition: { duration: 0.45, ease: "easeOut" as const },
      }
    : {
        initial: false as const,
        animate: { opacity: 1, rotate } as const,
      };

  return (
    <motion.div
      {...motionProps}
      whileHover={{ scale: 1.02, opacity: 1 }}
      className={cn(
        "code-tag",
        PLACEMENT_CLASS[placement],
        `code-tag--${tag}`,
        closing && "code-tag--closing",
        className,
      )}
      aria-hidden
      {...rest}
    >
      <span className="code-tag__bracket" aria-hidden>
        {"<"}
      </span>
      {closing && <span className="code-tag__slash">/</span>}
      <span className="code-tag__name">{tag}</span>
      <span className="code-tag__bracket" aria-hidden>
        {">"}
      </span>
    </motion.div>
  );
}

/** Opening + closing pair for a content block */
export function CodeTagPair({
  tag,
  placement = "content",
  className,
}: {
  tag: CodeTagName;
  placement?: CodeTagPlacement;
  className?: string;
}) {
  return (
    <div className={cn("code-tag-group", className)}>
      <CodeTag tag={tag} placement={placement} rotate={-8} />
      <div className="code-tag-group--row-end">
        <CodeTag tag={tag} closing placement={placement} rotate={-8} />
      </div>
    </div>
  );
}
