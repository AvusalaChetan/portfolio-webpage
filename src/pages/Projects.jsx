import {useEffect, useState} from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/json/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <main className="min-h-screen w-full  from-white/10 to-blue-50 px-2 py-8 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center drop-shadow-lg">
        My Projects
      </h1>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white/90 rounded-xl shadow-lg border border-blue-100 flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-xl font-bold text-blue-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-2 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="list-disc ml-5 mb-3 text-xs text-gray-600">
                {project.highlights?.slice(0, 3).map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <div className="mt-auto flex gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-xs font-semibold transition"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900 text-xs font-semibold transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
