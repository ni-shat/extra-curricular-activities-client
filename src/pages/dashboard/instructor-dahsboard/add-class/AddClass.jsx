import React from 'react';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import isValidImageURL from '../../../../hooks/useValidImage';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Dropdown from '../../../../components/Dropdown';
import SelectedClasses from '../../student-dashboard/selected-classes/SelectedClasses';


const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const categoriesLi = [
    {
        id: 1,
        title: "Music",
    },
    {
        id: 2,
        title: "Dance",
    },
    {
        id: 3,
        title: "Arts",
    },
    {
        id: 4,
        title: "Crafts",
    },
    {
        id: 5,
        title: "Sports",
    },
    {
        id: 6,
        title: "Photography & Videography",
    },
    {
        id: 7,
        title: "Cooking and Baking",
    },
    {
        id: 8,
        title: "STEM",
    },
    {
        id: 9,
        title: "Writing and Literature",
    }
]


const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');
    const { user } = useContext(AuthContext);

    const [selectedFile, setSelectedFile] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCourseMode, setSelectedCourseMode] = useState('');
    const [selectedCategories, setSelectedCategories] = useState('');

    const [selectedItems, setSelectedItems] = useState({
        selectedDays: []
    });

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        // console.log("add cls", selectedItems.selectedDays);

        data['selectedDays'] = selectedItems.selectedDays;
        data['classImage'] = selectedFile;
        data['coursMode'] = selectedCourseMode;
        data['categories'] = selectedCategories;
        // console.log("add cls", data);

        const formData = new FormData();
        formData.append('image', data.classImage);
        console.log(img_hosting_token)
        console.log(data)

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);

                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    console.log(imgURL);
                    const saveClass = {
                        instructor: user?.displayName,
                        email: user?.email,
                        instructorImage: user?.photoURL,
                        availableSeats: data.availableSeats,
                        classImage: imgURL,
                        classTitle: data.className,
                        price: parseFloat(data.price),
                        total_enrolled: 0,
                        status: 'pending',
                        feedback: '',
                        fromTime: data.fromTime,
                        toTime: data.toTime,
                        sessionLocation: data.sessionLocation,
                        selectedDays: data.selectedDays,
                        coursMode: data.coursMode,
                        categories: data.categories,      
                        classDescription: data.classDescription,      
                    }
                    console.log(saveClass)


                    axiosSecure.post('/add-a-class', saveClass)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                setSelectedFile("");
                                setSelectedCourseMode("");
                                setSelectedCategories("")
                            }
                        })
                }
            })

        
    };

    const handleFileChange = (event) => {
        console.log(event.target.files[0])
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleCourseModeClick = (item) => {
        setSelectedCourseMode(item); // Update the selected item when an option is clicked
        setIsOpen(false);
    };
    const handleCategories = (item) => {
        setSelectedCategories(item); // Update the selected item when an option is clicked
        setIsOpen(false);
    };



    return (
        <div className='w-full z-0'>
            <Helmet>
                <title>Music School | Add a class</title>
            </Helmet>


            <div className="pt-32 pb-40  bg-white">
                <div className='flex justify-center'>
                    <h3 className='text-3xl px-6 py-3  font-semibold text-center uppercase border-b-2 border-red-400 w-fit '>Add a Class</h3>
                </div>

                <div className="flex w-[100%] mx-auto mt-10 items-center justify-center ">
                    <div className='w-[65%]'>
                        <div className="card w-full pb-10  flex-shrink-0 shadow-2xl bg-base-100  ">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body py-10 space-y-5">

                                <div className="flex gap-5 mb-0">
                                    <div className="w-full relative">
                                        <p className="bg-white px-2 -mt-1.5 ml-2 font-semibold text-gray-600 absolute">
                                            Class Name <span className="text-red-600 px-1">*</span>
                                        </p>
                                        <input type="text" {...register("className", { required: true })} placeholder="class name" className="border placeholder-gray-400 focus:outline-none   focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white border-gray-300" />
                                        {errors.className && <span className="text-red-600 px-1">required</span>}
                                    </div>
                                </div>
                                <div className="flex  gap-5 mb-0">
                                    <div className="w-2/4 relative">
                                        <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-semibold text-gray-600 absolute z-10">Class Image
                                            <span className="text-red-600 px-1">*</span>
                                        </p>
                                        <input onChange={handleFileChange}
                                            //  {...register("photoURL", { required: true })} 
                                            type="file" className="absolute top-[7.7px] inset-0 opacity-0 z-10 hover:cursor-pointer border placeholder-gray-400 focus:outline-none  focus:border-black w-full py-0 h-[53px] pr-4 pl-4 mt-0 ml-0 text-base block bg-white border-gray-300" />
                                        <div className="px-4 h-[53px] border border-gray-300 relative top-[7.7px] flex items-center ">
                                            <span className={`text-sm ${selectedFile ? 'text-gray-600' : 'text-gray-400'}`}>{selectedFile ? selectedFile.name : 'Choose an image...'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-2/4">
                                        <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-semibold text-gray-600 absolute z-10">Category
                                            <span className="text-red-600 px-1">*</span>
                                        </p>

                                        {/* dropdown */}
                                        <div className="dropdown dropdown-bottom dropdown-end bg-white  w-full ">

                                            <label
                                                onClick={toggleDropdown}
                                                tabIndex={0}
                                                className={` w-full bg-white py-[15px] px-4 mt-2 ml-0 text-sm ${selectedCategories ? 'text-gray-600' : 'text-gray-400'} border border-gray-300 focus:outline-none focus:border-black flex justify-between items-center`}>

                                                {selectedCategories || 'Choose...'}
                                                <FaAngleDown className="mt-1" />

                                            </label>
                                            {isOpen && (
                                                <ul
                                                    tabIndex={0}
                                                    className="dropdown-content z-20 menu p-2  shadow bg-white rounded-box ">
                                                    {
                                                        categoriesLi.map(item =>
                                                            <li key={item.id} onClick={() => handleCategories(item.title)} >
                                                                <p>{item.title}</p>
                                                            </li>)
                                                    }
                                                    {/* 
                                                    // <li>
                                                    //     <a onClick={() => handleCourseModeClick('Onsite')}>Onsite</a>
                                                    // </li>
                                                    // <li>
                                                    //     <a onClick={() => handleCourseModeClick('Online')}>Online</a>
                                                    // </li> */}
                                                </ul>
                                            )}
                                        </div>
                                        {/* dropdown */}
                                    </div>
                                </div>
                                <div className="flex gap-5 mb-5">
                                    <div className="w-2/4">
                                        <p className="bg-white px-2 -mt-1.5 ml-2 font-semibold text-gray-600 absolute">Instructor Name
                                        </p>
                                        <input type="text" defaultValue={user?.displayName} readOnly className="border hover:cursor-not-allowed placeholder-gray-400 focus:outline-none focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white border-gray-300 " />
                                        {errors.email && <span className="text-red-600 px-1">Email is required</span>}
                                    </div>
                                    <div className="w-2/4">
                                        <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-semibold text-gray-600 absolute">Email
                                        </p>
                                        <input type="text" defaultValue={user?.email} readOnly className="border hover:cursor-not-allowed placeholder-gray-400 focus:outline-none  focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white border-gray-300" />

                                        {errors.phone?.type === 'pattern' && <p className="text-red-600 px-1">Invalid phone number</p>}
                                    </div>
                                </div>

                                {/* hi */}
                                <div className="flex gap-5 mb-0">
                                    <div className="w-2/4">
                                        <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-semibold text-gray-600 absolute z-10">Course Mode
                                            <span className="text-red-600 px-1">*</span>
                                        </p>

                                        {/* dropdown */}
                                        <div className="dropdown dropdown-bottom dropdown-end bg-white  w-full ">

                                            <label
                                                onClick={toggleDropdown}
                                                tabIndex={0}
                                                className={` w-full bg-white py-3.5 px-4 mt-2 ml-0 text-sm ${selectedCourseMode ? 'text-gray-600' : 'text-gray-400'} border border-gray-300 focus:outline-none focus:border-black flex justify-between items-center`}>

                                                {selectedCourseMode || 'Choose...'}
                                                <FaAngleDown className="mt-1" />

                                            </label>
                                            {isOpen && (
                                                <ul
                                                    tabIndex={0}
                                                    className="dropdown-content z-20 menu p-2 shadow bg-white rounded-box w-52">
                                                    <li>
                                                        <a onClick={() => handleCourseModeClick('Onsite')}>Onsite</a>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => handleCourseModeClick('Online')}>Online</a>
                                                    </li>
                                                </ul>
                                            )}
                                        </div>
                                        {/* dropdown */}
                                    </div>
                                    <div className="w-2/4">
                                        <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-semibold text-gray-600 absolute">Session Location
                                            <span className="text-red-600 px-1">*</span>
                                        </p>
                                        <input type="text" {...register("sessionLocation", { required: true })} name='sessionLocation' placeholder="location" className="border placeholder-gray-400 focus:outline-none  focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white border-gray-300" />

                                        {errors.sessionLocation && <span className="text-red-600">required</span>}
                                    </div>
                                </div>
                                {/* hi */}


                                <div className="flex gap-5 mb-5">
                                    <div className="w-2/4">
                                        <p className="bg-white px-2 -mt-1.5 ml-2 font-semibold text-gray-600 absolute">Available Seats <span className="text-red-600 px-1">*</span>
                                        </p>
                                        <input type="number" {...register("availableSeats", { required: true })} name="availableSeats" placeholder="20" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white border-gray-300 " />
                                        {errors.availableSeats && <span className="text-red-600">required</span>}
                                    </div>
                                    <div className="w-2/4">
                                        <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-semibold text-gray-600 absolute">Price
                                            <span className="text-red-600 px-1">*</span>
                                        </p>
                                        <input type="number" {...register("price", { required: true })} name="price" placeholder="1000" className="border placeholder-gray-400 focus:outline-none  focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white border-gray-300" />

                                        {errors.price && <span className="text-red-600">required</span>}
                                    </div>
                                </div>

                                <div className="w-full mb-5">
                                    <p className="bg-white px-2 -mt-2.5 ml-2 font-semibold text-gray-600 absolute">Schedule <span className="text-red-600 px-1">*</span>
                                    </p>
                                    <div className="w-full flex-col gap-3 flex border-gray-300 border  pb-8 px-6 pt-8 ">
                                        <div className='w-full gap-5 flex  border placeholder-gray-400 focus:outline-none focus:border-black'>
                                            {/* <p className="bg-white px-2 -mt-2.5 ml-2 font-semibold text-gray-600 absolute">Time <span className="text-red-600 px-1">*</span>
                                            </p> */}
                                            <div className='w-2/4 pl-0 flex items-center gap-3'>
                                                <label className='bg-gray-100 px-2.5 font-semibold h-full flex items-center'>From</label>
                                                <input type="time" {...register("fromTime", { required: true })} name="fromTime" className="w-full py-3.5 pr-4 pl-4 ml-0 text-base block bg-white border-gray-300 " />
                                                {errors.fromTime && <span className="text-red-600">required</span>}
                                            </div>
                                            <div className='w-2/4 pl-0 flex items-center gap-3'>
                                                <label className='bg-gray-100 px-2.5 font-semibold h-full flex items-center'>To</label>
                                                <input type="time" {...register("toTime", { required: true })} name="toTime" placeholder="20" className="w-full py-3.5 pr-4 pl-4 ml-0 text-base block bg-white border-gray-300 " />
                                                {errors.toTime && <span className="text-red-600">required</span>}
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <Dropdown selectedItems={selectedItems} setSelectedItems={setSelectedItems} ></Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mb-5">
                                    <p className="bg-white px-2 -mt-2.5 ml-2 font-semibold text-gray-600 absolute">Class Description <span className="text-red-600 px-1">*</span>
                                    </p>
                                    <textarea
                                        {...register("classDescription", { required: true })}
                                        name="classDescription"
                                        rows="4"
                                        className="border border-gray-300 resize-none focus:outline-none
                                         focus:border-black w-full px-5 pt-6 pb-4"
                                        placeholder="Write a brief description of the class.."
                                    ></textarea>
                                     {errors.classDescription && <span className="text-red-600">required</span>}
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