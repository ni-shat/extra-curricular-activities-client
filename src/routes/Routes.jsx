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
import Dashboard from "../layout/Dashoard";
import UserHome from "../pages/dashboard/user-home/UserHome";
import SelectedClasses from "../pages/dashboard/student-dashboard/selected-classes/SelectedClasses";
import EnrolledClasses from "../pages/dashboard/student-dashboard/enrolled-classes/EnrolledClasses";
import DashBoard from "../layout/DashBoard";
import AllUsers from "../pages/dashboard/admin-dashboard/all-users/AllUsers";
import AddClass from "../pages/dashboard/instructor-dahsboard/add-class/AddClass";


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
      ]
    },
    {
      path: 'dashboard',
      // element: <Dashboard></Dashboard>, 
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: 'userhome',
          element: <UserHome></UserHome>
        },
        {
          path: 'selected-classes',
          element: <SelectedClasses></SelectedClasses>
        },
        {
          path: 'enrolled-classes',
          element: <EnrolledClasses></EnrolledClasses>
        },
        {
          path: 'manage-users', 
          element: <AllUsers></AllUsers>
        },
        {
          path: 'add-class', 
          element: <AddClass></AddClass>
        },

        // {
        //   path:'payment',
        //   element: <Payment></Payment>
        // },
        // // admin routes
        // {
        //   path: 'adminhome',
        //   element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        // },
        // {
        //   path: 'allusers', 
        //   element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        // },
        // {
        //   path: 'addItem',
        //   element: <AdminRoute><AddItem></AddItem></AdminRoute>
        // },
        // {
        //   path: 'manageitems',
        //   element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        // }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);