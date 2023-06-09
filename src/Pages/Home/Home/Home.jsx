import React from 'react';
import CoverSlider from '../CoverSlider/CoverSlider';
import Services from '../Services/Services';
import Idiology from '../Idiology/Idiology';
import LeaderInspiration from '../LeaderInspiration/LeaderInspiration';

const Home = () => {
    return (
        <div>
            <CoverSlider></CoverSlider>
            <Services></Services>
            <Idiology></Idiology>
            <LeaderInspiration></LeaderInspiration>
        </div>
    );
};

export default Home;