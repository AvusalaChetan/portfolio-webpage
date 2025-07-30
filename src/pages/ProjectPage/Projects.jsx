import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // FIXED
import "./Projects.css";

const projects = [
  {
    title: "Weather App",
    description:
      "A weather app providing real-time data using an external API.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://darling-meringue-393b73.netlify.app/",
    img: "https://imgs.search.brave.com/rDo2nDQjeLWZuYvO8jEa8qKyog69P-9dECiMfflpmXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JlLzQz/Lzc4L2JlNDM3ODEy/MmNhZDZmNjcxN2Fk/OGIyMjc2ZTAyZTUw/LmpwZw", // replace with your actual image path
  },
  {
    title: "Flames App",
    description:
      "A weather app providing real-time data using an external API.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://achetan.netlify.app/",
    img: "/images/Flames.png",
  },
];

const overlayVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1 },
};

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="projects-section">
      <div id="projects-container">
        <h2 className="text-4xl font-bold mb-4 text-center ">
          <span className="text-teal-400">Projects</span> I Built
        </h2>
        <p className="text-gray-400 mb-6">
          Explore some of the exciting projects I've worked on, showcasing my
          skills and creativity.
        </p>

        <div
          id="projects-list"
          style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              id={`project-${index}`}
              key={index}
              whileHover={isMobile ? undefined : "hover"}
              initial="initial"
              className={`project-card w-1/3 h-[35vh] p-2 m-3 relative overflow-hidden `}
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src={project.img}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  borderRadius: "8px",
                }}
                className="-z-10"
              />
              <motion.div
                id={`project-overlay-${index}`}
                className="project-overlay flex items-center gap-2 flex-col absolute"
                variants={overlayVariants}
                animate={isMobile ? "hover" : undefined}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "#fff",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3
                  id="title"
                  className="w-full text-center bg-neutral-700 p-3 rounded-sm font-bold"
                >
                  {project.title}
                </h3>
                <p
                  className="project-description"
                  style={{ fontSize: "0.9rem", marginBottom: "8px" }}
                >
                  {project.description}
                </p>
                <div
                  className="tech-stack"
                  style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
                >
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      id="card"
                      style={{
                        background: "#0ff",
                        color: "#000",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        fontSize: "0.75rem",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  style={{
                    marginTop: "10px",
                    color: "#0ff",
                    fontSize: "0.9rem",
                  }}
                >
                  View Project
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;