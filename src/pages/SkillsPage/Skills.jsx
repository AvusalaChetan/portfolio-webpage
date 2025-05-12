import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import python from "../../assets/python-5.svg";
import c from "../../assets/c-1.svg";
import { motion } from "motion/react";


const languages = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" />,
    certificate: "",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" />,
    certificate: "",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" />,
    certificate: "",
  },
  {
    name: "Python",
    icon: <img src={python} alt="Python" className="w-10 h-10" />,
    certificate: "/src/images/python.pdf",

  },
  {
    name: "C-language",
    icon: <img src={c} alt="C" className="w-10 h-10" />,
    certificate: "/src/assets/C-Lang.pdf",
  },
];

const frameworks = [
  {
    name: "React",
    icon: <FaReact className="text-cyan-400" />,
    certificate: "",
  },
  // {
  //   name: "Next.js",
  //   icon: <img
  //     className=" h-15 w-15"
  //     src="https://camo.githubusercontent.com/c3635f27439ecdbf20e3cbf969c156f4040f10a0c8c836cf307d916dd8f806d4/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6461726b5f6261636b67726f756e642e706e67" />,
  //   certificate: "",
  // },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" />,
    certificate: "",
  },
  {
    name: "Framer-motion ",
    icon: <TbBrandFramerMotion className="text-blue-400" />,
    certificate: "",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600" />,
    certificate: "",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-500" />,
    certificate: "",
  },
];

const tools = [
  { name: "Git", icon: <SiGit className="text-red-500" />, certificate: "" },
  {
    name: "GitHub",
    icon: <SiGithub className="text-black" />,
    certificate: "",
  },
];

const whatCanIDo = [
  {
    skill: "frontend",
    explanation:
      "Build responsive, interactive websites using HTML, CSS, JavaScript, and React.js.",
  },
  {
    skill: "backend",
    explanation:
      "i can build basic of backend",
  },
];



const Skills = () => {
  const categories = [
    { title: "Languages", skills: languages },
    { title: "Frameworks & Libraries", skills: frameworks },
    { title: "Tools & Databases", skills: tools },
  ];

  return (
    <section className="min-h-screen bg-neutral-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          My <span className="text-teal-400">Skills</span>
        </h2>
        <p className="text-gray-400 mb-3">
          Here are some of the technologies I've been working with recently
        </p>
        <p className="text-gray-400 mb-12  ">
          <span>Wanna see proof? Just click the icons!</span>
        </p>

        {/* Category Sections */}
        {categories.map((category, idx) => (
          <motion.div

            key={idx}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-teal-300 mb-6 text-left">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {category.skills.map((skill, index) => (
                <motion.button
                  whileHover={{ scale: 1.1, rotate: -6, backdropFilter: "blur(103px)", boxShadow: "0px 4px 20px rgba(0, 255, 255, 0.5)" }}
                  transition={{ duration: 0.3 }}
                  onClick={() => {
                    skill.certificate !== ""
                      ? window.open(
                        skill.certificate,
                        "_blank",
                        "width=800,height=600,scrollbars=yes,resizable=yes"
                      )
                      : alert("learn from youtube ");
                  }}
                  key={index}
                  className="bg-gray-800 cursor-none rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <p className="text-lg font-semibold">{skill.name}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* WHAT CAN I DO SECTION  */}
      <div className="what-can-i-do-sec p-8 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 rounded-3xl shadow-2xl border border-gray-700">
        <h3 className="text-4xl font-extrabold capitalize text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600 mb-10 text-left">
          What Can I Do?
        </h3>
        <div className="space-y-6">
          {whatCanIDo.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start  sm:flex-row sm:items-center  hover:scale-105 transition-transform duration-300"
            >
              <span className="text-2xl font-semibold text-white">
                {skill.skill}
              </span>
              <span className="ml-3 text-lg text-gray-400 hidden sm:inline">
                {skill.explanation}
              </span>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;
