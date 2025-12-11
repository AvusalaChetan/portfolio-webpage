import H1 from "../components/H1";
import Card from "../components/Card";
import { HoverBehaviour } from "../animations/Cursor";
import myProject from "../pages/json/projects.json";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const prjRef = useRef(null)
  return (
    <>
      <section
        id={"projects"}
        className="min-h-screen w-full bg-black text-white py-6"
      >
        <H1 text={"my Projects"} color={"white"} />
        <div className="flex items-center justify-center mt-6 gap-4">
      <Card />
        </div>
      </section>
    </>
  );
};

const Stickcard = () => {
 

  return (
    <div className="w-[80%] ">
      {myProject.map((item, idx) => {
        return (
          <main
            key={idx}
            className="card  w-[80%] min-h-[calc(100vh-200px)] bg-purple-700 mx-auto border my-6"
          >
            <div className="text-center capitalize">{item.projectName}</div>
          </main>
        );
      })}
    </div>
  );
};

{
  /*  <div>
        img
      </div>
      <div>
        proj name
      </div>
      <div> 
        link 
      </div> */
}

export default Projects;






