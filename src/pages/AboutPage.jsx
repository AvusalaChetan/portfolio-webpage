import React from "react";
import H1 from "../components/H1";

const AboutPage = () => {
  return (
    <main
      id="about"
      className="bg-black/90 text-white min-h-screen w-full md:px-3 px-4  lg:px-0 text-justify py-5 "
      aria-label="About section"
    >
      <H1 text={"About Me"} color={"white"} />
      <div className="max-w-4xl mx-auto my-4 space-y-10 flex items-start justify-around flex-col ">
        <section aria-labelledby="about-image" className="space-y-3">
          <h3 id="about-image" className="text-xl font-semibold underline">
            Profile
          </h3>
          <div className="w-full max-w-xs mx-auto">
            <img
            src=""
              alt="Avusala Chetan"
              className="rounded-xl w-full h-auto object-cover shadow-md"
            />
          </div>
        </section>

        <section aria-labelledby="about-education" className="space-y-2 ">
          <h3 id="about-education" className="text-xl font-semibold underline ">
            Education
          </h3>
          <p className="text-base">
            I completed my schooling in 2021 from{" "}
            <span className="font-bold">Sri Sai Vidya Niketan High School</span>{" "}
            with a score of{" "}
            <span className="text-orange-500 font-semibold">90%</span> (Grade:
            9.0). <br />I pursued my Intermediate (MPC) at{" "}
            <span className="font-bold">Sri Chaitanya Junior College</span> and
            graduated in 2023 with{" "}
            <span className="text-orange-500 font-semibold">85%</span>. <br />
            Currently, I'm in my 3rd year of B.Tech in{" "}
            <span className="text-amber-600 font-semibold">
              Electronics and Communication Engineering
            </span>
            .
          </p>
        </section>

        <section aria-labelledby="about-goals" className="space-y-2">
          <h3 id="about-goals" className="text-xl font-semibold underline">
            Career Goals
          </h3>
          <p className="text-base">
            My ambition is to become a skilled{" "}
            <span className="font-bold text-purple-700">
              Embedded Systems Engineer
            </span>{" "}
            in the semiconductor industry. While I currently have hands-on
            experience with{" "}
            <span className="font-semibold text-blue-500">
              Arduino programming
            </span>
            , I'm actively upskilling in areas like microcontrollers, RTOS, and
            low-level firmware development. <br />
             I also have solid experience in{" "}
            <span className="font-semibold text-blue-300">
              MERN stack development
            </span>
            , and have built multiple full-stack projects.
          </p>
        </section>

        <section aria-labelledby="about-path" className="space-y-2">
          <h3 id="about-path" className="text-xl font-semibold underline">
            My Path Forward
          </h3>
          <p className="text-base">
            I'm deeply committed to transitioning into embedded systems.
            Although my current portfolio is mostly web-based, I'm bridging the
            gap by:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-base">
            <li>Building embedded projects using Arduino and ESP32</li>
            <li>Documenting my learning journey and publishing it online</li>
            <li>Contributing to open-source embedded tools and libraries</li>
            <li>Seeking internships and mentorships in embedded domains</li>
          </ul>
          <p className="text-base">
            My MERN stack experience gives me an edge in IoT and full-stack
            integration. I believe this hybrid skill set will help me stand out
            in embedded system roles that require both hardware and software
            fluency.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
