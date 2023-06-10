import React, { useEffect } from 'react';
import coverImg from '../../../assets/cover/seven.jpg'
import slash from '../../../assets/navbar/bar.png'
import AOS from "aos";
import "aos/dist/aos.css";
const CoverImg = () => {
    const backgroundImg = {
        backgroundImage: `url(${coverImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '600px',
        backgroundAttachment: 'fixed',
    }
        useEffect(() => {
            AOS.init({
              duration: 1000,
              delay: 50,
              easing: "ease-in-out",
            });
          }, []);
    return (
        <div className='relative' style={backgroundImg}>
            <div data-aos="fade-up">
                <img className='w-[200px] h-[270px] absolute top-[-125px] left-[34rem]' src={slash} alt="" />
            </div>
        </div>
    );
};

export default CoverImg;