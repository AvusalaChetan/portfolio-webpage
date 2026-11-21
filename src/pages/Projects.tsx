import {ProjectCard} from "../components/project/ProjectCard";
import {projects} from "../data/projects";
import type {Project} from "../types";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-col-1  lg:grid-cols-3">
      {projects.map((p: Project) => {
        return <ProjectCard project={p} key={p.title} />;
      })}
    </div>
  );
};

export default Projects;
