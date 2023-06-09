import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import primeminister from "../../../assets/all/primnistar.jpg";
const LeaderInspiration = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-out",
    });
  }, []);
  
  return (
    <div className="bg-[#0080d7] py-8 overflow-x-hidden">
      <div>
        <div
          data-aos="fade-left"
          className="flex justify-center items-center gap-20"
        >
          <div className="space-y-6 text-white">
            <p className="text-2xl font-bold">MY LEADER AND INSPIRATION</p>
            <p className="text-2xl ">- Hon'ble Prime Minister Sheikh Hasina</p>
            <div className="text-lg border-2 w-fit border-gray-400 py-2 px-5 rounded-lg hover:bg-white hover:text-[#0080d7] cursor-pointer">
              <button className="flex items-center gap-3 font-semibold">
                Learn More <FaArrowRight></FaArrowRight>{" "}
              </button>
            </div>
          </div>

          <img className="w-4/12" src={primeminister} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeaderInspiration;
