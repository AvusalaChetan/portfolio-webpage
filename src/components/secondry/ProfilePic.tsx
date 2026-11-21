import {LuRefreshCcw} from "react-icons/lu";

const ProfilePic = ({className}:{className?:string}) => {
  return (
    <div className={`relative mx-auto size-40 ${className}`}>
      <img
        src="img/profile/p1.png"
        alt="Avusala Chetan"
        className="size-full rounded-full border border-(--border) object-cover"
      />
      <button className="absolute bottom-1 right-1.5 grid size-8 place-items-center rounded-full bg-(--card) text-(--text) border border-(--border) shadow-sm transition-transform duration-300 hover:bg-(--border) hover:rotate-180">
        <LuRefreshCcw size={18} />
      </button>
    </div>
  );
};

export default ProfilePic;
