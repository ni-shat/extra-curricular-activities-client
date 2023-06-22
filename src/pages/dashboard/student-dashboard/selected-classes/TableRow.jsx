import React from 'react';
import { FaCheck, FaMoneyCheckAlt, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useSelectedClasses from '../../../../hooks/useSelectedClasses';
import { Link, useLocation } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const TableRow = ({ selectedCls, index }) => {

    const { _id, classId, instructorEmail, instructorName, userEmail, classImage, classTitle, price, status, instructorImage } = selectedCls;
    const [, refetch] = useSelectedClasses();
    const location = useLocation();
    console.log(location.pathname)
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = async (id) => {

        try {
            console.log('im in try hook dlt')
            const response = await axiosSecure.delete(`/my-selected-classes/${id}`);

            console.log("data in delete hookkkk", response.data);

            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
            refetch();
            return response.data;
        } catch (error) {
            console.error('error in deleteeeeeee hook', error);
        }
    }


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
                        <div className="font-bold">{classTitle}</div>
                        {/* <div className="text-sm opacity-50">{price}</div> */}
                    </div>
                </div>
            </td>
            <td>
                {instructorName}
            </td>
            <td>$ {price}</td>
            <th>
                {
                    location.pathname === '/dashboard/enrolled-classes' ? <button className="btn btn-ghost btn-outline btn-xs text-green-600">Enrolled<FaCheck /></button> :
                        <div className='flex flex-col gap-2 justify-center items-start'>
                            {
                                status === 'enrolled' ? <button className="btn bg-gray-100 hover:cursor-default hover:bg-gray-100 text-gray-400 hover:text-gray-400 btn-ghost btn-outline btn-xs border-0"><FaMoneyCheckAlt /> pay</button> :
                                    <Link to={`/dashboard/payment/${_id}`}><button className="btn btn-ghost btn-outline btn-xs text-green-600"><FaMoneyCheckAlt /> pay</button></Link>
                            }

                            <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-outline btn-xs text-red-700"><FaTrash /> Delete</button>
                        </div>
                }
            </th>
        </tr>
    );
};

export default TableRow;