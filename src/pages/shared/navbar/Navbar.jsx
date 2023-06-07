import React from 'react';
import logo from '../../../assets/logo2x.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navitems = <>
        <li className='text-base'><Link to='/'>Home</Link></li>
        <li className='text-base'><Link to='/'>Classes</Link></li>
        <li className='text-base'><Link to='/'>Instructors</Link></li>
        <li className='text-base'><Link to='/'>Dashboard</Link></li>
    </>


    return (

        <div className="navbar bg-transparent text-white font-semibold my-0 w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {navitems}
                    </ul>
                </div>
                <Link to='/'><img className='w-[18%]' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navitems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn px-10 bg-[#C20909] text-white border-0 font-bold rounded-full">Login</Link>
            </div>
        </div>



    );
};

export default Navbar;

/***
 * Home, Instructors, Classes, Dashboard and User profile picture.
 * <div className='my-10 mx-10'>
            <img className='w-[18%]' src={logo} alt="" />
        </div> 
 */