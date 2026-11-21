export interface SkillGroup {
  heading: "Present skills" | "Learning skills";
  items: TechGroup[];
}

export interface TechGroup {
  heading: string;
  items: string[];
}

export const techStack: TechGroup[] = [
  {heading: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS"]},
  {
    heading: "Frontend",
    items: ["React.js", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "GSAP"],
  },
  {
    heading: "Backend",
    items: ["TypeScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "Cloudinary"],
  },
  {heading: "Tools", items: ["Git", "GitHub", "NPM", "Postman", "Vercel", "Netlify"]},
];

export const skills: SkillGroup[] = [
  {
    heading: "Present skills",
    items: [...techStack],
  },
];

export const learningSkills: TechGroup[] = [
  {
    heading: "AI",
    items: ["LLM APIs", "LangChain", "Agentic AI"],
  },
];
