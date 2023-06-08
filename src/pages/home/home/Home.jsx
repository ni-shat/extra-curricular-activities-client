import React from 'react';
import Banner from '../banner/Banner';
import PopularProgram from '../classes/PopularProgram';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Music School | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='w-[90%] mx-auto text-gray-800'>
                <PopularProgram></PopularProgram>
            </div>
        </div>
    );
};

export default Home;