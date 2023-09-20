import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLocalGroceryStore, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { BiLogoBehance } from 'react-icons/bi';
import { TfiWorld, TfiTwitter } from 'react-icons/tfi';
import { AiFillLinkedin, AiOutlineMail, AiOutlineFile } from 'react-icons/ai';
import { FiFacebook } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo/footer-logo.png';
import { faEnvelope, faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import payment1 from '../assets/payment/fast.png'
import payment2 from '../assets/payment/sec.png'
import payment3 from '../assets/payment/third.png'
import payment4 from '../assets/payment/forth.png'
import payment5 from '../assets/payment/visa.png'
import ScrollToTop from 'react-scroll-to-top';
import MyIcon from '../components/MyIcon';

const Footer = () => {
    return (
        <footer>
             <ScrollToTop smooth top={1000} component={<MyIcon />} />
            <div className='relative mt-14'>
                <div className='overflow-hidden '>
                    <svg className="w-full h-auto text-[#192132] scale-[2.0] origin-top" viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path></svg>
                </div>
                <div className='absolute left-0 z-10 w-full pt-10 md:pb-[500px] pb-[1300px] h-full md:top-[146px] top-[33.3px] bg-[#192132]'>
                    <div className='container '>
                        <div className='grid md:grid-cols-12 '>
                            <div className='col-span-4 mb-10'>
                                <Link to="/">
                                    <img className='w-[150px] h-[50px] object-contain' src={logo} alt="" />
                                </Link>
                                <p className='mt-3 max-w-[300px] text-gray-300'>Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>


                                <div className='mt-6 '>
                                    <Link className='inline-flex items-center justify-center w-8 h-8 mr-2 text-base tracking-wide text-center align-middle duration-500 border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'>
                                        <MdOutlineLocalGroceryStore className='text-slate-400 hover:text-white ' />
                                    </Link>
                                    <Link className='inline-flex items-center justify-center w-8 h-8 mr-2 text-base tracking-wide text-center align-middle duration-500 border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'>
                                        <BiLogoBehance className='text-slate-400 hover:text-white ' />

                                    </Link>
                                    <Link className='inline-flex items-center justify-center w-8 h-8 mr-2 text-base tracking-wide text-center align-middle duration-500 border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'>
                                        <TfiWorld className='text-slate-400 hover:text-white ' />
                                    </Link>
                                    <Link className='inline-flex items-center justify-center w-8 h-8 mr-2 text-base tracking-wide text-center align-middle duration-500 border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'>
                                        <AiFillLinkedin className='text-slate-400 hover:text-white ' />
                                    </Link>
                                    <Link className='inline-flex items-center justify-center w-8 h-8 mr-2 text-base tracking-wide text-center align-middle duration-500 border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'>
                                        <FiFacebook className='text-slate-400 hover:text-white ' />
                                    </Link>
                                    <Link className='inline-flex items-center justify-center w-8 h-8 mr-2 text-base tracking-wide text-center align-middle duration-500 border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'>
                                        <FaInstagram className='text-slate-400 hover:text-white ' />
                                    </Link>
                                    <Link className='inline-flex items-center justify-center w-8 h-8 mr-2 text-base tracking-wide text-center align-middle duration-500 border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'>
                                        <TfiTwitter className='text-slate-400 hover:text-white ' />
                                    </Link>
                                    <Link className='inline-flex items-center justify-center w-8 h-8 mr-2 text-base tracking-wide text-center align-middle duration-500 border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'>
                                        <AiOutlineMail className='text-slate-400 hover:text-white ' />
                                    </Link>
                                    <Link className='inline-flex items-center justify-center w-8 h-8 mr-2 text-base tracking-wide text-center align-middle duration-500 border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600'>
                                        <AiOutlineFile className='text-slate-400 hover:text-white ' />
                                    </Link>
                                </div>
                            </div>

                            <div className='col-span-2 mb-10'>
                                <h1 className='text-lg text-white'>Company</h1>
                                <ul className='mt-5 text-[#b0aaa8]'>
                                    <li className='flex items-center mb-3 text-gray-300 duration-500 ease-in-out hover:text-gray-400'>
                                        <span className='text-xl'>
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                        <Link to="/">
                                            About Us
                                        </Link>

                                    </li>
                                    <li className='flex items-center mb-3 text-gray-300 duration-500 ease-in-out hover:text-gray-400'>
                                        <span className='text-xl'>
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                        <Link to="/">
                                            Services
                                        </Link>

                                    </li>
                                    <li className='flex items-center mb-3 text-gray-300 duration-500 ease-in-out hover:text-gray-400'>
                                        <span className='text-xl'>
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                        <Link to="/">
                                            Team
                                        </Link>

                                    </li>
                                    <li className='flex items-center mb-3 text-gray-300 duration-500 ease-in-out hover:text-gray-400'>
                                        <span className='text-xl'>
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                        <Link to="/">
                                            Pricing
                                        </Link>

                                    </li>
                                    <li className='flex items-center mb-3 text-gray-300 duration-500 ease-in-out hover:text-gray-400'>
                                        <span className='text-xl'>
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                        <Link to="/">
                                            Project
                                        </Link>

                                    </li>
                                    <li className='flex items-center mb-3 text-gray-300 duration-500 ease-in-out hover:text-gray-400'>
                                        <span className='text-xl'>
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                        <Link to="/">
                                            Blog
                                        </Link>

                                    </li>
                                    <li className='flex items-center mb-3 text-gray-300 duration-500 ease-in-out hover:text-gray-400'>
                                        <span className='text-xl'>
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                        <Link to="/">
                                            Login
                                        </Link>

                                    </li>

                                </ul>
                            </div>
                            <div className='col-span-3 mb-10'>
                                <h1 className='text-lg text-white'>Usefull Links</h1>
                                <ul className='mt-5'>
                                    <li className='flex items-center mb-3 text-gray-300 duration-500 ease-in-out hover:text-gray-400'>
                                        <span className='text-xl'>
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                        <Link to="/">
                                            Terms of Services
                                        </Link>

                                    </li>
                                    <li className='flex items-center mb-3 text-gray-300 duration-500 ease-in-out hover:text-gray-400'>
                                        <span className='text-xl'>
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                        <Link to="/">
                                            Privacy Policy
                                        </Link>

                                    </li>
                                    <li className='flex items-center mb-3 text-gray-300 duration-500 ease-in-out hover:text-gray-400'>
                                        <span className='text-xl'>
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                        <Link to="/">
                                            Documentation
                                        </Link>

                                    </li>
                                    <li className='flex items-center mb-3 text-gray-300 duration-500 ease-in-out hover:text-gray-400'>
                                        <span className='text-xl'>
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                        <Link to="/">
                                            Changelog
                                        </Link>

                                    </li>
                                    <li className='flex items-center mb-3 text-gray-300 duration-500 ease-in-out hover:text-gray-400'>
                                        <span className='text-xl'>
                                            <MdOutlineKeyboardArrowRight />
                                        </span>
                                        <Link to="/">
                                            Widget
                                        </Link>

                                    </li>

                                </ul>
                            </div>
                            <div className='col-span-3'>
                                <h2 className='text-lg text-white'>Newsletter</h2>
                                <p className='mt-5 text-white'>Sign up and receive the latest tips via email.</p>
                                <p className='mt-3 text-white'>Write your email <span className='text-red-600'>*</span> </p>
                                <div className='relative'>
                                    <FontAwesomeIcon className='absolute text-lg text-white top-6 left-4' icon={faEnvelope} />
                                    <input className='w-full h-10 px-3 py-2 mt-3 text-gray-100 bg-gray-800 border-0 rounded outline-none form-input ps-12 focus:shadow-none focus:ring-0' type="text" placeholder='Email' name="" id="" />
                                    <button className='inline-block w-full px-5 py-2 mt-3 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-0 mt-12 border-t border-slate-800'>
                        <div className='container justify-between md:flex'>
                            <h1 className='pt-10 text-center text-white md:text-start '>© 2023 Techwind. Design & Develop with  by <span>
                                {/* <FontAwesomeIcon className='text-red-600 '  icon={faHeart}  /> */}
                                <FontAwesomeIcon icon={faHeart} style={{ color: "#d70f0f", }} />
                            </span> Shreethemes.</h1>
                            <div className='flex pt-10 ml-20 md:gap-1'>
                                <img className='object-cover w-12 ' src={payment1} alt="" />
                                <img className='object-cover w-12 ' src={payment2} alt="" />
                                <img className='object-cover w-12 ' src={payment3} alt="" />
                                <img className='object-cover w-12 ' src={payment4} alt="" />
                                <img className='object-cover w-12 ' src={payment5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;