import React from "react";
import CoverSlider from "../CoverSlider/CoverSlider";
import Services from "../Services/Services";
import Idiology from "../Idiology/Idiology";
import LeaderInspiration from "../LeaderInspiration/LeaderInspiration";
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent";
import ShishuAcademy from "../ShishuAcademy/ShishuAcademy";
import Initiativs from "../Initiatives/Initiativs";
import CoverImg from "../CoverImg/CoverImg";
import VideoGallary from "../VideoGallary/VideoGallary";
import PhotoGalary from "../PhotoGalary/PhotoGalary";
import MediaCoverage from "../MediaCoverage/MediaCoverage";
import GoogleMap from "../GoogleMap/GoogleMap";
import { BiMessageDetail } from "react-icons/bi";
const Home = () => {
  return (
    <div className="relative">
      <div>
        <CoverSlider></CoverSlider>
        <Services></Services>
        <Idiology></Idiology>
        <LeaderInspiration></LeaderInspiration>
        <UpcomingEvent></UpcomingEvent>
        <ShishuAcademy></ShishuAcademy>
        <Initiativs></Initiativs>
        <CoverImg></CoverImg>
        <VideoGallary></VideoGallary>
        <PhotoGalary></PhotoGalary>
        <MediaCoverage></MediaCoverage>
        <GoogleMap></GoogleMap>
      </div>
      <div className="fixed bottom-10 right-10 z-50">
        <div className=" rounded-full p-3 bg-[#15E0FB] cursor-pointer">
          <BiMessageDetail className="text-4xl "></BiMessageDetail>
        </div>
      </div>
    </div>
  );
};

export default Home;
