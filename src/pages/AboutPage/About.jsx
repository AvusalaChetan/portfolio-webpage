import  { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './About.css'
const profilePhoto = "/images/profile-photo.jpg"; 

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.section
      id="container"
      className="sm:w-[100vw] sm:m-0 lg:m-auto lg:w-full "
    >
      <div id="content" className="max-w-7xl mx-auto">
        <h2 id="heading" className="text-4xl font-bold text-white mb-6 text-center ">
          <motion.span className="text-purple-400">About</motion.span> <span className="text-white"> Me</span>
        </h2>

        <div id="wrapper" className="flex flex-col md:flex-row items-center gap-12">
          <div
            id="profile-img"
            className="flex-shrink-0 rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
          >
            <img
              src={profilePhoto}
              alt="Profile"
              className="rounded-full border-2 border-purple-400 shadow-inner w-48 h-48 md:w-64 md:h-64 object-cover "
            />
          </div>

          <div id="about-text" className="text-lg leading-relaxed">
            <p id="paragraph-1" className="mb-4 ">
  Hello! I'm <span className="text-purple-400 font-semibold">Chetan</span>, a
  driven full-stack developer with a strong passion for building elegant and
  scalable web applications. I love transforming ideas into reality using modern
  technologies and clean, maintainable code.
</p>
<p id="paragraph-2" className="mb-4">
  My main stack is <span className="text-purple-400">React.js</span>{' '},
  <span className="text-purple-400">Node.js</span>{' '},
  <span className="text-purple-400">Express.js</span>{' '}, and {' '}
  <span className="text-purple-400">MongoDB</span> (MERN), and i'am also
  comfortable with <span className="text-purple-400">JavaScript</span>{' '},
  <span className="text-purple-400">Tailwind CSS</span>{' '}, and <span className="text-purple-400 uppercase">restfull api</span>{' '}. From
  responsive frontends to robust backends, I enjoy working across the full web
  development spectrum to craft seamless user experiences.
</p>
<p id="paragraph-3" className="mb-4">
  I'm constantly learning new tools and frameworks such as
  <span className="text-purple-400">Next.js</span> etc... to stay ahead in the
  tech world. I love solving real-world problems, collaborating with innovative
  teams, and delivering products that make an impact. Let’s build something
  amazing together!
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
