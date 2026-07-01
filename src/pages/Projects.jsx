import { FaCube, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import FieldName from "../components/common/FieldName";
import { SqureBage } from "../components/HomePageComponents/Bage";
import useGetData from "../hooks/useGetData";

const Projects = () => {
  const PATH = "/json/project.json";
  if (!PATH) console.log("path is not there");

  const projects = useGetData(PATH);

  return (
    <div id="projects">
      <FieldName text="Things I've built" fieldName={"projects"} />
      <div className="flex flex-col gap-4 ">
        {projects.map((project, idx) => {
          return <ProjectCard key={idx} project={project} />;
        })}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const {
    name,
    bage,
    description,
    image,
    technologies,
    liveLink,
    githubUrl,
    startDate,
    endDate,
    highlights,
  } = project;

  const formatDuration = (start, end) => {
    const options = { month: "long", year: "numeric" };
    const startDateObj = new Date(start + "-01");
    const endDateObj = new Date(end + "-01");

    const startStr = startDateObj.toLocaleDateString("en-US", options);
    const endStr = endDateObj.toLocaleDateString("en-US", options);

    return start === end ? startStr : `${startStr} — ${endStr}`;
  };

  return (
    <>
      <div
        className="
      w-full flex flex-col gap-5 p-6
      bg-(--bg-card) border border-[rgba(255,255,255,0.16)] rounded-[16px]
      transition-all duration-300 ease-out  
    "
      >
        <div className="flex items-center justify-between w-full">
          <h3 className="font-sans text-xl font-bold tracking-tight text-white">
            {name}
          </h3>
          <div className="flex items-center gap-3 text-lg text-[rgba(255,255,255,0.35)]">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="hover:text-[#c9922a] transition text-sm" />
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-[#c9922a] transition text-lg" />
              </a>
            )}
          </div>
        </div>

        {bage && (
          <SqureBage className=" inline-flex w-fit items-center gap-2 rounded-xs  border border-[#2b5d39]  bg-[#101d14]  px-3 py-1  text-[13px] font-mono font-medium text-[#8df26a]  shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-200  hover:border-green-500/60  hover:bg-[#122317] ">
            <FaCube />
            <span>published on npm</span>
          </SqureBage>
        )}

        <p className="font-sans text-sm  text-[rgba(255,255,255,0.91)]">
          {description}
        </p>
        <ul className="flex flex-col gap-1 list-none  ">
          {highlights.map((p, idx) => (
            <li
              key={idx}
              className=" text-[color:var(--text)] text-sm "
            > 
              <span className="text-(--text-muted)">{p}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-mono  bg-[rgba(0,131,231,0.06)] text-blue-400 border border-[rgba(0,131,231,0.84)]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div>
          <p className="text-(--text-muted) text-[10px] float-end">
            {formatDuration(startDate, endDate)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
