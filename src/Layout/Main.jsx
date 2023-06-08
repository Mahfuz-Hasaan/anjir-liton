import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';
import FooterBar from '../Pages/Shared/FooterBar/FooterBar';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <FooterBar></FooterBar>
        </div>
    );
};

export default Main;