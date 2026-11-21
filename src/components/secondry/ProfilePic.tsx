import {LuRefreshCcw} from "react-icons/lu";

const ProfilePic = () => {
  return (
    <div className="relative mx-auto size-40">
      <img
        src="img/profile/p1.png"
        alt="Avusala Chetan"
        className="size-full rounded-full border border-line object-cover"
      />
      <button className="absolute bottom-1 right-1.5 bg-white grid size-8 place-items-center rounded-full bg-surface text-text shadow-sm transition-transform duration-300 hover:bg-hover hover:rotate-180">
        <LuRefreshCcw size={18} />
      </button>
    </div>
  );
};

export default ProfilePic;
