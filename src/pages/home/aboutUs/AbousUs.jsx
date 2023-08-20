import React from 'react';
// import aboutPng from '../../../assets/about-png.png';
import aboutPng from '../../../assets/m1.jpg';

const AbousUs = () => {

    return (
        <div className='font-roboto pt-12 pb-28 bg-slate-100'>
            <div className='w-[90%] mx-auto '>
                <div>
                    <h3 className='font-monoton opacity-10 text-gray-500 z-40 relative uppercase'>About Us</h3>
                </div>
                <div className='relative'>
                    <hr className='w-20 h-1.5  bg-red-700 mb-5' />
                    <div>
                        <h4 className='text-gray-800 text-5xl font-semibold uppercase '>Connecting Dreams to Reality...</h4>
                    </div>

                    <div className='mt-5 w-2/4 text-base font-normal text-gray-500 flex gap-5'>
                        <div>
                            <p className='text-7xl text-red-500'>"</p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500">
                            <p>Discover the heart behind our mission at TALENTO. An ultimate platform for exploring and enrolling in a diverse array of extra-curricular activities. Unleash your potential, pursue your passions, and embark on a journey of growth and discovery with our carefully curated classes taught by passionate instructors.</p>
                        </div>
                    </div>
                    <div className=''>
                        <img className='w-[25%] border-8 border-white z-10 absolute right-10 -top-28' src={aboutPng} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AbousUs;