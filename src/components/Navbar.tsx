import {NavLink} from "react-router";
import type {Navigation} from "../types/index";
import {RiContrast2Line} from "react-icons/ri";

const Navbar = () => {
  const navigation: Navigation[] = [
    {title: "overview", to: ""},
    {title: "about", to: "/about"},
    {title: "skills", to: "/skills"},
    {title: "projects", to: "/projects"},
    {title: "connect", to: "/connect"},
    {title: "ask me", to: "/ai"},
  ];

  return (
    <div className="card  flex items-center justify-between gap-6 overflow-x-auto py-0! px-4!">
      <nav className=" flex gap-6 ">
        {navigation.map((n: Navigation) => (
          <NavLink
            key={n.title}
            to={n.to}
            end={n.to === "/"}
            className={({isActive}) =>
              `whitespace-nowrap border-b-2 py-4 text-sm capitalize transition-colors ${
                isActive
                  ? "border-(--accent) font-medium text-(--text)"
                  : "border-transparent text-(--muted) hover:text-(--text)"
              }`
            }
          >
            {n.title}
          </NavLink>
        ))}
      </nav>
      <button className="cursor-pointer">
        <RiContrast2Line size={18} />
      </button>
    </div>
  );
};

export default Navbar;
