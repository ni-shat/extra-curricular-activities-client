import { FaHome, FaUtensils, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import ActiveLink from "../components/ActiveLink";
import logo from '../assets/logo-black.svg'
import NavbarDashboard from "../pages/dashboard/navbar/NavbarDashboard";

const DashBoard = () => {

    const isStudent = true;
   

    return (
        <div>
            <div className="drawer lg:drawer-open bg-white relative">
                <div className="absolute left-0 w-full">
                    <NavbarDashboard></NavbarDashboard>
                </div>
                
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side bg-[#E6E6E6] border border-l-0 font-bold shadow-xl pt-10">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    {/* <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content"> */}
                    <ul className="menu px-5 -mt-12 w-80 h-full text-">
                        {
                            isStudent && <>
                                <li><Link to='/'><img className='w-[30%] mb-8' src={logo} alt="" /></Link></li>
                                <li><ActiveLink to="/dashboard/userHome"><FaHome></FaHome> User Home</ActiveLink></li>
                                <li><ActiveLink to="/dashboard/selected-classes"> <FaUtensils></FaUtensils>Selected class</ActiveLink></li>
                                <li><ActiveLink to="/dashboard/enrolled-classes"><FaWallet></FaWallet>Enrolled classes</ActiveLink></li>
                            </>
                        }

                        <div className="divider h-[0.1px] bg-black w-[80%] ml-2"></div>
                        <li><ActiveLink to="/"><FaHome></FaHome> Home</ActiveLink> </li>
                        <li><ActiveLink to="/menu"> All classes</ActiveLink></li>
                        <li><ActiveLink to="/order/salad">Enroll</ActiveLink></li>
                        <li><ActiveLink to="/order/salad">About us</ActiveLink></li>
                    </ul>
                    {/* </ul> */}

                </div>
            </div>
        </div>

    );
};

export default DashBoard;