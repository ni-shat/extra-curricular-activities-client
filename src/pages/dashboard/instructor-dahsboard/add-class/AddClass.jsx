import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import isValidImageURL from '../../../../hooks/useValidImage';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');
    const { user } = useContext(AuthContext);

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        console.log("add cls", data);
        const formData = new FormData();
        formData.append('image', data.classImage[0]);


       
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse);

            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                console.log(imgURL);
                const saveClass = {
                    instructor: user?.displayName,  
                    email: user?.email, 
                    instructorImage: user?.photoURL,
                    availableSeats: data.availableSeats ,
                    classImage: imgURL,
                    classTitle: data.className,
                    price: parseFloat(data.price),
                    total_enrolled: 0,
                    status: 'pending',
                    feedback: ''
                }
                console.log(saveClass)


                axiosSecure.post('/add-a-class', saveClass)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })


            }
        })



        
    };



    return (
        <div className='w-full'>
            <Helmet>
                <title>Music School | Add a class</title>
            </Helmet>


            <div className="pt-20 pb-20  bg-white">
                <div className="flex w-[100%] mx-auto mt-10 items-center justify-center ">
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
                                        <input type="file" {...register("classImage", { required: true })} className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
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