import { Dropdown, Navbar } from "flowbite-react";
import React from "react";
import bar from "../../../assets/navbar/bar.png";
import "./NAvigationBar.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navbar-container sticky">
      <Navbar className="custom-navbar sm:py-0 md:py-8">
       
          <span>
          <Navbar.Brand className="navbar-brand">
            <div className="flex">
              <img alt="Flowbite React Logo" className="mr-3 h-16" src={bar} />
              <div className="flex gap-2">
                <div className="text-2xl font-bold text-white">
                  <p>Anjir</p>
                  <p>Liton</p>
                </div>
                <div className="text-md text-white children">
                  <p>Children's</p>
                  <p>Writer</p>
                </div>
              </div>
            </div>
          </Navbar.Brand>
          </span>
      
        <Navbar.Toggle />
        <Navbar.Collapse className="nav-class">
          <Navbar className="nav-items text-white text-xl font-semibold gap-4">
            <Dropdown className="dropdown-menu border-0 hover-items" inline label="About Anjir">
              <Dropdown.Item className="text-white text-lg dropdown-hover hover-items">Biography</Dropdown.Item>
              <Dropdown.Item className="text-white dropdown-hover hover-items">Achievement</Dropdown.Item>
            </Dropdown>
          </Navbar>
          <Navbar className="nav-items text-white text-xl font-semibold hover-items gap-4">
            <div to="/events" className="mr-2 md:mr-4">
              <p>Events</p>
            </div>
          </Navbar>
          <Navbar className="nav-items text-white text-xl font-semibold hover-items gap-4" href="#">
            <div to="/news" className="mr-2 md:mr-4">
              <p>News</p>
            </div>
          </Navbar>
          <Navbar className="nav-items text-white text-xl font-semibold hover-items gap-4">
            <Dropdown className="dropdown-menu border-0 hover-items" inline label="Media">
              <Dropdown.Item className="text-white text-lg dropdown-hover hover-items">Press</Dropdown.Item>
              <Dropdown.Item className="text-white dropdown-hover hover-items">Quotes</Dropdown.Item>
              <Dropdown.Item className="text-white dropdown-hover hover-items">Speeches</Dropdown.Item>
              <Dropdown.Item className="text-white dropdown-hover hover-items">Interview</Dropdown.Item>
            </Dropdown>
          </Navbar>
          <Navbar className="nav-items text-white text-xl font-semibold hover-items gap-4">
            <Dropdown className="dropdown-menu border-0 hover-items" inline label="Gallery">
              <Dropdown.Item className="text-white text-lg dropdown-hover hover-items">Photo Gallery</Dropdown.Item>
              <Dropdown.Item className="text-white dropdown-hover hover-items">Video Gallery</Dropdown.Item>
            </Dropdown>
          </Navbar>
          <Navbar className="nav-items text-white text-xl font-semibold hover-items gap-4">
            <div to="/publication" className="mr-2 md:mr-4">
              <p>Publication</p>
            </div>
          </Navbar>
          <Navbar className="nav-items text-white text-xl font-semibold hover-items gap-4">
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
