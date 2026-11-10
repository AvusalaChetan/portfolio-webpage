export type NavTitle = "overview" | "about" | "skills" | "projects" | "connect" | "ask me";

export type Navigation = {
  title: NavTitle;
  to: string;
};


export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  longDescription?: string;
  features?: string[];
  category?: "fullstack" | "frontend" | "backend" | "cli";
  status?: "completed" | "in-progress";
  featured?: boolean;
  startDate?: string;
  screenshots?: string[];
}

export type ProjectCardData = Pick<
  Project,
  "id" | "title" | "description" | "image" | "tech" | "liveUrl" | "githubUrl"
>;

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date?: string;
  link?: string;
}

export interface AchievementGroup {
  heading: string;
  items: Achievement[];
}

export interface TechGroup {
  heading: string;
  items: string[];
}