import React from 'react';
import Navbar from '../shared/navbar/Navbar';
// import bg from ''
import { Link } from 'react-router-dom';
import ggl from '../../assets/ggl.png'


const SignUp = () => {
    return (
        <div className='bg-[../../assets/bg-signup.svg] bg-cover bg-center h-screen'>
            
        <h3 className='font-monoton-lg opacity-10 text-gray-500  whitespace-nowrap text-center -rotate-90 absolute -left-52 top-[42%] '>Signup</h3>
        
        <Navbar></Navbar>
        {/* <img src={bg} alt="" /> */}
        <div className="pt-14  bg-white">
       
            <div className="flex w-[80%] mx-auto items-center justify-center ">
                
                <div className='w-[65%]'>
                    <div className="card w-full pb-10  flex-shrink-0 shadow-2xl bg-base-100  ">
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
                            <div className="divider  mt-10">OR</div>
                            <div className='text-center '>
                                <Link className='flex text-black  items-center gap-2 btn border-gray-500 bg-white' to='/signup'> <span>Sign in with google</span>  <img className='w-7 h-7' src={ggl} alt="" /></Link>
                            </div>
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

export default SignUp;