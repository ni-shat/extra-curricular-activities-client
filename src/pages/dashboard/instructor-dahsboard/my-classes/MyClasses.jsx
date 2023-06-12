import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import useAllClasses_Instructor from '../../../../hooks/useAllClasses';
import MyClass from './MyClass';

const MyClasses = () => {

    const [allClasses] = useAllClasses_Instructor();
    console.log("allClasses",allClasses)



    return (
        // <div>
           <div className='w-full pl-16 pr-20'>
            <div className="overflow-x-auto ">
                <table className="table table-pin-rows table-pin-cols">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-gray-800 font-roboto-bold text-base'>
                                
                            </th>
                            <th className='text-gray-800 font-roboto-bold text-base'>Classes</th>
                            <th className='text-gray-800 font-roboto-bold text-base'>Total Enrolled</th>
                            <th className='text-gray-800 font-roboto-bold text-base'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClasses[0]?.classes?.map((cls, index) => <MyClass key={cls._id} cls={cls} index={index}></MyClass>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        // </div>
    );
};

export default MyClasses;