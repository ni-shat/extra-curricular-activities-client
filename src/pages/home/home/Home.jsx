import React from 'react';
import Banner from '../banner/Banner';
import PopularProgram from '../classes/PopularProgram';
import { Helmet } from 'react-helmet';
import Services from '../services/Services';
import OurTeachers from '../popular-instructors/OurTeachers';
import Footer from '../../shared/footer/Footer';
import BannerSlider from '../banner/BannerSlider';
import AbousUs from '../aboutUs/AbousUs';
import OurProgram from '../our-program/OurProgram';
import LatestClasses from '../latest-classes/LatestClasses';
import PersonalLearning from '../personal-learning/PersonalLearning';
import ContactUs from '../contact-us/ContactUs';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='bg-white overflow-hidden'>
            <Helmet>
                <title>Talento | Home</title>
            </Helmet>

            {/* <Banner></Banner> */}
            <BannerSlider></BannerSlider>
            <AbousUs></AbousUs>
            {/* <div className='w-[90%] mx-auto text-gray-800'>
                <PopularProgram></PopularProgram>
            </div> */}
            <OurProgram></OurProgram>
            <OurTeachers></OurTeachers>
            <PersonalLearning></PersonalLearning>
            <LatestClasses></LatestClasses>
            <ContactUs></ContactUs>
            {/* <Services></Services> */}
            
        </div>
    );
};

export default Home;