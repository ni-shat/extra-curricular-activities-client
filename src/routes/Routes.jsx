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
          element: <AllApprovedClasses></AllApprovedClasses>,
          loader: () => fetch('/users/all-approved-classes')
        },    
      ]
    },
    {
      path: 'dashboard',
      // element: <Dashboard></Dashboard>, 
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path: 'userhome',
          element: <PrivateRoute><UserHome></UserHome></PrivateRoute>
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
        {
          path: 'my-classes', 
          element: <MyClasses></MyClasses>
        },

      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);