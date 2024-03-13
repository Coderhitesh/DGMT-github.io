import React from 'react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import axios from 'axios';

import img1 from './DIGITAL (2).png'
import img2 from './www.confirmbuyers.com (1).png'
import img3 from './Digital Marketing.png'
import img4 from './award-Photo-11zon.jpg'

// import img5 from '../../New folder/banner5.jpg'
import './slider.css';
// import { Link } from 'react-router-dom';

function Slider() {

    const data = [
        {
            id: 1,
            image: img1
        },

        {
            id: 2,
            image: img2
        },

        {
            id:3,
            image: img4
        }
    ]

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper slides-flag"
            >
                {data?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className='slides-flags'>
                            <div className='img-slider-flag'>
                                <img loading="lazy" src={item.image} alt='img'></img>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}





            </Swiper>
        </>
    );
}

export default Slider
