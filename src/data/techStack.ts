 export interface TechGroup {
  heading: string;
  items: string[];
}

export const techStack: TechGroup[] = [
  { heading: "Languages", items: ["JavaScript", "TypeScript"] },
  { heading: "Frontend", items: ["HTML", "CSS", "React.js", "Redux", "Tailwind CSS", "GSAP"] },
  { heading: "Backend", items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"] },
  { heading: "Tools", items: ["Git", "GitHub", "NPM", "Postman"] },
];