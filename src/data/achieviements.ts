
import type { AchievementGroup } from "../types";

export const achievements: AchievementGroup[] = [
  {
    heading: "Open source contributions",
    items: [
      {
        id: "mx-icons-pr-59",
        title: "mx-icons: JavaScript icon | (PR #59, merged)",
        description:
          "Added the JavaScript icon in 6 style variants as React components and registered them in the icon index and metadata. Shipped in release v1.1.2.",
        link: "https://github.com/ig-imanish/mx-icons/pull/59",
      },
    ],
  },
  
  {
    heading: "Certifications",
    items: [
      {
        id: "mern-sheryians",
        title: "Full Stack Development (MERN)",
        description: "Sheryians Coding School, in progress.",
        date: "2026",
       },
      {
        id: "react-hackerrank",
        title: "React (Basic)",
        description: "HackerRank.",
        date: "May 2025",
      },
    ],
  },
];