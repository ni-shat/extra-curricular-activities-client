import React, { useEffect, useState } from 'react';
import t1 from '../../assets/teacher.jpg'
import Navbar from '../shared/navbar/Navbar';
import useTeachers from '../../hooks/useTeachers';
import Instructor from './Instructor';

const Instructors = () => {

    const [getTeachers] = useTeachers();
    console.log(getTeachers);
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        if (getTeachers.length > 0) {
            const totalPages = Math.ceil(getTeachers.length / 5);
            console.log(totalPages)
            setPageNumbers([...Array(totalPages).keys()]);
        }
    }, [getTeachers])


    return (
        <div>
            <div className='absolute top-0 bg-transparent w-full'>
                <Navbar></Navbar>
            </div>
            <div className='bg-white'>
                <div className="hero h-[540px] bg-[url('/bg--.jpg')]">
                    <div className="hero-overlay bg-black bg-opacity-60"></div>
                    <div className="flex justify-start mt-16 w-[80%] text-white font-roboto ">
                        <div className="">
                            <h1 className="mb-5 leading-[60px] text-5xl font-bold">An ensemble of music <br /> professionals.</h1>
                            <p className="mb-5 text-xl">Enrich Your Musical Education with Our Skilled Instructors.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* teachers section */}
            {
                getTeachers?.map(t => <Instructor key={t._id} teacher={t}></Instructor>)
            }


            {/* pagination */}
            <div className="text-center mb-5">
                {
                    pageNumbers.map(numb => <button className='btn btn-xs mx-2 text-white' key={numb}>{numb}</button>)
                }
            </div>
        </div>
    );
};

export default Instructors;