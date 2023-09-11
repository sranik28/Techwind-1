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
                    <button className='inline-flex items-center px-8 py-2 mt-2 text-base font-semibold tracking-wide text-center text-white align-middle duration-500 border rounded-md bg-primary border-primary hover:bg-indigo-700 hover:border-indigo-700 me-2'><span className='mr-1'>
                        <svg className='flex items-center text-xl' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="me-1 text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 18.2944C10.916 18.9336 9.65132 19.3002 8.30098 19.3002C4.2693 19.3002 1.00098 16.0319 1.00098 12.0002C1.00098 7.96852 4.2693 4.7002 8.30098 4.7002C9.65132 4.7002 10.916 5.06683 12.001 5.70599C13.0859 5.06683 14.3506 4.7002 15.701 4.7002C19.7327 4.7002 23.001 7.96852 23.001 12.0002C23.001 16.0319 19.7327 19.3002 15.701 19.3002C14.3506 19.3002 13.0859 18.9336 12.001 18.2944ZM13.7027 16.9106C14.3194 17.1618 14.994 17.3002 15.701 17.3002C18.6281 17.3002 21.001 14.9273 21.001 12.0002C21.001 9.07309 18.6281 6.7002 15.701 6.7002C14.994 6.7002 14.3194 6.83861 13.7027 7.08982C14.8821 8.38643 15.601 10.1094 15.601 12.0002C15.601 13.891 14.8821 15.614 13.7027 16.9106ZM10.2992 7.08982C9.68255 6.83861 9.00793 6.7002 8.30098 6.7002C5.37387 6.7002 3.00098 9.07309 3.00098 12.0002C3.00098 14.9273 5.37387 17.3002 8.30098 17.3002C9.00793 17.3002 9.68255 17.1618 10.2992 16.9106C9.11986 15.614 8.40098 13.891 8.40098 12.0002C8.40098 10.1094 9.11986 8.38643 10.2992 7.08982ZM12.001 8.20546C11.0139 9.16805 10.401 10.5125 10.401 12.0002C10.401 13.4878 11.0139 14.8323 12.001 15.7949C12.9881 14.8323 13.601 13.4878 13.601 12.0002C13.601 10.5125 12.9881 9.16805 12.001 8.20546Z"></path></svg>
                    </span> Subscribe Now</button>
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