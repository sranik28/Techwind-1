import React from 'react';
import icon from '../../assets/change/correct.png'
import { HiChevronRight } from 'react-icons/hi';
import development from '../../assets/development/Mobile_notification_SVG.png'
import DevFrom from '../DevFrom';

const Development = () => {
    return (
        <div className='container mt-28'>
            <div className='grid items-center gap-12 md:grid-cols-2'>
                <div>
                    <h2 className='mb-6 text-2xl font-semibold leading-normal md:text-3xl md:leading-normal'>Speed up your development
                        with Techwind.</h2>
                    <p className='max-w-xl text-slate-400'>You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                    <ul className='mt-6'>
                        <li className='flex items-center gap-2 my-3 text-slate-400'><span><img className='w-4 ' src={icon} alt="" /></span> <p>Digital Marketing Solutions for Tomorrow</p></li>
                        <li className='flex items-center gap-2 my-3 text-slate-400'><span><img className='w-4' src={icon} alt="" /></span><p>Our Talented & Experienced Marketing Agency</p></li>
                        <li className='flex items-center gap-2 my-3 text-slate-400'><span><img className='w-4' src={icon} alt="" /></span><p>Create your own skin to match your brand</p></li>
                    </ul>
                    <button className='flex items-center gap-1 mt-6 text-lg text-primary'>Find Out More <span> <HiChevronRight className='text-xl' /> </span></button>
                </div>
                <div>
                    <img className='w-[500px]' src={development} alt="" />
                    <DevFrom />
                </div>
            </div>
        </div>
    );
};

export default Development;