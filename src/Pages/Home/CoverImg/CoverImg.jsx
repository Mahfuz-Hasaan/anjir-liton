import React, { useEffect } from 'react';
import coverImg from '../../../assets/cover/seven.jpg';
import slash from '../../../assets/navbar/bar.png';
import AOS from "aos";
import "aos/dist/aos.css";
import './CoverImg.css';

const CoverImg = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className='relative cover-img'>
      <div data-aos="fade-up">
        <img
          className='slash-img'
          src={slash}
          alt=""
        />
      </div>
    </div>
  );
};

export default CoverImg;
