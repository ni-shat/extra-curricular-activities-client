import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";
import { FreeMode, Pagination, Autoplay } from "swiper";
// import { Mousewheel, EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import { FaArrowRight } from 'react-icons/fa';
const programs = [
    {
        "name": "Painting",
        "description": "Explore the world of colors and strokes, and create mesmerizing paintings on canvas.",
        "image": "https://i.ibb.co/wYr00hR/jade-stephens-Wh-VO1x-Ki-DVw-unsplash.jpg"
    },
    {
        "name": "Photography",
        "description": "Unleash your creativity through the lens and learn the art of capturing stunning photographs.",
        "image": "https://i.ibb.co/8NtRqdv/bailey-mahon-2b6-K4uy0-Hbc-unsplash.jpg"
    },
    {
        "name": "Piano",
        "description": "Discover the melodious world of piano and develop your skills in playing beautiful tunes.",
        "image": "https://i.ibb.co/zPFvdZ2/land-rev-top-img-10.png"
    },
    {
        "name": "Violin",
        "description": "Immerse yourself in the soulful sound of the violin and learn to play enchanting melodies.",
        "image": "https://i.ibb.co/X8CgXkz/nadin-mario-al2-FHd-ZKxp-U-unsplash.jpg"
    },
    {
        "name": "Outdoor Sports",
        "description": "Engage in various outdoor sports and activities to stay active, build teamwork, and enjoy the great outdoors.",
        "image": "https://i.ibb.co/KySC7dj/connor-coyne-Ogq-WLz-WRSa-I-unsplash.jpg"
    },
    {
        "name": "Cooking",
        "description": "Dive into the world of baking and master the art of creating delectable cakes and pastries.",
        "image": "https://i.ibb.co/xMdX3w3/lindsay-cotter-9-J7s-Hie-VFi0-unsplash.jpg"
    },
    {
        "name": "Arts and Crafts",
        "description": "Unearth your artistic abilities and express yourself through various forms of visual arts.",
        "image": "https://i.ibb.co/6FtVs8N/meg-wagener-vu-XTB1l-R3-AY-unsplash.jpg"
    },
    {
        "name": "Classical Dance",
        "description": "Experience the timeless elegance of classical dance forms and their cultural significance.",
        "image": "https://i.ibb.co/TM22ssF/church-of-the-king-Qe-FVaxw-QB1-M-unsplash.jpg"
    }
];



const SwiperPrograms = () => {

    // const [popularClasses] = usePopularClasses();
    const [zoomed, setZoomed] = useState(false);

    const toggleZoom = () => {
        setZoomed(!zoomed);
    };


    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={5}
                freeMode={true}
                // pagination={{
                //     clickable: true,
                // }}
                autoplay={{
                    delay: 2000,
                    // disableOnInteraction: false,
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                height={200}
            >
                {
                    programs?.map((cls, index) => (
                        <>

                            <SwiperSlide key={index} className={`relative border border-transparent`}>

                                <div className="h-[350px] relative">
                                    <img className="w-[280px] h-[350px] object-cover transition-transform duration-500 transform origin-center cursor-pointer hover:scale-110 bg-gradient-to-b from-transparent to-black mix-blend-multiply" src={cls.image} alt="" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-multiply transition duration-300"></div>
                                    <div className="text-white absolute bottom-2 left-0 px-6 py-4 w-full">
                                        <h3 className="text-3xl mb-4 font-roboto-bold">{cls?.name.split(' ').slice(0, 2).join(' ')}</h3>
                                        <p className="leading-6 h-[65px] ">{cls.description}</p>
                                        <button className="flex items-center text-red-500 font-roboto-bold mt-5">View more <FaArrowRight /></button>
                                    </div>
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