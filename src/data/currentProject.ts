export interface CurrentProject {
  title: string;
  description: string;
  tech: string[];
}

export const currentProject: CurrentProject = {
  title: "watchly",
  description:
    "A video streaming platform with JWT auth, refresh tokens and a feature-based structure.",
  tech: ["TypeScript", "React", "Node", "Express", "MongoDB"],
};