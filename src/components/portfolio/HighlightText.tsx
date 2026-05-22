import { Fragment } from "react";
import { cn } from "@/lib/utils";

type HighlightTextProps = {
  text: string;
  className?: string;
  highlightClassName?: string;
};

const PATTERN = /\{\{(.+?)\}\}/g;

export function HighlightText({
  text,
  className,
  highlightClassName,
}: HighlightTextProps) {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  const matches = Array.from(text.matchAll(PATTERN));
  for (const match of matches) {
    const start = match.index ?? 0;
    if (start > lastIndex) {
      nodes.push(
        <Fragment key={`t-${key++}`}>{text.slice(lastIndex, start)}</Fragment>,
      );
    }
    nodes.push(
      <span
        key={`h-${key++}`}
        className={cn(
          "font-semibold neon-text text-[1.15em] hover:text-white transition-colors",
          highlightClassName,
        )}
      >
        {match[1]}
      </span>,
    );
    lastIndex = start + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(<Fragment key={`t-${key++}`}>{text.slice(lastIndex)}</Fragment>);
  }
  return <p className={className}>{nodes}</p>;
}
