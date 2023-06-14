import React from 'react';
import mail from '../../../../assets/mail.png';
import { FaCheckCircle, FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import FeeadBackModal from './FeeadBackModal';

const ManageClass = ({ cls, index, refetch }) => {

    const [selectedRow, setSelectedRow] = useState(null);
    const [axiosSecure] = useAxiosSecure();
    const [disabled, setDisabled] = useState(false);

    const handleApprovalAction = async (id, action) => {
        console.log(id);
        try {
            console.log('im in try hook')
            const response = await axiosSecure.patch(`/approval-action/${id}?action=${action}`);

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
        <tr key={cls._id}>
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

                <div className="tooltip tooltip-bottom hover:cursor-pointer" data-tip={cls.email}>
                    <img src={mail} alt="" className='w-5 h-5 mt-0.5' />
                </div>
            </td>
            {/* <td>{cls.email}</td> */}
            <td className='font-bold'>{cls.availableSeats}</td>
            <td className='font-bold'>{cls.price}</td>
            <td>
                <div className={`flex w-fit items-center border rounded justify-center px-1 gap-1
                                        ${cls.status === 'approved' && 'text-green-600 font-semibold'}
                                        ${cls.status === 'denied' && 'bg-red-600 text-white font-semibold'}
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
                    <button onClick={() => handleApprovalAction(cls._id, 'approved')} className="btn btn-xs py-1 px-0 border font-semibold disabled:bg-gray-200 disabled:text-gray-500 bg-green-500 text-white"
                        disabled={(cls.status === 'approved' || cls.status === 'denied') ? true : false}

                    >Approve</button>
                    <button onClick={() => handleApprovalAction(cls._id, 'denied')}
                        className="btn btn-xs py-1 px-0 border font-semibold  disabled:bg-gray-200 disabled:text-gray-500 bg-red-500  text-white"
                        disabled={(cls.status === 'approved' || cls.status === 'denied') ? true : false}
                    >Deny</button>

                    {
                        cls.feedback === '' ?
                        <label
                            onClick={() => setSelectedRow(cls)}
                            htmlFor="my-modal-3"
                            className="btn btn-xs py-1 px-0 border font-semibold bg-yellow-500  text-white">
                            Send Feedback
                        </label>
                                            :
                    <div className='tooltip tooltip-bottom' data-tip={cls.feedback}>
                        <label 
                        className="flex items-center justify-center gap-2 lowercase btn-xs py-1 px-0 border-0 hover:bg-yellow-100 rounded-none font-semibold bg-yellow-100  text-black"
                        > 
                        feedback sent
                            <label onClick={() => setSelectedRow(cls)} htmlFor="my-modal-3"><FaEdit className='hover:text-yellow-800 -mt-0.5 hover:cursor-pointer' /></label>

                        </label>
                    </div>
                                        
                    }
                    {/* <label
                        onClick={() => setSelectedRow(cls)}
                        htmlFor="my-modal-3"
                        className="btn btn-xs py-1 px-0 border font-semibold bg-yellow-500  text-white">
                        Send Feedback
                    </label> */}

                    {
                        selectedRow && <FeeadBackModal
                            id={cls._id}
                            cls={cls}
                            refetch={refetch}
                            setSelectedRow={setSelectedRow}
                        ></FeeadBackModal>
                    }


                </div>
            </td>
            {/* <td><button onClick={() => handleDelete(cls)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td> */}
        </tr>

    );
};

export default ManageClass;