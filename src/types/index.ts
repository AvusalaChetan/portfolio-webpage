export type NavTitle = "overview" | "about" | "skills" | "projects" | "connect" | "ask me";

export type Navigation = {
  title: NavTitle;
  to: string;
};