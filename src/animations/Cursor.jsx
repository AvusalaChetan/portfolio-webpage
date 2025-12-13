import  {useEffect, useRef} from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const {clientX, clientY} = event;

      gsap.to(cursorRef.current, {
        x: clientX+5,
        y: clientY-100+10,
        xPercent: -50,
        yPercent: -50,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(cursorDotRef.current, {
        x: clientX+5,
        y: clientY-100+10,
        xPercent: -50,
        yPercent: -50,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        id="cursor"
        className="fixed w-10 h-10 border-2 border-white rounded-full pointer-events-none mix-blend-difference z-999"
      />

      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none mix-blend-difference z-999"
      />
    </>
  );
};

export const HoverBehaviour = ({children, scale, border, bgc, w, h, br}) => {
  const mouseEnter = () => {
    const colorValue = typeof bgc === "function" ? bgc() : bgc;

    gsap.to("#cursor", {
      scale: scale || 1.8,
      duration: 0.4,
      border: border || "2px solid white",
      backgroundColor: colorValue || "rgba(255, 255, 255, 0.1)",
      width: w || "50px",
      height: h || "50px",
      borderRadius: br || "50%",
      rotate: 180,
      ease: "elastic.out(1, 0.4)",
    });
  };

  const mouseLeave = () => {
    gsap.to("#cursor", {
      scale: 1,
      duration: 0.5,
      border: "2px solid white",
      backgroundColor: "transparent",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      rotate: 0,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      {children}
    </div>
  );
};

export default Cursor;
