import React, { useContext } from 'react';
import img from '../../assets/guiter.svg';
import Navbar from '../shared/navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../shared/social-login/GoogleLogin';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import useStudent from '../../hooks/useStudent';

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname  || "/";


    const onSubmit = data => {

        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset();
                Swal.fire({
                    position: 'top-middle',
                    icon: 'success',
                    title: 'User Login successful.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    };


    return (
        <div className='reltive'>
            <Helmet>
                <title>Music School | Login</title>
            </Helmet>

            <h3 className='font-monoton-xl opacity-10 text-gray-500  whitespace-nowrap text-center -rotate-90 absolute -left-48 top-[40%] '>login</h3>

            <Navbar></Navbar>
            <div className="pt-44 min-h-screen bg-white">

                <div className="flex w-[80%] mx-auto flex-col lg:flex-row-reverse  items-center justify-center ">
                    <div className="text-center lg:text-center  w-[50%]  flex flex-row-reverse items-center justify-center">
                        <img className='w-[65%] object-cover h-auto' src={img} alt="" />

                    </div>
                    <div className='w-[60%] flex justify-end'>
                        <div className="card w-full max-w-md pb-10  flex-shrink-0 shadow-2xl bg-base-100  ">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-gray-800">Email</span>
                                    </label>
                                    <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered border-gray-700 border" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-gray-800">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered border-gray-700 border" />
                                    {errors.password && <span className="text-red-600">Password is required</span>}
                                    <label className="label">
                                        <a href="#" className="text-gray-500 link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary text-white">Login</button>
                                </div>
                                <div className='flex mt-10 justify-center'>
                                    <Link to='/signup'>Don't Have an account? <span className='text-red-600 font-bold'>Sign up</span></Link>
                                </div>
                            </form>
                            <div className='-mt-8'>
                                <GoogleLogin></GoogleLogin>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;