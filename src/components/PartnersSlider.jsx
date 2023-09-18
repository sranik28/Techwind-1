import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import person1 from '../assets/slider/01.png'
import person2 from '../assets/slider/02.png'
import person3 from '../assets/slider/03.png'
import person4 from '../assets/slider/person4.png'
import SliderBtn from './SliderBtn';


const PartnersSlider = () => {

    const isMobileDevice = window.innerWidth <= 768;
    return (
        <>
            <div className=''>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={isMobileDevice ? 1 : 2}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}


                    // navigation={true}

                    modules={[Autoplay, Navigation]}
                    // className="mySwiper"
                >
                    <SwiperSlide>
                        <div className=''>
                            <div className='items-center gap-10 md:flex'>
                                <img className='md:w-[200px]  w-28 mx-auto md:mx-0 rounded-full  md:rounded-none' src={person1} alt="" />
                                <div className=''>
                                    <h1 className='text-base mb-3 text-slate-400 md:mx-0 mx-auto max-w-[250px]'>" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "</h1>
                                    <p className='mb-2 text-center text-indigo-600 md:text-left '>Thomas Israel</p>
                                    <p className='text-sm text-center md:text-left text-slate-400 '>Staff Engineer, Algolia</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='items-center gap-10 md:flex'>
                                <img className='md:w-[200px]  w-28 mx-auto md:mx-0 rounded-full  md:rounded-none' src={person2} alt="" />
                                <div className=''>
                                    <h1 className='text-base mb-3 text-slate-400 md:mx-0 mx-auto max-w-[250px]'>" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "</h1>
                                    <p className='mb-2 text-center text-indigo-600 md:text-left '>Thomas Israel</p>
                                    <p className='text-sm text-center md:text-left text-slate-400 '>Staff Engineer, Algolia</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='items-center gap-10 md:flex'>
                                <img className='md:w-[200px]  w-28 mx-auto md:mx-0 rounded-full  md:rounded-none' src={person3} alt="" />
                                <div className=''>
                                    <h1 className='text-base mb-3 text-slate-400 md:mx-0 mx-auto max-w-[250px]'>" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "</h1>
                                    <p className='mb-2 text-center text-indigo-600 md:text-left '>Thomas Israel</p>
                                    <p className='text-sm text-center md:text-left text-slate-400 '>Staff Engineer, Algolia</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <div className='items-center gap-10 md:flex'>
                                <img className='md:w-[200px]  w-28 mx-auto md:mx-0 rounded-full  md:rounded-none' src={person4} alt="" />
                                <div className=''>
                                    <h1 className='text-base mb-3 text-slate-400 md:mx-0 mx-auto max-w-[250px]'>" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "</h1>
                                    <p className='mb-2 text-center text-indigo-600 md:text-left '>Thomas Israel</p>
                                    <p className='text-sm text-center md:text-left text-slate-400 '>Staff Engineer, Algolia</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SliderBtn />
                </Swiper>
            </div>


        </>
    );
};

export default PartnersSlider;