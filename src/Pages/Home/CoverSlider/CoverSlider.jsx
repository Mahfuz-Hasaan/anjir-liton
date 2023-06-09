import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CoverSlider.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import img_1 from "../../../assets/cover/202701kalerkantho_jpg.jpg";
import img_2 from "../../../assets/cover/one.jpeg";
import img_3 from "../../../assets/cover/three.jpg";
import img_5 from "../../../assets/cover/five.jpg";
import img_6 from "../../../assets/cover/six.jpg";
import img_7 from "../../../assets/cover/seven.jpg";
import img_8 from "../../../assets/cover/eight.jpg";
import { Button } from "flowbite-react";

const CoverSlider = () => {

  return (
    <div>
      <Swiper
        spaceBetween={0} // Set spaceBetween to 0
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={img_1} alt="" />
          <div className="absolute left-10 bg-black bg-opacity-70 p-8 space-y-5 rounded-lg w-6/12">
            <p className="text-white text-4xl cursor-pointer hover:underline">Astados Poem Ceremony 2022</p>
            <div className="w-fit mx-auto">
            <Button className="px-3">Read More</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={img_2} alt="" />
          <div className="absolute left-10 bg-black bg-opacity-70 p-8 space-y-5 rounded-lg w-6/12">
            <p className="text-white text-4xl cursor-pointer hover:underline">Rupali Bank SureCash and Bangladesh Shishu Academy made an agreement</p>
            <div className="w-fit mx-auto">
            <Button className="px-3">Read More</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={img_3} alt="" />
          <div className="absolute left-10 bg-black bg-opacity-70 p-8 space-y-5 rounded-lg w-6/12">
            <p className="text-white text-4xl cursor-pointer hover:underline">Tungi Para Visit</p>
            <div className="w-fit mx-auto">
            <Button className="px-3">Read More</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={img_5} alt="" />
          <div className="absolute left-10 bg-black bg-opacity-70 p-8 space-y-5 rounded-lg w-6/12">
            <p className="text-white text-4xl cursor-pointer hover:underline">Rupali Bank SureCash and Bangladesh Shishu Academy made an agreement</p>
            <div className="w-fit mx-auto">
            <Button className="px-3">Read More</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={img_6} alt="" />
          <div className="absolute left-10 bg-black bg-opacity-70 p-8 space-y-5 rounded-lg w-6/12">
            <p className="text-white text-4xl cursor-pointer hover:underline">Tungi Para Visit</p>
            <div className="w-fit mx-auto">
            <Button className="px-3">Read More</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={img_7} alt="" />
          <div className="absolute left-10 bg-black bg-opacity-70 p-8 space-y-5 rounded-lg w-6/12">
            <p className="text-white text-4xl cursor-pointer hover:underline">DG Sir Visit Tungi Para</p>
            <div className="w-fit mx-auto">
            <Button className="px-3">Read More</Button>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default CoverSlider;
