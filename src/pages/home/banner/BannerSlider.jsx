
// import bg from '../../../assets/bg.jpg'
// import banner from '../../../assets/banner-2.jpg'
// import kid from '../../../assets/kid1.png';
// import wave from '../../../assets/Wave (7).svg';
// import wave1 from '../../../assets/Stacked Wave (1).svg';
// import font from '../../../assets/n.png';
// import font2 from '../../../assets/for.png';
import { FaAngleRight, FaArrowRight } from 'react-icons/fa';
// import Navbar3 from '../../shared/navbar/Navbar';
import '../../../index.css';



import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import "swiper/css/effect-fade";
import { Mousewheel, EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import { Link } from 'react-router-dom';






const BannerSlider = () => {


    return (
        // <div>

        <div className='h-[750px] '>
            {/* 700px */}
            <Swiper
                effect={"fade"}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation, EffectFade, Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='bg-slate-300 h-[750px] w-full relative'>
                        <div className="hero h-full mt-0 bg-[url('/m00.jpg')]">
                            <div className="hero-overlay bg-black bg-opacity-30"></div>
                            <div className="justify-start   ml-0 w-[100%] text-white  ">
                                
                                <div className='bg-[#1a1d25]   bg-opacity-60 w-2/4 pl-20 h-[750px]'>
                                    {/* <Navbar3></Navbar3> */}
                                    <div className='pt-[220px] extra text-sm text-red-400 flex gap-4 items-center'>
                                        <div className='w-6 h-6 animate-pulse rounded-full bg-red-400'></div>
                                        <p className='text-red-400'>Extracurricular activities</p>
                                    </div>
                                    <div className='pt-6 flex'>
                                        <div className='border-0 pb-2 border-[#eb6767] border-l-8 mt-1 mb-2'></div>
                                        <h1 className="text-animation px-8 roboto uppercase leading-[60px] mon text-5xl font-  ">Lose yourself to
                                            <br /> the beat
                                        </h1>
                                    </div>

                                    <div className='flex gap-3  mb-14 mt-6 text-base  '>
                                        <div>
                                            <h1 className="text-p-animation text-base font-medium roboto-normal">Get ready to embark on a mesmerizing musical adventure! </h1>
                                        </div>
                                    </div>
                                    <Link to='/all-approved-classes'><button
                                        className='button-animation text-base  rounded-none py-5 uppercase px-12 border-2 mt-4 shadow-black  shadow-2xl text-black border-[#eb6767]  font-bold roboto-semi bg-white mx-1 flex items-center gap-3'>Learn Today
                                        <FaAngleRight className='mt-0.5 ' />
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-slate-300 relative'>
                        <div className="hero h-[750px] mt-0 bg-[url('/bg-iii.jpg')]">
                            <div className="hero-overlay bg-black bg-opacity-30"></div>
                            <div className="justify-start   ml-0 w-[100%] text-white  ">
                                <div className='bg-[#1a1d25]    bg-opacity-60 w-2/4 pl-20 h-[750px]'>
                                    {/* <Navbar3></Navbar3> */}
                                    <div className='pt-[220px] extra text-sm text-red-400 flex gap-4 items-center'>
                                        <div className='w-6 h-6 animate-pulse rounded-full bg-red-400'></div>
                                        <p className='text-red-400'>Extracurricular activities</p>
                                    </div>
                                    <div className='pt-6 flex'>
                                        <div className='border-0 pb-2 border-[#eb6767] border-l-8 mt-1 mb-2'></div>
                                            <h1 className="text-animation Big px-8 roboto uppercase leading-[60px] mon text-5xl font-  ">
                                            Master the Guitar Chords
                                            </h1>
                                    </div>

                                    <div className='flex gap-3  mb-14 mt-6 text-base  '>
                                        <div>
                                            <h1 className="text-p-animation text-base font-medium roboto-normal">Elevate your guitar skills to new heights.</h1>
                                        </div>
                                    </div>
                                    <Link to='/all-approved-classes'><button
                                        className='button-animation text-base  rounded-none py-5 uppercase px-12 border-2 mt-4 shadow-black  shadow-2xl text-black border-[#eb6767]  font-bold roboto-semi bg-white mx-1 flex items-center gap-3'>Learn Today
                                        <FaAngleRight className='mt-0.5 ' />
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div className='bg-slate-300 relative'>
                        <div className="hero h-[750px] mt-0 bg-[url('/photo.jpg')]">
                            <div className="hero-overlay bg-black bg-opacity-30"></div>
                           
                            <div className="justify-start   ml-0 w-[100%] text-white  ">
                                
                                <div className='bg-[#1a1d25]   bg-opacity-60 w-2/4 pl-20 h-[750px]'>
                                    {/* <Navbar3></Navbar3> */}
                                    <div className='pt-[220px] extra text-basesmt-white flex gap-4 items-center'>
                                        <div className='w-6 h-6 animate-pulse rounded-full bg-red-400'></div>
                                        <p className='text-red-400'>Extracurricular activities</p>
                                    </div>
                                        <div className='pt-6 flex'>
                                        <div className='border-0 pb-2 border-[#eb6767] border-l-8 mt-1 mb-2'></div>
                                        <h1 className="text-animation px-8 roboto uppercase leading-[60px] mon text-5xl font-  ">
                                        Capture the World
                                        </h1>
                                    </div>

                                    <div className='flex gap-3  mb-14 mt-6 text-base  '>
                                      
                                        <div>
                                            <h1 className="text-p-animation text-base font-medium roboto-normal">Our photography classes teach you to immortalize precious memories with every click.</h1>
                                        </div>
                                        
                                    </div>

                                    <Link to='/all-approved-classes'><button
                                        className='button-animation text-base  rounded-none py-5 uppercase px-12 border-2 mt-4 shadow-black  shadow-2xl text-black border-[#eb6767]  font-bold roboto-semi bg-white mx-1 flex items-center gap-3'>Learn Today
                                        <FaAngleRight className='mt-0.5 ' />
                                    </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-slate-300 relative'>
                        <div className="hero h-[750px] mt-0 bg-[url('/danc.jpg')]">
                            <div className="hero-overlay bg-black bg-opacity-30"></div>
                           
                            <div className="justify-start   ml-0 w-[100%] text-white  ">
                                
                                <div className='bg-[#1a1d25]   bg-opacity-60 w-2/4 pl-20 h-[750px]'>
                                    {/* <Navbar3></Navbar3> */}
                                    <div className='pt-[220px] extra text-basesmt-white flex gap-4 items-center'>
                                        <div className='w-6 h-6 animate-pulse rounded-full bg-red-400'></div>
                                        <p className='text-red-400'>Extracurricular activities</p>
                                    </div>
                                        <div className='pt-6 flex'>
                                        <div className='border-0 pb-2 border-[#eb6767] border-l-8 mt-1 mb-2'></div>
                                        <h1 className="text-animation px-8 roboto uppercase leading-[60px] mon text-5xl font-  ">
                                        Dance to Your Rhythm
                                        </h1>
                                    </div>

                                    <div className='flex gap-3  mb-14 mt-6 text-base  '>
                                      
                                        <div>
                                            <h1 className="text-p-animation text-base font-medium roboto-normal  xl:mr-32">Unleash your inner dancer. Our courses guide you in mastering the art of graceful movements.</h1>
                                        </div>
                                        
                                    </div>

                                    <Link to='/all-approved-classes'><button
                                        className='button-animation text-base  rounded-none py-5 uppercase px-12 border-2 mt-4 shadow-black  shadow-2xl text-black border-[#eb6767]  font-bold roboto-semi bg-white mx-1 flex items-center gap-3'>Learn Today
                                        <FaAngleRight className='mt-0.5 ' />
                                    </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-slate-300 relative'>
                        <div className="hero h-[750px] mt-0 bg-[url('/sports.jpg')]">
                            <div className="hero-overlay bg-black bg-opacity-30"></div>
                           
                            <div className="justify-start   ml-0 w-[100%] text-white  ">
                                
                                <div className='bg-[#1a1d25]   bg-opacity-60 w-2/4 pl-20 h-[750px]'>
                                    {/* <Navbar3></Navbar3> */}
                                    <div className='pt-[220px] extra text-basesmt-white flex gap-4 items-center'>
                                        <div className='w-6 h-6 animate-pulse rounded-full bg-red-400'></div>
                                        <p className='text-red-400'>Extracurricular activities</p>
                                    </div>
                                        <div className='pt-6 flex'>
                                        <div className='border-0 pb-2 border-[#eb6767] border-l-8 mt-1 mb-2'></div>
                                        <h1 className="text-animation px-8 roboto uppercase leading-[60px] mon text-5xl font-  ">
                                        Excel in Sports
                                        </h1>
                                    </div>

                                    <div className='flex gap-3  mb-14 mt-6 text-base  '>
                                      
                                        <div>
                                            <h1 className="text-p-animation text-base font-medium roboto-normal">Our sports courses empower you to reach new heights of performance.</h1>
                                        </div>
                                        
                                    </div>

                                    <Link to='/all-approved-classes'><button
                                        className='button-animation text-base  rounded-none py-5 uppercase px-12 border-2 mt-4 shadow-black  shadow-2xl text-black border-[#eb6767]  font-bold roboto-semi bg-white mx-1 flex items-center gap-3'>Learn Today
                                        <FaAngleRight className='mt-0.5 ' />
                                    </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-slate-300 relative'>
                        <div className="hero h-[750px] mt-0 bg-[url('/arts.jpg')]">
                            <div className="hero-overlay bg-black bg-opacity-30"></div>
                           
                            <div className="justify-start   ml-0 w-[100%] text-white  ">
                                
                                <div className='bg-[#1a1d25]   bg-opacity-60 w-2/4 pl-20 h-[750px]'>
                                    {/* <Navbar3></Navbar3> */}
                                    <div className='pt-[220px] extra text-basesmt-white flex gap-4 items-center'>
                                        <div className='w-6 h-6 animate-pulse rounded-full bg-red-400'></div>
                                        <p className='text-red-400'>Extracurricular activities</p>
                                    </div>
                                        <div className='pt-6 flex'>
                                        <div className='border-0 pb-2 border-[#eb6767] border-l-8 mt-1 mb-2'></div>
                                        <h1 className="text-animation px-8 roboto uppercase leading-[60px] mon text-5xl font-  ">
                                        Ink and Brush <br /> Magic
                                        </h1>
                                    </div>

                                    <div className='flex gap-3  mb-14 mt-6 text-base  '>
                                      
                                        <div>
                                            <h1 className="text-p-animation text-base font-medium roboto-normal">Explore the world of colors. Join us to paint, draw, and create art that speaks volumes.</h1>
                                        </div>
                                        
                                    </div>

                                    <Link to='/all-approved-classes'><button
                                        className='button-animation text-base  rounded-none py-5 uppercase px-12 border-2 mt-4 shadow-black  shadow-2xl text-black border-[#eb6767]  font-bold roboto-semi bg-white mx-1 flex items-center gap-3'>Learn Today
                                        <FaAngleRight className='mt-0.5 ' />
                                    </button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
               
            </Swiper>
        </div>

    );
};

export default BannerSlider;

