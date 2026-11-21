import {
  LuExternalLink,
  LuFileText,
  LuGithub,
  LuLinkedin,
  LuMail
} from "react-icons/lu";
import { MainHeading } from "../components/secondry/Heading";
import Section from "../components/secondry/Section";

const links = [
  {
    label: "Email",
    value: "avusalachetan@gmail.com",
    href: "mailto:avusalachetan@gmail.com",
    icon: LuMail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/AvusalaChetan",
    href: "https://linkedin.com/in/AvusalaChetan",
    icon: LuLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/AvusalaChetan",
    href: "https://github.com/AvusalaChetan",
    icon: LuGithub,
  },

  {
    label: "Resume",
    value: "View PDF",
    href: "/pdfs/Avusala_Chetan_Resume.pdf",
    icon: LuFileText,
  },
];

const Connect = () => {
  return (
    <article className="mx-auto w-full max-w-[700px] px-1 py-2">
      <Section>
        <MainHeading text="Connect" />
        <p className="text-(--muted) leading-7">
          I'm open to internships and happy to talk about projects or open
          source. Email is the fastest way to reach me.
        </p>
      </Section>

      <Section>
        <ul className="flex flex-col gap-2">
          {links.map(({label, value, href, icon: Icon}) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center gap-3 border border-(--border) px-3 py-3 transition-colors hover:bg-(--border)"
              >
                <Icon className="size-4 text-(--muted)" />
                <span className="w-20 text-sm font-medium text-(--text)">
                  {label}
                </span>
                <span className="flex-1 truncate text-sm text-(--muted)">
                  {value}
                </span>
                <LuExternalLink className="size-3.5 text-(--muted) transition-colors group-hover:text-(--accent)" />
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </article>
  );
};

export default Connect;
