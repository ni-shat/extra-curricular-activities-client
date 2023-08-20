import React, { useContext } from 'react';
import headerImg from '../../../assets/dash-icon.svg';
import { FaPen, FaRegArrowAltCircleRight, FaRegHeart, FaStar } from 'react-icons/fa';
import { PropagateLoader } from 'react-spinners';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import mail from '../../../assets/mail.png';
import { AuthContext } from '../../../providers/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useStudent from '../../../hooks/useStudent';
import useInstructor from '../../../hooks/useInstructor';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Total courses', 'Instructors', 'Enrolled students', 'Pending tasks'],
    datasets: [
        {

            data: [40, 30, 25, 10],
            label: 'percentage %',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
        },
    ],
};



const UserHome = () => {

    const { user, loading } = useContext(AuthContext);
    console.log(user.photoURL)

    const [isAdmin] = useAdmin();
    const [isStudent] = useStudent();
    const [isInstructor] = useInstructor();
    console.log(isAdmin, isStudent, isInstructor)

    if (loading) {
        console.log("admin")
        console.log(user.photoURL)
        return <PropagateLoader color="#DC2828" />
    }


    return (
        <div className='pt-20 mx-5 flex gap-5'>
            <div className=' w-[70%]'>
                <div>
                    <div className=" bg-yellow-100  rounded-xl p-4 px-5 flex items-center justify-between shadow-2xl shadow-gray-300">
                        <div className='w-[60%]'>
                            <h2 className="mb-5 text-3xl font-bold">Hello {user?.displayName}!</h2>
                           {
                            isAdmin &&  <p>Welcome to admin dashboard. Your Central Hub for Managing and Monitoring the Platform.</p>
                           }
                           {
                            isStudent &&  <p>Welcome to your Student Dashboard. Unlock Your Learning Journey and Empower Your Growth.</p>
                           }
                           {
                            isInstructor &&  <p>Welcome to your Instructor Dashboard. Inspire Minds and Share Your Expertise with the World.</p>
                           }
                        </div>

                        <div>
                            <img className='w-60 h-60' src={headerImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className='mt-6 flex gap-4 h-[335px]'>
                    <div className='w-2/4 bg-white border rounded-xl p-4 px-5 flex items-center justify-between shadow-2xl shadow-gray-300'>
                        <Doughnut data={data} />
                    </div>
                    <div className='w-2/4 border space-x-4 bg-white rounded-xl p-4 px-5 flex items-center justify-center shadow-2xl shadow-gray-300'>
                        <div className="h-44 w-44 border border-red-400 flex justify-center flex-col items-center p-8 rounded-full">
                            <div className="stat-value ">86%</div>
                            <div className="stat-title">Tasks done</div>
                            <div className="stat-desc text-secondary">31 tasks remaining</div>
                        </div>
                        <div className="flex h-44 w-44 flex-col gap-2 border border-red-400 p-8 rounded-full items-center justify-center">
                            <div className="text-gray-600 whitespace-nowrap">Trending Categories</div>
                            <div className="flex items-center gap-2">
                                <div className="stat-value text-blue-700">4</div>
                                <FaStar className='text-red-500 font-bold text-xl' />
                            </div>
                            <button className='flex justify-center items-center gap-3 text-gray-600 font-semibold px-8 py-1 bg-purple-200 rounded-full border border-orange-400'>See <FaRegArrowAltCircleRight /></button>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='w-[30%] h-[85vh] space-y-6 '>
                <div className='bg-white rounded-xl p-4 shadow-2xl shadow-gray-300'>
                    {/* gray-300 */}
                    <div className='text-base font-medium text-gray-500 text-center mb-4'><h4>My Profile</h4></div>
                    <div>
                        <div className='flex flex-col justify-center items-center gap-0.5 '>
                            <img className='w-28 h-28 object-cover rounded-full ' src={user.photoURL} alt="" />
                            <p className='text-xl mt-2.5  font-bold'>{user.displayName}</p>
                            <p className='mb-2 font-semibold '>
                            {
                                isAdmin ? <p className='text-green-500'>Admin</p> : isStudent ?  <p className='text-pink-600'>Student</p> : isInstructor &&  <p className='text-blue-600'>Instructor</p>
                            }</p>
                            <p className='text-sm font-medium'>{user.email}</p>
                        </div>
                        {/* <div className='text-[#1e326e] flex gap-1.5 justify-center mt-4'>
                        <button className='border-2 border-[#1e326e] rounded-md p-2.5 px-3'><FaPen /></button>
                        <button className='border-2 border-[#1e326e] rounded-md p-1.5 px-3 font-medium'>View full profile</button>
                    </div> */}
                        <hr className='mt-8 w-[85%] mx-auto h-0.5 bg-gray-300' />

                        <div className="indicator mx-20  my-6 ">
                            <span className="indicator-item badge bg-cyan-900 border-0 "></span>
                            <div className='flex items-center justify-center p-2 px-3 gap-2 border rounded-xl font-bold '>
                                <div className='text-blue-800 font-bold text-xl'>9</div>
                                <button>New Messages</button>
                                <img className='w-5 h-5' src={mail} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='h-[27.1vh] rounded-xl p-2 shadow-2xl shadow-gray-300 bg-white flex justify-center'>
                    <div className="stats w-full flex justify-center ">

                        <div className="flex  flex-col w-2/4 gap-2  items-center px-3 justify-center">
                            <div className=" text-gray-600">Top Courses</div>
                            <div className="flex items-center gap-2">
                                <div className="stat-value text-primary">20</div>
                                <FaRegHeart className='text-orange-300 font-bold text-xl' />
                            </div>
                            <button className='flex justify-center items-center gap-3 text-gray-600 font-semibold px-8 py-1 bg-purple-200 rounded-full border border-orange-400'>See <FaRegArrowAltCircleRight /></button>
                        </div>
                       
                       

                    </div>
                </div>

            </div>

        </div>
    );
};

export default UserHome;