import React from 'react';
// Import Swiper React components
import {  SwiperSlide } from "swiper/react";;
import image from '../../../assets/bg-1.jpg'

const SwiperSlideCustom = (props) => {

    // const {_id, title, description, image} = class;
    // console.log(pr)

    return (
        <SwiperSlide>
            <img src={image} />
        </SwiperSlide>
    );
};

export default SwiperSlideCustom;