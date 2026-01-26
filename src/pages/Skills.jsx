import {useRef} from "react";

const skillsData = [
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    bgRounded: false,
    category: "backend",
    isSoftSkill: false,
  },
  {
    name: "Express",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    bgRounded: true,
    category: "backend",
    isSoftSkill: false,
  },
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    bgRounded: false,
    category: "frontend",
    isSoftSkill: false,
  },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    bgRounded: false,
    category: "backend",
    isSoftSkill: false,
  },
  {
    name: "Socket.io",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg",
    bgRounded: true,
    category: "backend",
    isSoftSkill: false,
  },
  {
    name: "HTML5",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    bgRounded: false,
    category: "frontend",
    isSoftSkill: false,
  },
  {
    name: "CSS3",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    bgRounded: false,
    category: "frontend",
    isSoftSkill: false,
  },
  {
    name: "JavaScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    bgRounded: false,
    category: "language",
    isSoftSkill: false,
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    bgRounded: false,
    category: "language",
  },
  {
    name: "C",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    bgRounded: false,
    category: "language",
    isSoftSkill: false,
  },
  {
    name: "Redux",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    bgRounded: false,
    category: "frontend",
    isSoftSkill: false,
  },
  {
    name: "MUI",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
    bgRounded: false,
    category: "frontend",
    isSoftSkill: false,
  },
  {
    name: "Communication",
    category: "softskills",
    isSoftSkill: true,
  },
];

const Skills = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  const category = ["language", "backend", "frontend", "softskills"];
  return (
    <>
      <main
        ref={containerRef}
        className="min-h-screen w-full  from-white/10 to-blue-50 px-2 py-8 flex flex-col items-center justify-center"
      >
        <h1
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center drop-shadow-lg"
        >
           Tech Stack I Use
        </h1>
        <div className="w-full flex flex-col items-center justify-center">
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl px-2"
          >
            {category.map((cat) => (
              <div
                key={cat}
                className=" rounded-xl p-5 flex flex-col items-center bg-white/80 shadow-lg border border-blue-100 w-full min-h-[260px] "
              >
                <b className="text-blue-700 mb-4 text-lg capitalize tracking-wide">
                  {cat}
                </b>
                <div className=" flex flex-wrap gap-5 justify-center w-full">
                  {skillsData
                    .filter((skill) => skill.category === cat)
                    .map((skill) =>
                      skill.isSoftSkill ? (
                        <span
                          key={skill.name}
                          className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold shadow-sm m-1"
                        >
                          {skill.name}
                        </span>
                      ) : (
                        <div
                          key={skill.name}
                          className="skill-item flex flex-col items-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl py-1 px-2 rounded-xl"
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className={`w-12 h-12 ${skill.bgRounded ? "bg-white rounded" : ""}`}
                            loading="lazy"
                          />
                          <span className="mt-2 text-xs font-medium text-gray-700">
                            {skill?.name}
                          </span>
                        </div>
                      ),
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Skills;
