import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Button from '../../components/Button';
import logo from '../../assets/logo/logo.png';
import Navlink from './NavLink';


const NavBarD = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className='container '>
            <div className='flex items-center justify-between py-3 bg-white'>
                <div className='z-50 flex items-center justify-between w-full md:w-auto'>
                    <Link to="/"><img className='object-cover ' src={logo} alt="" /></Link>
                    <div className='text-xl md:hidden'>
                        {
                            toggle ? <AiOutlineClose onClick={() => setToggle(!toggle)} /> : <AiOutlineMenu onClick={() => setToggle(!toggle)} />
                        }
                    </div>
                </div>

                <ul className='md:flex hidden items-center gap-10  font-[nunito] font-medium'>
                    <li className='hover:text-primary'>
                        <NavLink onClick={() => setToggle(false)} className={({ isActive }) => isActive ? "active" : ""} to="/">HOME</NavLink>
                    </li>
                    <li className='hover:text-primary'>
                        <NavLink onClick={() => setToggle(false)} className={({ isActive }) => isActive ? "active" : ""} to="/landings">LANDINGS</NavLink>
                    </li>
                    <Navlink />
                    <li className='hover:text-primary'>
                        <NavLink onClick={() => setToggle(false)} className={({ isActive }) => isActive ? "active" : ""} to="/portfolio">PORTFOLIO</NavLink>
                    </li>
                    <li className='hover:text-primary'>
                        <NavLink onClick={() => setToggle(false)} className={({ isActive }) => isActive ? "active" : ""} to="/docs">DOCS</NavLink>
                    </li>
                    <li className='hover:text-primary'>
                        <NavLink onClick={() => setToggle(false)} className={({ isActive }) => isActive ? "active" : ""} to="/contact">CONTACT</NavLink>
                    </li>

                </ul>
                <div className='hidden md:block'>
                    <Button />
                </div>

                {/* Mobile responsive menu  */}

                <ul className={`md:hidden bg-white fixed w-full top-[9%] overflow-y-auto bottom-0 py-10 pl-4 duration-500 ${toggle ? "left-0" : "left-[-100%]"}`}>
                    <li className='inline-block px-3 pb-4 text-xl'>
                        <Link onClick={() => setToggle(false)} className={({ isActive }) => isActive ? "active inline-block px-3 pb-4 text-xl" : "inline-block px-3 pb-4 text-xl"} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className='inline-block px-3 pb-4 text-xl' to="/">LANDINGS</Link>
                    </li>
                    <div className='inline-block pb-2 text-xl '>
                        <Navlink />
                    </div>
                    <li>
                        <Link className='inline-block px-3 pb-4 text-xl' to="/">PORTFOLIO</Link>
                    </li>
                    <li>
                        <Link className='inline-block px-3 pb-4 text-xl' to="/">DOCS</Link>
                    </li>
                    <li>
                        <Link className='inline-block px-3 pb-4 text-xl' to="/">CONTACT</Link>
                    </li>

                    <div className='py-5'>
                        <Button />
                    </div>
                </ul>

            </div>
        </nav>
    );
};

export default NavBarD;