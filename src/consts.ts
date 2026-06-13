import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Maker Faire Kochi Minutes",
  DESCRIPTION: "Official meeting minutes and projects portal for Maker Faire Kochi.",
  EMAIL: "makerfairekochi@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to the Maker Faire Kochi meeting minutes and projects portal.",
};

export const BLOG: Metadata = {
  TITLE: "Minutes",
  DESCRIPTION: "Chronological archives of Maker Faire Kochi team meetings, discussions, and decisions.",
};

export const PROJECTS: Metadata = {
  TITLE: "Milestones",
  DESCRIPTION:
    "Key roadmap milestones and targets for Maker Faire Kochi.",
};

export const SOCIALS: Socials = [
  {
    NAME: "Instagram",
    HREF: "https://instagram.com/makerfairekochi",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/Maker-Faire-Kochi",
  },
];
