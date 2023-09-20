import React from 'react';
import { HiChevronRight } from 'react-icons/hi';
import "./Hover.css"

const BtnHover = () => {
    return (
        <div>
             <a className='flex items-center gap-1 mt-6 text-lg hover text-primary'>Find Out More <span> <HiChevronRight className='text-xl'/> </span></a>
        </div>
    );
};

export default BtnHover;