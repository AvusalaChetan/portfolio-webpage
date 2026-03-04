import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useRef } from "react";

const navItems = [
  { id: 1, name: "Home",     href: "#home" },
  { id: 2, name: "About",    href: "#about" },
  { id: 3, name: "Skills",   href: "#skills" },
  { id: 4, name: "Projects", href: "#projects" },
  { id: 5, name: "Connect",  href: "#connect" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const overlayRef   = useRef(null);
  const navItemsRef  = useRef([]);
  const linesRef     = useRef([]);
  const numberRefs   = useRef([]);
  const tlRef        = useRef(null);
  const burgerRef    = useRef(null);
  const bar1         = useRef(null);
  const bar2         = useRef(null);
  const bar3         = useRef(null);

  const bars = [bar1, bar2, bar3];

  useGSAP(() => {
    gsap.set(overlayRef.current, { autoAlpha: 0, display: "none" });
    gsap.set(navItemsRef.current, { y: 60, opacity: 0 });
    gsap.set(linesRef.current,    { scaleX: 0, transformOrigin: "left center" });
    gsap.set(numberRefs.current,  { opacity: 0, x: -10 });

    const tl = gsap.timeline({ paused: true });

    // Overlay slides up from bottom
    tl.to(overlayRef.current, {
      display: "flex",
      autoAlpha: 1,
      duration: 0.01,
    })
    .fromTo(overlayRef.current, {
      clipPath: "inset(100% 0% 0% 0%)",
    }, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 0.65,
      ease: "expo.inOut",
    })
    // Burger → X morph
    .to(bar1.current, { y: 8,  rotation: 45,  duration: 0.3, ease: "power2.out" }, "<")
    .to(bar2.current, { opacity: 0, scaleX: 0, duration: 0.2 }, "<")
    .to(bar3.current, { y: -8, rotation: -45, duration: 0.3, ease: "power2.out" }, "<")
    // Nav items stagger up
    .to(navItemsRef.current, {
      y: 0, opacity: 1,
      duration: 0.6, stagger: 0.08,
      ease: "expo.out",
    }, "-=0.2")
    // Underlines draw
    .to(linesRef.current, {
      scaleX: 1,
      duration: 0.4, stagger: 0.07,
      ease: "power3.out",
    }, "-=0.45")
    // Numbers fade in
    .to(numberRefs.current, {
      opacity: 1, x: 0,
      duration: 0.3, stagger: 0.07,
      ease: "power2.out",
    }, "-=0.5");

    tlRef.current = tl;
  }, []);

  const handleOpen = () => {
    setOpen(true);
    tlRef.current?.play();
  };

  const handleClose = () => {
    setOpen(false);
    tlRef.current?.reverse();
  };

  // Hover: item text color + line brightness
  const handleItemEnter = (i) => {
    gsap.to(navItemsRef.current[i], { x: 12, duration: 0.3, ease: "power2.out" });
    gsap.to(linesRef.current[i],    { opacity: 1, duration: 0.2 });
  };
  const handleItemLeave = (i) => {
    gsap.to(navItemsRef.current[i], { x: 0,  duration: 0.4, ease: "elastic.out(1,0.5)" });
    gsap.to(linesRef.current[i],    { opacity: 0.25, duration: 0.3 });
  };

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 lg:px-16 h-16"
        style={{
          background: "rgba(8,8,16,0.75)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          fontFamily: "'Courier New', monospace",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="text-white font-black select-none"
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            letterSpacing: "-0.02em",
          }}
          onMouseEnter={(e) => gsap.to(e.currentTarget, { letterSpacing: "0.02em", duration: 0.4, ease: "power2.out" })}
          onMouseLeave={(e) => gsap.to(e.currentTarget, { letterSpacing: "-0.02em", duration: 0.4, ease: "power2.out" })}
        >
          A. Chetan
        </a>

        {/* Burger button */}
        <button
          ref={burgerRef}
          onClick={open ? handleClose : handleOpen}
          className="relative flex flex-col justify-center items-center w-10 h-10 gap-0 cursor-pointer"
          aria-label="Toggle menu"
        >
          {bars.map((ref, i) => (
            <span
              key={i}
              ref={ref}
              className="block rounded-full"
              style={{
                width: i === 1 ? 20 : 28,
                height: 1.5,
                background: "rgba(255,255,255,0.85)",
                marginBottom: i < 2 ? 6 : 0,
                transformOrigin: "center",
              }}
            />
          ))}
        </button>
      </nav>

      {/* ── Full-screen overlay ──────────────────────────────── */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #080810 0%, #0c0c18 100%)",
          fontFamily: "'Courier New', monospace",
        }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Nav list */}
        <ul className="relative z-10 flex flex-col gap-2 w-full max-w-lg px-12">
          {navItems.map((item, i) => (
            <li key={item.id} className="overflow-hidden">
              <div
                ref={(el) => (navItemsRef.current[i] = el)}
                className="relative py-4 cursor-pointer group"
                onMouseEnter={() => handleItemEnter(i)}
                onMouseLeave={() => handleItemLeave(i)}
              >
                {/* Index number */}
                <span
                  ref={(el) => (numberRefs.current[i] = el)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-[0.3em]"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Link text */}
                <a
                  href={item.href}
                  onClick={handleClose}
                  className="block pl-10 text-white font-black leading-none"
                  style={{
                    fontSize: "clamp(2rem, 7vw, 4.5rem)",
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.name}
                </a>

                {/* Underline */}
                <div
                  ref={(el) => (linesRef.current[i] = el)}
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{
                    background: "linear-gradient(90deg, rgba(16,185,129,0.6), rgba(124,58,237,0.4), transparent)",
                    opacity: 0.25,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Bottom label */}
        <div
          className="absolute bottom-8 left-0 right-0 flex justify-between px-12 text-[10px] uppercase tracking-[0.35em]"
          style={{ color: "rgba(255,255,255,0.15)" }}
        >
          <span>Portfolio 2026</span>
          <span>AI · MERN Dev</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;