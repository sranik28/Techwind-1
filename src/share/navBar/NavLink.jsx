import { useState } from 'react';
import React from 'react';
import { BsChevronDown, BsChevronUp, BsChevronRight } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import { links } from './MyLinks';

const Navlink = () => {

    const [headingToggle, setHeadingToggle] = useState("");
    const [subHeading, setSubHeading] = useState("");

    return (
        <>
            {links.map((link) => (
                <div>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <h2  className='flex items-center justify-between py-4 pr-5 hover:text-primary md:pr-0 group'
                            onClick={() => {
                                headingToggle === link.name ? setHeadingToggle("") : setHeadingToggle(link.name)
                            }}
                        >
                            {link.name}
                            <span className='inline text-xl md:hidden'>
                                {headingToggle === link.name ? <BsChevronUp /> : <BsChevronDown />}

                            </span>
                            <span className="hidden text-xl md:mt-1 md:ml-2 md:block group-hover:rotate-180 group-hover:-mt-2">
                                <BsChevronDown />
                            </span>
                        </h2>
                        {link.submenu && (
                            <div>
                                <div className="absolute hidden text-center top-10 group-hover:md:block hover:md:block">
                                    <div className="py-3">
                                        <div
                                            className="absolute w-4 h-4 mt-1 rotate-45 bg-white left-3"
                                        ></div>
                                    </div>
                                    <div className="text-center bg-white ">
                                        {link.subLinks.map((mySubLinks) => (
                                            <div className='group'>
                                                {/* <h1 className="flex items-center justify-between py-4 pr-5 md:pr-0 group"
                                                    onClick={() => {
                                                        headingToggle2 === mySubLinks.Head ? setHeadingToggle2("") : setHeadingToggle2(mySubLinks.Head)
                                                    }}
                                                >
                                                    {mySubLinks.Head}
                                                    <span className='inline text-xl md:hidden'>
                                                        {headingToggle2 === link.name ? <BsChevronUp /> : <BsChevronDown />}

                                                    </span>
                                                    <span className="hidden text-sm md:mt-1 md:ml- md:block group-hover:-mt-2">
                                                        <BsChevronRight />
                                                    </span>
                                                </h1> */}
                                                <div className='md:cursor-pointer group' >
                                                    <div className='hidden group-hover:block hover:block' >
                                                        <h1
                                                            onClick={() =>
                                                                subHeading !== mySubLinks.Head
                                                                    ? setSubHeading(mySubLinks.Head)
                                                                    : setSubHeading("")
                                                            }
                                                            className="flex items-center justify-between py-4 pr-5 hover:text-primary group"
                                                        >
                                                            {mySubLinks.Head}

                                                            <span className="inline text-xl ">
                                                                {subHeading === mySubLinks.Head ? <BsChevronUp /> : <BsChevronDown />}
                                                            </span>
                                                            
                                                        </h1>
                                                    </div>
                                                    <div className='hidden group-hover:md:block hover:md:block '>
                                                        <div
                                                            className={`${subHeading === mySubLinks.Head ? "" : "hidden"
                                                                }`}
                                                        >
                                                            {mySubLinks.subLink.map((slink) => (
                                                                <li className="text-center ">
                                                                    <Link to={slink.link}>{slink.name}</Link>
                                                                </li>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile responsive menu */}
                    <div
                        className={`${headingToggle === link.name ? "md:hidden " : "hidden"} `} >
                        {/* subLinks */}
                        {link.subLinks.map((slinks) => (
                            <div>
                                <div>
                                    <h1
                                        onClick={() =>
                                            subHeading !== slinks.Head
                                                ? setSubHeading(slinks.Head)
                                                : setSubHeading("")
                                        }
                                        className="flex items-center justify-between py-4 pr-5 font-semibold pl-7 md:pr-0"
                                    >
                                        {slinks.Head}

                                        <span className="inline text-xl md:mt-1 md:ml-2">
                                            {subHeading === slinks.Head ? <BsChevronUp /> : <BsChevronDown />}
                                        </span>
                                    </h1>
                                    <div
                                        className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                                            }`}
                                    >
                                        {slinks.subLink.map((slink) => (
                                            <li className="py-3 pl-14">
                                                <Link to={slink.link}>{slink.name}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            )
            )}
        </>
    );
};

export default Navlink;


