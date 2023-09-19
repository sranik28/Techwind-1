import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../share/Footer';
import NavBarD from '../share/navBar/NavBarD';
import PageFooter from '../share/PageFooter';

const Root = () => {

    const location = useLocation();
    const home = location.pathname === '/';

    return (
        <div>
            <NavBarD />
            <div className='md:min-h-[calc(100vh-100px)]'>
                <Outlet />
            </div>
            {
                home ? <Footer /> : <PageFooter />
            }
        </div>
    );
};

export default Root;