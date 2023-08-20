import { FaChalkboardTeacher, FaGripHorizontal, FaHome, FaRegSun, FaRocketchat, FaTasks, FaUsersCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo-black.png'
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import ActiveLinkDashboard from '../../../../components/ActiveLinkDashboard';

const ULAdmin = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            {/* for admin */}
            <ul className="  px-8  -mt-6  w-80 h-full">
                {
                    <>
                        <li className="flex">
                            <Link className="w-[60%]" to='/'><img className='w-[100%] ml-7' src={logo} alt="" /></Link>
                            {/* <li className="text- mt-2">hi</li> */}
                        </li>
                        <li className="text-transparent mt-6">hi</li>
                        <li>
                            <ActiveLinkDashboard to="/dashboard/admin-userhome">
                                <button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5 mt-3"><FaHome></FaHome> <p>Home</p></button>
                            </ActiveLinkDashboard>
                        </li>
                        <li>
                            <ActiveLinkDashboard to="/dashboard/manage-classes"> <button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaTasks /> <p>Manage Classes</p></button>
                            </ActiveLinkDashboard>
                        </li>
                        <li>
                            <ActiveLinkDashboard to="/dashboard/manage-users"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaUsersCog /> <p>Manage Users</p></button>
                            </ActiveLinkDashboard>
                        </li>
                        <li>
                            <ActiveLinkDashboard to="/dashboard/message-notification"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaRocketchat /> <p>Messaging and Notifications</p></button>
                            </ActiveLinkDashboard>
                        </li>
                        <li>
                            <ActiveLinkDashboard to="/dashboard/settings"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaRegSun /> <p>Settings</p></button>
                            </ActiveLinkDashboard>
                        </li>
                    </>
                }

                <div className="divider h-[0.1px] bg-black w-[70%]"></div>

                <li>
                    <ActiveLinkDashboard to="/all-approved-classes"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaGripHorizontal /> <p>All Classes</p></button>
                    </ActiveLinkDashboard>
                </li>
                <li>
                    <ActiveLinkDashboard to="/instructors"><button className="flex items-center gap-2 hover:ml-4 transition-all duration-500 mb-5"><FaChalkboardTeacher /> <p>All Instructors</p></button>
                    </ActiveLinkDashboard>
                </li>
            </ul>

        </div>
    );
};

export default ULAdmin;