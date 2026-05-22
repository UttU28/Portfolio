import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TypewriterProps = {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  holdMs?: number;
  className?: string;
};

export function Typewriter({
  strings,
  typeSpeed = 75,
  backSpeed = 45,
  holdMs = 1400,
  className,
}: TypewriterProps) {
  const [stringIndex, setStringIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    const current = strings[stringIndex] ?? "";

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typeSpeed,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("deleting"), holdMs);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          backSpeed,
        );
        return () => clearTimeout(t);
      }
      setStringIndex((i) => (i + 1) % strings.length);
      setPhase("typing");
    }
  }, [text, phase, stringIndex, strings, typeSpeed, backSpeed, holdMs]);

  return (
    <span className={cn("inline-flex items-baseline", className)}>
      <span>{text}</span>
      <span className="typed-cursor h-[0.9em]" aria-hidden />
    </span>
  );
}
