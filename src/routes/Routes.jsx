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
          element: <PrivateRoute><Login></Login></PrivateRoute>
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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
      children: [
        {
          path: 'userhome',
          element: <UserHome></UserHome>
        },
        {
          path: 'mycart', 
          element: <MyCart></MyCart>
        },
        {
          path:'payment',
          element: <Payment></Payment>
        },
        // admin routes
        {
          path: 'adminhome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'allusers', 
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'addItem',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: 'manageitems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        }
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ]);