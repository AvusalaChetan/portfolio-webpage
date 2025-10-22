import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HoverBehaviour } from "../animations/Cursor";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Navbar.module.css";
import Floating from "../animations/Floating";

const navRought = [
  { text: "home", to: "#home" },
  { text: "about", to: "#about" },
  { text: "skills", to: "#skills" },
  { text: "projects", to: "#projects" },
];

const roughtActiveClass = {
  "#home": "text-[24px] text-blue-500 border-b-4 font-semibold capitalize",
  "#about": "text-[24px] text-black border-b-4 font-semibold capitalize",
  "#skills": "text-[24px] text-yellow-500 border-b-4 font-semibold capitalize",
  "#projects":
    "text-[24px] text-purple-500 border-b-4 font-semibold capitalize",
};

const Navbar = () => {
  const { hash } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!hash) return;
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 150);
  }, [hash]);

  return (
    <header className="bg-gray-50 border-b z-40 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <HoverBehaviour scale={4.5} border={"1px outset red"}>
          <h1 className="text-2xl md:text-3xl font-semibold capitalize">
            My portfolio
          </h1>
        </HoverBehaviour>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navRought.map((item) => (
            <HoverBehaviour
              key={item.text}
              scale={2.8}
              border={"1px solid red"}
            >
              <NavLink
                to={item.to}
                className={() =>
                  hash === item.to
                    ? roughtActiveClass[item.to]
                    : "text-lg capitalize"
                }
              >
                {item.text}
              </NavLink>
            </HoverBehaviour>
          ))}

          <Contact className="ml-4" />
          <ResumeDownloadBtn />
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <Contact />
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && <MobileNavbar hash={hash} setMobileOpen={setMobileOpen} />}
    </header>
  );
};

const MobileNavbar = ({ hash, setMobileOpen }) => {
  return (
    <div
      className="md:hidden fixed inset-0 bg-black/40 z-50"
      onClick={() => setMobileOpen(false)}
    >
      <div
        className="absolute right-0 top-0 w-72 h-full bg-white shadow-lg p-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close"
            className="p-1"
          >
            <FiX />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {navRought.map((item) => (
            <NavLink
              key={item.text}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={() =>
                hash === item.to
                  ? roughtActiveClass[item.to]
                  : "text-base capitalize"
              }
            >
              {item.text}
            </NavLink>
          ))}
        </div>
        <div className="mt-auto">
          <ResumeDownloadBtn small />
        </div>
      </div>
    </div>
  );
};

const Contact = ({ className = "" }) => {
  const links = {
    linkedin: "https://www.linkedin.com/in/avusala-chetan-73a697312",
    github: "https://github.com/AvusalaChetan",
  };

  const onChangeHandile = (e) => {
    const selected = e.target.value;
    if (links[selected]) window.open(links[selected], "_blank");
  };

  return (
    <select
      onChange={onChangeHandile}
      className={`border rounded px-2 py-1 bg-white text-sm ${className}`}
      aria-label="Contact options"
    >
      <option value="">Contact</option>
      <option value="linkedin">LinkedIn</option>
      <option value="github">GitHub</option>
    </select>
  );
};

const ResumeDownloadBtn = ({ small = false }) => {
  const download = () => {};

  return (
    <Floating mt={3}>
      <HoverBehaviour w={small ? "20%" : "7%"} h={"35px"} br={"5px"}>
        <button
          onClick={download}
          className={`px-3 flex items-center justify-center gap-2 ${
            styles.border
          } ${small ? "text-sm" : ""}`}
        >
          Resume <MdOutlineFileDownload />
        </button>
      </HoverBehaviour>
    </Floating>
  );
};

export default Navbar;
