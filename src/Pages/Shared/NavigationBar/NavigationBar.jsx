import { Dropdown, Navbar } from "flowbite-react";
import React from "react";
import bar from "../../../assets/navbar/bar.png";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="bg-[#115c8f]">
        <Link to="/" className="flex items-center">
          <img alt="Flowbite React Logo" className="mr-3 h-16" src={bar} />
          <div className="flex gap-2 md:gap-4">
            <div className="text-2xl font-bold text-white item">
              <p>Anjir</p>
              <p>Liton</p>
            </div>
            <div className="text-md text-white">
              <p>Children's</p>
              <p>Writer</p>
            </div>
          </div>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="md:flex justify-end">
          <Navbar className="bg-[#115c8f] text-white text-xl font-semibold">
            <Dropdown className="bg-black border-0 hover:text-[#15E0FB]" inline label="About Anjir">
              <Dropdown.Item className="text-white text-lg hover:bg-black hover:text-[#15E0FB]">Biography</Dropdown.Item>
              <Dropdown.Item className="text-white hover:bg-black hover:text-[#15E0FB]">Achievement</Dropdown.Item>
            </Dropdown>
          </Navbar>
          <Navbar className="bg-[#115c8f] text-white text-xl font-semibold">
            <Link to="/events" className="mr-2 md:mr-4">
              <p>Events</p>
            </Link>
          </Navbar>
          <Navbar className="bg-[#115c8f] text-white text-xl font-semibold" href="#">
            <Link to="/news" className="mr-2 md:mr-4">
              <p>News</p>
            </Link>
          </Navbar>
          <Navbar className="bg-[#115c8f] text-white text-xl font-semibold">
            <Dropdown className="bg-black border-0 hover:text-[#15E0FB]" inline label="Media">
              <Dropdown.Item className="text-white text-lg hover:bg-black hover:text-[#15E0FB]">Press</Dropdown.Item>
              <Dropdown.Item className="text-white hover:bg-black hover:text-[#15E0FB]">Quotes</Dropdown.Item>
              <Dropdown.Item className="text-white hover:bg-black hover:text-[#15E0FB]">Speeches</Dropdown.Item>
              <Dropdown.Item className="text-white hover:bg-black hover:text-[#15E0FB]">Interview</Dropdown.Item>
            </Dropdown>
          </Navbar>
          <Navbar className="bg-[#115c8f] text-white text-xl font-semibold">
            <Dropdown className="bg-black border-0 hover:text-[#15E0FB]" inline label="Gallery">
              <Dropdown.Item className="text-white text-lg hover:bg-black hover:text-[#15E0FB]">Photo Gallery</Dropdown.Item>
              <Dropdown.Item className="text-white hover:bg-black hover:text-[#15E0FB]">Video Gallery</Dropdown.Item>
            </Dropdown>
          </Navbar>
          <Navbar className="bg-[#115c8f] text-white text-xl font-semibold">
            <Link to="/publication" className="mr-2 md:mr-4">
              <p>Publication</p>
            </Link>
          </Navbar>
          <Navbar className="bg-[#115c8f] text-white text-xl font-semibold border-">
            <Link to="/contact" className="mr-2 md:mr-4">
              <p>Contact</p>
            </Link>
          </Navbar>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
