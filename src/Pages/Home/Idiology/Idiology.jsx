import React, { useEffect } from "react";
import { FaArrowRight} from "react-icons/fa";
import mujib_img from "../../../assets/all/row-image-Mujib100.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Idiology = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      delay: 100, 
      easing: "ease-in-out", 
    });
  }, []);

  return (
    <div data-aos="fade-right">
      <div className="flex lg:flex-row flex-col items-center justify-center gap-24 px-3 lg:pb-0 pb-3">
        <div>
          <img className="w-10/12" src={mujib_img} alt="" />
        </div>
        <div className="space-y-8 lg:w-3/12">
          <p className="text-5xl">THE IDEOLOGY</p>
          <p className="text-lg">
            My greatest strength is the love for my people, My greatest weakness
            is that I love them too much.
          </p>
          <p className="text-3xl">-Bangabandhu Sheikh Mujibur Rahman</p>
          <div className="text-lg border-2 w-fit border-gray-400 py-2 px-5 rounded-lg hover:bg-gray-500 hover:text-white cursor-pointer">
            <button className="flex items-center gap-3 font-semibold">Learn More <FaArrowRight></FaArrowRight> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Idiology;
