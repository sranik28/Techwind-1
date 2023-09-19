import React from 'react';
import { BsArrowUpShort } from 'react-icons/bs';

const MyIcon = () => {
    return (
        <div className='p-0 rounded-full  bg-primary'>
            <span><BsArrowUpShort className='w-10 h-10 text-white ' /></span>
        </div>
    );
};

export default MyIcon;