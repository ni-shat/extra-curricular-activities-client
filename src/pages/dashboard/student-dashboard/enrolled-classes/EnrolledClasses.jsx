import React from 'react';
import useEnrolledClasses from '../../../../hooks/useEnrolledClasses';
import TableRow from '../selected-classes/TableRow';

const EnrolledClasses = () => {

    const [enrollClasses] = useEnrolledClasses();

    return (

        <div className='w-full pl-16 pr-20'>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-gray-800 font-roboto-bold text-base'>

                            </th>
                            <th className='text-gray-800 font-roboto-bold text-base'>Name</th>
                            <th className='text-gray-800 font-roboto-bold text-base'>Instructor</th>
                            <th className='text-gray-800 font-roboto-bold text-base'>Price</th>
                            <th className='text-gray-800 font-roboto-bold text-base'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            enrollClasses?.map((cls, index) => <TableRow key={cls._id} index={index} selectedCls={cls}></TableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default EnrolledClasses;