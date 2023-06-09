import { FaArrowRight } from 'react-icons/fa';
import teacher from '../../../assets/teacher.png'
import TeacherSlider from './TeacherSlider';



const OurTeachers = () => {


    return (
        <div className='mt-24 font-roboto'>
            <div className='flex gap-16 items-center w-[90%] mx-auto'>
                <div className='w-2/4 relative'>
                    <img src={teacher} alt="" />
                    <div className='text-transparent bg-red-600 w-20 h-20 rounded-full absolute top-14 right-24'>
                        circle
                    </div>
                </div>
                {/* <div className='w-2/4'> */}
                <div className=' w-2/4'>
                    <div className='space-y-5 w-[80%]'>
                        <h3 className='text-5xl'>Our <span className='text-red-600 font-extrabold'>Teachers</span></h3>
                        <p>All of our music teachers have some of the best traininig in music from accredited universities in music performance</p>
                    </div>
                    <div className='mt-10 w-[80%] space-y-3.5'>
                        <div>
                            <p className='uppercase font-semibold'>
                                Classical Music
                            </p>
                            <p className='mr-5'>
                                <input
                                    type="range" min={0} max="100" value="70" step="10"
                                    className="range range-xs range-primary bg-gray-300  text-red-600 my-2"
                                />
                            </p>
                        </div>
                        <div>
                            <p className='uppercase font-semibold'>
                                Jazz and Blues
                            </p>
                            <p className='mr-5'>
                                <input
                                    type="range" min={0} max="100" value="80" step="10"
                                    className="range range-xs range-primary bg-gray-300  text-red-600 my-2"
                                />
                            </p>
                        </div>
                        <div>
                            <p className='uppercase font-semibold'>
                                Rock and Pop
                            </p>
                            <p className='mr-5'>
                                <input
                                    type="range" min={0} max="100" value="90" step="10"
                                    className="range range-xs range-primary bg-gray-300  text-red-600 my-2"
                                />
                            </p>
                        </div>
                        <div>
                            <p className='uppercase font-semibold'>
                                Contemporary and Experimental Music
                            </p>
                            <p className='mr-5'>
                                <input
                                    type="range" min={0} max="100" value="75" step="10"
                                    className="range range-xs range-primary bg-gray-300  text-red-600 my-2"
                                />
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='-mt-4 flex'>
                <h3 className='font-monoton  opacity-10 text-gray-500  whitespace-nowrap'> <span>Popular </span>  <span>instructor</span> </h3>
                {/* <div className='relative w-full'>
                    <div className='absolute -top-5 right-14'>
                        <div className='flex items-center '>
                        <div className='bg-slate-200 h-32 w-32 rounded-full uppercase text-left flex justify-end items-center text-xl font-roboto-bold gap-1'>
                            See all 
                        </div> <FaArrowRight/>
                        </div>
                        
                        <div className='text-transparent bg-red-600 w-10 h-10 rounded-full absolute -top-0 right-20'>
                            circle
                        </div>
                    </div>

                </div> */}
            </div>
            <TeacherSlider></TeacherSlider>

        </div>
    );
};

export default OurTeachers;