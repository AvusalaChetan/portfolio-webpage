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
import { motion } from "framer-motion";
import services from "./service.json";
import "./Skill.css";
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
    certificate: "/pdfs/python.pdf",
  },
  {
    name: "C-language",
    icon: <img src={c} alt="C" className="w-10 h-10" />,
    certificate: "/pdfs/C-Lang.pdf",
  },
];

const frameworks = [
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400" />,
    certificate: "",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-500" />,
    certificate: "",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400" />,
    certificate: "",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600" />,
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
];

const tools = [
  { name: "Git", icon: <SiGit className="text-red-500" />, certificate: "" },
  {
    name: "GitHub",
    icon: <SiGithub className="text-black" />,
    certificate: "",
  },
];

const Skills = () => {
  const categories = [
    { title: "Languages", skills: languages, _id: 111 },
    { title: "Frameworks & Libraries", skills: frameworks, _id: 112 },
    { title: "Tools & Databases", skills: tools, _id: 113 },
  ];

  return (
    
    <section className="min-h-screen lg:w-[80vw] px-4 py-6 overflow-x-hidden">
      <div className=" mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          My <span className="text-purple-400">Skills</span>
        </h2>

        <p className="text-gray-400 mb-12">
          <span>Wanna see proof? Just click the icons!</span>
        </p>

        {/* Category Sections */}
        {categories.map((category) => (
          <motion.div key={category._id} className="mb-16">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-left">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {category.skills.map((skill, index) => (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.1 }}
                  onClick={() => {
                    if (skill.certificate) {
                      window.open(
                        skill.certificate,
                        "_blank",
                        "width=800,height=600,scrollbars=yes,resizable=yes"
                      );
                    } else {
                      alert("Certificate not available for this skill.");
                    }
                  }}
                  key={index}
                  className="bg-white/10 cursor-pointer rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center transition-transform duration-300"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <p className="text-lg font-semibold">{skill.name}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* WHAT CAN I DO SECTION */}
      <div className="text-white py-10" id="what-can-i-do">
        <h1 className="text-center text-4xl font-semibold bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent mb-8">
          What Can I Do
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full p-6 rounded-lg shadow-lg bg-white/10 hover:bg-white/20 transition"
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h2 className="text-xl font-bold mb-4 text-center">
                {service.title}
              </h2>
              <p className="text-lg text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
