import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const MyClass = ({ cls, index, handleDelete }) => {

    const { _id, instructor, email, instructorImage, availableSeats, classImage, classTitle, price, total_enrolled, status, feedback } = cls;
   

    return (
        <tr>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={classImage} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-base">{classTitle}</div>
                        {/* <div className="text-sm opacity-50">{schedule}</div> */}
                        {
                            status==='denied' && <p className='text-black font-bold text-sm w-fit border shadow-sm px-1 py-0.5 mt-2 bg-yellow-300  rounded-md'>Feedback: <span className='text-black bg-white'>{feedback}</span> </p>
                        }
                    </div>
                </div>
            </td>
            <td className='font-bold text-xl '>
                {
                    status === 'approved' ? {total_enrolled} : ""
                }
            </td>
            <th className='flex items-center w-20 gap-6'>
                <div className='flex-grow'>
                {
                    status === 'pending' && <button className="btn btn-outline btn-xs mt-6  text-blue-700">pending</button>
                }
                {
                    status === 'denied' && <button className="btn btn-outline btn-xs mt-6 text-red-700">denied</button>
                }
                {
                    status === 'approved' && <button className="btn btn-outline btn-xs mt-6 text-green-700">approved</button>
                }
                </div>
                <button onClick={() => handleDelete(index)} className='mt-6 text-red-700 text-base'><FaTrashAlt/></button>

            </th>
        </tr>
    );
};

export default MyClass;