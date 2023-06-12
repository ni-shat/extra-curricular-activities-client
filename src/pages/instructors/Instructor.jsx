import React from 'react';
import t1 from '../../assets/teacher.jpg';
import mail from '../../assets/mail.png'

const Instructor = ({ teacher }) => {

    const { name, instructorImage, classes, email } = teacher;


    return (
        <div className='mt-20 mb-20 w-[80%] mx-auto'>
            <div className='flex gap-5 items-center font-roboto-bold'>
                <div className='w-2/4'>
                    <img className='h-[560px] w-[500px] object-cover' src={instructorImage} alt="" />
                </div>
                <div className='w-2/4 h-full'>
                    <h2 className='font-roboto-extrabold  text-5xl text-red-500'>{name}</h2>
                    <p className='flex gap-1 items-center my-3'>
                        <img src={mail} alt="" className='w-5 h-5' />
                        <span>{email}</span>
                    </p>
                    <div className='divider bg-gray-700 w-[80%] h-0.5'></div>
                    <p className='text-xl my-8'>Number of classes: <span className='text-2xl text-red-500 font-semibold'>{classes.length}</span></p>
                    <div className='flex flex-wrap  gap-2'>
                        {
                            classes?.map((c, index) => <li className='btn btn-xs text-white' key={index}>{c.title}</li>)
                        }
                    </div>
                    {/* <div className='flex justify-end items-end flex-col h-full mt-10'> */}
                        <button className='btn btn-lg bg-transparent border-2 mt-11 rounded-full text-gray-800 hover:bg-white hover:text-red-600'>
                            view more
                        </button>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Instructor;