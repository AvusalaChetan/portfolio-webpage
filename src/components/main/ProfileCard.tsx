import type {IconType} from "react-icons";
import {FaXTwitter} from "react-icons/fa6";
import {LuGithub, LuLinkedin, LuMapPin} from "react-icons/lu";
import ProfilePic from "../secondry/ProfilePic";

export type ProfileLink = {
  label: string;
  href?: string;
  icon: IconType;
};

// eslint-disable-next-line react-refresh/only-export-components
export const profileLinks: ProfileLink[] = [
  {label: "Hyderabad, India", icon: LuMapPin},

  {
    label: "linkedin.com/in/...",
    href: "https://linkedin.com/in/...",
    icon: LuLinkedin,
  },
  {label: "@handle", href: "https://x.com/handle", icon: FaXTwitter},
  {label: "github.com/...", href: "https://github.com/...", icon: LuGithub},
];

const ProfileCard = () => {
  return (
    <div className="card h-full flex flex-col items-center text-center gap-4">
      <ProfilePic />

      <div>
        <h1 className="text-xl font-bold capitalize text-(--text)">
          avusala chetan
        </h1>
        <p className="text-sm text-(--muted)">@a.chetan</p>
      </div>

      <h3 className="text-md font-semibold text-(--text)">
        Full-Stack Developer | React.js, Node.js, TypeScript
      </h3>

      <button className="border border-(--border) text-(--text)  font-medium py-2 px-4 rounded transition-colors duration-200 w-full capitalize hover:bg-gray-200">
        Resume
      </button>

      <ul className="w-full flex flex-col gap-2 text-left text-md   ">
        {profileLinks.map(({label, href, icon: Icon}) => (
          <li key={label}>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:font-bold"
              >
                <Icon /> {label}
              </a>
            ) : (
              <span className="flex items-center gap-2">
                <Icon /> {label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCard;
