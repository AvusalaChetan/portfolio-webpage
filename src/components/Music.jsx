import {useEffect, useRef, useState} from "react";
import {FaMusic} from "react-icons/fa6";
import gsap from "gsap";

const Music = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const iconRef = useRef(null);
  const spinTweenRef = useRef(null);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = 0.5;

    const tryAutoplay = async () => {
      try {
        await el.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    tryAutoplay();
    return () => {};
  }, []);

  // Spin the icon while playing; pause when not playing
  useEffect(() => {
    const iconEl = iconRef.current;
    if (!iconEl) return;
    if (isPlaying) {
      if (spinTweenRef.current) {
        spinTweenRef.current.resume();
      } else {
        spinTweenRef.current = gsap.to(iconEl, {
          rotate: 360,
          duration: 2,
          ease: "linear",
          repeat: -1,
          transformOrigin: "50% 50%",
        });
      }
    } else {
      if (spinTweenRef.current) spinTweenRef.current.pause();
    }
  }, [isPlaying]);

  // Cleanup tween on unmount
  useEffect(() => {
    return () => {
      if (spinTweenRef.current) {
        spinTweenRef.current.kill();
        spinTweenRef.current = null;
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center justify-center gap-2">
      <audio
        ref={audioRef}
        src="/music/BGcalmSound.mp3"
        autoPlay
        playsInline
        loop
        preload="auto"
      />
      <button
        onClick={handlePlayPause}
        className={
          "flex items-center gap-2 px-4 py-4 bg-black text-white rounded-full shadow-lg hover:bg-gray-800  " +
          (isPlaying ? "" : "")
        }
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
        aria-pressed={isPlaying}
      >
        <span ref={iconRef} className="inline-flex">
          <FaMusic className="text-xl" />
        </span>
        <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
      </button>
    </div>
  );
};

export default Music;
