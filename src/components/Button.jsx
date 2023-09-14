import React from 'react';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import {  AiOutlineSetting } from 'react-icons/ai';

const Button = () => {
    return (
        <div className='flex items-center gap-4'>
            <span className='p-2 duration-500 rounded-full hover:bg-primary hover:text-white'><AiOutlineSetting className='text-xl text-primary hover:text-white' /></span>
            <span className='p-2 text-white duration-500 rounded-full bg-primary'>
                <MdOutlineLocalGroceryStore className='text-xl' />
            </span>
        </div>
    );
};

export default Button;