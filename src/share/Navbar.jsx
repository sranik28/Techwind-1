import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineClose, AiOutlineSetting, AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';
import logo from '../assets/logo/logo.png';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='container'>
            <nav className='flex items-center justify-between w-full px-3 py-5 '>
                <div className='flex items-center gap-2'>
                    <Link to="/"><img className='object-cover ' src={logo} alt="" /></Link>
                    {/* <Link to='/'><h1 className='text-3xl font-bold'><span className='text-[#4c5696]'>Dream</span>Pic</h1></Link> */}
                </div>
                <span className='text-3xl duration-500 md:hidden'>
                        {
                            toggle ? <AiOutlineClose onClick={() => setToggle(!toggle)} /> : <AiOutlineMenu onClick={() => setToggle(!toggle)} />
                        }

                    </span>
                <ul className={`font-semibold flex items-center duration-300 flex-col py-5 px-5 md:p-0 text-[#575b67] bg-opacity-90 top-[12%]  md:bg-transparent w-full left-0 md:w-auto md:flex-row rounded-md  text-sm gap-11 absolute md:static z-50 ${toggle ? "top-0 left-0" : "-top-full duration-500"}`}
                >
                    <li className='duration-500 hover:text-primary'>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">HOME</NavLink>
                    </li>
                    <li  className='duration-500 hover:text-primary'>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/landings">LANDINGS</NavLink>
                    </li>
                    <li  className='duration-500 hover:text-primary'>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/page">PAGES</NavLink>
                    </li>
                    <li  className='duration-500 hover:text-primary'>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/portfolio">PORTFOLIO</NavLink>
                    </li>
                    <li  className='duration-500 hover:text-primary'>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/docs">DOCS
                        </NavLink>
                    </li>
                    <li  className='duration-500 hover:text-primary'>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/contact">CONTACT
                        </NavLink>
                    </li>
                </ul>
                <div className='flex gap-3'>
                    <div className='flex items-center gap-4'>
                        <span className='p-2 duration-500 rounded-full hover:bg-primary hover:text-white'><AiOutlineSetting className='text-xl text-primary hover:text-white' /></span>
                        <span className='p-2 text-white duration-500 rounded-full bg-primary'>
                            <MdOutlineLocalGroceryStore className='text-xl' />
                        </span>
                    </div>
                    {/* <span className='text-3xl duration-500 md:hidden'>
                        {
                            toggle ? <AiOutlineClose onClick={() => setToggle(!toggle)} /> : <AiOutlineMenu onClick={() => setToggle(!toggle)} />
                        }

                    </span> */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;