
import img from '../../../assets/m0.jpg'
import '../../../index.css'
import Navbar from '../../shared/navbar/Navbar';

const Banner = () => {
    return (
        <div className='relative bg-opacity-50'>
            <form onSubmit={handleSubmit(onSubmit)} className="">

                <div className="relative top-0 mb-5">
                    <p className="bg-white px-2 -mt-3 ml-2 font-medium text-gray-600 absolute">
                        Name <span className="text-red-600 px-1">*</span>
                    </p>
                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="name" className="border placeholder-gray-400 focus:outline-none   focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white border-gray-300" />
                    {errors.name && <span className="text-red-600 px-1">Name is required</span>}
                </div>

                {/* email & mobile */}
                <div className="flex gap-5 mb-5">
                    <div className="w-2/4">
                        <p className="bg-white px-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute">Email <span className="text-red-600 px-1">*</span>
                        </p>
                        <input type="email" {...register("email", { required: true })} name="email" placeholder="example@email.com" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white border-gray-300 " />
                        {errors.email && <span className="text-red-600 px-1">Email is required</span>}
                    </div>
                    <div className="w-2/4">
                        <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute">Mobile
                        </p>
                        <input type="text" {...register("phone", {
                            pattern: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/
                        })} name="phone" placeholder="(+88)01234567891" className="border placeholder-gray-400 focus:outline-none  focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white border-gray-300" />

                        {errors.phone?.type === 'pattern' && <p className="text-red-600 px-1">Invalid phone number</p>}
                    </div>
                </div>


                <div className="flex gap-5 mb-7">
                    <div className="w-2/4 relative">
                        <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Photo
                        </p>
                        <input onChange={handleFileChange}
                            //  {...register("photoURL", { required: true })} 
                            type="file" className="absolute top-[7.7px] inset-0 opacity-0 z-10 hover:cursor-pointer border placeholder-gray-400 focus:outline-none  focus:border-black w-full py-0 h-[53px] pr-4 pl-4 mt-0 ml-0 text-base block bg-white border-gray-300" />
                        <div className="px-4 h-[50.5px] border border-gray-300 relative top-[7.7px] flex items-center ">
                            <span className={`text-sm ${selectedFile ? 'text-gray-600' : 'text-gray-400'}`}>{selectedFile ? selectedFile.name : 'Choose a file...'}
                            </span>
                        </div>
                    </div>
                    <div className="w-2/4">
                        <p className="bg-white pr-2 pl-2 -mt-1.5 ml-2 font-medium text-gray-600 absolute z-10">Gender
                        </p>

                        {/* dropdown */}

                        <div className="dropdown dropdown-bottom dropdown-end bg-white  w-full ">

                            <label
                                onClick={toggleDropdown}
                                tabIndex={0}
                                className={` w-full bg-white py-3.5 px-4 mt-2 ml-0 text-sm ${selectedItem ? 'text-gray-600' : 'text-gray-400'} border border-gray-300 focus:outline-none focus:border-black flex justify-between items-center`}>

                                {selectedItem || 'Choose a gender'}
                                <FaAngleDown className="mt-1" />

                            </label>
                            {isOpen && (
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a onClick={() => handleItemClick('Male')}>Male</a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleItemClick('Female')}>Female</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                        {/* dropdown */}

                    </div>
                </div>

                <div className="relative top-0 mb-7">
                    <p className="bg-white pr-2 pl-2 -mt-3 ml-2 font-medium text-gray-600 absolute">
                        Password
                        <span className="text-red-600 px-1">*</span>
                    </p>
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        {...register("password", {
                            required: true, minLength: 6,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                        })} placeholder="Password" className="border placeholder-gray-400 focus:outline-none  focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white  border-gray-300 " />
                    <FaEye onClick={togglePasswordVisibility} className={`${passwordVisible ? 'absolute' : 'hidden'} absolute top-2/4 -translate-y-2 right-4`} />
                    <FaEyeSlash onClick={togglePasswordVisibility} className={`${passwordVisible ? 'hidden' : 'absolute'} top-2/4 -translate-y-2 right-4`} />

                    {errors.password?.type === 'required' && <p className="text-red-600 px-1">Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className="text-red-600 px-1">Password must be 6 characters</p>}
                    {errors.password?.type === 'maxLength' && <p className="text-red-600 px-1">Password must be less than 20 characters</p>}
                    {errors.password?.type === 'pattern' && <p className="text-red-600 px-1">Password must have one Uppercase, one number and one special character.</p>}
                </div>

                <div className="relative mb-10">
                    <p
                        className="bg-white pr-2 pl-2 -mt-3 ml-2 font-medium text-gray-600 absolute">
                        Confirm Password
                        <span className="text-red-600 px-1">*</span>
                    </p>
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        {...register("confirmPassword", {
                            required: true,
                            validate: (value) => value === password || 'Passwords do not match',
                        })}
                        placeholder="Password" id="conPass" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full py-3.5 pr-4 pl-4 mt-2 ml-0 text-base block bg-white  border-gray-300 " />

                    <FaEye onClick={togglePasswordVisibility} className={`${passwordVisible ? 'absolute' : 'hidden'} absolute top-2/4 -translate-y-2 right-4 hover:cursor-pointer`} />
                    <FaEyeSlash onClick={togglePasswordVisibility} className={`${passwordVisible ? 'hidden' : 'absolute'} top-2/4 -translate-y-2 right-4 hover:cursor-pointer`} />
                    {errors.password?.type === 'required' && <p className="text-red-600 px-1">Password is required</p>}
                    {errors.confirmPassword?.type === 'validate' && <p className="text-red-600 px-1">{errors.confirmPassword.message}</p>}
                </div>

                <div className="relative -top-4">
                    <div className="inline-flex w-max gap-6">
                        <div className="inline-flex items-center">
                            <label className="relative flex cursor-pointer items-center rounded-full p-3"

                                data-ripple-dark="true">
                                <input type="checkbox"
                                    {...register("checkbox", { required: true })} name="checkbox"

                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none  border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#1e326e] checked:bg-[#1e326e] checked:before:bg-[#1e326e] hover:before:opacity-10"
                                    id="checkbox-5" />
                                <div
                                    className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20" fill="currentColor" stroke="currentColor"
                                        strokeWidth="1">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>

                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="inline-block relative -top-1">I agree to the <a className="w-full underline inline font-medium text-center text-[#1e326e]  transition duration-200 hover:text-black hover:cursor-pointer ease">Terms
                        of Use and Privacy Policy
                    </a>
                    </div>
                    {errors.checkbox?.type === 'required' && <p className="text-red-600 px-1">You need to agree terms and conditions before proceed</p>}
                </div>


                <div className="relative">
                    <input type="submit"
                        className="w-full inline-block py-3 pr-5  pl-5 text-xl font-medium text-center hover:text-black
         bg-[#1e326e] hover:bg-yellow-200 text-white border border-[#1e326e]
          transition duration-300  hover:cursor-pointer ease "
                        value="Sign Up" />

                </div>
            </form>


        </div>

    );
};

export default Banner;