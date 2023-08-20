import { Link, Outlet } from "react-router-dom";
import ULStudents from "../pages/dashboard/student-dashboard/ul/ULStudents";
import ULAdmin from "../pages/dashboard/admin-dashboard/ul/ULAdmin";
import useAdmin from "../hooks/useAdmin";
import ULInstructor from "../pages/dashboard/instructor-dahsboard/ULInstructor/ULInstructor";
import useInstructor from "../hooks/useInstructor";
import useStudent from "../hooks/useStudent";
import Footer from "../pages/shared/footer/Footer";
import { FaAngleRight, FaBell } from "react-icons/fa";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { BiLogOutCircle } from "react-icons/bi";
import logo from '../assets/logo-black.png';

const DashBoard = () => {

    // const isStudent = true;
    const [isAdmin] = useAdmin();
    const [isStudent] = useStudent();
    const [isInstructor] = useInstructor();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { user, logOut, loading } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const hamburgerMenu =
    <>
        <div className="dropdown">
            <label className={`  text-black swap swap-rotate `}>
                <input type="checkbox" />
                <svg onClick={toggleMenu}
                    className={`swap-off bg-slate-100 fill-current rounded-full p-1.5  mt-1 `}

                    xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                <svg onClick={toggleMenu}
                    className={`swap-on fill-current rounded-full p-1.5 bg-slate-100   mt-1 `}
                    xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
            </label>
            {
                isMenuOpen &&
                <ul className="menu menu-sm w-fit bg-white absolute -left-28 mt-3 z-[1] p-2 shadow  rounded-box  text-black">

                    <li><Link className="flex items-center -ml-2" to='/'> <img className="w-[60%]" src={logo} alt="" />  <p className="mt-3 px-2 border-l-2 border-black">Home</p><FaAngleRight /></Link></li>
                    {/* <li><Link>Frequently Asked Questions <FaQuestion className='-ml-[5px]' /></Link></li>
                    <li><Link>Privacy Policy <FaUnlock /></Link></li> */}
                    <hr className='mt-2 mb-1' />
                    <li onClick={handleLogOut} className='text-[#1e326e]'><Link to='/'>Log Out <BiLogOutCircle /></Link></li>
                </ul>
            }
        </div>
    </>


    return (
        <div className="bg-white">
            <div className="drawer lg:drawer-open bg-white relative">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content h-screen overflow-auto bg-slate-50">
                    {/* Page content here */}

                    {/* nav title above the page */}
                    <div className=' shadow-md bg-white fixed right-0 w-full z-20 h-14 bg-transparent '>
                        <div className='text-xs uppercase fixed left-[330px] top-5 font-semibold text-gray-700 ml-7  '>
                            {
                                location.pathname == ('/dashboard/userHome') || location.pathname == ('/dashboard/admin-userhome') &&
                                <h3>Dashboard</h3>
                            }
                            {
                                location.pathname == ('/dashboard/add-class') &&
                                <h3 className="">Add Classes</h3>
                            }
                            {
                                location.pathname == ('/dashboard/manage-classes') &&
                                <h3 className="">Manage Classes</h3>
                            }
                            {
                                location.pathname == ('/dashboard/manage-users') &&
                                <h3 className="">Manage Users</h3>
                            }
                            {
                                location.pathname == ('/dashboard/my-classes') &&
                                <h3 className="">My Classes</h3>
                            }
                        </div>

                        <div className='fixed bg-white z-20 right-8 top-1.5 flex  items-center gap-2'>
                            <FaBell className='text-black w-6 h-6' />
                            <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                            {hamburgerMenu}

                        </div>
                    </div>


                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className=" bg-red-400 h-screen z-20 border border-l-0 font-bold shadow-xl pt-10">
                    <label htmlFor="my-drawer-2" className="drawer-overlay "></label>

                    {
                        isStudent && <ULStudents></ULStudents>
                    }
                    {
                        isAdmin && <ULAdmin></ULAdmin>
                    }
                    {
                        isInstructor && <ULInstructor></ULInstructor>
                    }

                </div>
            </div>
        </div>

    );
};

export default DashBoard;