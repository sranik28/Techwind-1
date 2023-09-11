import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import bannerImg from '../../assets/banner/Startup_SVG.png'

const Success = () => {
    return (
        <div className='container my-40'>
            <div className='grid gap-[30px] md:grid-cols-2'>
                <div>
                    <h2 className='mb-5 text-4xl font-semibold leading-normal text-black lg:leading-normal lg:text-5xl '>Our Creativity Is Your <span className='text-primary'>
                        Success
                    </span></h2>
                    <p className='max-w-xl my-8 text-lg text-slate-400'>Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                    <button className='inline-flex items-center px-5 py-2 mt-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 border border-indigo-600 rounded-md hover:bg-indigo-700 hover:border-indigo-700 me-2 rb-zeplin-selected bg-primary '><span className='mr-2'>
                        <AiOutlineMail />
                    </span> Get Started</button>
                    <button className='inline-flex items-center px-5 py-2 mt-2 text-base font-semibold tracking-wide text-center text-indigo-600 align-middle duration-500 bg-transparent border border-indigo-600 rounded-md hover:bg-primary hover:text-white'>
                        <span>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z"></path></svg>
                        </span> Documentation</button>
                </div>
                <div>
                    <img src={bannerImg} className='w-[450px] object-cover h-[100%]' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Success;