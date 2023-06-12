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
                    <ul className=" px-8  -mt-8  w-80 h-full">
                        {
                            isStudent && <>
                                <li className="flex">
                                    <Link className="w-[30%]" to='/'><img className='w-[100%] -ml-2' src={logo} alt="" /></Link>
                                    {/* <li className="text- mt-2">hi</li> */}
                                </li>
                                <li className="text-transparent mt-2">hi</li>
                                <li>
                                    <ActiveLink to="/dashboard/userHome">
                                        <button className="flex items-center gap-2 mb-5 mt-3"><FaHome></FaHome> <p>User Home</p></button>
                                    </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink to="/dashboard/selected-classes"> <button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>Selected Classes</p></button> 
                                </ActiveLink>
                                </li>
                                <li>
                                    <ActiveLink to="/dashboard/enrolled-classes"><button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>Enrolled Classes</p></button> 
                                </ActiveLink>
                                </li>
                            </>
                        }

                        <div className="divider h-[0.1px] bg-black w-[80%]"></div>
                        <li><ActiveLink to="/"><button className="flex items-center gap-2 my-5"><FaHome></FaHome> <p>User Home</p></button> </ActiveLink> </li>
                        <li><ActiveLink to="/menu"> <button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>User ALl Classes</p></button> </ActiveLink></li>
                        <li><ActiveLink to="/order/salad"><button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>Enroll</p></button> </ActiveLink></li>
                        <li><ActiveLink to="/order/salad"><button className="flex items-center gap-2 mb-5"><FaHome></FaHome> <p>About Us</p></button> </ActiveLink></li>
                    </ul>
                    {/* </ul> */}

                </div>
            </div>
        </div>

    );
};

export default DashBoard;