import {useRef, useState, useEffect} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const CATEGORY_META = {
  language: {label: "Languages", accent: "#f59e0b", number: "01"},
  backend: {label: "Backend", accent: "#10b981", number: "02"},
  frontend: {label: "Frontend", accent: "#0ea5e9", number: "03"},
  softskills: {label: "Soft Skills", accent: "#a78bfa", number: "04"},
};

const CATEGORIES = ["language", "backend", "frontend", "softskills"];

const Skills = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/json/skills.json")
      .then((r) => r.json())
      .then(setSkills);
  }, []);

  useGSAP(() => {
    if (!skills.length) return;

    const tl = gsap.timeline({defaults: {ease: "expo.out"}});

    tl.from(titleRef.current, {y: 50, opacity: 0, duration: 0.8})
      .from(
        cardsRef.current.filter(Boolean),
        {
          y: 60,
          opacity: 0,
          scale: 0.94,
          duration: 0.6,
          stagger: 0.1,
          clearProps: "transform,opacity",
        },
        "-=0.4",
      )
      .from(
        containerRef.current?.querySelectorAll(".skill-icon"),
        {
          scale: 0,
          opacity: 0,
          duration: 0.35,
          stagger: 0.03,
          ease: "back.out(2)",
          clearProps: "transform,opacity",
        },
        "-=0.3",
      );
  }, [skills]);

  const handleIconEnter = (e) => {
    gsap.to(e.currentTarget, {
      y: -8,
      scale: 1.18,
      duration: 0.25,
      ease: "back.out(2)",
    });
    gsap.to(e.currentTarget.querySelector(".icon-glow"), {
      opacity: 1,
      scale: 1.3,
      duration: 0.25,
    });
  };
  const handleIconLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: "elastic.out(1,0.4)",
    });
    gsap.to(e.currentTarget.querySelector(".icon-glow"), {
      opacity: 0,
      scale: 1,
      duration: 0.3,
    });
  };
  const handleCardEnter = (e, accent) => {
    gsap.to(e.currentTarget, {
      y: -6,
      boxShadow: `0 20px 60px ${accent}25, inset 0 1px 0 rgba(255,255,255,0.07)`,
      duration: 0.35,
      ease: "power2.out",
    });
  };
  const handleCardLeave = (e, accent) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: `0 0 40px ${accent}10, inset 0 1px 0 rgba(255,255,255,0.04)`,
      duration: 0.4,
      ease: "expo.out",
    });
  };

  return (
    <main
      ref={containerRef}
      className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20"
      style={{
        fontFamily: "'Courier New', monospace",
        background: "#080810",
        backgroundImage: `
          linear-gradient(135deg, #080810 0%, #0c0c18 100%),
          linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 48px 48px, 48px 48px",
      }}
    >
      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <p className="text-white/25 text-[10px] uppercase tracking-[0.5em] mb-3">
            Portfolio · Skills
          </p>
          <h1
            className="text-white font-black leading-none"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 5rem)",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              letterSpacing: "-0.02em",
            }}
          >
            Tech Stack
          </h1>
          <div
            className="mx-auto mt-4 h-px w-24"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            }}
          />
        </div>

        {/* Skeleton while loading */}
        {!skills.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CATEGORIES.map((cat) => (
              <div
                key={cat}
                className="rounded-2xl animate-pulse"
                style={{background: "rgba(255,255,255,0.04)", minHeight: 240}}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CATEGORIES.map((cat, colIdx) => {
              const meta = CATEGORY_META[cat];
              const catSkills = skills.filter((s) => s.category === cat);

              return (
                <div
                  key={cat}
                  ref={(el) => (cardsRef.current[colIdx] = el)}
                  className="flex flex-col rounded-2xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: `1px solid ${meta.accent}25`,
                    boxShadow: `0 0 40px ${meta.accent}10, inset 0 1px 0 rgba(255,255,255,0.04)`,
                  }}
                  onMouseEnter={(e) => handleCardEnter(e, meta.accent)}
                  onMouseLeave={(e) => handleCardLeave(e, meta.accent)}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p
                        className="text-[10px] uppercase tracking-[0.35em] mb-1"
                        style={{color: meta.accent, opacity: 0.6}}
                      >
                        {meta.number}
                      </p>
                      <h2
                        className="font-black leading-none"
                        style={{
                          color: meta.accent,
                          fontSize: "1.1rem",
                          fontFamily: "Georgia, serif",
                        }}
                      >
                        {meta.label}
                      </h2>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
                      style={{
                        background: `${meta.accent}15`,
                        color: meta.accent,
                      }}
                    >
                      {catSkills.length}
                    </div>
                  </div>

                  <div
                    className="mb-5 h-px w-full"
                    style={{
                      background: `linear-gradient(90deg, ${meta.accent}40, transparent)`,
                    }}
                  />

                  <div className="flex flex-wrap gap-4 justify-start">
                    {catSkills.map((skill) =>
                      skill.isSoftSkill ? (
                        <span
                          key={skill.name}
                          className="skill-icon px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider cursor-default"
                          style={{
                            background: `${meta.accent}15`,
                            color: meta.accent,
                            border: `1px solid ${meta.accent}30`,
                          }}
                          onMouseEnter={(e) =>
                            gsap.to(e.currentTarget, {
                              scale: 1.1,
                              y: -3,
                              duration: 0.25,
                              ease: "back.out(2)",
                            })
                          }
                          onMouseLeave={(e) =>
                            gsap.to(e.currentTarget, {
                              scale: 1,
                              y: 0,
                              duration: 0.35,
                              ease: "elastic.out(1,0.4)",
                            })
                          }
                        >
                          {skill.name}
                        </span>
                      ) : (
                        <div
                          key={skill.name}
                          className="skill-icon relative flex flex-col items-center gap-1.5 cursor-pointer"
                          style={{width: 52}}
                          onMouseEnter={handleIconEnter}
                          onMouseLeave={handleIconLeave}
                        >
                          <div
                            className="icon-glow absolute inset-0 rounded-full blur-md opacity-0"
                            style={{
                              background: meta.accent,
                              transform: "scale(0.8)",
                              zIndex: 0,
                            }}
                          />
                          <div
                            className="relative z-10 flex items-center justify-center w-11 h-11 rounded-xl"
                            style={{
                              background: skill.bgRounded
                                ? "rgba(255,255,255,0.9)"
                                : `${meta.accent}10`,
                              border: `1px solid ${meta.accent}20`,
                            }}
                          >
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-7 h-7"
                              loading="lazy"
                            />
                          </div>
                          <span
                            className="text-[9px] text-center leading-tight font-semibold uppercase tracking-wide"
                            style={{color: "rgba(255,255,255,0.4)"}}
                          >
                            {skill.name}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <p className="text-center mt-12 text-[10px] uppercase tracking-[0.4em] text-white/15">
          Always learning · Always building
        </p>
      </div>
    </main>
  );
};

export default Skills;
