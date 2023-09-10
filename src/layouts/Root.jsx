import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../share/Navbar';
import Footer from '../share/Footer';

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className='md:min-h-[calc(100vh-100px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;