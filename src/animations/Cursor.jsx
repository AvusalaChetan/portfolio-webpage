import React, { Children, useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = ({ Children }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursorRef.current, {
        x: clientX - 10,
        y: clientY - 70,
        duration: 1,
        delay: 0,
        ease: "power4.out",
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
        className="fixed  bg-white w-[20px] h-[20px]  rounded-full pointer-events-none mix-blend-difference"
      ></div>
    </>
  );
};

export const HoverBehaviour = ({ children, scale, border, bgc,w,h,br }) => {
  const mouseEnter = (scale, border, bgc,w,h,br) => {
    gsap.to("#cursor", {
      scale: scale,
      duration: 0.3,
      border: border,
      backgroundColor: bgc,
      width:w,
      height:h,
      borderRadius:br,
    });
  };
  const mouseLeave = () => {
    gsap.to("#cursor", {
      scale: 1,
      duration: 0.3,
      border: "none",
      backgroundColor: "white",
      width:"20px",
      height:"20px",
      borderRadius:'50%'
    });
  };

  return (
    <div
      onMouseEnter={() => {
        mouseEnter(scale, border, bgc,w,h,br);
      }}
      onMouseLeave={() => {
        mouseLeave(scale, border, bgc);
      }}
      className=""
    >
      {children}
    </div>
  );
};

export default Cursor;
