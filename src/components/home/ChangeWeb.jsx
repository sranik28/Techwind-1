import React from 'react';
import change from '../../assets/change/SEO_SVG.png'
import icon from '../../assets/change/correct.png'
import { HiChevronRight } from 'react-icons/hi';

const ChangeWeb = () => {
    return (
        <div className='container'>
            <div className='grid items-center justify-center md:grid-cols-2'>
                <div>
                    <img src={change} alt="" />
                </div>
                <div className=''>
                    <h2 className='mb-6 text-2xl font-semibold leading-normal text-center md:text-3xl md:leading-normal'>Change the way you build websites</h2>
                    <p className='max-w-xl text-center text-slate-400'>You can combine all the Techwind templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                    <ul className='mt-6'>
                        <li className='flex items-center gap-2 my-3 text-slate-400'><span><img className='w-4 ' src={icon} alt="" /></span> <p>Digital Marketing Solutions for Tomorrow</p></li>
                        <li className='flex items-center gap-2 my-3 text-slate-400'><span><img className='w-4' src={icon} alt="" /></span><p>Our Talented & Experienced Marketing Agency</p></li>
                        <li className='flex items-center gap-2 my-3 text-slate-400'><span><img className='w-4' src={icon} alt="" /></span><p>Create your own skin to match your brand</p></li>
                    </ul>
                    <button className='flex items-center gap-1 mt-6 text-lg text-primary'>Find Out More <span> <HiChevronRight className='text-xl'/> </span></button>
                </div>
            </div>
        </div>
    );
};

export default ChangeWeb;