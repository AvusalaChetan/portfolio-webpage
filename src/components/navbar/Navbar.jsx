import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useEffect, useState} from "react";
import "./Navbar.css";

const Navbar = () => {
  const [routes] = useState([
    {name: "home", to: "/"},
    {name: "about", to: "#about"},
    {name: "skills", to: "#skills"},
    {name: "projects", to: "#projects"},
    {name: "connect", to: "#connect"},
  ]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useGSAP(() => {
    gsap.from(".nav-link", {
      y: -50,
      delay: 0.2,
      stagger: 0.2,
      ease: "elastic.inOut",
    });
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <nav className="h-14 w-full flex justify-between items-center z-60 md:p-8 pt-2 md:pt-10 font-cabinetGrotesk bg-white/80 shadow-sm fixed top-0 left-0">
      <div className="font-bold text-2xl tracking-tight flex items-center select-none">
        <span className="font-mono text-4xl pl-2">Avusala Chetan</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-7 mr-6">
        {routes.map((item) => (
          <a
            key={item.name}
            className="nav-link hover:cursor-pointer"
            href={item.to}
          >
            {item.name}
          </a>
        ))}
      </div>

      <button
        className="md:hidden flex items-center px-3 py-2   text-black  mr-4"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open menu"
      >
        <svg
          className="fill-current h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Top sheet for Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />

          {/* Top dropdown panel */}
          <div className="absolute top-0 left-0 w-full bg-white shadow-lg px-6 pt-5 pb-6 top-sheet md:hidden">
            <div className="flex items-center justify-end">
              <button
                className="text-2xl text-black hover:opacity-80"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <nav className="mt-2 flex flex-col gap-3">
              {routes.map((item) => (
                <a
                  key={item.name}
                  className="nav-link text-lg"
                  href={item.to}
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
