import React from 'react';
import { Link } from 'react-router-dom';
import { FaChalkboardTeacher, FaClipboardList, FaGratipay, FaGripHorizontal, FaHandsHelping, FaHome, FaPencilRuler, FaQuestion, FaRegListAlt, FaRegSun, FaUserAlt } from 'react-icons/fa';
import logo from '../../../../assets/logo-black.png'
import ActiveLinkDashboard from '../../../../components/ActiveLinkDashboard';

const ULInstructor = () => {
    return (
        <div className=''>
            <ul className=" px-8  -mt-6  w-80 h-full">
                {
                    <>
                        <li className="flex">
                            <Link className="w-[60%]" to='/'><img className='w-[100%] ml-7' src={logo} alt="" /></Link>
                            {/* <li className="text- mt-2">hi</li> */}
                        </li>
                        <li className="text-transparent mt-6">hi</li>
                        <li>
                            <ActiveLinkDashboard to="/dashboard/userHome">
                                <button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5 mt-3"><FaHome></FaHome> <p>Home</p></button>
                            </ActiveLinkDashboard>
                        </li>
                        <li>
                            <ActiveLinkDashboard to="/dashboard/profile">
                                <button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5 mt-3"><FaUserAlt></FaUserAlt> <p>Profile</p></button>
                            </ActiveLinkDashboard>
                        </li>
                        <li>
                            <ActiveLinkDashboard to="/dashboard/add-class"> <button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaPencilRuler/> <p>Add A Class</p></button>
                            </ActiveLinkDashboard>
                        </li>
                        <li>
                            <ActiveLinkDashboard to="/dashboard/my-classes"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaRegListAlt></FaRegListAlt> <p>My Classes</p></button>
                            </ActiveLinkDashboard>
                        </li>
                    </>
                }

                <li><ActiveLinkDashboard to="/"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 my-5"><FaHandsHelping></FaHandsHelping> <p>Support</p></button> </ActiveLinkDashboard> </li>
                <li><ActiveLinkDashboard to="/menu"> <button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaGratipay></FaGratipay> <p>Reviews and Ratings</p></button> </ActiveLinkDashboard></li>
                <li><ActiveLinkDashboard to="/order/salad"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaQuestion></FaQuestion> <p>FAQ</p></button> </ActiveLinkDashboard></li>
                <li><ActiveLinkDashboard to="/order/salad"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaRegSun></FaRegSun> <p>Settings</p></button> </ActiveLinkDashboard></li>

                <div className="divider h-[0.1px] bg-white w-[60%]"></div>

                <li>
                    <ActiveLinkDashboard to="/all-approved-classes"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500  mb-5"><FaGripHorizontal /> <p>All Classes</p></button>
                    </ActiveLinkDashboard>
                </li>
                <li>
                    <ActiveLinkDashboard to="/instructors"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500  mb-5"><FaChalkboardTeacher /> <p>All Instructors</p></button>
                    </ActiveLinkDashboard>
                </li>
                
            </ul>
        </div>
    );
};

export default ULInstructor;