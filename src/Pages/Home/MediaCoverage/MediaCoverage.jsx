import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./MediaCoverage.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img_1 from "../../../assets/cardCarousel/1.jpg";
import img_2 from "../../../assets/cardCarousel/2.jpg";
import img_3 from "../../../assets/cardCarousel/3.jpg";
import img_4 from "../../../assets/cardCarousel/4.jpg";
import SwiperCore, { Autoplay } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";
import './MediaCoverage.css'
SwiperCore.use([Autoplay]);

const MediaCoverage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-out",
    });
  }, []);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="bg-[#0080d7] pb-20">
      <div data-aos="fade-up">
        <p className="font-semibold text-4xl tracking-[.4em] py-16 pl-20 text-white">
          MEDIA COVERAGES
        </p>
        <div className="lg:w-8/12 mx-auto relative">
          <div
            className="absolute lg:left-[-60px] lg:top-[300px] border-2 rounded-full p-2 text-2xl bg-white cursor-pointer"
            onClick={goPrev}
          >
            <FaArrowLeft />
          </div>
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={10}
            navigation={false}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 40 },
              1024: { slidesPerView: 3, spaceBetween: 50 },
            }}
            className="mySwiper"
          >
            <SwiperSlide className="rounded-lg cursor-pointer">
              <div>
                <div className="p-2 card-img">
                  <img
                    className="border-2 p-2 rounded-lg h-[240px]"
                    src={img_1}
                    alt="Card 1"
                  />
                </div>
                <div className="card-body text-start p-4 space-y-3">
                  <p className="text-gray-400 text-2xl">Jan 15, 2023</p>
                  <p className="text-lg font-semibold">
                    Anjir Liton received Shishu Sahitya Award
                  </p>
                  <p>
                    Agrani Bank- Bangladesh Shishu Academy Shishu Sahitya
                    Puraskar from the Bangla calendar 1414-1417 was recently
                    announced. The award-giving ceremony was held at the
                    premises of the Bangladesh Shishu Academy in the city on
                    October 4. Tariq-ul Islam, se...
                  </p>
                  <p className="text-lg font-semibold underline cursor-pointer">
                    Learn More
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-lg cursor-pointer">
              <div>
                <div className="p-2 card-img">
                  <img
                    className="border-2 p-2 rounded-lg"
                    src={img_2}
                    alt="Card 2"
                  />
                </div>
                <div className="card-body text-start p-4 space-y-3">
                  <p className="text-gray-400 text-2xl">Jan 15, 2023</p>
                  <p className="text-lg font-semibold">
                    Rupali Bank SureCash and Bangladesh Shishu Academy made an
                    agreement to enable the services of mobile Banking.
                  </p>
                  <p>
                    Bangladesh Shishu Academy has signed a tripartite agreement
                    with Rupali Bank and SureCash to enable mobile banking
                    services.On June 25, 2018, Bangladesh Shishu Academy will
                    accept the admission fee for various types of cultural
                    training through Rupal...
                  </p>
                  <p className="text-lg font-semibold underline cursor-pointer">
                    Learn More
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-lg cursor-pointer">
              <div>
                <div className="p-2 card-img">
                  <img
                    className="border-2 p-2 rounded-lg"
                    src={img_3}
                    alt="Card 3"
                  />
                </div>
                <div className="card-body text-start p-4 space-y-3">
                  <p className="text-gray-400 text-2xl">Jan 15, 2023</p>
                  <p className="text-lg font-semibold">
                    Shishu Academy new Director General Anjir Liton
                  </p>
                  <p>
                    Children's author and rhymester Anjir Liton has been
                    appointed the new director general of Bangladesh Shishu
                    Academy for the next three years. The Ministry of Public
                    Administration issued a notification in this regard on
                    Tuesday.Earlier on Monda...
                  </p>
                  <p className="text-lg font-semibold underline cursor-pointer">
                    Learn More
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="rounded-lg cursor-pointer">
              <div>
                <div className="p-2 card-img">
                  <img
                    className="border-2 p-2 rounded-lg"
                    src={img_4}
                    alt="Card 4"
                  />
                </div>
                <div className="card-body text-start p-4 space-y-3">
                  <p className="text-gray-400 text-2xl">Jan 15, 2023</p>
                  <p className="text-lg font-semibold">
                    10 get Bangla Academy Literary Award 2020
                  </p>
                  <p>
                    Ten poets and writers have been adorned with the Bangla
                    Academy Literary Award 2020. Bangla Academy Director General
                    Habibullah Siraji came up with the declaration at a press
                    conference at Shaheed Munir Chowdhury conference room of the
                    academy 4...
                  </p>
                  <p className="text-lg font-semibold underline cursor-pointer">
                    Learn More
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div
            className="absolute lg:right-[-60px] lg:top-[300px] border-2 rounded-full p-2 text-2xl bg-white cursor-pointer"
            onClick={goNext}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCoverage;
