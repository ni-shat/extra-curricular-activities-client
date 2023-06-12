import React from 'react';
import { FaCheck, FaMoneyCheckAlt, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useSelectedClasses from '../../../../hooks/useSelectedClasses';
import { useLocation } from 'react-router-dom';

const TableRow = ({ selectedCls, index }) => {

    const { _id, title, image, schedule, instructor, price } = selectedCls;
    const [, refetch] = useSelectedClasses();
    const location = useLocation();
    console.log(location.pathname)

    const handleDelete = cls => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#7ec7b5',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {

                if (result.isConfirmed) {

                    fetch(`http://localhost:5000/selected-classes/${cls._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log("Nishat data",data);
                            if (data.deletedCount > 0) {
                                refetch();
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })
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
                            <img src={image} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">{schedule}</div>
                    </div>
                </div>
            </td>
            <td>
                {instructor}
            </td>
            <td>{price}</td>
            <th>
                {
                    location.pathname === '/dashboard/enrolled-classes' ? <button className="btn btn-ghost btn-outline btn-xs text-green-600">Enrolled<FaCheck /></button> :
                        <div className='flex flex-col gap-2 justify-center items-start'>
                            <button className="btn btn-ghost btn-outline btn-xs text-green-600"><FaMoneyCheckAlt /> pay</button>
                            <button onClick={() => handleDelete(selectedCls)} className="btn btn-ghost btn-outline btn-xs text-red-700"><FaTrash /> Delete</button>
                        </div>
                }
            </th>
        </tr>
    );
};

export default TableRow;