import type { NavigationItem, Profile, SocialLink } from "@/types/portfolio";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

export const profile: Profile = {
  name: "Myat Bhone Kyaw",
  displayName: "Myat Bhone Kyaw",
  role: "Junior Full-Stack Developer",
  location: "Yangon, Myanmar",
  country: "Myanmar",
  availability: "Seeking junior full-stack opportunities",
  workPreference: "Open to on-site, hybrid & remote roles",
  summary:
    "Building thoughtful digital products through a combination of frontend craftsmanship, backend engineering, and practical problem-solving.",
  technicalSummary:
    "From relational database design and secure authentication to interactive Next.js applications and Flutter mobile experiences.",
  email: "sleepytothehead@gmail.com",
  links: {
    github: "https://github.com/Daehy-peels",
    linkedin: "https://www.linkedin.com/in/myat-bhone-kyaw-291b5a306/",
  },
  timeZone: "Asia/Yangon",
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: profile.links.github,
    handle: "@Daehy-peels",
  },
  ...(profile.links.linkedin
    ? [
        {
          label: "LinkedIn",
          href: profile.links.linkedin,
          handle: "LinkedIn profile",
        },
      ]
    : []),
];

export const navigationItems: NavigationItem[] = [
  { id: "overview", label: "Overview" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export const inquiryTypes = [
  "Job opportunity",
  "Collaboration",
  "Technical discussion",
  "Other",
] as const;

export type InquiryType = (typeof inquiryTypes)[number];
