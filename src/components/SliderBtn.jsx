import React from 'react';
import { useSwiper } from 'swiper/react';
import { BiChevronRight,BiChevronLeft } from 'react-icons/bi';

const SliderBtn = () => {

    const swiper = useSwiper();

    return (
        <div>
            <button onClick={() => swiper.slideNext()} className='absolute top-[40%] right-2 z-50 text-xl p-2 duration-500 rounded-full hover:bg-primary hover:text-white shadow-md' >
                <span className=''>
                    <BiChevronRight className='text-slate-400 hover:text-white' />
                </span>
            </button>
            <button onClick={() => swiper.slidePrev()} className='absolute top-[40%] left-0 z-50 text-xl p-2 duration-500 rounded-full hover:bg-primary hover:text-white  shadow-md'>
            <span className=''>
                    <BiChevronLeft className=' text-slate-400 hover:text-white' />
                </span>
            </button>
        </div>
    );
};

export default SliderBtn;