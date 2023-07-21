import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Swiper1 = () => {
  return (
    <div>
      <Swiper className="mySwiper">
        <SwiperSlide>slide1</SwiperSlide>
        <SwiperSlide>slide2</SwiperSlide>
        <SwiperSlide>slide3</SwiperSlide>
        <SwiperSlide>slide4</SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Swiper1;
