import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import ActiveLink from "../components/ActiveLink";
import Navbar from "../pages/shared/navbar/Navbar";


const Dashboard = () => {
    // const [cart] = useCart(); //dorkar nai

    // TODO: load data from the server to have dynamic isAdmin based on Data
    const isAdmin = false;
    const isStudent = true;
    const isInstructor = true;
    // const [isAdmin] = true;
    // const [isStudent] = true;
    // const [isInstructor] = true;

    return (
        <div>
            <Navbar></Navbar>
            {/* <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80">
                        {
                            isStudent && <>
                                <li><ActiveLink to="/dashboard/adminhome"><FaHome></FaHome> User Home</ActiveLink></li>
                                <li><ActiveLink to="/dashboard/addItem"> <FaUtensils></FaUtensils>Selected class</ActiveLink></li>
                                <li><ActiveLink to="/dashboard/manageitems"><FaWallet></FaWallet>Enrolled classes</ActiveLink></li>
                            </>
                        }

                        <div className="divider"></div>
                        <li><ActiveLink to="/"><FaHome></FaHome> Home</ActiveLink> </li>
                        <li><ActiveLink to="/menu"> All classes</ActiveLink></li>
                        <li><ActiveLink to="/order/salad">Enroll</ActiveLink></li>
                        <li><ActiveLink to="/order/salad">About us</ActiveLink></li>
                    </ul>
                </div>
            </div> */}
        </div>
    );
};

export default Dashboard;