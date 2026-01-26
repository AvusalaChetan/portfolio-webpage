import Video from "../components/HomePageComponents/Video";
import Hline from "../components/HomePageComponents/Hline";
import Contact from "../components/HomePageComponents/Contact";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";

const HomePage = () => {
  const roleRef = useRef(null);
  const nameRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(nameRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "linear",
    });
    tl.from(roleRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-screen">
      <Video />
      <div className="  absolute bg-transparent top-0 w-full h-full flex items-center justify-between">
        <aside className="left  py-6 w-[6%] h-full  items-start justify-center gap-13 flex-col hidden lg:flex">
          <Hline />
          <Contact />
        </aside>

        <div className="center text-center flex flex-col items-center justify-center lg:-mt-20 sm:m-0 h-64 md:h-80 lg:h-90 w-full max-w-2xl mx-auto px-4 py-6">
          <p ref={nameRef} className="text-center text-2xl capitalize">
            I'm a.chetan
          </p>
          <h1 ref={roleRef} className="text-6xl  ">
            AI-MERN DEVELOPER
          </h1>
        </div>

        <aside className="right hidden lg:flex h-full w-[6%] items-center justify-end relative">
          <div className=" absolute -right-18 top-1/2 -translate-y-1/2">
            <h6 className=" uppercase tracking-wider  rotate-270 text-center whitespace-nowrap inline-block text-xl ">
              avusala chetan
            </h6>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
