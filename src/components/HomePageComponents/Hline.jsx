import gsap from "gsap";
import { useRef } from "react";

const Hline = () => {
  const control = useRef({ x: 8, y: 150 });
  const pathRef = useRef(null);
  const svgRef = useRef(null);
  const topDotRef = useRef(null);
  const bottomDotRef = useRef(null);
  const glowRef = useRef(null);

  const updatePath = () => {
    if (pathRef.current) {
      pathRef.current.setAttribute(
        "d",
        `M8 13 Q${control.current.x} ${control.current.y} 8 287`
      );
    }
    if (glowRef.current) {
      glowRef.current.setAttribute(
        "d",
        `M8 13 Q${control.current.x} ${control.current.y} 8 287`
      );
    }
  };

  const handleMouseMove = (e) => {
    const rect = svgRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Activate glow + color on tension
    gsap.to([pathRef.current, glowRef.current], {
      attr: { stroke: "#10b981" },
      duration: 0.1,
    });
    gsap.to([topDotRef.current, bottomDotRef.current], {
      attr: { fill: "#10b981" },
      scale: 1.4,
      transformOrigin: "center",
      duration: 0.15,
    });
    gsap.to(glowRef.current, { attr: { strokeOpacity: 0.5 }, duration: 0.1 });

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
          duration: 1.4,
          ease: "elastic.out(1, 0.3)",
          onUpdate: updatePath,
        });
      },
    });
  };

  const handleMouseLeave = () => {
    gsap.to(control.current, {
      x: 8,
      y: 150,
      duration: 1.4,
      ease: "elastic.out(1, 0.3)",
      onUpdate: updatePath,
    });

    // Fade back to white
    gsap.to([pathRef.current, glowRef.current], {
      attr: { stroke: "rgba(255,255,255,0.4)" },
      duration: 0.8,
      delay: 0.4,
    });
    gsap.to(glowRef.current, { attr: { strokeOpacity: 0 }, duration: 0.8, delay: 0.4 });
    gsap.to([topDotRef.current, bottomDotRef.current], {
      attr: { fill: "rgba(255,255,255,0.6)" },
      scale: 1,
      duration: 0.6,
      delay: 0.4,
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
      style={{ cursor: "pointer", marginTop: "5rem" }}
    >
      {/* Glow layer (blurred duplicate) */}
      <path
        ref={glowRef}
        d="M8 13 Q8 150 8 287"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="6"
        strokeOpacity="0"
        fill="none"
        filter="blur(4px)"
      />

      {/* Main line */}
      <path
        ref={pathRef}
        d="M8 13 Q8 150 8 287"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1"
        fill="none"
      />

      {/* Top dot */}
      <circle ref={topDotRef} cx="8" cy="10" r="3" fill="rgba(255,255,255,0.6)" />

      {/* Bottom dot */}
      <circle ref={bottomDotRef} cx="8" cy="286" r="3" fill="rgba(255,255,255,0.6)" />
    </svg>
  );
};

export default Hline;