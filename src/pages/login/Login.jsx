import React from 'react';
import img from '../../assets/guiter.svg';
import Navbar from '../shared/navbar/Navbar';
import { Link } from 'react-router-dom';
import ggl from '../../assets/ggl.png'
import GoogleLogin from '../shared/social-login/GoogleLogin';

const Login = () => {
    return (
        <div>

            <h3 className='font-monoton-xl opacity-10 text-gray-500  whitespace-nowrap text-center -rotate-90 absolute -left-48 top-[40%] '>login</h3>

            <Navbar></Navbar>
            <div className="pt-14 min-h-screen bg-white">

                <div className="flex w-[80%] mx-auto flex-col lg:flex-row-reverse  items-center justify-center ">
                    <div className="text-center lg:text-center  w-[50%]  flex flex-row-reverse items-center justify-center">
                        <img className='w-[65%] object-cover h-auto' src={img} alt="" />

                    </div>
                    <div className='w-[60%] flex justify-end'>
                        <div className="card w-full max-w-md pb-10  flex-shrink-0 shadow-2xl bg-base-100  ">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary text-white">Login</button>
                                </div>
                                <GoogleLogin></GoogleLogin>
                                <div className='flex mt-10 justify-center'>
                                    <Link to='/signup'>Don't Have an account? <span className='text-red-600 font-bold'>Sign up</span></Link>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;