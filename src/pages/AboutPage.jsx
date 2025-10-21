import React from "react";
import H1 from "../components/H1";

const AboutPage = () => {
  return (
    <main
      id="about"
      className="bg-black/90 text-white min-h-screen w-full "
      aria-label="About section"
    >
          <H1 text={"About Me"} color={'white'}/>
      <div className="max-w-4xl mx-auto my-8 space-y-10 flex items-start justify-around flex-col ">

        <section aria-labelledby="about-intro" className="space-y-3">
          <p className="text-lg">
            I'm Avusala Chetan — B.Tech, 3rd year, studying Electronics &
            Communication Engineering. I'm curious, detail-oriented and enjoy
            turning ideas into working systems.
          </p>
        </section>

        <section aria-labelledby="about-skills" className="space-y-3">
          <h3 id="about-skills" className="text-xl font-semibold underline">
            What I Work On
          </h3>
          <p className="text-base">
            I focus on embedded systems and IoT, and also build web Frontends or
            the MERN stack.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-base">
            <li>Embedded C, Microcontrollers (ARM/AVR), RTOS basics</li>
            <li>Arduino Uno and Arduino Uno programming</li>
            <li>IoT: sensors, MQTT,STM32, ESP32 workflows</li>
            <li>Frontend & MERN: React, Node, Express, MongoDB</li>
          </ul>
        </section>

        <section aria-labelledby="about-goals" className="space-y-3">
          <h3 id="about-goals" className="text-xl font-semibold underline">
            Current Goals
          </h3>
          <p className="text-base">
            Improving low-level embedded design and firmware testing practices
            while building full-stack side projects. <br />goal: join the
            semiconductor/embedded systems industry.
          </p>
        </section>

        <section aria-labelledby="about-personal" className="space-y-3">
          <h3 id="about-personal" className="text-xl font-semibold underline">
            A Bit More About Me
          </h3>
          <p className="text-base">
            I enjoy collaborative problem solving, learning new stacks, and
            balancing hardware work with web development. Outside of tech I like
            reading and tinkering with small hardware projects.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;