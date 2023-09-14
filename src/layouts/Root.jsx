import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../share/Footer';
import Navbar from '../share/navBar/Navbar';
import NavBarD from '../share/navBar/NavBarD';

const Root = () => {
    return (
        <div>
            <NavBarD />
            <div className='md:min-h-[calc(100vh-100px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;