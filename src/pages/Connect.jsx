import gsap from "gsap";
import {useEffect, useState} from "react";
import {FaLinkedinIn, FaGithub, FaXTwitter, FaInstagram} from "react-icons/fa6";
const Connect = () => {
  const [connect, setConnect] = useState([]);
  useEffect(() => {
    fetch("/json/contact.json")
      .then((res) => res.json())
      .then((data) => setConnect(data));
  }, []);

  const onMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: "1.1",
      duration: 0.2,
      ease: "power1.inOut",
      boxShadow: "1px 1px 3px gray inset",
    });
  };
  const onMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: "1",
      duration: 0.2,
      ease: "power1.inOut",
      boxShadow: "1px 1px 3px gray ",
    });
  };

  // Map icon string to React component
  const iconMap = {
    linkedin: <FaLinkedinIn />,
    github: <FaGithub />,
    x: <FaXTwitter />,
    instagram: <FaInstagram />,
  };

  return (
    <>
      <main className="h-screen w-screen flex items-center justify-center gap-15 flex-col">
        <h1 className="capitalize text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">
          connect with me ?
        </h1>{" "}
        <div className="flex gap-4 ">
          {connect.map((item) => (
            <div
              key={item.title}
              className="contact bg-white/40 rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg inset-11  group"
              style={{boxShadow: "1px 1px 3px gray "}}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <a
                className="text-4xl bg-white p-1.5 rounded-2xl "
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
              >
                {iconMap[item.title?.toLowerCase()]}
              </a>
              <span
                className="absolute bottom-10 left-1/2
                 -translate-x-1/2 px-2 py-1 bg-black
                  text-white text-xs rounded opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100"
                style={{whiteSpace: "nowrap", zIndex: 10}}
              >
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Connect;
