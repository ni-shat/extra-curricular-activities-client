import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/home/home/Home";
import Main from "../layout/Main";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import Error from "../pages/error/Error";
import Instructors from "../pages/instructors/Instructors";
import PrivateRoute from "./PrivateRoute";
import UserHome from "../pages/dashboard/user-home/UserHome";
import SelectedClasses from "../pages/dashboard/student-dashboard/selected-classes/SelectedClasses";
import EnrolledClasses from "../pages/dashboard/student-dashboard/enrolled-classes/EnrolledClasses";
import DashBoard from "../layout/DashBoard";
import AllUsers from "../pages/dashboard/admin-dashboard/all-users/AllUsers";
import AddClass from "../pages/dashboard/instructor-dahsboard/add-class/AddClass";
import MyClasses from "../pages/dashboard/instructor-dahsboard/my-classes/MyClasses";
import AllApprovedClasses from "../pages/AllClasses/AllApprovedClasses";
import DashboardPrivateRoute from "./DashboardPrivateRoute";
import ManageClasses from "../pages/dashboard/admin-dashboard/manage-classes/ManageClasses";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },  
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },    
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        },    
        {
          path: 'all-approved-classes',
          element: <AllApprovedClasses></AllApprovedClasses>
        },    
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path: 'userhome',
          element: <PrivateRoute><UserHome></UserHome></PrivateRoute>
        },
        {
          path: 'selected-classes',
          element: <DashboardPrivateRoute><SelectedClasses></SelectedClasses></DashboardPrivateRoute>
        },
        {
          path: 'enrolled-classes',
          element: <DashboardPrivateRoute><EnrolledClasses></EnrolledClasses></DashboardPrivateRoute>
        },
        {
          path: 'manage-users', 
          element: <DashboardPrivateRoute><AllUsers></AllUsers></DashboardPrivateRoute>
        },
        {
          path: 'manage-classes', 
          element: <DashboardPrivateRoute><ManageClasses></ManageClasses></DashboardPrivateRoute>
        },
        {
          path: 'add-class', 
          element: <DashboardPrivateRoute><AddClass></AddClass></DashboardPrivateRoute>
        },
        {
          path: 'my-classes', 
          element: <DashboardPrivateRoute><MyClasses></MyClasses></DashboardPrivateRoute>
        },

      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);