import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useEffect, useRef, useState } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

gsap.registerPlugin(Draggable);

const iconMap = {
  linkedin: { icon: <FaLinkedinIn />, color: "#0A66C2", glow: "#0A66C2" },
  github: { icon: <FaGithub />, color: "#f0f0f0", glow: "#ffffff" },
  x: { icon: <FaXTwitter />, color: "#e7e7e7", glow: "#ffffff" },
  instagram: { icon: <FaInstagram />, color: "#E1306C", glow: "#fd5949" },
};

// Fake fallback data so component renders in isolation
const FALLBACK = [
  { title: "LinkedIn", link: "https://linkedin.com" },
  { title: "GitHub", link: "https://github.com" },
  { title: "X", link: "https://x.com" },
  { title: "Instagram", link: "https://instagram.com" },
];

const TOKEN_SIZE = 96;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const Connect = () => {
  const [connect, setConnect] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const tokenRefs = useRef([]);
  const draggableInstances = useRef([]);
  const originPositions = useRef([]);

  useEffect(() => {
    fetch("/json/contact.json")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => { setConnect(d); setLoading(false); })
      .catch(() => { setConnect(FALLBACK); setLoading(false); });
  }, []);

  // Scatter tokens on mount with stagger
  useEffect(() => {
    if (!connect.length) return;

    const container = containerRef.current;
    const cW = container.offsetWidth;
    const cH = container.offsetHeight;

    const cols = Math.min(connect.length, 4);
    const rows = Math.ceil(connect.length / cols);
    const cellW = cW / cols;
    const cellH = cH / rows;

    tokenRefs.current.forEach((el, i) => {
      if (!el) return;
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = col * cellW + cellW / 2 - TOKEN_SIZE / 2;
      const y = row * cellH + cellH / 2 - TOKEN_SIZE / 2;
      originPositions.current[i] = { x, y };

      gsap.set(el, { x, y, opacity: 0, scale: 0, rotation: randomBetween(-20, 20) });
      gsap.to(el, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.7,
        delay: 0.1 + i * 0.12,
        ease: "elastic.out(1,0.5)",
      });
    });


    draggableInstances.current.forEach((d) => d?.kill());
    draggableInstances.current = tokenRefs.current.map((el, i) => {
      if (!el) return null;
      return Draggable.create(el, {
        type: "x,y",
        bounds: container,
        inertia: false,
        onPress() {
          gsap.to(el, { scale: 1.18, duration: 0.15, ease: "power2.out" });
          gsap.to(el.querySelector(".neon-ring"), { opacity: 1, scale: 1.3, duration: 0.2 });
        },
        onRelease() {
          gsap.to(el, { scale: 1, duration: 0.4, ease: "elastic.out(1,0.4)" });
          gsap.to(el.querySelector(".neon-ring"), { opacity: 0.4, scale: 1, duration: 0.3 });
          // Wobble
          gsap.fromTo(el, { rotation: -8 }, { rotation: 0, duration: 0.6, ease: "elastic.out(1,0.3)" });
        },
        onDrag() {
          gsap.to(el.querySelector(".trail"), { opacity: 0.7, duration: 0.1 });
        },
        onDragEnd() {
          gsap.to(el.querySelector(".trail"), { opacity: 0, duration: 0.4 });
        },
      })[0];
    });

    return () => draggableInstances.current.forEach((d) => d?.kill());
  }, [connect]);

  const handleDoubleClick = (i) => {
    const el = tokenRefs.current[i];
    if (!el) return;
    const { x, y } = originPositions.current[i];
    // Kill draggable momentum, snap home
    gsap.to(el, {
      x, y, rotation: 0, scale: 1,
      duration: 0.8,
      ease: "elastic.out(1,0.45)",
    });
    gsap.fromTo(el, { filter: "brightness(3)" }, { filter: "brightness(1)", duration: 0.6 });
    // Reset Draggable internal transform state
    draggableInstances.current[i]?.update();
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden relative"
      style={{
        background: "radial-gradient(ellipse at 30% 20%, #0f0f1a 0%, #050508 100%)",
        fontFamily: "'Courier New', monospace",
      }}
    >
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          animation: "gridScroll 8s linear infinite",
        }}
      />
      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "radial-gradient(ellipse at 50% 50%, transparent 40%, #000 100%)",
        pointerEvents: "none",
      }} />

      <style>{`
        @keyframes gridScroll {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }
        @keyframes pulse-ring {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.08); }
        }
        @keyframes title-glow {
          0%, 100% { text-shadow: 0 0 20px #7fffb2, 0 0 60px #7fffb280; }
          50% { text-shadow: 0 0 35px #7fffb2, 0 0 100px #7fffb250, 0 0 4px #fff; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; } 50% { opacity: 0; }
        }
        .token-card { position: absolute; user-select: none; }
        .token-card:active { cursor: grabbing; }
        .token-card { cursor: grab; }
      `}</style>

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", marginBottom: 24 }}>
        <div style={{
          fontSize: 11, letterSpacing: "0.35em", color: "#7fffb2",
          marginBottom: 8, opacity: 0.7, textTransform: "uppercase",
        }}>
          — drag them around —
        </div>
        <h1 style={{
          fontSize: "clamp(2.2rem, 6vw, 4rem)",
          fontWeight: 900,
          color: "#fff",
          letterSpacing: "-0.02em",
          animation: "title-glow 3s ease-in-out infinite",
          margin: 0,
          lineHeight: 1.1,
        }}>
          Let's Connect
          <span style={{ animation: "blink 1.1s step-end infinite", color: "#7fffb2" }}>_</span>
        </h1>
        <p style={{ color: "#555", fontSize: 13, marginTop: 10, letterSpacing: "0.08em" }}>
          DOUBLE-CLICK TO SNAP BACK · DRAG TO CHAOS
        </p>
      </div>

      {/* Drag arena */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "min(700px, 92vw)",
          height: "min(420px, 60vw, 400px)",
          zIndex: 10,
          borderRadius: 24,
          border: "1px solid rgba(127,255,178,0.1)",
          background: "rgba(127,255,178,0.02)",
          boxShadow: "inset 0 0 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(127,255,178,0.06)",
        }}
      >
        {/* Corner decorations */}
        {["tl","tr","bl","br"].map((c) => (
          <div key={c} style={{
            position: "absolute",
            width: 16, height: 16,
            borderColor: "rgba(127,255,178,0.3)",
            borderStyle: "solid",
            borderWidth: c.includes("t") ? "2px 0 0 2px" : "0 2px 2px 0",
            ...(c === "tl" ? { top: 10, left: 10 } : {}),
            ...(c === "tr" ? { top: 10, right: 10, borderWidth: "2px 2px 0 0" } : {}),
            ...(c === "bl" ? { bottom: 10, left: 10, borderWidth: "0 0 2px 2px" } : {}),
            ...(c === "br" ? { bottom: 10, right: 10, borderWidth: "0 2px 2px 0" } : {}),
          }} />
        ))}

        {loading ? (
          <div style={{ color: "#7fffb2", position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, letterSpacing: "0.2em" }}>
            LOADING...
          </div>
        ) : (
          connect.map((item, i) => {
            const key = item.title?.toLowerCase() ?? "";
            const meta = iconMap[key] ?? { icon: "?", color: "#fff", glow: "#fff" };
            return (
              <div
                key={item.title}
                ref={(el) => (tokenRefs.current[i] = el)}
                className="token-card"
                style={{ width: TOKEN_SIZE, height: TOKEN_SIZE }}
                onDoubleClick={() => handleDoubleClick(i)}
              >
                {/* Neon ring */}
                <div
                  className="neon-ring"
                  style={{
                    position: "absolute", inset: -10,
                    borderRadius: "50%",
                    border: `2px solid ${meta.glow}`,
                    boxShadow: `0 0 18px ${meta.glow}88`,
                    opacity: 0.4,
                    pointerEvents: "none",
                    animation: "pulse-ring 2.5s ease-in-out infinite",
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
                {/* Drag trail */}
                <div
                  className="trail"
                  style={{
                    position: "absolute", inset: 0,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${meta.glow}55 0%, transparent 70%)`,
                    opacity: 0,
                    pointerEvents: "none",
                    transform: "scale(2.5)",
                  }}
                />
                {/* Token body */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    // Only navigate if not dragging
                    if (draggableInstances.current[i]?.isDragging) e.preventDefault();
                  }}
                  style={{
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    width: "100%", height: "100%",
                    borderRadius: "50%",
                    background: `radial-gradient(135deg at 35% 35%, #1e1e2e, #0a0a12)`,
                    border: `2px solid ${meta.color}55`,
                    boxShadow: `0 0 24px ${meta.glow}33, inset 0 1px 0 rgba(255,255,255,0.07)`,
                    color: meta.color,
                    fontSize: 30,
                    textDecoration: "none",
                    position: "relative",
                    zIndex: 2,
                    transition: "box-shadow 0.2s",
                  }}
                  aria-label={`Connect on ${item.title}`}
                >
                  {meta.icon}
                  <span style={{
                    fontSize: 8, letterSpacing: "0.15em",
                    color: meta.color, opacity: 0.7,
                    marginTop: 4, textTransform: "uppercase",
                  }}>
                    {item.title}
                  </span>
                </a>
              </div>
            );
          })
        )}
      </div>

  
      <div style={{ position: "relative", zIndex: 10, marginTop: 20, color: "#333", fontSize: 11, letterSpacing: "0.2em" }}>
        BOUNDED PLAY ZONE 
      </div>
    </section>
  );
};

export default Connect;