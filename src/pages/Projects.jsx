import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const COLORS = [
  { accent: "#10b981", dim: "#10b98120" },
  { accent: "#7c3aed", dim: "#7c3aed20" },
  { accent: "#f59e0b", dim: "#f59e0b20" },
  { accent: "#0ea5e9", dim: "#0ea5e920" },
  { accent: "#f43f5e", dim: "#f43f5e20" },
  { accent: "#a78bfa", dim: "#a78bfa20" },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const containerRef  = useRef(null);
  const trackRef      = useRef(null);
  const titleRef      = useRef(null);
  const counterRef    = useRef(null);
  const progressRef   = useRef(null);
  const xPos          = useRef(0);       // current translated x
  const activeIndex   = useRef(0);

  // Drag state
  const isDragging    = useRef(false);
  const dragStartX    = useRef(0);
  const dragStartPos  = useRef(0);

  useEffect(() => {
    fetch("/json/project.json")
      .then((r) => r.json())
      .then(setProjects);
  }, []);

  // ── Wheel → horizontal scroll ──────────────────────────────
  useEffect(() => {
    if (!projects.length) return;
    const container = containerRef.current;

    const getMaxX = () => {
      const track = trackRef.current;
      if (!track) return 0;
      return -(track.scrollWidth - container.offsetWidth + 80);
    };

    const clamp = (val) => Math.min(0, Math.max(getMaxX(), val));

    const updateUI = (newX) => {
      const maxX     = getMaxX();
      const progress = maxX !== 0 ? newX / maxX : 0;
      const cards    = trackRef.current?.querySelectorAll(".proj-card");
      const total    = cards?.length ?? 0;
      const idx      = Math.round(progress * (total - 1));

      // Progress bar
      gsap.set(progressRef.current, { scaleX: progress });

      // Counter
      if (idx !== activeIndex.current && counterRef.current) {
        activeIndex.current = idx;
        counterRef.current.textContent = `${String(idx + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
        // Dim non-active cards
        cards?.forEach((card, i) => {
          gsap.to(card, {
            scale:   i === idx ? 1.03 : 0.96,
            opacity: i === idx ? 1    : 0.55,
            duration: 0.35, ease: "power2.out",
          });
        });
      }
    };

    const scrollTo = (newX) => {
      const clamped = clamp(newX);
      xPos.current  = clamped;
      gsap.to(trackRef.current, { x: clamped, duration: 0.6, ease: "power3.out" });
      updateUI(clamped);
    };

    // Wheel handler
    const onWheel = (e) => {
      e.preventDefault();
      scrollTo(xPos.current - e.deltaY * 1.5);
    };

    // Pointer drag
    const onPointerDown = (e) => {
      isDragging.current   = true;
      dragStartX.current   = e.clientX;
      dragStartPos.current = xPos.current;
      container.style.cursor = "grabbing";
    };
    const onPointerMove = (e) => {
      if (!isDragging.current) return;
      const delta = e.clientX - dragStartX.current;
      scrollTo(dragStartPos.current + delta);
    };
    const onPointerUp = () => {
      isDragging.current     = false;
      container.style.cursor = "grab";
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [projects]);

  // ── Entrance animation ─────────────────────────────────────
  useGSAP(() => {
    if (!projects.length) return;

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from(titleRef.current, { y: 60, opacity: 0, duration: 0.8 })
      .from(".proj-card", { x: 100, opacity: 0, duration: 0.7, stagger: 0.08 }, "-=0.4");
  }, [projects]);

  return (
    <main
      ref={containerRef}
      className="w-full h-screen overflow-auto flex flex-col"
      style={{
        background: "linear-gradient(135deg, #080810 0%, #0c0c18 100%)",
        fontFamily: "'Courier New', monospace",
        cursor: "grab",
        userSelect: "none",
      }}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] z-50 bg-white/5">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-emerald-400 via-violet-500 to-sky-400 origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      {/* Header */}
      <div className="flex items-end justify-between px-10 pt-10 pb-6 flex-shrink-0">
        <div>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] mb-1">
            Portfolio · Work
          </p>
          <h1
            ref={titleRef}
            className="text-white font-black leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontFamily: "Georgia, serif", fontStyle: "italic", letterSpacing: "-0.02em" }}
          >
            Projects
          </h1>
        </div>

        <div className="text-right">
          <p
            ref={counterRef}
            className="text-white/40 font-bold tabular-nums"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", letterSpacing: "0.05em" }}
          >
            01 / {String(projects.length).padStart(2, "0")}
          </p>
          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] mt-1">
            Scroll or drag →
          </p>
        </div>
      </div>

      {/* Cards track */}
      <div className="flex-1 flex items-center overflow-visible">
        <div
          ref={trackRef}
          className="flex gap-6 px-10 items-center"
          style={{ willChange: "transform" }}
        >
          {projects.map((project, index) => {
            const color = COLORS[index % COLORS.length];
            return (
              <div
                key={project.id}
                className="proj-card flex-shrink-0 flex flex-col overflow-hidden rounded-2xl"
                style={{
                  width: "clamp(300px, 28vw, 420px)",
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${color.accent}30`,
                  boxShadow: `0 0 60px ${color.dim}, inset 0 1px 0 rgba(255,255,255,0.05)`,
                  opacity: index === 0 ? 1 : 0.55,
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0a0a14, #0f0f20)" }}>
                  <img src={project.image} alt={project.title} className="w-full object-contain" style={{ maxHeight: 200 }} />
                  <span
                    className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
                    style={{ background: color.dim, border: `1px solid ${color.accent}50`, color: color.accent }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {project.category && (
                    <span
                      className="absolute top-3 left-3 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: color.dim, border: `1px solid ${color.accent}40`, color: color.accent }}
                    >
                      {project.category}
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: "linear-gradient(to top, #0a0a14, transparent)" }} />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <div className="h-[2px] w-10 rounded-full" style={{ background: color.accent }} />
                  <h2 className="text-white font-bold leading-tight" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)", fontFamily: "Georgia, serif" }}>
                    {project.title}
                  </h2>
                  <p className="text-white/40 text-xs leading-relaxed line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies?.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                        style={{ background: color.dim, color: color.accent, border: `1px solid ${color.accent}25` }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1">
                    {project.highlights?.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] text-white/35">
                        <span style={{ color: color.accent }} className="mt-0.5">▸</span>{h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-2 mt-auto pt-2">
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider"
                        style={{ background: color.accent, color: "#000" }}
                        onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.06, duration: 0.2, ease: "back.out(2)" })}
                        onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider"
                        style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
                        onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.06, duration: 0.2, ease: "back.out(2)" })}
                        onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* End spacer */}
          <div
            className="flex-shrink-0 flex flex-col items-center justify-center rounded-2xl"
            style={{ width: "clamp(200px, 20vw, 280px)", height: 420, border: "1px dashed rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.15)" }}
          >
            <span className="text-3xl mb-3">◈</span>
            <p className="text-xs uppercase tracking-[0.3em]">More coming</p>
            <p className="text-xs uppercase tracking-[0.3em]">soon</p>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 pb-6 flex-shrink-0">
        {projects.map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full" style={{ background: i === 0 ? "#10b981" : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
    </main>
  );
};

export default Projects;