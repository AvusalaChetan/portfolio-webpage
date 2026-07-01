import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useRef, useEffect } from "react";
import './navbar.css'
const navItems = [
  { id: 1, name: "About",    href: "#about" },
  { id: 2, name: "Skills",   href: "#skills" },
  { id: 3, name: "Projects", href: "#projects" },
  { id: 4, name: "ask me", href: "#askme" },
  { id: 5, name: "Connect",  href: "#connect" },
];

// ── Design tokens (matches your gold + dark system) ──────────────
const T = {
  bg:          "#0D0D0D",
  bgOverlay:   "linear-gradient(135deg, #0D0D0D 0%, #111108 100%)",
  border:      "rgba(255,255,255,0.06)",
  accent:      "#C9922A",   
  accentDim:   "rgba(201,146,42,0.15)",
  text:        "#FFFFFF",
  muted:       "rgba(255,255,255,0.35)",
  ultraMuted:  "rgba(255,255,255,0.12)",
};

const Navbar = () => {
  const [open, setOpen]             = useState(false);
  const [activeSection, setActive]  = useState("home");

  const overlayRef  = useRef(null);
  const navItemsRef = useRef([]);
  const linesRef    = useRef([]);
  const numberRefs  = useRef([]);
  const tlRef       = useRef(null);
  const bar1        = useRef(null);
  const bar2        = useRef(null);
  const bar3        = useRef(null);
  const bars        = [bar1, bar2, bar3];
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []); 

  useGSAP(() => {
    gsap.set(overlayRef.current,  { autoAlpha: 0, display: "none" });
    gsap.set(navItemsRef.current, { y: 60, opacity: 0 });
    gsap.set(linesRef.current,    { scaleX: 0, transformOrigin: "left center" });
    gsap.set(numberRefs.current,  { opacity: 0, x: -10 });

    const tl = gsap.timeline({ paused: true });

    tl.to(overlayRef.current, { display: "flex", autoAlpha: 1, duration: 0.01 })
      .fromTo(
        overlayRef.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "expo.inOut" }
      )
      .to(bar1.current, { y: 8,  rotation: 45,  duration: 0.3, ease: "power2.out" }, "<")
      .to(bar2.current, { opacity: 0, scaleX: 0, duration: 0.2 }, "<")
      .to(bar3.current, { y: -8, rotation: -45, duration: 0.3, ease: "power2.out" }, "<")
      .to(navItemsRef.current, {
        y: 0, opacity: 1,
        duration: 0.55, stagger: 0.08, ease: "expo.out",
      }, "-=0.2")
      .to(linesRef.current, {
        scaleX: 1,
        duration: 0.4, stagger: 0.07, ease: "power3.out",
      }, "-=0.45")
      .to(numberRefs.current, {
        opacity: 1, x: 0,
        duration: 0.3, stagger: 0.07, ease: "power2.out",
      }, "-=0.5");

    tlRef.current = tl;
  }, []);

  const handleOpen  = () => { setOpen(true);  tlRef.current?.play(); };
  const handleClose = () => { setOpen(false); tlRef.current?.reverse(); };

  const handleItemEnter = (i) => {
    gsap.to(navItemsRef.current[i], { x: 14, duration: 0.3, ease: "power2.out" });
    gsap.to(linesRef.current[i],    { opacity: 1, duration: 0.2 });
  };
  const handleItemLeave = (i) => {
    gsap.to(navItemsRef.current[i], { x: 0, duration: 0.4, ease: "elastic.out(1,0.5)" });
    gsap.to(linesRef.current[i],    { opacity: 0.2, duration: 0.3 });
  };

  return (
    <>
      {/* ── Top bar ──────────────────────────────────────────────── */}
      <nav
        style={{
          position: "sticky", top: 0, left: 0, right: 0, zIndex: 50,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 2rem", height: "56px",
          background: "rgba(13,13,13,0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${T.border}`,
          fontFamily: "'Inter', sans-serif",
        }}
        className="w-full "
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            fontWeight: 500,
            color: T.accent,
            letterSpacing: "0.02em",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => gsap.to(e.currentTarget, { letterSpacing: "0.08em", duration: 0.3, ease: "power2.out" })}
          onMouseLeave={(e) => gsap.to(e.currentTarget, { letterSpacing: "0.02em", duration: 0.3, ease: "power2.out" })}
        >
          ac.dev
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "2rem" }} className="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.id}
                href={item.href}
                style={{
                  fontSize: "13px",
                  color: isActive ? T.accent : T.muted,
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  fontFamily: "'Inter', sans-serif",
                  transition: "color 0.2s",
                  paddingBottom: "2px",
                  borderBottom: isActive ? `1px solid ${T.accent}` : "1px solid transparent",
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = T.text; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = T.muted; }}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Burger — visible on mobile, hidden on desktop */}
        <button
          onClick={open ? handleClose : handleOpen}
          aria-label="Toggle menu"
          className="burger-btn"
          style={{
            display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "center",
            width: "40px", height: "40px",
            background: "none", border: "none", cursor: "pointer",
          }}
        >
          {bars.map((ref, i) => (
            <span
              key={i}
              ref={ref}
              style={{
                display: "block",
                width: i === 1 ? 18 : 26,
                height: "1.5px",
                borderRadius: "2px",
                background: "rgba(255,255,255,0.8)",
                marginBottom: i < 2 ? "6px" : 0,
                transformOrigin: "center",
              }}
            />
          ))}
        </button>
      </nav>

      {/* ── Full-screen overlay ───────────────────────────────────── */}
      <div
        ref={overlayRef}
        style={{
          position: "fixed", inset: 0, zIndex: 40,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: T.bgOverlay,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Dot grid */}
        <div
          style={{
            position: "", inset: 0, pointerEvents: "none",
            backgroundImage: `radial-gradient(circle, rgba(201,146,42,0.08) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Nav list */}
        <ul style={{
          position: "relative", zIndex: 10,
          display: "flex", flexDirection: "column", gap: "4px",
          width: "100%", maxWidth: "520px",
          padding: "0 3rem", listStyle: "none", margin: 0,
        }}>
          {navItems.map((item, i) => (
            <li key={item.id} style={{ overflow: "hidden" }}>
              <div
                ref={(el) => (navItemsRef.current[i] = el)}
                style={{ position: "relative", padding: "1rem 0", cursor: "pointer" }}
                onMouseEnter={() => handleItemEnter(i)}
                onMouseLeave={() => handleItemLeave(i)}
              >
                {/* Index */}
                <span
                  ref={(el) => (numberRefs.current[i] = el)}
                  style={{
                    position: "absolute", left: 0,
                    top: "50%", transform: "translateY(-50%)",
                    fontSize: "10px", letterSpacing: "0.3em",
                    textTransform: "uppercase", color: T.ultraMuted,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Link */}
                <a
                  href={item.href}
                  onClick={handleClose}
                  style={{
                    display: "block",
                    paddingLeft: "2.5rem",
                    fontSize: "clamp(2rem, 7vw, 4rem)",
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "-0.03em",
                    color: T.text,
                    textDecoration: "none",
                    lineHeight: 1.1,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = T.accent; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = T.text; }}
                >
                  {item.name}
                </a>

                {/* Underline */}
                <div
                  ref={(el) => (linesRef.current[i] = el)}
                  style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: "1px", opacity: 0.2,
                    background: `linear-gradient(90deg, ${T.accent}, rgba(201,146,42,0.2), transparent)`,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Bottom meta */}
        <div
          style={{
            position: "absolute", bottom: "2rem", left: 0, right: 0,
            display: "flex", justifyContent: "space-between",
            padding: "0 3rem",
            fontSize: "10px", letterSpacing: "0.35em",
            textTransform: "uppercase", color: T.ultraMuted,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          <span>Portfolio · 2026</span>
          <span>MERN · Full Stack</span>
        </div>
      </div>

      
    </>
  );
};

export default Navbar;