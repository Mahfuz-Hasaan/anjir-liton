import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const UpcomingEvent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <div data-aos="fade-up">
        <div className="py-10 space-y-12">
          <p className="text-4xl font-semibold text-[#115c8f]">
            UPCOMING EVENT
          </p>
          <p className="text-center">No event Found</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
