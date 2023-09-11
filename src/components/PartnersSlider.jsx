import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import person1 from '../assets/slider/01.png'
import person2 from '../assets/slider/02.png'
import person3 from '../assets/slider/03.png'

const PartnersSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img  src={person1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={person2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={person3} alt="" />
                </SwiperSlide>
                
            </Swiper>
        </>
    );
};

export default PartnersSlider;