import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import yDot from './yellow-dots.svg'
import gDot from './green-dots.svg'
import logo from '../../assets/logo-black.png'
import ggl from '../../assets/ggl.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';
import GoogleLogin from '../shared/social-login/GoogleLogin';
// import GoogleLogin from './social-login/GoogleLogin';
// import FacebookLogin from './social-login/FacebookLogin';

const Login2 = ({ openModal }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState("");
  const { signIn, updateUserProfile, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  console.log(location.pathname)

  const from = location.state?.from?.pathname || "/dashboard/userhome";
  console.log(from)

  const modalCheckboxRef = useRef(null);


  const onSubmit = data => {

    // setIsLoading(true);
    console.log(data)
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        reset();
        setIsLoading(false);
        Swal.fire({
          position: 'top-middle',
          icon: 'success',
          title: 'User Login successful.',
          showConfirmButton: false,
          timer: 1500
        });
        closeModal();

        navigate(from, { replace: true });
      })
      .catch(error => {
        setIsLoading(false); // Set loading back to false if there's an error during login
        console.log(error.message);
        const updatedErrorMessage = error.message.replace("Firebase: ", "")
        setError(updatedErrorMessage)
      });
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const resetForm = () => {
    setTimeout(() => {
      reset();
      setError(false);
      setIsLoading(false);
    }, 1000); // 1 second delay
  };

  const closeModal = () => {
    modalCheckboxRef.current.checked = false;
    resetForm();
  }


  return (
    <div >

      <input type="checkbox" id="my-modal-3" className="modal-toggle" ref={modalCheckboxRef} />
      <div className="modal p-0">
        <div className="modal-box relative max-h-max max-w-max h-auto p-1 m-0">
          {/* <!-- contents --> */}
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="
                      w-[525px]
                      mx-auto
                      
                      bg-white
                      rounded-lg
                      relative
                      overflow-hidden
                      py-16
                      px-10
                      sm:px-12
                      md:px-[60px]
                      ">
                <label htmlFor="my-modal-3"
                  onClick={resetForm}
                  className="btn btn-sm btn-circle bg-red-500 border-0 absolute left-1 top-1 z-10 text-white">✕
                </label>
                <div className="mb-6 -mt-3 md:mb-14 flex justify-center w-3/5 mx-auto">
                  <img className='w-[60%]' src={logo} alt="logo" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-6">
                    <input type="text" {...register("email", { required: true })} placeholder="Email" className="
                               w-full
                               rounded-md
                               border
                               bordder-[#E9EDF4]
                               py-3
                               px-5
                               bg-white
                               text-black font-normal
                               placeholder-[#ACB6BE]
                               outline-none
                               focus-visible:shadow-none
                               focus:border-teal-600
                               " />
                    {errors.email && <span className="text-red-600 font-normal">Email is required</span>}
                  </div>
                  <div className="mb-6 relative">
                    <input type={passwordVisible ? 'text' : 'password'} {...register("password", { required: true })} placeholder="Password" className="
                               w-full
                               rounded-md
                               border
                               bordder-[#E9EDF4]
                               py-3
                               px-5
                               bg-[#FCFDFE]
                               text-black font-normal
                               placeholder-[#ACB6BE]
                               outline-none
                               focus-visible:shadow-none
                               focus:border-[#1e326e]
                               " />
                    <FaEye onClick={togglePasswordVisibility} className={`${passwordVisible ? 'absolute' : 'hidden'} absolute top-2/4 -translate-y-2 right-4 text-black hover:cursor-pointer`} />
                    <FaEyeSlash onClick={togglePasswordVisibility} className={`${passwordVisible ? 'hidden' : 'absolute'} top-2/4 -translate-y-2 right-4 text-black hover:cursor-pointer`} />
                    {errors.password && <span className="text-red-600 font-normal ">Password is required</span>}
                  </div>
                  <div className="mb-10 relative">
                    <input type="submit" value={isLoading ? "Signing..." : "Sign in"} disabled={isLoading} className="
                               w-full disabled:bg-opacity-40 
                               bg-red-600 rounded-md text-white
                               border bordder-primary
                               hover:cursor-pointer hover:bg-opacity-40
                               transition
                               py-3
                               px-5"
                    />
                    {
                      isLoading && <BeatLoader className='absolute top-2/4 -translate-y-2.5 right-20 ' color="#FFFFFF" />
                    }
                    {isError ? <p className="text-red-600 font-normal mt-1 -mb-3 pl-1">{isError}</p> : <></>}
                  </div>
                </form>
                <p className="text-base mb-6 text-gray-500 font-normal text-center">Connect With</p>
                <ul className="flex justify-between -mx-2 mb-12">
                  {/* <FacebookLogin modalCheckboxRef={modalCheckboxRef}></FacebookLogin> */}
                  <li className="px-2 -mt-2 w-full flex justify-center  ">
                    {/* <img className='w-14 h-14 p-2 border border-gray-400 rounded-full' src={ggl} alt="" /> */}
                    <GoogleLogin></GoogleLogin>
                  </li>
                  {/* <GoogleLogin modalCheckboxRef={modalCheckboxRef}></GoogleLogin> */}
                </ul>
                <Link className="
                         text-base
                         
                         mb-2  flex justify-center
                         text-gray-500 font-normal 
                         hover:underline hover:text-[#1e326e]
                         ">
                  Forget Password?
                </Link>
                <p className="text-base text-gray-500 font-normal text-center">
                  Not a member yet?
                  <Link onClick={closeModal} to='/signup' className="text-[#1e326e] font-semibold hover:underline">
                    Sign up
                  </Link>
                </p>
                <div>
                  <span className="absolute top-1 right-1">
                    <img src={yDot} alt="" />
                  </span>
                  <span className="absolute left-1 bottom-1">
                    <img src={gDot} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login2;