import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import mail from '../../../../assets/mail.png';

const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const [disabled, setDisabled] = useState(false);
    const { data: allAvailableClasses = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/all-instructor-classes/admin')
        return res.data;
    })
    console.log(allAvailableClasses)

    const handleApproved = async (id) => {
        console.log(id);
        try {
            console.log('im in try hook')
            const response = await axiosSecure.patch(`/approve-class/${id}`);

            console.log("data in approved hookkkk", response.data);

            setDisabled(true);

            Swal.fire(
                'Updated!',
                'user request is approved.',
                'success'
            )
            refetch();
            return response.data;
        } catch (error) {
            console.error('error in deleteeeeeee hook', error);
        }
    }


    return (
        <div className="w-full px-0">
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
                            {/* <th className="text-gray-800 font-roboto-bold text-base">Email</th> */}
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
                                <td className=' w-40  h-40'>
                                    <div className="mask mask-half-2 w-40 m-0 h-40 ">
                                        <img className='w-full h-full object-cover' src={cls.classImage} />
                                    </div>
                                    <p className='font-bold mt-2 uppercase relative text-base'>{cls.classTitle}</p>
                                    
                                </td>
                                <td>
                                    <p className='font-bold text-'>{cls.instructor}</p>
                                    {/* <p className='text-xs text-blue-600'>{cls.email}</p> */}
                                    {/* <div className='divider my-2 bg-gray-700 w-[80%] h-[1px]'></div> */}
                                    <img src={mail} alt="" className='w-5 h-5 mt-0.5' />
                                    
                                </td>
                                {/* <td>{cls.email}</td> */}
                                <td className='font-bold'>{cls.availableSeats}</td>
                                <td className='font-bold'>{cls.price}</td>
                                <td>
                                    <div className={`flex w-fit items-center border rounded justify-center px-1 gap-1
                                        ${cls.status === 'approved' && 'text-green-600 font-semibold'}
                                        ${cls.status === 'denied' && 'bg-red-600'}
                                        ${cls.status === 'pending' && 'bg-blue-600 text-white'}
                                    `}>
                                        <p className={` 
                                            
                                       `}>{cls.status}</p>
                                        {
                                            cls.status === 'approved' && <FaCheckCircle className='text-green-600' />
                                        }
                                    </div>
                                </td>
                                <td>
                                    <div className="flex  flex-col gap-3">
                                        <button onClick={() => handleApproved(cls._id)} className="btn btn-xs py-1 px-0 border font-semibold disabled:bg-gray-200 disabled:text-gray-500 bg-green-500 text-white"
                                            disabled={cls.status === 'approved' ? true : false}

                                        >Approve</button>
                                        <button className="btn btn-xs py-1 px-0 border font-semibold bg-red-500  text-white">Deny</button>
                                        <button className="btn btn-xs py-1 px-0 border font-semibold bg-yellow-500  text-white">Send Feedback</button>
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