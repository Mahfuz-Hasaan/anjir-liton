import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './GoogleMap.css'
const GoogleMap = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div data-aos="zoom-in">
      <div className="flex lg:flex-row flex-col items-center  lg:justify-center lg:gap-32 gap-10 lg:w-11/12 mx-auto pt-20 pb-40">
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5147049160437!2d90.39837257599378!3d23.72901828959574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8efa65e6b1b%3A0x2290178cf2c42315!2sBangladesh%20Shishu%20Academy!5e0!3m2!1sen!2sbd!4v1686425414728!5m2!1sen!2sbd"
            width="600"
            height="450"
            className="map"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex md:flex-row flex-col gap-10 justify-center pl-5">
          <div>
            <p className="text-3xl font-bold">Present Address</p>
            <p className="text-lg">
              Present Address- Bangladesh Shishu Academy , Doyel Chattor,
              Shabag, Dhaka-1000
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold">Permanent Address</p>
            <p className="text-lg">
              Permanent Address- Mymensingh District Mymensingh, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
