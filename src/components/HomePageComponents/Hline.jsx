import gsap from "gsap";
import {useRef} from "react";

const Hline = () => {
  const control = useRef({x: 8, y: 150});
  const pathRef = useRef(null);
  const svgRef = useRef(null);

  const updatePath = () => {
    if (pathRef.current) {
      pathRef.current.setAttribute(
        "d",
        `M8 13 Q${control.current.x} ${control.current.y} 8 287`
      );
    }
  };

  const handleMouseMove = (e) => {
    const rect = svgRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    gsap.to(control.current, {
      x: mouseX,
      y: mouseY,
      duration: 0.15,
      overwrite: true,
      onUpdate: updatePath,
      onComplete: () => {
        gsap.to(control.current, {
          x: 8,
          y: 150,
          duration: 1.2,
          ease: "elastic.out(1,0.3)",
          onUpdate: updatePath,
        });
      },
    });
  };

  const handleMouseLeave = () => {
    gsap.to(control.current, {
      x: 8,
      y: 150,
      duration: 1.2,
      ease: "elastic.out(1,0.3)",
      onUpdate: updatePath,
    });
  };

  return (
    <svg
      ref={svgRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      width="16"
      height="100%"
      viewBox="0 0 16 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{cursor: "pointer",marginTop:'5rem'}}
    >
      <circle cx="8" cy="10" r="3" fill="black" />
      <path
        ref={pathRef}
        d="M8 13 Q8 150 8 287"
        stroke="#222"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="8" cy="286" r="3" fill="black" />
    </svg>
  );
};

export default Hline;
