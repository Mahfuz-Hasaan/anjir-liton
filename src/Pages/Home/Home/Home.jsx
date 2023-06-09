import React from 'react';
import CoverSlider from '../CoverSlider/CoverSlider';
import Services from '../Services/Services';
import Idiology from '../Idiology/Idiology';

const Home = () => {
    return (
        <div>
            <CoverSlider></CoverSlider>
            <Services></Services>
            <Idiology></Idiology>
        </div>
    );
};

export default Home;