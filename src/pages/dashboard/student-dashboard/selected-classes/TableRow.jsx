import React from 'react';
import { FaMoneyCheckAlt, FaTrash } from 'react-icons/fa';

const TableRow = ({ selectedCls, index }) => {

    const {title, image, schedule, instructor, price} = selectedCls;

    return (
        <tr>
            <th>
                <label>
                    {index+1}
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
            <th className='flex flex-col gap-2 justify-center items-start'>
                <button className="btn btn-ghost btn-outline btn-xs text-green-600"><FaMoneyCheckAlt/> pay</button>
                <button className="btn btn-ghost btn-outline btn-xs text-red-700"><FaTrash/> Delete</button>
            </th>
        </tr>
    );
};

export default TableRow;