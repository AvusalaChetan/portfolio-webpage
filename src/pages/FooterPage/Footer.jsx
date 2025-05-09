import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import MagnetEffect from "../../effects/MagnetEffect";
import Wave from 'react-wavify';
import './Footer.css'
const Footer = () => {
  const socilaMedia = [
    {
      href: "mailto:chetanavusala@gmail.com",
      icon: <FaEnvelope className="text-4xl text-white" />,
      bg: "bg-teal-500",
    },
    {
      href: "https://www.linkedin.com/in/avusala-chetan-73a697312/",
      icon: <FaLinkedin className="text-4xl text-white" />,
      bg: "bg-blue-600",
    },
    {
      href: "https://github.com/AvusalaChetan",
      icon: <FaGithub className="text-4xl text-white" />,
      bg: "bg-gray-800",
    },
    {
      href: "https://instagram.com/your-profile",
      icon: <FaInstagram className="text-4xl text-white" />,
      bg: "bg-pink-500",
    },
    {
      href: "https://twitter.com/your-profile",
      icon: <FaSquareXTwitter className="text-4xl text-white" />,
      bg: "bg-blue-400",
    },
  ]

  return (
    <>
      {/* Upside-down Wave */}
    

      {/* Main Footer Content */}
      <div className=" relative h-[100vh] flex items-center justify-center flex-col overflow-hidden">
      <div className="relative w-full m-auto h-full  overflow-hidden ">
        <Wave
          fill="" //0f172a
          paused={false}
          options={{
            height: 80,
            amplitude: 100,
            speed: 0.2,
            points: 6,
          }}
          className="w-full rotate-360 scale-x-110  h-full absolute"
          style={{ transform: "rotate(180deg)" }}
        />
      </div>
        <div className="social-media absolute  " id="social-media">
          <h1 className="text-4xl font-bold text-center mb-12 tracking-wide bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
            Connect with Me on Social Media
          </h1>

          <div id="icon-container" className="flex justify-center items-center flex-wrap m-auto gap-8 w-[30vw] sm:w-[60vw]">
            {/* Social Icons */}
            {socilaMedia.map(({ href, icon, bg }, idx) => (
              <MagnetEffect key={idx}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-center text-gray-300"
                >
                  <div
                  id="icon"
                    className={`p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 ${bg}`}
                  >
                    {icon}
                  </div>
                </a>
              </MagnetEffect>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
