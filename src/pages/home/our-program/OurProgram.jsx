import React from 'react';
import SwiperPrograms from '../classes/SwiperPrograms';



const OurProgram = () => {
    return (
        <div className='font-roboto my-10 w-[90%] mx-auto'>
            <div>
                <h3 className='font-monoton opacity-10 text-gray-500'>AREA OF STUDY</h3>
            </div>
            <div>
                <h3 className='text-5xl font-medium uppercase -mt-5'>Our Programs</h3>
                <h3 className='my-3 text-xl'>Discover a wide range of enriching and engaging programs designed to nurture talents.</h3>
            </div>
            <div>
                {/* <SwiperCustom></SwiperCustom> */}
                <SwiperPrograms></SwiperPrograms>
            </div>
        </div>
    );
};

export default OurProgram;