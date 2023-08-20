import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import cls_img from '../../../../assets/music_set_2.jpg'

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
                        <div className="mask mask-half-2 w-32 h-32">
                            <img src={classImage} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-base">{classTitle}</div>
                        {/* <div className="text-sm opacity-50">{schedule}</div> */}
                        {
                            status === 'denied' && <p className='text-black font-bold text-sm w-fit border shadow-sm px-1 py-0.5 mt-2 bg-yellow-300  rounded-md'>Feedback: <span className='text-black bg-white'>{feedback}</span> </p>
                        }
                    </div>
                </div>
            </td>
            <td className='font-bold text-xl '>
                {
                    status === 'approved' ? total_enrolled : ""
                }
            </td>
            <th className='  w-20 '>
                <div className='flex items-center  gap-6'>
                    <div className='flex-grow w-32  flex justify-end'>
                        {
                            status === 'pending' && <button className="btn btn-outline btn-xs  text-blue-700">pending</button>
                        }
                        {
                            status === 'denied' && <button className="btn btn-outline btn-xs text-red-700">denied</button>
                        }
                        {
                            status === 'approved' && <button className="btn btn-outline btn-xs text-green-700">approved</button>
                        }
                    </div>
                    <button onClick={() => handleDelete(_id)} className=' text-red-700 text-base'><FaTrashAlt /></button>

                </div>
            </th>
        </tr>
    );
};

export default MyClass;