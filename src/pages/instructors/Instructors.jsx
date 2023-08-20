import React, { useEffect, useState } from 'react';
import t1 from '../../assets/teacher.jpg'
import Navbar from '../shared/navbar/Navbar';
import useTeachers from '../../hooks/useTeachers';
import Instructor from './Instructor';

const Instructors = () => {

    const [getTeachers] = useTeachers();
    console.log("getTeachers", getTeachers);

    const [pageNumbers, setPageNumbers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        if (getTeachers.length > 0) {
            const totalPages = Math.ceil(getTeachers.length / 5);
            console.log(totalPages)
            setPageNumbers([...Array(totalPages).keys()]);
        }
    }, [getTeachers])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/instructors?page=${currentPage}`);

            const data = await response.json();
            setTeachers(data);
        }
        fetchData();
    }, [currentPage]);

    console.log("teachers",teachers)


    return (
        <div>
            <div className='absolute top-0 bg-transparent w-full'>
                {/* <Navbar></Navbar> */}
            </div>
            
            <div className='bg-white'>
                <div className="hero h-[540px] bg-[url('/bg--.jpg')]">
                    <div className="hero-overlay bg-black bg-opacity-60"></div>
                    <div className="flex justify-start mt-16 w-[80%] text-white font-roboto ">
                        <div className="">
                            <h1 className="mb-5 leading-[60px] text-5xl font-bold">An ensemble of professionals.</h1>
                            <p className="mb-5 text-xl mr-64">Get to know the talented and dedicated instructors who are passionate about sharing their knowledge and expertise with you.</p>
                        </div>
                    </div>
                </div>
            </div>

            {
                teachers?.map(t => <Instructor key={t._id} teacher={t} ></Instructor>)
            }


            {/* pagination */}
            <div className="text-center mb-5">
                {
                    pageNumbers.map(numb =>
                        <button
                            onClick={() => setCurrentPage(numb)}
                            className={`btn btn-xs mx-2 text-white ${currentPage === numb ? "bg-red-500" : ""} `}
                            key={numb}>
                            {numb+1}
                        </button>
                    )
                }
            </div>
        </div>
    );
};

export default Instructors;