import Button from "../components/common/Button";
import Bage from "../components/HomePageComponents/Bage";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin, FaFileLines } from "react-icons/fa6"; // Standardizing premium icons

const HomePage = () => {
  const stats = [
    // { value: "8", label: "Live Projects" },
    { value: "1", label: "npm Package", suffix: "(500+ downloads)" },
    { value: "4", label: "Repos" },
    { value: "2026", label: "Seeking Internship", isHighlighted: true },
  ];

  const buttonsConfig = [
    {
      text: "GitHub",
      icon: <FaSquareGithub className="text-xl" />,
      action: () =>
        window.open("https://github.com/AvusalaChetan", "_blank", "noreferrer"),
      className:
        "bg-[#C9922A] text-[#0D0D0D] hover:bg-[#D4A843] transition-colors duration-200",
    },
    {
      text: "Resume",
      icon: <FaFileLines className="text-lg" />,
      action: () => {
        window.open('/pdf/resume.pdf')
      },
      className:
        "border border-[rgba(255,255,255,0.07)] text-[#FFFFFF] hover:border-[#C9922A] hover:bg-[rgba(201,146,42,0.08)] transition-all duration-200",
    },
    {
      text: "LinkedIn",
      icon: <FaLinkedin className="text-lg" />,
      action: () =>
        window.open(
          "https://www.linkedin.com/in/avusalachetan/",
          "_blank",
          "noreferrer",
        ),
      className:
        "border border-[rgba(255,255,255,0.07)] text-[#FFFFFF] hover:border-[#C9922A] hover:bg-[rgba(201,146,42,0.08)] transition-all duration-200",
    },
  ];

  return (
    <>
      <div id="about" className="p-10    w-full h-[85%] flex flex-col gap-8 items-start justify-center  font-sans text-[#FFFFFF]">
        <div className="flex flex-col gap-6 max-w-3xl">
          <div>
            <Bage text={"Open to Internships"} />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-5xl font-bold tracking-tight text-[#FFFFFF]">
              Avusala Chetan
            </h1>
            <span className="text-5xl font-semibold text-[#C9922A] tracking-wide">
              MERN Stack Developer
            </span>
          </div>
          <div>
            <div className="text-md  leading-relaxed text-[rgba(255,255,255,0.45)] font-medium max-w-xl">
              <p>
                I build full-stack web applications with React, Node.js,
                MongoDB,
              </p>
              <p>
                and real-time features. Published an open-source CLI tool on
                npm.
              </p>
              <p>Currently in final year B.Tech, ECE — Hyderabad.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            {buttonsConfig.map((btn, index) => (
              <Button
                key={index}
                text={btn.text}
                action={btn.action}
                className={btn.className}
              >
                {btn.icon} {btn.text}
              </Button>
            ))}
          </div>
        </div>

        <div className="w-[80%] border-t border-[rgba(255,255,255,0.07)] pt-8 mt-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="">
              <div
                className={`text-3xl font-bold ${
                  stat.isHighlighted ? "text-[#C9922A]" : "text-[#FFFFFF]"
                }`}
              >
                {stat.value}

                {stat.suffix && (
                  <span className="text-xs font-normal text-zinc-300 ml-1">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <div className="text-sm text-[rgba(255,255,255,0.35)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
