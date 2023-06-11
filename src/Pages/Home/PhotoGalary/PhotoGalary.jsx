import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img_1 from "../../../assets/photogalarry/one.jpg";
import img_2 from "../../../assets/photogalarry/two.jpg";
import img_3 from "../../../assets/photogalarry/three.jpg";
import img_4 from "../../../assets/cover/three.jpg";
import img_5 from "../../../assets/photogalarry/five.jpg";
import img_6 from "../../../assets/photogalarry/six.jpg";

const PhotoGalary = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const images = [img_1, img_2, img_3, img_4, img_5, img_6];

  const renderArrowPrev = (onClickHandler, hasPrev, label) => (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      className="carousel-arrow carousel-arrow-prev"
    >
      <FaChevronLeft />
    </button>
  );

  const renderArrowNext = (onClickHandler, hasNext, label) => (
    <button
      type="button"
      onClick={() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
        onClickHandler();
      }}
      title={label}
      className="carousel-arrow carousel-arrow-next"
    >
      <FaChevronRight />
    </button>
  );

  return (
    <div>
      <p className="text-[#0080d7] font-semibold text-4xl tracking-[.4em] py-16 pl-20">
        Photo Gallery
      </p>
      <div>
        <div data-aos="fade-up">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-fit mx-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className="w-[470px] h-[311px] overflow-hidden"
              >
                <img
                  className="w-full h-full cursor-pointer hover:transform hover:scale-125 duration-500"
                  src={image}
                  alt=""
                  onClick={() => openModal(image, index)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-fit mx-auto py-10">
          <button className="py-4 px-10 bg-zinc-200 drop-shadow-lg text-lg font-semibold hover:bg-zinc-300">
            View More
          </button>
        </div>
      </div>
      {selectedImage && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-white bg-opacity-50">
          <div className="max-w-3xl mx-auto">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              selectedItem={selectedIndex}
              renderArrowPrev={renderArrowPrev}
              renderArrowNext={renderArrowNext}
            >
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt="" />
                </div>
              ))}
            </Carousel>
            <button
              className="absolute top-40 right-4 px-4 py-2 bg-white rounded-full z-10 font-bold border-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGalary;
