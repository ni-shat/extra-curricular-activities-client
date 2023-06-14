import React from 'react';
import useAllClasses from '../../hooks/useApprovedClasses';
import ApprovedClass from './ApprovedClass';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../shared/navbar/Navbar';
import NavbarDashboard from '../dashboard/navbar/NavbarDashboard';
import logo from '../../assets/logo-black.svg';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const AllApprovedClasses = () => {


    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();



    const [all_Classes, refetch] = useAllClasses();
    console.log("in all approved classes", all_Classes);


    return (
        <div className=''>
            <div className='flex items-center'>
                <img className='w-[75px] mt-2 ml-1 h-[75px]' src={logo} alt="" />
                <NavbarDashboard></NavbarDashboard>
            </div>
            {/* <div>
                <h3 className='uppercase font-extrabold px-10 pt-20 text-5xl'>All classes</h3>
            </div> */}
            <div>
                <h3 className='font-monoton opacity-10 mt-10 px-10  text-gray-500'>ALL CLASSES</h3>
            </div>
            <div className='grid grid-cols-4 gap-6 px-10 pt-3'>
                {
                    all_Classes?.map(c => <ApprovedClass 
                        key={c._id} 
                        cls={c}
                        isAdmin={isAdmin} 
                        isInstructor={isInstructor}
                        refetch={refetch}
                    ></ApprovedClass>)
                }


            </div>
        </div>
    );
};

export default AllApprovedClasses;