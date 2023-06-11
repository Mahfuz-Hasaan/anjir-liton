import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import email from "../../../assets/navbar/email-footer.png";
import {
  FaBeer,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { useEffect } from "react";

const FooterBar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="relative">
      <div className="absolute lg:top-[-70px] lg:left-[450px] md:top-[-95px] md:left-[30px] top-[-160px] left-[50px]">
        <div className="bg-[#0080d7]  rounded-lg mx-auto relative">
          <div className="flex md:flex-row flex-col justify-center items-center gap-6 py-10 px-10">
            <div className="absolute left-0 top-0 h-[270px]">
              <img className="h-[145px] opacity-30" src={email} alt="" />
            </div>
            <div className="space-y-1  text-white z-10">
              <p className="font-semibold text-2xl">NEWSLETTER SUBSCRIBE</p>
              <p className="text-lg font-medium">
                Sign up with your email address to updates.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
              <div className="col-span-1">
                <input
                  type="text"
                  name=""
                  placeholder="Name"
                  id=""
                  className="rounded-lg lg:pr-10 h-[55px] w-full"
                />
              </div>
              <div className="col-span-1">
                <input
                  type="email"
                  name=""
                  placeholder="Email"
                  id=""
                  className="rounded-lg lg:pr-10 h-[55px] w-full"
                />
              </div>
              <div className=" lg:col-span-1 md:col-span-2">
                <input
                  className="py-3 text-xl font-semibold px-24 cursor-pointer bg-[#115c8f] text-white rounded-lg hover:bg-[#0e476d] w-full"
                  type="submit"
                  value="SUBMIT"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <div className="bg-[#0c4063] py-40 flex md:flex-row flex-col justify-around items-center">
            <div className="space-y-4 md:py-0">
              <div data-aos="fade-up">
                <div className="text-4xl text-white font-semibold md:py-0 pt-[100px]">
                  <p>dgbsa22@gmail.com</p>
                  <p>01914088093</p>
                </div>
                <div className="text-5xl text-white flex gap-3">
                  <FaLinkedinIn></FaLinkedinIn>
                  <FaFacebookF></FaFacebookF>
                  <FaTwitter></FaTwitter>
                  <FaInstagram></FaInstagram>
                </div>
              </div>
              <div data-aos="zoom-in-left">
                <div className="text-white font-extrabold pl-20 lg:pt-28 py-10 text-lg">
                  <p>©2023 by .</p>
                  <p>
                    Proudly created with{" "}
                    <span className="text-blue-400">Bangla Puzzle Ltd.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="text-4xl text-white font-semibold lg:w-1/3 w-10/12">
              <p>
                Bangladesh Shishu Academy , Doyel Chattor, Shabag, Dhaka-1000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
