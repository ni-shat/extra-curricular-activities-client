import { Outlet } from "react-router-dom";
import NavbarDashboard from "../pages/dashboard/navbar/NavbarDashboard";
import ULStudents from "../pages/dashboard/student-dashboard/ul/ULStudents";
import ULAdmin from "../pages/dashboard/admin-dashboard/ul/ULAdmin";
import useAdmin from "../hooks/useAdmin";
import ULInstructor from "../pages/dashboard/instructor-dahsboard/ULInstructor/ULInstructor";
import useInstructor from "../hooks/useInstructor";
import useStudent from "../hooks/useStudent";

const DashBoard = () => {

    // const isStudent = true;
    const [isAdmin] = useAdmin();
    const [isStudent] = useStudent();
    const [isInstructor] = useInstructor();
    console.log(isStudent)


    return (
        <div>
            <div className="drawer lg:drawer-open bg-white relative">
                <div className="absolute left-0 w-full">
                    <NavbarDashboard></NavbarDashboard>
                </div>

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content h-screen overflow-clip flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="h-screen bg-[#E6E6E6] border border-l-0 font-bold shadow-xl pt-10">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

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