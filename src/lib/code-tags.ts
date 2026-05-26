/**
 * Semantic names for pseudo-HTML tags shown on the portfolio.
 * Use these constants in components so labels stay consistent.
 */
export const CODE_TAGS = {
  introduction: "introduction",
  menu: "menu",
  social: "social",
  title: "title",
  about: "about",
  projects: "projects",
  experience: "experience",
  certifications: "certifications",
  youtube: "youtube",
} as const;

export type CodeTagName = (typeof CODE_TAGS)[keyof typeof CODE_TAGS];

export type CodeTagPlacement =
  | "default"
  | "section"
  | "nav"
  | "sidebar"
  | "content";
