import { useRef, useEffect } from 'react';

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  }, []);

  return (
    <div className="hero-main-top-section inset-0 -z-20 overflow-hidden h-full ">
      <video
        ref={videoRef}
        className="object-cover w-full h-full mx-auto"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          willChange: 'auto',
        }}
      >
        <source src="/video/glassBall.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Video;