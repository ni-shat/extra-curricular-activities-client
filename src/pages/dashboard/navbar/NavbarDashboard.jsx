// import React from 'react';
// import ActiveLink from '../../../components/ActiveLink';
// import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from '../../../providers/AuthProvider';
// import { FaUserCircle } from 'react-icons/fa';
// import NavActiveLink from '../../../components/NavActiveLink';

// const NavbarDashboard = () => {

//     const { user, logOut } = useContext(AuthContext);
//     const handleLogOut = () => {
//         logOut()
//             .then(() => { })
//             .catch(error => console.log(error));
//     }

//     const navitems = 
//     <>
//         <li><NavActiveLink to='/'>Home</NavActiveLink></li>
//         <li><NavActiveLink to='/all-approved-classes'>Classes</NavActiveLink></li>
//         <li><NavActiveLink to='/instructors'>Instructors</NavActiveLink></li>
//         <li><NavActiveLink to='/dashboard/userhome'>Dashboard</NavActiveLink></li>
//     </>


//     return (
//         <div
//             className={`navbar text-black font-semibold my-0 w-full`}
//         >
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
//                         {navitems}
//                     </ul>
//                 </div>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {navitems}
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 <div className='md:flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 md:items-center hidden '>
//                     {
//                         user &&
//                         <>
//                             {
//                                 user.displayName ?
//                                     <>
//                                         <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
//                                             {
//                                                 user.photoURL ? <img className='rounded-full w-11 h-11 object-cover' src={user.photoURL} alt="" />
//                                                     : <FaUserCircle className='w-10 h-10 text-gray-500' />
//                                             }
//                                         </div>
//                                     </>
//                                     :
//                                     <>
//                                         {
//                                             user.photoURL ? <img className='rounded-full w-9 h-9 object-cover' src={user.photoURL} alt="" />
//                                                 : <FaUserCircle className='w-10 h-10 text-gray-500' />
//                                         }
//                                     </>
//                             }
//                         </>
//                     }
//                     <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
//                     <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
//                         {
//                             user ? <button onClick={handleLogOut} className='px-8 py-3 bg-[#C20909] text-white border-0  
//                              hover:bg-opacity-50 font-bold rounded-full'>Log out</button>
//                                 :
//                                 <Link to='/login'><button className='px-8 py-3 bg-[#C20909] text-white border-0  
//                                  hover:bg-opacity-50 font-bold rounded-full'>Login</button></Link>
//                         }
//                     </div>
//                 </div>
//                 {/* </label> */}

//             </div>
//         </div>
//     );
// };

// export default NavbarDashboard;