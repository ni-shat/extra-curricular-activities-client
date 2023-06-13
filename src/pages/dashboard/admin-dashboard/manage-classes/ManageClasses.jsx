import React from 'react';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt } from 'react-icons/fa';

const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: allAvailableClasses = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/all-instructor-classes/admin')
        return res.data;
    })

    const handleApproved = async (id) => {
        console.log(id)
    }


    return (
        <div className="w-full pl-16 pr-20">
            <Helmet>
                <title>Music School | Manage Classes</title>
            </Helmet>
            <div className="overflow-scroll h-screen mt-32">
                <table className="table table-pin-rows   ">
                    {/* head */}
                    <thead>
                        <tr className="bg-slate-100 z-10">
                            <th className="text-gray-800 font-roboto-bold text-base"></th>
                            <th className="text-gray-800 font-roboto-bold text-base">Classes</th>
                            <th className="text-gray-800 font-roboto-bold text-base">Instructor</th>
                            <th className="text-gray-800 font-roboto-bold text-base">Email</th>
                            <th className="text-gray-800 font-roboto-bold text-base">Seats</th>
                            <th className="text-gray-800 font-roboto-bold text-base">Price</th>
                            <th className="text-gray-800 font-roboto-bold text-base">status</th>
                            <th className="text-gray-800 font-roboto-bold text-base">Action</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-scroll">
                        {/*  Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback).
 */}
                        {
                            allAvailableClasses.map((cls, index) => <tr key={cls._id}>
                                <th>{index + 1}</th>
                                <td>{cls.name}</td>
                                <td>{cls.instructor}</td>
                                <td>{cls.email}</td>
                                <td>{cls.availableSeats}</td>
                                <td>{cls.price}</td>
                                <td>
                                    <p className='bg-blue-600 text-white px-1 text-center border rounded'>{cls.status}</p>
                                </td>
                                <td>
                                    <div className="flex flex-col gap-3">
                                    <button onClick={() => handleApproved(cls._id)} className="btn btn-xs bg-green-500 text-white">Approve</button>
                                    <button className="btn btn-xs bg-red-500  text-white">Deny</button>
                                    <button className="btn btn-xs bg-yellow-500  text-white">Send Feedback</button>
                                        {/* <div>
                                            {
                                                cls.role === 'admin' ? <button disabled className=" text-green-600 btn-xs bg-green-100 text-base flex items-center gap-2"><span>admin</span>  <FaCheckCircle/> </button>
                                                    :
                                                    <button onClick={() => handleMakeAdmin(cls)} className="btn btn-xs bg-green-500  text-white">Approve</button>
                                            }
                                        </div>
                                        <div>
                                            {
                                                cls.role === 'instructor' ? <button disabled className=" text-blue-600 btn-xs bg-blue-100 text-base flex items-center gap-2"><span>instructor</span>  <FaCheckCircle/> </button>
                                                    :
                                                    <button onClick={() => handleInstructorAdmin(cls)} className="btn btn-xs border bg-blue-500  text-white">Deny</button>
                                            }
                                        </div>
                                        <div>
                                            {
                                                cls.role === 'instructor' ? <button disabled className=" text-blue-600 btn-xs bg-blue-100 text-base flex items-center gap-2"><span>instructor</span>  <FaCheckCircle/> </button>
                                                    :
                                                    <button onClick={() => handleInstructorAdmin(cls)} className="btn btn-xs border bg-yellow-500  text-white">Send feedback</button>
                                            }
                                        </div> */}
                                    </div>
                                </td>
                                {/* <td><button onClick={() => handleDelete(cls)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;