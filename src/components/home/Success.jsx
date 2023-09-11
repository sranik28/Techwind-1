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
                    <button className='inline-flex items-center px-5 py-2 mt-2 text-base font-semibold tracking-wide text-center text-indigo-600 align-middle duration-500 bg-transparent border border-indigo-600 rounded-md hover:bg-primary hover:text-white'>Documentation</button>
                </div>
                <div>
                    <img src={bannerImg} className='w-[450px] object-cover h-[100%]' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Success;