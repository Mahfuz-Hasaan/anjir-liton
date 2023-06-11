import React from "react";
import { Button, Navbar } from "flowbite-react";
import img_1 from "../../../assets/navbar/short-logo.png";
import { Link } from "react-router-dom";
const ContactNAv = () => {
  return (
    <div>
      <Navbar className="drop-shadow-lg">
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={img_1} className="w-[280px]" alt="" />{" "}
        </Navbar.Brand>
        <div className="flex md:order-2 rounded-md">
          <Button className="bg-red-600 rounded-lg">Join Now</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link to="/"><Navbar className="hover:text-red-600 cursor-pointer font-bold">
            <p>Home</p>
          </Navbar></Link>
          <Navbar className="hover:text-red-600 cursor-pointer font-bold">
            Privacy Policy
          </Navbar>
          <Navbar className="hover:text-red-600 cursor-pointer font-bold">
            Terms Conditions
          </Navbar>
          <Navbar className="hover:text-red-600 cursor-pointer font-bold text-red-600">
            About Us
          </Navbar>
          <Navbar className="hover:text-red-600 cursor-pointer font-bold">
            Contact Us
          </Navbar>
          <Navbar className="hover:text-red-600 cursor-pointer font-bold">
            Advertise
          </Navbar>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default ContactNAv;
