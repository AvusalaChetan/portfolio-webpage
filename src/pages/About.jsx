import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SKILLS = ["MERN Stack", "React", "Node.js", "MongoDB", "Express", "UI/UX", "B2B Solutions"];

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const lineRef = useRef(null);
  const bioRef = useRef(null);
  const tagsRef = useRef([]);
  const statsRef = useRef([]);
  const skillsTrackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline — entrance
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Image drops in with squash
      tl.fromTo(imageRef.current,
        { y: -80, scale: 0.5, opacity: 0, rotation: -8 },
        { y: 0, scale: 1, opacity: 1, rotation: 0, duration: 0.9, ease: "elastic.out(1,0.5)" }
      )
      .fromTo(nameRef.current,
        { x: -60, opacity: 0, skewX: -10 },
        { x: 0, opacity: 1, skewX: 0, duration: 0.7 },
        "-=0.4"
      )
      .fromTo(lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(bioRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.2"
      )
      .fromTo(statsRef.current,
        { y: 40, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(2)" },
        "-=0.3"
      )
      .fromTo(tagsRef.current,
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.07, ease: "back.out(1.5)" },
        "-=0.2"
      );

      // Infinite marquee for skills
      if (skillsTrackRef.current) {
        const track = skillsTrackRef.current;
        const totalWidth = track.scrollWidth / 2;
        gsap.to(track, {
          x: `-=${totalWidth}`,
          duration: 18,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        });
      }

      // Floating animation on image
      gsap.to(imageRef.current, {
        y: -10,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleImageHover = (entering) => {
    gsap.to(imageRef.current, {
      scale: entering ? 1.08 : 1,
      rotation: entering ? 3 : 0,
      duration: 0.4,
      ease: "back.out(2)",
    });
  };

  const handleTagHover = (el, entering) => {
    gsap.to(el, {
      scale: entering ? 1.12 : 1,
      y: entering ? -4 : 0,
      duration: 0.25,
      ease: "back.out(2)",
    });
  };

  return (
    <main
      ref={containerRef}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0f 0%, #0f0a1a 50%, #0a0f1a 100%)",
        fontFamily: "'Courier New', monospace",
        position: "relative",
        overflow: "hidden",
        padding: "60px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Background texture */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `radial-gradient(circle at 20% 30%, #7c3aed18 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, #0ea5e918 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, #10b98110 0%, transparent 60%)`,
      }} />
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: "50px 50px",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 780 }}>

        {/* Top label */}
        <div style={{
          textAlign: "center", fontSize: 10, letterSpacing: "0.4em",
          color: "#10b981", marginBottom: 40, opacity: 0.8,
          textTransform: "uppercase",
        }}>
          ◈ portfolio · about · 2025 ◈
        </div>

        {/* Hero card */}
        <div style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 28,
          padding: "48px 40px",
          backdropFilter: "blur(20px)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
          marginBottom: 20,
        }}>
          <div style={{ display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap" }}>

            {/* Image */}
            <div
              ref={imageRef}
              onMouseEnter={() => handleImageHover(true)}
              onMouseLeave={() => handleImageHover(false)}
              style={{
                position: "relative", flexShrink: 0, cursor: "pointer",
              }}
            >
              <div style={{
                position: "absolute", inset: -3, borderRadius: "50%",
                background: "linear-gradient(135deg, #10b981, #7c3aed, #0ea5e9)",
                zIndex: 0,
              }} />
              <div style={{
                position: "absolute", inset: -8, borderRadius: "50%",
                background: "linear-gradient(135deg, #10b98140, #7c3aed40)",
                filter: "blur(8px)",
                zIndex: -1,
              }} />
              <img
                src="/images/me.jpeg"
                alt="Avusala Chetan"
                style={{
                  width: 110, height: 110, borderRadius: "50%",
                  objectFit: "cover", position: "relative", zIndex: 1,
                  border: "3px solid #0a0a0f",
                }}
              />
              <div style={{
                position: "absolute", bottom: 4, right: 4,
                width: 18, height: 18, borderRadius: "50%",
                background: "#10b981",
                border: "3px solid #0a0a0f",
                zIndex: 2,
                boxShadow: "0 0 10px #10b981",
              }} />
            </div>

            {/* Name + info */}
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: 11, color: "#10b981", letterSpacing: "0.3em", marginBottom: 6, opacity: 0.8 }}>
                FULL-STACK DEVELOPER
              </div>
              <h1
                ref={nameRef}
                style={{
                  fontSize: "clamp(1.8rem, 5vw, 3rem)",
                  fontWeight: 900,
                  color: "#fff",
                  margin: "0 0 4px",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                }}
              >
                Avusala Chetan
              </h1>
              <div
                ref={lineRef}
                style={{
                  height: 2, width: "100%", maxWidth: 240,
                  background: "linear-gradient(90deg, #10b981, #7c3aed, transparent)",
                  borderRadius: 2, marginBottom: 12,
                }}
              />
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 12, color: "#888" }}>
                <span>📍 Hyderabad</span>
                <span>🎓 ECE · 3rd Year</span>
                <span style={{ color: "#10b981", fontWeight: 700 }}>CGPA 7.17</span>
              </div>
              <div style={{ marginTop: 8, fontSize: 11, color: "#555", lineHeight: 1.5 }}>
                Malla Reddy Institute of Technology & Science
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
          {[
            { label: "Stack", value: "MERN", color: "#10b981" },
            { label: "Focus", value: "B2B", color: "#7c3aed" },
            { label: "Goal", value: "Full-Stack", color: "#0ea5e9" },
          ].map((s, i) => (
            <div
              key={s.label}
              ref={(el) => (statsRef.current[i] = el)}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${s.color}33`,
                borderRadius: 16,
                padding: "20px 16px",
                textAlign: "center",
                boxShadow: `0 0 30px ${s.color}11`,
                cursor: "default",
              }}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -4, scale: 1.03, duration: 0.3, ease: "back.out(2)", boxShadow: `0 8px 30px ${s.color}33` })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.4, ease: "expo.out", boxShadow: `0 0 30px ${s.color}11` })}
            >
              <div style={{ fontSize: "1.4rem", fontWeight: 900, color: s.color, fontFamily: "Georgia, serif" }}>
                {s.value}
              </div>
              <div style={{ fontSize: 10, color: "#555", letterSpacing: "0.2em", marginTop: 4, textTransform: "uppercase" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bio card */}
        <div
          ref={bioRef}
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: "32px 36px",
            marginBottom: 20,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", top: 0, left: 0,
            width: 4, height: "100%",
            background: "linear-gradient(180deg, #10b981, #7c3aed)",
            borderRadius: "4px 0 0 4px",
          }} />
          <div style={{ fontSize: 10, color: "#10b981", letterSpacing: "0.3em", marginBottom: 16, opacity: 0.7 }}>
            ∷ BIO
          </div>
          <p style={{
            color: "#aaa", lineHeight: 1.85, fontSize: "clamp(0.9rem, 2vw, 1rem)",
            margin: 0,
          }}>
            I'm a <span style={{ color: "#fff", fontWeight: 700 }}>third-year ECE student</span> from{" "}
            <span style={{ color: "#10b981" }}>Hyderabad</span>, passionate about designing and building
            innovative web applications that solve{" "}
            <span style={{ color: "#fff", fontWeight: 700 }}>complex B2B business challenges</span> using
            the MERN stack. I combine creative problem-solving with technical expertise to develop
            intuitive solutions that streamline workflows and drive business value. My goal is to grow as a{" "}
            <span style={{ color: "#7c3aed", fontWeight: 700 }}>Full-Stack Developer</span> and contribute
            to impactful projects.
          </p>
          <p style={{ color: "#0ea5e9", fontSize: 13, marginTop: 20, fontWeight: 600, letterSpacing: "0.05em" }}>
            → Let's connect and create something amazing together.
          </p>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
          {[
            { label: "React", color: "#0ea5e9" },
            { label: "Node.js", color: "#10b981" },
            { label: "MongoDB", color: "#4ade80" },
            { label: "Express", color: "#888" },
            { label: "UI/UX Design", color: "#a78bfa" },
            { label: "B2B Apps", color: "#f59e0b" },
            { label: "Problem Solving", color: "#f43f5e" },
          ].map((tag, i) => (
            <span
              key={tag.label}
              ref={(el) => (tagsRef.current[i] = el)}
              onMouseEnter={(e) => handleTagHover(e.currentTarget, true)}
              onMouseLeave={(e) => handleTagHover(e.currentTarget, false)}
              style={{
                display: "inline-block",
                padding: "7px 16px",
                borderRadius: 100,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: tag.color,
                background: `${tag.color}15`,
                border: `1px solid ${tag.color}40`,
                cursor: "default",
                boxShadow: `0 0 16px ${tag.color}11`,
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Skills marquee */}
        <div style={{
          overflow: "hidden",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "14px 0",
          maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}>
          <div ref={skillsTrackRef} style={{ display: "flex", gap: 32, whiteSpace: "nowrap", width: "max-content" }}>
            {[...SKILLS, ...SKILLS, ...SKILLS, ...SKILLS].map((s, i) => (
              <span key={i} style={{
                fontSize: 11, color: i % 2 === 0 ? "#10b981" : "#555",
                letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700,
              }}>
                ◆ {s}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 32, fontSize: 10, color: "#333", letterSpacing: "0.3em" }}>
          AVUSALA CHETAN · ECE · MALLA REDDY · 2025
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </main>
  );
};

export default About;