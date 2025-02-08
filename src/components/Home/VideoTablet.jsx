"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const VideoTablet = () => {
  const videoRef = useRef(null); // Reference for the video element
  const [isPlaying, setIsPlaying] = useState(false); // To track play/pause state

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="wrapper bg-primary-gradient-vertical p-5 md:p-10 rounded-lg md:rounded-[40px] w-full relative shadow-primary shadow-2xl"
      onClick={handlePlayPause}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        muted
        loop
        className="w-full cursor-pointer rounded-lg myVideo"
      >
        <source src="/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play Button */}
      {!isPlaying && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent the video click from triggering play/pause
            handlePlayPause();
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        >
          <Image
            src={"/playbtn.svg"}
            width={130}
            height={130}
            alt="play"
            className="w-[60px] md:w-auto"
          />
        </button>
      )}
    </div>
  );
};

export default VideoTablet;
