import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";
import { FreeMode, Pagination } from "swiper";


import usePopularClasses from "../../../hooks/usePopularClasses";
import { FaArrowRight } from 'react-icons/fa';



const SwiperPrograms = () => {

    const [popularClasses] = usePopularClasses();
    console.log(popularClasses)
    const [zoomed, setZoomed] = useState(false);

    const toggleZoom = () => {
        setZoomed(!zoomed);
    };


    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={-1}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    popularClasses?.map((cls, index) => (
                        <>

                            <SwiperSlide key={index} className={`relative border border-transparent`}>

                                <img className="w-[280px] h-[350px] object-cover transition-transform duration-500 transform origin-center cursor-pointer hover:scale-110 bg-gradient-to-b from-transparent to-black mix-blend-multiply" src={cls.image} alt="" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-multiply transition duration-300"></div>
                                {/* <div className={`absolute inset-0 bg-black opacity-50 `}></div> */}
                                <div className="text-white absolute top-36 px-6 flex flex-col h-fit">
                                    <h3 className="text-3xl mb-4 font-roboto-bold"> {cls?.title.split(' ').slice(0, 2).join(' ')}</h3>
                                    <p className="leading-6">{cls.description}</p>
                                    <button className="flex uppercase items-center gap-3 text-red-500 font-roboto-bold flex-grow mt-5">View more <FaArrowRight/></button>
                                </div>

                            </SwiperSlide>
                        </>

                    ))
                }

            </Swiper>
        </>
    );
};

export default SwiperPrograms;



/***
 *  {
                        popularClasses?.map(cls => <SwiperSlideCustom key={cls._id} cls={cls}></SwiperSlideCustom>)
                    }
 */

// _id
// 648187a0c7129030fcf0457a
// title
// "Classical Music"
// description
// "Learn the techniques and repertoire of classical music, including comp…"
// instructor
// "Sarah Johnson"
// schedule
// "Mondays and Wednesdays, 5:00 PM - 6:30 PM"
// price
// "$60/hour"
// image
// "https://i.ibb.co/n11TF0q/Classical-Music-violin.jpg"
// total_students