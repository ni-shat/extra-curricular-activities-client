
import { Link, useNavigate } from 'react-router-dom';
import { FaChalkboardTeacher, FaGratipay, FaGripHorizontal, FaHandsHelping, FaHome, FaInfo, FaListUl, FaQuestion, FaRegClone, FaRegSun, FaTasks, FaUserTie } from 'react-icons/fa';
import logo from '../../../../assets/logo-black.png'
import ActiveLinkDashboard from '../../../../components/ActiveLinkDashboard';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
// import { PropagateLoader } from "react-spinners";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const storedReqStatus = localStorage.getItem('userStatus'); //object of local storage
const reqData = {
    reqToBecomeTeacherStat: true
};


const ULStudents = () => {

    const [crossVisibility, setCrossVisibility] = useState(
        false
    );
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();


    if (storedReqStatus) {
        const userStat = JSON.parse(storedReqStatus);
        console.log("Data in locaol", userStat);
    } else {
        console.log('No data found in localStorage.');
    }

    useEffect(() => {
        // Show the <li> element after 3 seconds
        const timer = setTimeout(() => {
            storedReqStatus ? setCrossVisibility(false) : setCrossVisibility(true)
        }, 3000);

        // Clear the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);


    const handleCrossClick = () => {
        setCrossVisibility(false);
    };

  


    const handleTeacherReqClick = () => {
        const saveUser = {
            email: user?.email,
            name: user?.displayName,
            status: 'pending'
        };
        try {
            axiosSecure.post(`/become-a-teacher-request/${user?.email}`, saveUser)
                .then(data => {
                    console.log('after sending req', data.data)
                    if (data.data.result.insertedId && data.data.result2.modifiedCount == 1) {
                        // refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your request is sent!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setCrossVisibility(false);
                        localStorage.setItem('userStatus', JSON.stringify(reqData));
                        navigate('/dashboard/student-status');
                    }
                    else if (!data.data.result) { console.log('im there')
                        Swal.fire({
                            position: 'top-end',
                            icon: 'warning',
                            title: 'You already requested for the role.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setCrossVisibility(false);
                        if (!storedReqStatus) {
                            localStorage.setItem('userStatus', JSON.stringify(reqData));
                        }
                    }

                })

        } catch (error) {
            console.error('error in post hook', error);
        }

    };


    return (
        <div className='overflow-hidden'>
            <ul className=" px-8  -mt-8  w-80 h-full">
                {
                    <>
                        <li className="flex">
                            <Link className="w-[60%]" to='/'><img className='w-[100%] ml-7' src={logo} alt="" /></Link>
                        </li>
                        <li className="text-transparent mt-2">hi</li>
                        <li>
                            <ActiveLinkDashboard to="/dashboard/userHome">
                                <button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5 mt-3"><FaHome></FaHome> <p>Home</p></button>
                            </ActiveLinkDashboard>
                        </li>
                        <li>
                            <ActiveLinkDashboard to="/dashboard/selected-classes"> <button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaListUl></FaListUl> <p>Selected Classes</p></button>
                            </ActiveLinkDashboard>
                        </li>
                        <li>
                            <ActiveLinkDashboard to="/dashboard/enrolled-classes"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaTasks></FaTasks> <p>Enrolled Classes</p></button>
                            </ActiveLinkDashboard>
                        </li>
                        <li>
                            <ActiveLinkDashboard to="/dashboard/payment-history"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaRegClone></FaRegClone> <p>Payment History</p></button>
                            </ActiveLinkDashboard>
                        </li>
                        <li>
                            <ActiveLinkDashboard to="/dashboard/student-status"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaInfo></FaInfo> <p>Status</p></button>
                            </ActiveLinkDashboard>
                        </li>
                    </>
                }

                <li><ActiveLinkDashboard to="/"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 my-5"><FaHandsHelping></FaHandsHelping> <p>Support</p></button> </ActiveLinkDashboard> </li>
                <li><ActiveLinkDashboard to="/menu"> <button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaGratipay></FaGratipay> <p>Reviews and Ratings</p></button> </ActiveLinkDashboard></li>
                <li><ActiveLinkDashboard to="/order/salad"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaQuestion></FaQuestion> <p>FAQ</p></button> </ActiveLinkDashboard></li>
                {/* <li><ActiveLinkDashboard to="/order/salad"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaRegSun></FaRegSun> <p>Settings</p></button> </ActiveLinkDashboard></li> */}

                <div className="divider h-[0.1px] bg-white w-[60%]"></div>

                <li>
                    <ActiveLinkDashboard to="/all-approved-classes"><button className="flex items-center gap-2  transition-all duration-500 mb-5"><FaGripHorizontal /> <p>All Classes</p></button>
                    </ActiveLinkDashboard>
                </li>
                <li>
                    <ActiveLinkDashboard to="/instructors"><button className="flex items-center gap-2  transition-all duration-500 mb-5"><FaChalkboardTeacher /> <p>All Instructors</p></button>
                    </ActiveLinkDashboard>
                </li>

                <li><ActiveLinkDashboard to="/menu"> <button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaUserTie></FaUserTie> <p>Become an Instructor</p></button> </ActiveLinkDashboard></li>
                <li
                    onClick={handleTeacherReqClick}
                    className={`mt-16 bg-white px-3 py-3 w-fit relative ${crossVisibility ? 'opacity-100 top-0 transition-all duration-1000 ' : 'opacity-0 top-60 transition-all duration-1000 '
                        }  animate-pulse`}
                >
                    {crossVisibility && (
                        <label
                            htmlFor="my-modal-3"
                            className="btn btn-xs btn-circle border-0 absolute -right-2 -top-2 z-10 text-white"
                            onClick={handleCrossClick}
                        >
                            ✕
                        </label>
                    )}
                    <p className="text-xs">Want to Become an Instructor?</p>
                    <button className="bg-blue-600 text-white text-xs uppercase font-medium px-16 mt-3 py-2 shadow-2xl shadow-black">
                        Request
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ULStudents;