import React from 'react';
import useAllClasses from '../../../hooks/useApprovedClasses';
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';

const LatestClasses = () => {

    const [all_Classes, refetch] = useAllClasses();
    const slicedClasses = all_Classes.slice(0, 8);
    console.log(slicedClasses)

    return (
        <div className='my-0'>
            <div>
                <div className='bg-[#212121] px-20 pt-10 pb-16 z-10'>
                    <h3 className='font-monoton opacity-10  text-gray-500'>Latest Classes</h3>
                    <div className='justify-between flex items-center -mt-0'>
                        <div className=''>
                            {/* text-[43px] */}
                            <h3 className='text-white text-3xl poppin font-semibold uppercase'>Can't find what you're looking for?</h3>
                            <p className='text-base poppin text-[#e7e7e7] mt-3 font-extralight'>Discover our newest and most exciting classes. Click the arrow to explore all available classes.</p>
                        </div>
                        <div>
                            <button className='btn btn-md bg-transparent border-2 border-white rounded-none text-white hover:bg-white hover:text-red-600'>
                                Explore all classes <FaLongArrowAltRight />
                            </button>
                        </div>
                    </div>

                </div>

                <div>
                    {/* classes */}
                    <div className='grid grid-cols-4'>
                        {
                            slicedClasses.map((cls, index) => <div key={index}>
                                {
                                    cls.status === 'approved' &&
                                    <div 
                                    data-aos="fade-up" data-aos-duration="900"
                                     className="h-[270px] relative">
                                        <img className="w-full h-[270px] object-cover transition-transform duration-500 transform origin-center cursor-pointer hover:scale-110 bg-gradient-to-b from-transparent to-black mix-blend-multiply" src={cls.classImage} alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-multiply transition duration-300"></div>
                                        <div className="text-white space-y-3 absolute top-40 left-0 px-6 py-4 w-full">
                                            {/* <p className='lugras'>{cls.categories}</p> */}
                                            <h3 className="text-2xl mb-4 font-semibold poppin uppercase">{cls?.classTitle}</h3>
                                            {/* <p className="leading-6 h-[65px] ">{cls.description}</p> */}
                                            {/* <button className="flex items-center text-red-500 font-roboto-bold mt-5">View more <FaArrowRight /></button> */}
                                        </div>
                                    </div>

                                }
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestClasses;