import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../providers/AuthProvider';
import { useForm } from 'react-hook-form';

const AddClass = () => {

    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    const { user, loading, createUser, updateUserProfile } = useContext(AuthContext);
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
        <div className='w-full'>
            <Helmet>
                <title>Music School | Add a class</title>
            </Helmet>

            <h3 className='font-monoton-lg opacity-10 text-gray-500  whitespace-nowrap text-center -rotate-90 absolute -left-52 top-[42%] '>Signup</h3>

            <div className="pt-20 pb-20  bg-white">
                <div className="flex w-[100%] mx-auto items-center justify-center ">
                    <div className='w-[65%]'>
                        <div className="card w-full pb-10  flex-shrink-0 shadow-2xl bg-base-100  ">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body py-10 space-y-1">
                                <div className='flex gap-4'>
                                    <div className="form-control w-2/4">
                                        <label className="label">
                                            <span className="text-gray-800">Class Name</span>
                                        </label>
                                        <input type="text"  {...register("className", { required: true })} className="input input-bordered border-gray-700 border shadow-sm" />
                                        {errors.className && <span className="text-red-600">This field is required</span>}
                                    </div>
                                    <div className="form-control w-2/4">
                                        <label className="label">
                                            <span className="text-gray-800">Class Image</span>
                                        </label>
                                        <input type="text"  {...register("classImage", { required: true })} className="input input-bordered border-gray-700 border shadow-sm" />
                                        {errors.classImage && <span className="text-red-600">This field is required</span>}
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className="form-control w-2/4">
                                        <label className="label">
                                            <span className="text-gray-800">Instructor name</span>
                                        </label>
                                        <input type="text" defaultValue={user?.displayName} readOnly className="input input-bordered border-gray-700 border shadow-sm" />
                                    </div>
                                    <div className="form-control w-2/4">
                                        <label className="label">
                                            <span className="text-gray-800">Confirm Password</span>
                                        </label>
                                        <input type="text" defaultValue={user?.email} readOnly className="input input-bordered border-gray-700 border shadow-sm" />
                                    </div>
                                </div>

                                <div className='flex gap-4'>
                                    <div className="form-control w-2/4">
                                        <label className="label">
                                            <span className="text-gray-800">Available seats</span>
                                        </label>
                                        <input type="text"  {...register("availableSeats", { required: true })} className="input input-bordered border-gray-700 border shadow-sm" />
                                        {errors.availableSeats && <span className="text-red-600">This field is required</span>}
                                    </div>
                                    <div className="form-control w-2/4">
                                        <label className="label">
                                            <span className="text-gray-800">Price</span>
                                        </label>
                                        <input type="text"  {...register("price", { required: true })} className="input input-bordered border-gray-700 border shadow-sm" />
                                        {errors.pirce && <span className="text-red-600">This field is required</span>}
                                    </div>
                                </div>
                                <div className="form-control">
                                    <input className="btn btn-primary mt-3 text-white" type="submit" value="Add" />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddClass;