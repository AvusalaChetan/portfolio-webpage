import { LuMapPin, LuLinkedin, LuGithub, LuMail, LuGraduationCap, LuPackage } from "react-icons/lu";

export const profileLinks = [
  { label: "Hyderabad, India", icon: LuMapPin },
  { label: "B.Tech ECE, MRITS (2027)", icon: LuGraduationCap },
  {
    label: "linkedin.com/in/AvusalaChetan",
    href: "https://www.linkedin.com/in/avusalachetan/",
    icon: LuLinkedin,
  },
  {
    label: "github.com/AvusalaChetan",
    href: "https://github.com/AvusalaChetan",
    icon: LuGithub,
  },
  {
    label: "npm: express-jetstart",
    href: "https://www.npmjs.com/package/express-jetstart",
    icon: LuPackage,
  },
  {
    label: "avusalachetan@gmail.com",
    href: "mailto:avusalachetan@gmail.com",
    icon: LuMail,
  },
];