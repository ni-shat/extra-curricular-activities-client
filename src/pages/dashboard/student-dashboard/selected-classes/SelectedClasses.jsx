import React from 'react';
import useSelectedClasses from '../../../../hooks/useSelectedClasses';
import TableRow from './TableRow';


const SelectedClasses = () => {

    const [selectedClasses] = useSelectedClasses();
    console.log(selectedClasses)

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
                            selectedClasses?.map((cls, index) => <TableRow key={cls._id} index={index} selectedCls={cls}></TableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;