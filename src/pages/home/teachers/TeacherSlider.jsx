import React, { useEffect, useRef, useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "../../home/classes/styles.css";
import { Grid, Pagination } from "swiper";
import useGetTeachers from "../../../hooks/useGetTeachers";
import { FaArrowRight } from "react-icons/fa";




const TeacherSlider = () => {

  const [getTeachers] = useGetTeachers();
  console.log("teachers", getTeachers)

  // useState to store the halves in state variables
  const [firstHalf, setFirstHalf] = useState([]);
  const [secondHalf, setSecondHalf] = useState([]);

  useEffect(() => {
    // Calculate the index to split the array
    const splitIndex = getTeachers.length / 2; console.log(splitIndex)

    // Split the array into two halves
    const first = getTeachers.slice(0, splitIndex);
    setFirstHalf(first);
    const second = getTeachers.slice(splitIndex);
    setSecondHalf(second);
  }, [getTeachers])


  console.log("first", firstHalf)
  // console.log("second",secondHalf)

  return (
    <div >
      <Swiper
        slidesPerView={4}
        spaceBetween={-1}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper -mt-10"
      >
        {
          getTeachers?.map((teacher, index) => (
            <>
              <SwiperSlide key={teacher._id} className={`relative border border-transparent`}>

                <img className="w-[280px] h-[400px] object-cover transition-transform duration-500 transform origin-center cursor-pointer hover:scale-110 bg-gradient-to-b from-transparent to-black mix-blend-multiply" src={teacher.instructorImage} alt="" />


                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-multiply transition duration-300"></div> */}
                <div className={`absolute inset-0 bg-black opacity-50 `}></div>
                <div className="text-white absolute top-[320px] px-6 flex flex-col h-fit">
                  {/* <h3 className="text-3xl mb-4 font-roboto-bold"> {teacher?.title.split(' ').slice(0, 2).join(' ')}</h3> */}
                  <p className="text-3xl font-roboto">{teacher.name}</p>
                  {/* <button className="flex uppercase items-center gap-3 text-red-500 font-roboto-bold flex-grow mt-5">View more <FaArrowRight/></button> */}
                </div>
              </SwiperSlide>
            </>
          ))
        }
      </Swiper>



      <Swiper
        slidesPerView={4}
        spaceBetween={-1}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper -mt-[70px]"
      >
        {
          getTeachers?.map((teacher) => (
            <>
              <SwiperSlide key={teacher._id} className={`relative border border-transparent`}>

                <img className="w-[280px] h-[400px] object-cover transition-transform duration-500 transform origin-center cursor-pointer hover:scale-110 bg-gradient-to-b from-transparent to-black mix-blend-multiply" src={teacher.instructorImage} alt="" />


                {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-multiply transition duration-300"></div> */}
                <div className={`absolute inset-0 bg-black opacity-50 `}></div>
                <div className="text-white absolute top-[320px] px-6 flex flex-col h-fit">
                  {/* <h3 className="text-3xl mb-4 font-roboto-bold"> {teacher?.title.split(' ').slice(0, 2).join(' ')}</h3> */}
                  <p className="text-3xl font-roboto">{teacher.name}</p>
                  {/* <button className="flex uppercase items-center gap-3 text-red-500 font-roboto-bold flex-grow mt-5">View more <FaArrowRight/></button> */}
                </div>
              </SwiperSlide>
            </>
          ))
        }
      </Swiper>
    </div>
  );
};

export default TeacherSlider;


