import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './About.css'

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.section
      id="container"
      className="bg-neutral-900 text-gray-300 py-16 px-8 md:px-16 lg:px-32"
    >
      <div id="content" className="max-w-7xl mx-auto">
        <h2 id="heading" className="text-4xl font-bold text-white mb-6 text-center">
          <motion.span className="text-teal-400">About</motion.span> Me
        </h2>

        <div id="wrapper" className="flex flex-col md:flex-row items-center gap-12">
          <div
            id="profile-img"
            className="flex-shrink-0 rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
          >
            <img
              src="/src/images/profile-photo.jpg"
              alt="Profile"
              className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
            />
          </div>

          <div id="about-text" className="text-lg leading-relaxed">
            <p id="paragraph-1" className="mb-4">
              Hello! I'm{" "}
              <span className="text-cyan-400 font-semibold">Chetan</span>, a
              passionate and dedicated web developer with a strong focus on
              creating visually stunning and highly functional websites. With a
              deep love for coding and design, I strive to bring ideas to life
              through clean, efficient, and innovative solutions.
            </p>
            <p id="paragraph-2" className="mb-4">
              I specialize in modern web technologies such as{" "}
              <span className="text-cyan-400">React.js</span>,{" "}
              <span className="text-cyan-400">JavaScript</span>, and{" "}
              <span className="text-cyan-400">CSS</span>. My expertise lies in
              building responsive, user-friendly interfaces that provide
              seamless experiences across all devices. I am constantly learning
              and staying up-to-date with the latest trends in web development
              to ensure my work is always cutting-edge.
            </p>
            <p id="paragraph-3" className="mb-4">
              Beyond coding, I enjoy exploring new technologies, solving complex
              problems, and collaborating with creative teams to deliver
              exceptional results. My goal is to not only meet but exceed client
              expectations by delivering projects that are both aesthetically
              pleasing and technically robust.
            </p>
            {!isMobile && (
              <p id="paragraph-4">
                When I'm not coding, you can find me reading, experimenting with
                new tools, or brainstorming ideas for my next project. Let's work
                together to create something amazing!
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
