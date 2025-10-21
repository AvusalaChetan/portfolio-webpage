import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Floating = ({ children ,mt}) => {
  const floatingRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      floatingRef.current,
      {
        y: -0.5,
        duration: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      },
      {
        y: 2,
        duration: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
  }, []);

  return <div 
  style={{marginTop:mt}}
  ref={floatingRef}>{children}</div>;
};

export default Floating;
