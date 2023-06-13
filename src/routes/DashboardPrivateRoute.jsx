
import { Navigate, useLocation } from "react-router";
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from "react";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";
import useStudent from "../hooks/useStudent";

const DashboardPrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isStudent, isStudentLoading] = useStudent();
    console.log("users in private route, instructor", isInstructor)
    console.log("users in private route, isadmin", isAdmin)
    console.log("users in private route, isstudent", isStudent)
    const location = useLocation();
    console.log(location.pathname)

    let fromTmp;
    let inWrongRoute = false;
    if (
        
        ((location.pathname === '/dashboard/manage-users' || location.pathname === '/dashboard/manage-classes') && !isAdmin) ||
        ((location.pathname === '/dashboard/my-classes' || location.pathname === '/dashboard/add-class') && !isInstructor) || 
        ((location.pathname === '/dashboard/selected-classes' || location.pathname === '/dashboard/enrolled-classes') && !isStudent)
    ) 
    {
        console.log("in qrong route if - first");
        inWrongRoute = true;
        fromTmp = '/dashboard/userhome';
    }


    if (loading || isInstructorLoading || isAdminLoading || isStudentLoading) {
        console.log("in  loading if");
        return <progress className="progress w-56"></progress>
    }

    if (user && !inWrongRoute) {
        console.log("in  return children if");
        return children;
    }
    // return false;
    return <Navigate to={fromTmp} replace></Navigate>

};

export default DashboardPrivateRoute;