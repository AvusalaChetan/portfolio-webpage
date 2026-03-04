import Hline from "../components/HomePageComponents/Hline";
import Contact from "../components/HomePageComponents/Contact";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const HomePage = () => {
  const greetRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const dividerRef = useRef(null);
  const subRef = useRef(null);
  const overlayRef = useRef(null);
  const leftAsideRef = useRef(null);
  const rightAsideRef = useRef(null);
  const canvasRef = useRef(null);

  // ── Animated canvas background ───────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Floating color orbs
    const orbs = [
      { x: window.innerWidth * 0.2, y: window.innerHeight * 0.3, r: 320, vx: 0.18, vy: 0.12, color: "#10b98114" },
      { x: window.innerWidth * 0.75, y: window.innerHeight * 0.6, r: 380, vx: -0.22, vy: 0.15, color: "#7c3aed10" },
      { x: window.innerWidth * 0.5, y: window.innerHeight * 0.8, r: 260, vx: 0.1, vy: -0.2, color: "#0ea5e910" },
    ];

    // Floating particles
    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.3 + 0.2,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      alpha: Math.random() * 0.45 + 0.08,
    }));

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      // Base dark background
      ctx.fillStyle = "#080810";
      ctx.fillRect(0, 0, W, H);

      // Subtle grid
      ctx.strokeStyle = "rgba(255,255,255,0.02)";
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 48) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += 48) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Orbs drift
      orbs.forEach((o) => {
        o.x += o.vx; o.y += o.vy;
        if (o.x < -o.r) o.x = W + o.r;
        if (o.x > W + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = H + o.r;
        if (o.y > H + o.r) o.y = -o.r;
        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        g.addColorStop(0, o.color);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Particles drift
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ── GSAP entrance timeline ───────────────────────────────────
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.to(overlayRef.current, {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 1.2,
      ease: "expo.inOut",
    })
      .from(greetRef.current, { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
      .from(nameRef.current, { y: 80, opacity: 0, duration: 1, ease: "expo.out" }, "-=0.4")
      .from(dividerRef.current, { scaleX: 0, transformOrigin: "center", duration: 0.7, ease: "power3.out" }, "-=0.5")
      .from(roleRef.current, { y: 40, opacity: 0, duration: 0.8, ease: "expo.out" }, "-=0.4")
      .from(subRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(leftAsideRef.current, { x: -40, opacity: 0, duration: 0.8, ease: "expo.out" }, "-=0.6")
      .from(rightAsideRef.current, { x: 40, opacity: 0, duration: 0.8, ease: "expo.out" }, "-=0.8");

    // Subtle breathing on name
    gsap.to(nameRef.current, {
      y: -6, duration: 3.5, ease: "sine.inOut",
      yoyo: true, repeat: -1, delay: 1.5,
    });
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-screen">

      {/* Animated canvas bg */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Curtain reveal overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-black z-20 origin-top" />

      {/* Main layout */}
      <div className="absolute inset-0 z-10 flex items-center justify-between">

        {/* Left aside */}
        <aside
          ref={leftAsideRef}
          className="hidden lg:flex flex-col items-center justify-center gap-12 h-full w-[6%] py-8"
        >
          <Hline />
          <Contact />
        </aside>

        {/* Center hero */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 gap-4">

          <p ref={greetRef} className="uppercase tracking-[0.5em] text-xs text-white/40 font-light">
            Welcome · Portfolio 2026
          </p>

          <h1
            ref={nameRef}
            className="text-white font-black leading-none tracking-tight select-none"
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              textShadow: "0 0 80px rgba(255,255,255,0.15), 0 4px 40px rgba(0,0,0,0.8)",
              letterSpacing: "-0.03em",
            }}
          >
            A. Chetan
          </h1>

          <div
            ref={dividerRef}
            className="w-32 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />

          <h2
            ref={roleRef}
            className="uppercase text-white/90 font-semibold"
            style={{ fontSize: "clamp(0.7rem, 2vw, 1.1rem)", letterSpacing: "0.4em" }}
          >
            AI · MERN Developer
          </h2>

          <p ref={subRef} className="text-white/30 text-xs tracking-[0.25em] uppercase mt-1">
            Building intuitive B2B web applications
          </p>
        </div>

        {/* Right aside */}
        <aside
          ref={rightAsideRef}
          className="hidden lg:flex h-full w-[6%] items-center justify-center"
        >
          <span
            className="uppercase text-white/25 text-xs font-light whitespace-nowrap"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.35em" }}
          >
            Avusala Chetan · 2026
          </span>
        </aside>
      </div>

      {/* Vignettes */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default HomePage;