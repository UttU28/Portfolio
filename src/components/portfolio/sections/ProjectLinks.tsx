import { motion } from "framer-motion";
import { SiGithub, SiYoutube } from "react-icons/si";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectLinks as ProjectLinksType } from "@/data/portfolio";

type ProjectLinksProps = {
  links: ProjectLinksType;
  accentColor: string;
  className?: string;
};

const LINK_ITEMS = [
  {
    key: "github" as const,
    label: "GitHub",
    Icon: SiGithub,
  },
  {
    key: "youtube" as const,
    label: "YouTube",
    Icon: SiYoutube,
  },
  {
    key: "website" as const,
    label: "Website",
    Icon: Globe,
  },
];

export function ProjectLinks({ links, accentColor, className }: ProjectLinksProps) {
  const items = LINK_ITEMS.filter((item) => links[item.key]);

  if (items.length === 0) return null;

  return (
    <nav
      className={cn("card-tabs__links", className)}
      aria-label="Project links"
    >
      {items.map(({ key, label, Icon }) => {
        const href = links[key]!;
        return (
          <motion.a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="card-tabs__link"
            style={
              {
                "--link-accent": accentColor,
              } as React.CSSProperties
            }
            aria-label={`${label} (opens in new tab)`}
          >
            <Icon className="card-tabs__link-icon" aria-hidden />
            <span className="card-tabs__link-label">{label}</span>
          </motion.a>
        );
      })}
    </nav>
  );
}
