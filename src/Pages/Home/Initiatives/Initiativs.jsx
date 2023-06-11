import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img_1 from '../../../assets/card/1.jpg'
import img_2 from '../../../assets/card/2.jpg'
import img_3 from '../../../assets/card/3.jpg'
import img_4 from '../../../assets/card/4.jpg'
import img_5 from '../../../assets/card/5.png'
import img_6 from '../../../assets/card/6.png'

const Initiativs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="pb-20 px-3">
      <div className="py-8 overflow-x-hidden">
        <div>
          <div
            data-aos="fade-up"
            className="flex lg:flex-row flex-col justify-center items-center gap-20"
          >
            <div className="space-y-6 lg:w-4/12">
              <p className="text-3xl font-bold  text-[#0080d7]">
              INITIATIVES
              </p>
              <p className="text-lg ">
              ICT Division has taken initiatives to build Digital Bangladesh. Our software and service industry is a billion-dollar market and is expected to grow our export to USD 5 Billion by 2025. We are serving clients in the array of domains –Financial Services, Telecom companies, Healthcare. Various Startup projects, High-Tech parks, Sheikh Kamal IT Training and Incubation Centers etc projects are underway across the country.
              </p>
            </div>
           <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-8 border-[3px] border-gray-200 shadow-lg w-[368px] cursor-pointer hover:translate-y-[-10px] duration-300 bg-[#f8f8f8]">
                <img className="w-[124px]" src={img_1} alt="" />
              <p className="text-3xl font-bold  text-[#0080d7]">333</p>
            </div>
            <div className="flex items-center gap-8 border-[3px] border-gray-200 shadow-lg w-[368px] cursor-pointer hover:translate-y-[-10px] duration-300 bg-[#f8f8f8]">
                <img className="w-[124px]" src={img_2} alt="" />
              <p className="text-3xl font-bold  text-[#0080d7]">333</p>
            </div>
            <div className="flex items-center gap-8 border-[3px] border-gray-200 shadow-lg w-[368px] cursor-pointer hover:translate-y-[-10px] duration-300 bg-[#f8f8f8]">
                <img className="w-[124px]" src={img_3} alt="" />
              <p className="text-3xl font-bold  text-[#0080d7]">333</p>
            </div>
            <div className="flex items-center gap-8 border-[3px] border-gray-200 shadow-lg w-[368px] cursor-pointer hover:translate-y-[-10px] duration-300 bg-[#f8f8f8]">
                <img className="w-[124px]" src={img_4} alt="" />
              <p className="text-3xl font-bold  text-[#0080d7]">333</p>
            </div>
            <div className="flex items-center gap-8 border-[3px] border-gray-200 shadow-lg w-[368px] cursor-pointer hover:translate-y-[-10px] duration-300 bg-[#f8f8f8]">
                <img className="w-[124px]" src={img_5} alt="" />
              <p className="text-3xl font-bold  text-[#0080d7]">333</p>
            </div>
            <div className="flex items-center gap-8 border-[3px] border-gray-200 shadow-lg w-[368px] cursor-pointer hover:translate-y-[-10px] duration-300 bg-[#f8f8f8]">
                <img className="w-[124px]" src={img_6} alt="" />
              <p className="text-3xl font-bold  text-[#0080d7]">333</p>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initiativs;
