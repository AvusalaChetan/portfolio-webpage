import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Loading = () => {
  const loadingRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      loadingRef.current,
      {opacity: 0, scale: 0.8},
      {opacity: 1, scale: 1, duration: 1.2, ease: "power2.out"},
    );
    tl.from(".dot", {opacity: 0,
      repeat:-1,
      stagger: 0.2});
  }, []);

  const dot = (
    <>
      <span className="dot w-2 h-2 bg-white"></span>
    </>
  );

  return (
    <div
      ref={loadingRef}
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Orbitron, monospace",
        fontSize: "2.5rem",
        letterSpacing: "0.2em",
        flexDirection: "column",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
        rel="stylesheet"
      />
      Loading{" "}
      <span ref={dotRef} className="display flex gap-2">
        {dot} {dot} {dot}
      </span>
    </div>
  );
};

export default Loading;
