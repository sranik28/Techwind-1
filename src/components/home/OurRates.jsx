import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OurRates = () => {
    return (
        <div className='container my-20'>
            <div className='grid items-center gap-10 md:ml-10 md:grid-cols-3'>
                <div className='text-center md:text-start'>
                    <h3 className='mb-6 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal'>Our Comfortable Rates</h3>
                    <p className='max-w-xl mx-auto mb-6 text-slate-400'>Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    <button className='inline-flex items-center px-8 py-2 mt-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 border rounded-md bg-primary border-primary hover:bg-indigo-700 hover:border-indigo-700 me-2'> Subscribe Now</button>
                </div>
                <div className='mt-16 ml-5 md:mt-0 md:ml-6'>
                    <h3 className='text-xl font-bold text-indigo-600 uppercase mb-9'>STARTER</h3>
                    <div className='flex mb-9'>
                        <p className='text-2xl font-semibold'>$</p>
                        <p className='mb-0 text-5xl font-semibold price'>39</p>
                        <p className='self-end mb-1 text-2xl font-semibold'>/mo</p>
                    </div>
                    <ul className='text-slate-400'>
                        <li className='flex items-center gap-2 mb-2'>
                            <FontAwesomeIcon className='text-lg text-primary' icon={faCircleCheck} />
                            <p className='text-lg font-medium'>Full Access</p>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <FontAwesomeIcon className='text-lg text-primary' icon={faCircleCheck} />
                            <p className='text-lg font-medium'>Source Files</p>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <FontAwesomeIcon className='text-lg text-primary' icon={faCircleCheck} />
                            <p className='text-lg font-medium'>Free Appointments</p>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <FontAwesomeIcon className='text-lg text-primary' icon={faCircleCheck} />
                            <p className='text-lg font-medium'>Enhanced Security</p>
                        </li>
                    </ul>
                    <button className='inline-block px-8 py-3 mt-6 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 border rounded-md border-primary bg-primary hover:bg-indigo-700 hover:border-indigo-700'>Get Started</button>
                </div>
                <div className='mt-16 ml-5 md:mt-0 md:ml-0'>
                    <h3 className='mb-6 text-xl font-bold text-indigo-600 uppercase'>PROFESSIONAL</h3>
                    <div className='flex mb-6'>
                        <p className='text-2xl font-semibold'>$</p>
                        <p className='mb-0 text-5xl font-semibold price'>59</p>
                        <p className='self-end mb-1 text-2xl font-semibold'>/mo</p>
                    </div>
                    <ul className='text-slate-400'>
                        <li className='flex items-center gap-2 mb-2'>
                            <FontAwesomeIcon className='text-lg text-primary' icon={faCircleCheck} />
                            <p className='text-lg font-medium'>Full Access</p>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <FontAwesomeIcon className='text-lg text-primary' icon={faCircleCheck} />
                            <p className='text-lg font-medium'>Source Files</p>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <FontAwesomeIcon className='text-lg text-primary' icon={faCircleCheck} />
                            <p className='text-lg font-medium'>Free Appointments</p>
                        </li>
                        <li className='flex items-center gap-2 mb-2'>
                            <FontAwesomeIcon className='text-lg text-primary' icon={faCircleCheck} />
                            <p className='text-lg font-medium'>Enhanced Security</p>
                        </li>
                    </ul>
                    <button className='inline-block px-8 py-3 mt-6 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 border rounded-md border-primary bg-primary hover:bg-indigo-700 hover:border-indigo-700'>Get Try it Now</button>
                </div>
            </div>
        </div>
    );
};

export default OurRates;