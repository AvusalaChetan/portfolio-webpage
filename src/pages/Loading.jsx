import gsap from "gsap";
import {useEffect, useRef, useState} from "react";
import { BsHandIndex } from "react-icons/bs";

const Loading = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const lockRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const getRandomAngle = () => {
      const min = 120;
      const max = 340;
      const angle = Math.floor(Math.random() * (max - min + 1)) + min;
      return Math.random() < 0.5 ? angle : -angle;
    };

    const animateOuter = () => {
      gsap.to(outerRef.current, {
        rotation: `+=${getRandomAngle()}`,
        duration: gsap.utils.random(1.2, 2.2),
        ease: "power1.inOut",
        onComplete: animateOuter, 
      });
    };

    const animateInner = () => {
      gsap.to(outerRef.current, {
        rotation: `-=${getRandomAngle()}`,
        duration: gsap.utils.random(1.2, 2.2),
        ease: "power1.inOut",
        onComplete: animateInner,
      });
    };

    animateOuter();
    animateInner();

    return () => {
      gsap.killTweensOf([outerRef.current]);
    };
  }, []);

  // useEffect(() => {
  //   const el = lockRef.current;
  //   if (!el) return;

  //   el.muted = true;
  //   el.play().catch(() => {});
  // }, []);

  const handlePlay = () => {
    setStarted(true);
    lockRef.current.muted = false;
    lockRef.current.play();
  };

  useEffect(() => {
    (()=>handlePlay())()
  }, [started])
  

  const numbers = Array.from({length: 20}, (_, i) => i * 5);

  const radius = 80;

  return (
    <main
      onClick={handlePlay}
      className="w-screen h-screen"
      style={{background: "var(--bg-2)"}}
    >
      <audio
        ref={lockRef}
        src="/music/lock.wav"
        autoPlay
        playsInline
        loop
        muted
        preload="auto"
      />
      <div className="h-full w-full flex flex-col items-center justify-center gap-8">
        <div className="relative flex items-center justify-center">
          <div
            className="absolute w-72 h-72 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
              opacity: 0.4,
            }}
          />

          <svg
            ref={outerRef}
            width="300"
            height="300"
            viewBox="0 0 220 220"
            className="absolute z-10"
          >
            {numbers.map((num, i) => {
              const angle = (i / numbers.length) * 2 * Math.PI - Math.PI / 2;
              const x = 110 + radius * Math.cos(angle);
              const y = 110 + radius * Math.sin(angle);
              const tickX1 = 110 + (radius + 10) * Math.cos(angle);
              const tickY1 = 110 + (radius + 10) * Math.sin(angle);
              const tickX2 = 110 + (radius + 16) * Math.cos(angle);
              const tickY2 = 110 + (radius + 16) * Math.sin(angle);

              return (
                <g key={num}>
                  <line
                    x1={tickX1}
                    y1={tickY1}
                    x2={tickX2}
                    y2={tickY2}
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                    opacity="0.6"
                  />

                  <text
                    x={x}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="9"
                    fill="var(--text)"
                    opacity="0.8"
                    transform={`rotate(${(i / numbers.length) * 360 + 90}, ${x}, ${y})`}
                  >
                    {num}
                  </text>
                </g>
              );
            })}

            <circle
              cx="110"
              cy="110"
              r="105"
              fill="none"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <circle
              cx="110"
              cy="110"
              r="60"
              fill="none"
              stroke="var(--border)"
              strokeWidth="1"
            />
          </svg>

          <div
            ref={innerRef}
            className="w-24 h-24 rounded-full flex items-center justify-center z-10 relative"
            style={{
              background: `radial-gradient(circle at 40% 40%, var(--bg-3), var(--bg))`,
              border: "2px solid var(--border-hover)",
              boxShadow: `0 0 20px var(--accent-glow), inset 0 2px 4px rgba(0,0,0,0.5)`,
            }}
          >
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              className="absolute"
            >
              {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * 2 * Math.PI;
                const x1 = 48 + 36 * Math.cos(angle);
                const y1 = 48 + 36 * Math.sin(angle);
                const x2 = 48 + 42 * Math.cos(angle);
                const y2 = 48 + 42 * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="var(--accent)"
                    strokeWidth="1.5"
                    opacity="0.5"
                  />
                );
              })}
            </svg>
            <div
              className="w-1 h-4 rounded-full absolute top-0"
              style={{background: "var(--accent)"}}
            />
          </div>

          <div
            className="w-56 h-56 rounded-full absolute"
            style={{
              border: "3px solid var(--border)",
              boxShadow: `0 0 30px var(--accent-glow)`,
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default Loading;
