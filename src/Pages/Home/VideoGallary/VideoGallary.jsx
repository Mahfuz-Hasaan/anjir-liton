import React, { useEffect } from "react";
import YouTube from "react-youtube";
import AOS from "aos";
import "aos/dist/aos.css";

const VideoGallery = () => {
  const videoIds = [
    "k0FC8biMK6A",
    "YrpRgqawOBo",
    "Cn-q-gXmrBA",
    "sE64kscT1pA",
    "o3rR5_O0hss",
    "sPWnaUul8OQ",
  ];
  useEffect(() => {
            AOS.init({
              duration: 1000,
              delay: 100,
              easing: "ease-in-out",
            });
          }, []);

  const opts = {
    width: "400px",
    height: "220px",
  };

  return (
    <div className="bg-[#0080d7]">
      <div>
        <p className="text-white font-semibold text-4xl tracking-[.4em] py-16 pl-20">
          Video Gallery
        </p>
        <div>
          <div data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-fit mx-auto">
              {videoIds.map((videoId) => (
                <div className="w-6/12" key={videoId}>
                  <YouTube videoId={videoId} opts={opts} />
                </div>
              ))}
            </div>
          </div>
          <div className="w-fit mx-auto py-10">
            <button className="py-4 px-10 bg-zinc-200 drop-shadow-lg text-lg font-semibold hover:bg-zinc-300">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
