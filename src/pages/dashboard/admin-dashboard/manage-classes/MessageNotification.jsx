import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaArrowRight, FaCheckCircle, FaTrash, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';


const MessageNotification = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: reqForTeachers = [], refetch } = useQuery(['reqForTeachers'], async () => {
        const res = await axiosSecure.get('/users/requested-to-become-teacher')
        console.log(res.data)
        return res.data;
    })

    const handleInstructorAdmin = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div className='pt-24 px-6 w-full h-screen flex gap-6'>
            <div className='w-[35%] h-[100%] flex-col flex gap-6'>
                <div className='w-full h-[50%] bg-white shadow-2xl shadow-slate-500 rounded-xl relative'>
                    {
                        reqForTeachers &&
                        <div className="stack w-full h-[90%] ">
                            <div className="text-center border border-base-content card w-full h-full mt-0 bg-base-100">
                                <div className="card-body mt-3 text-gray-500">New Requests</div>
                            </div>
                            <div className="text-center border border-base-content card w-full h-full mt-0 bg-base-100">
                                <div className="card-body text-2xl font-extrabold font-roboto-extrabold mt-6"></div>
                            </div>
                            <div className="text-center border border-base-content card w-full h-full mt-0 bg-base-100">
                                <div className="card-body text-6xl rounded font-extrabold mt-0 text-blue-900">
                                    <p className='mask mask-hexagon-2 text-center bg-slate-200'>{reqForTeachers.length}</p>
                                </div>
                            </div>
                            <div className="text-center border border-base-content card w-full h-full mt-0 bg-base-100">
                                <div className="card-body text-3xl  rounded font-extrabold mt-20 text-blue-900">
                                    Pending Teacher Requests
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className=' h-[42%] p-4 bg-white shadow-2xl shadow-slate-500 rounded-xl relative'>
                    <p className="mask mask-decagon flex justify-center gap-2 text-2xl items-center w-full h-full  bg-pink-100">
                        <div className='flex items-center gap-2'>
                            <p className='roboto-font-extrabold font-medium'>Inbox</p>
                            <div className="badge badge-secondary bg-pink-400 p-3 text-gray-800">+99</div>
                        </div>
                    </p>
                    <FaArrowRight className='absolute right-8 bottom-10' />
                </div>
            </div>

            <div className='bg-white shadow-2xl shadow-slate-500 rounded-xl h-[95.8%] w-[65%] p-'>
                <div className='overflow-y-auto rounded-lg h-full'>
                    <h4 className='font-semibold text-xl my-4 text-center'>Teacher Approval Queue</h4>
                    <table className="table table-pin-rows">
                        {/* head */}
                        <thead>
                            <tr className="bg-slate-100 z-10">
                                <th className="text-gray-800 font-roboto-bold text-base"></th>
                                <th className="text-gray-800 font-roboto-bold text-base">Name</th>
                                <th className="text-gray-800 font-roboto-bold text-base">Email</th>
                                <th className="text-gray-800 font-roboto-bold text-base">Role</th>
                                <th className="text-gray-800 font-roboto-bold text-base">Action</th>
                            </tr>
                        </thead>
                        <tbody className="overflow-auto bg-white">
                            {
                                    reqForTeachers.map((user, index) => <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td className='space-y-1'>
                                            <div className="mask mask-circle w-20 h-20 ">
                                                <img className='rouned-full w-full h-full object-cover' src={user.userImage} />
                                            </div>
                                            <p className='font-semibold'>{user.name}</p>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>
                                            <div className="flex gap-3">
                                                <div>
                                                    {
                                                        user.role === 'instructor' ? <button disabled className=" text-blue-600 btn-xs bg-blue-100 text-base flex items-center gap-2"><span>instructor</span>  <FaCheckCircle /> </button>
                                                            :
                                                            <button
                                                                onClick={() => handleInstructorAdmin(user)}
                                                                className="btn btn-xs border bg-blue-500  text-white">Make instructor</button>
                                                    }
                                                </div>
                                            </div>

                                        </td>
                                        <td><button
                                            // onClick={() => handleDelete(user._id)} 
                                            className="btn btn-ghost text-red-600"><FaTrashAlt></FaTrashAlt></button></td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MessageNotification;