import React from 'react';
import Banner from '../banner/Banner';
import PopularProgram from '../classes/PopularProgram';
import { Helmet } from 'react-helmet';
import Services from '../services/Services';
import OurTeachers from '../teachers/OurTeachers';


const Home = () => {
    return (
        <div className='bg-white'>
            <Helmet>
                <title>Music School | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='w-[90%] mx-auto text-gray-800'>
                <PopularProgram></PopularProgram>
            </div>
            <Services></Services>
            <OurTeachers></OurTeachers>
            {/* TODO */}
            <div className='mt-40 text-white'>
                something
            </div>
        </div>
    );
};

export default Home;