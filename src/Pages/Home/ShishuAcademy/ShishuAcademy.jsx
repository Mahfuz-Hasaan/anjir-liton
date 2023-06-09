
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import sisuacadamy from '../../../assets/all/sisuacademy.jpg'
const ShishuAcademy = () => {
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
          <div className="space-y-6 text-white w-4/12">
            <p className="text-3xl font-bold">MY JOURNEY WITH SHISHU ACADEMY</p>
            <p className="text-lg ">One of the strengths to build a golden Bengal in the ideology of Father of the Nation Bangabandhu Sheikh Mujibur Rahman is our future generation, who are today's children. Bangladesh Shishu Academy is for children. Bangladesh Shishu Academy is working to develop latent talents including creative and gentle scholarship for the purpose of creating the spirit of great liberation war, love of country, moral education, discipline and sense of responsibility among the children. Under the leadership of Hon'ble Prime Minister Sheikh Hasina, a child friendly environment has been created in the country today. At present children's academy activities are being carried out in 64 districts and 6 upazilas (Keshabpur, Parshuram, Mithapukur, Kulaura, Srinagar and Babuganj upazilas) for the creative development and protection of children's rights. Under this program, various programs are being implemented in collaboration with the local administration for the participation of children across the country.</p>
            <div className="text-lg border-2 w-fit border-gray-400 py-2 px-5 rounded-lg hover:bg-white hover:text-[#0080d7] cursor-pointer">
              <button className="flex items-center gap-3 font-semibold">
                Learn More <FaArrowRight></FaArrowRight>{" "}
              </button>
            </div>
          </div>
          <img className="w-4/12" src={sisuacadamy} alt="" />
        </div>
      </div>
    </div>
    );
};

export default ShishuAcademy;