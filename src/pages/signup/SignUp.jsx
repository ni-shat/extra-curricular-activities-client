import React, { useContext } from 'react';
import Navbar from '../shared/navbar/Navbar';
// import bg from ''
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import GoogleLogin from '../shared/social-login/GoogleLogin';
import { Helmet } from 'react-helmet';
import Footer from '../shared/footer/Footer';


const SignUp = () => {


    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {

        console.log(data)
        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = {
                            name: data.name,
                            email: data.email,
                            password: data.password,
                            photoURL: data.photoURL,
                            gender: data.gender,
                            address: data.address,
                            phone: data.phone,
                        }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };


    return (
        <div className='bg-[../../assets/bg-signup.svg] bg-cover bg-center h-screen'>
             <Helmet>
                <title>Music School | Signup</title>
            </Helmet>

            <h3 className='font-monoton-lg opacity-10 text-gray-500  whitespace-nowrap text-center -rotate-90 absolute -left-52 top-[42%] '>Signup</h3>

            <Navbar></Navbar>
            <div className="pt-14 pb-20  bg-white">
                <div className="flex w-[80%] mx-auto items-center justify-center ">
                    <div className='w-[65%]'>
                        <div className="card w-full pb-10  flex-shrink-0 shadow-2xl bg-base-100  ">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className='flex gap-4'>
                                    <div className="form-control w-2/4">
                                        <label className="label">
                                            <span className="text-gray-800">Name</span>
                                        </label>
                                        <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered border-2 border-gray-200 shadow-sm" />
                                        {errors.name && <span className="text-red-600">Name is required</span>}
                                    </div>
                                    <div className="form-control w-2/4">
                                        <label className="label">
                                            <span className="text-gray-800">Email</span>
                                        </label>
                                        <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered border-2 border-gray-200 shadow-sm" />
                                        {errors.email && <span className="text-red-600">Email is required</span>}
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className="form-control w-2/4">
                                        <label className="label">
                                            <span className="text-gray-800">Password</span>
                                        </label>
                                        <input type="password"  {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                        })} placeholder="password" className="input input-bordered border-2 border-gray-200 shadow-sm" />
                                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase, one number and one special character.</p>}
                                    </div>
                                    <div className="form-control w-2/4">
                                        <label className="label">
                                            <span className="text-gray-800">Confirm Password</span>
                                        </label>
                                        <input type="password"  {...register("confirmPassword", {
                                            required: true,
                                            validate: (value) => value === password || 'Passwords do not match',
                                        })} placeholder="confirm password" className="input input-bordered border-2 border-gray-200 shadow-sm" />
                                        {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className="form-control w-2/4">
                                        <label className="label">
                                            <span className="text-gray-800">Photo URL</span>
                                        </label>
                                        <input type="text"  {...register("photoURL", { required: true })} placeholder="url" className="input input-bordered border-2 border-gray-200 shadow-sm" />
                                        {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                    </div>
                                    <div className="form-control w-2/4">
                                        <label className="label">
                                            <span className="text-gray-800">Gender</span>
                                        </label>
                                        <input type="text"  {...register("gender", { required: true })} placeholder="gender" className="input input-bordered border-2 border-gray-200 shadow-sm" />
                                        {errors.gender && <span className="text-red-600">Gender is required</span>}
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <div className="form-control w-2/4">
                                        <label className="label">
                                            <span className="text-gray-800">Phone number</span>
                                        </label>
                                        <input type="text"  {...register("phone", { required: true })} placeholder="phone number" className="input input-bordered border-2 border-gray-200 shadow-sm" />
                                        {errors.phone && <span className="text-red-600">Phone number is required</span>}
                                    </div>
                                    <div className="form-control w-2/4">
                                        <label className="label">
                                            <span className="text-gray-800">Address</span>
                                        </label>
                                        <input type="text"  {...register("address", { required: true })} placeholder="address" className="input input-bordered border-2 border-gray-200 shadow-sm" />
                                        {errors.address && <span className="text-red-600">Address is required</span>}
                                    </div>
                                </div>
                                <label className="label">
                                    <a href="#" className="text-gray-400 link link-hover">Forgot password?</a>
                                </label>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary text-white" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <div className='card-body -mt-10'>
                                <GoogleLogin></GoogleLogin>
                                <div className='flex mt-10 justify-center'>
                                    <Link to='/login'>Already Have an account? <span className='text-red-600 font-bold'>log in</span></Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;