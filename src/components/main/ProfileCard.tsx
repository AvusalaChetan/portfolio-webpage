import type {IconType} from "react-icons";
import {profileLinks} from "../../data/Profile";
import ProfilePic from "../secondry/ProfilePic";

export type ProfileLink = {
  label: string;
  href?: string;
  icon: IconType;
};

const ProfileCard = () => {
   
  return (
    <div className="card h-full flex flex-col items-center text-center gap-4 ">
      <ProfilePic />

      <div>
        <h1 className="text-xl font-bold capitalize text-(--text)">
          avusala chetan
        </h1>
        <p className="text-sm text-(--muted)">@ a.chetan</p>
      </div>

      <h3 className="text-md font-semibold text-(--text) lg:text-md sm:text-lg">
        Full-Stack Developer | React.js, Node.js, TypeScript, MongoDB
      </h3>

      <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 text-sm border-dashed">
        <span className=" w-2 h-2 lg:w-4 lg:h-4 border-6  border-green-600 rounded-full size-2 animate-pulse ease-in-out  bg-green-500" />
        <p className="text-xs">Open to internship</p>
      </div>

      <a
        href="/pdfs/Avusala_Chetan_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="border border-(--border) text-(--text)  font-medium py-2 px-4 rounded transition-colors duration-200 w-full capitalize hover:bg-gray-200"
      >
        Resume
      </a>

      <ul className="w-full  flex-col gap-2 text-left text-md 
      overflow-hidden hidden lg:flex">
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
