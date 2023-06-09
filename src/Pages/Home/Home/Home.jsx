import React from 'react';
import CoverSlider from '../CoverSlider/CoverSlider';
import Services from '../Services/Services';
import Idiology from '../Idiology/Idiology';
import LeaderInspiration from '../LeaderInspiration/LeaderInspiration';
import UpcomingEvent from '../UpcomingEvent/UpcomingEvent';
import ShishuAcademy from '../ShishuAcademy/ShishuAcademy';
import Initiativs from '../Initiatives/Initiativs';

const Home = () => {
    return (
        <div>
            <CoverSlider></CoverSlider>
            <Services></Services>
            <Idiology></Idiology>
            <LeaderInspiration></LeaderInspiration>
            <UpcomingEvent></UpcomingEvent>
            <ShishuAcademy></ShishuAcademy>
            <Initiativs></Initiativs>
        </div>
    );
};

export default Home;