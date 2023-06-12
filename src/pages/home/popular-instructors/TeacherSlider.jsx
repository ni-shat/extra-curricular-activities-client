import React, { useEffect, useRef, useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "../../home/classes/styles.css";
import { Grid, Pagination } from "swiper";
import usePopularTeachers from "../../../hooks/usePopularTeachers";
import { FaArrowRight } from "react-icons/fa";
import Teacher from "./Teacher";




const TeacherSlider = () => {

  const [getPopularTeachers] = usePopularTeachers();
  // console.log("teachers", getPopularTeachers)

  return (
    <div  className="grid grid-cols-4">

      {
        getPopularTeachers?.map((teacher, index) => (
          <Teacher key={index} teacher={teacher}></Teacher>
        ))
      }


    </div>
  );
};

export default TeacherSlider;


