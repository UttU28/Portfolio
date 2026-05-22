import { cn } from "@/lib/utils";

type CodeNestProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Indent depth: 0 = none, 1 = one tab, 2 = two tabs */
  level: 0 | 1 | 2;
  className?: string;
  children: React.ReactNode;
};

/**
 * Wraps content with editor-style left padding (like nested HTML / code).
 * Nest inside another CodeNest to stack indents.
 */
export function CodeNest({
  level,
  className,
  children,
  ...rest
}: CodeNestProps) {
  if (level === 0) {
    return (
      <div className={cn("code-nest code-nest--root", className)} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn("code-nest", `code-nest--level-${level}`, className)}
      {...rest}
    >
      {children}
    </div>
  );
}
