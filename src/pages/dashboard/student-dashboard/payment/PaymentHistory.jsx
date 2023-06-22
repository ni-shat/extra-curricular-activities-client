import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';

const PaymentHistory = () => {

    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { data: payment_history = [] } = useQuery(['history'], async () => {
        const res = await axiosSecure.get(`/payment-history?email=${user?.email}`)
        return res.data;
    })
    console.log(payment_history)


    return (
        <div className='w-full pl-16 pr-20'>
            <div className="overflow-scroll h-screen mt-32 ">
                <table className="table table-pin-rows">
                    {/* head */}
                    <thead>
                        <tr className='bg-slate-100 z-10'>
                            <th className='text-gray-800 font-roboto-bold text-base'>

                            </th>
                            <th className='text-gray-800 font-roboto-bold text-base'>Class Name</th>
                            <th className='text-gray-800 font-roboto-bold text-base'>Price</th>
                            <th className='text-gray-800 font-roboto-bold text-base'>Instructor</th>
                            <th className='text-gray-800 font-roboto-bold text-base'>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            payment_history?.map((cls, index) =>

                                <>

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
                                                        <img src={cls.classImage} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{cls.className}</div>
                                                    {/* <div className="text-sm opacity-50">{price}</div> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td>$ {cls.price}</td>
                                        <td>
                                            {cls.instructorName}
                                        </td>
                                        
                                        <th>
                                            {cls.transactionId}
                                        </th>
                                    </tr>
                                </>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;