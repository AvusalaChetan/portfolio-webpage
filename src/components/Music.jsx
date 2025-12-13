import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

const Music = () => {
  const btnRef = useRef(null);
  const musicRef = useRef(null);
const [isPlaying, setIsPaying] = useState(true)


  useGSAP(() => {
    gsap.to(btnRef.current, {
      rotate: 360,
      duration: 2,
      repeat: -1,
      ease: "linear",
    });
  });

const handilePlay =()=>{
    if(isPlaying) {
        setIsPaying(false)
        musicRef.current.pause();
    }
    else {
        setIsPaying(true)
        musicRef.current.play()
    }
}
  return (
    <>
      <audio ref={musicRef} src={null} autoPlay />

      <button 
      onClick={handilePlay}
      className=" fixed right-10 bottom-8 w-12 h-12">
        <MusicSvg ref={btnRef} />
      </button>
    </>
  );
};

const MusicSvg = ({ ref }) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#000"
      className="mix-blend-difference "
    >
      <path d="M13 9.17071C12.6872 9.06015 12.3506 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V2.4578C19.0571 3.73207 22 7.52236 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.3375 2 12.6711 2.01672 13 2.04938V9.17071Z"></path>
    </svg>
  );
};

export default Music;
 