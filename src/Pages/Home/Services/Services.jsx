import React from "react";
import { FaPhoneAlt, FaNewspaper, FaPassport, FaAt } from "react-icons/fa";

const Services = () => {
  return (
    <div data-aos="fade-up">
      <div className="bg-[#115c8f] py-8">
        <div className="bg-[#115c8f] border-2 border-[#0080d7] py-10 space-y-7">
          <p className="text-6xl font-semibold text-white text-center">
            CONSTITUENT SERVICES
          </p>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 mx-auto w-fit">
            <div className="bg-[#0080d7] py-10 px-14 rounded-full w-fit flex flex-col items-center gap-3">
              <FaAt className="text-white text-7xl" />
              <p className="text-white text-xl font-semibold">Email ME</p>
            </div>
            <div className="bg-[#0080d7] py-10 px-16 rounded-full w-fit flex flex-col items-center gap-3">
              <FaPhoneAlt className="text-white text-7xl" />
              <p className="text-white text-xl font-semibold">Call ME</p>
            </div>
            <div className="bg-[#0080d7] py-10 px-16 rounded-full w-fit flex flex-col items-center gap-3">
              <FaNewspaper className="text-white text-7xl" />
              <p className="text-white text-xl font-semibold">News</p>
            </div>
            <div className="bg-[#0080d7] py-10 px-16 rounded-full w-fit flex flex-col items-center gap-3">
              <FaPassport className="text-white text-7xl" />
              <p className="text-white text-xl font-semibold">Visit US</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
