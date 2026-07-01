import { useState } from "react";
import FieldName from "../components/common/FieldName";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiJsonwebtokens,
} from "react-icons/si";

const Skills = () => {
  const arrOfSkills = [
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    {
      name: "React",
      icon: <FaReact className="text-sky-400 animate-spin-slow" />,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
    { name: "Python", icon: <FaPython className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "JWT Auth", icon: <SiJsonwebtokens className="text-pink-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
    { name: "CLI Tools", icon: <FaTerminal className="text-dark-400" /> },
  ];

  const [skills] = useState(arrOfSkills);

  return (
    <>
      <div id="skills" className="w-full h-[70vh] px-4 py-12 flex flex-col items-start justify-center">
        <FieldName fieldName={"tech stack"} text={"What I work with"} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
          {skills.map(({ name, icon }, i) => {
            return <Chip key={i} icon={icon} skill={name} />;
          })}
        </div>
      </div>
    </>
  );
};

const Chip = ({ icon, skill }) => {
  return (
    <div
      className="
      flex items-center gap-3 px-4 py-3 
      bg-(--bg-card)
      border border-[var(--border)] 
      rounded-[var(--radius-md)] 
      text-[var(--text)] 
      font-sans text-sm font-medium
      transition-all duration-200 ease-out
      hover:border-[var(--border-hover)] 
      hover:bg-[var(--accent-glow)] 
      hover:translate-y-[-1px]
      cursor-default select-none
    "
    >
      {/* Icon Wrapper */}
      <span className="text-lg text-[var(--accent)] transition-colors duration-200">
        {icon}
      </span>

      {/* Skill Name */}
      <span className="tracking-wide">{skill}</span>
    </div>
  );
};
export default Skills;
