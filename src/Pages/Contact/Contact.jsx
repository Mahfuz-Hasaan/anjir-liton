import React from 'react';
import { Button, Navbar } from 'flowbite-react';
import ContactNAv from '../Shared/ContactNav/ContactNAv';
import AboutUS from './AboutUS/AboutUS';
const Contact = () => {
    return (
        <div>
            <ContactNAv></ContactNAv>
            <AboutUS></AboutUS>
        </div>
    );
};

export default Contact;