import React, { useContext } from 'react';
import Navbar from '../shared/navbar/Navbar';
import { FaDollarSign } from 'react-icons/fa';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import useStudent from '../../hooks/useStudent';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ApprovedClass = ({ cls, isInstructor, isAdmin, refetch }) => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init();
    }, []);


    const { availableSeats, classImage, classTitle, classDescription, email, instructor, instructorImage, price, total_enrolled, _id } = cls;

    const [axiosSecure] = useAxiosSecure();

    // console.log("this class", cls)


    const handleSelect = async (classId) => {
        if (!user) {
            Swal.fire({
                position: 'top-middle',
                icon: 'info',
                title: 'You need to login first',
                showConfirmButton: false,
                timer: 1500
            })
            // navigate('/login');
        }
        else {
            const saveClass = {
                classId: classId,
                instructorEmail: email,
                userEmail: user?.email,
                classImage,
                classTitle,
                price,
                status: "selected",
                instructorImage,
                instructorName: instructor
            }
            try {
                axiosSecure.post(`/selected-classes/${classId}?email=${user?.email}`, saveClass)
                    .then(data => {
                        console.log('after selecting class', data.data)
                        if (data.data.insertedId) {
                            // refetch();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your class is selected.',
                                showConfirmButton: false,
                                timer: 1500
                            })

                        }
                        else if (Object.keys(data.data).length === 0) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'warning',
                                title: 'You already selected this class.',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }

                    })

            } catch (error) {
                console.error('error in post hook', error);
            }

        }
    }


    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-duration="900"
                className='text-black w-[320px] h-[505px] '>
                {
                    cls.status !== 'denied' && <div >
                        <div className={`relative border ${parseInt(availableSeats) === 0 ? 'bg-red-200' : 'bg-white'}  h-[500px] flex flex-col border-transparent `}>

                            <img className="w-full h-[250px] object-cover  cursor-pointer  bg-gradient-to-b from-transparent to-black mix-blend-multiply" src={classImage} alt="" />
                            <div className='absolute top-10 right-0 bg-white text-xl font-bold px-0.5'>
                                {availableSeats} seats available
                            </div>

                            <div className="text-black flex-grow  flex flex-col h-fit">
                                {/* <h3 className="text-3xl mb-4 font-roboto-bold"> {c?.title.split(' ').slice(0, 2).join(' ')}</h3> */}
                                <p className="text-2xl font-roboto-bold font-semibold mt-1.5">{classTitle}</p>
                            </div>
                            {
                                classDescription &&
                                <div className="text-black flex-grow  flex flex-col h-fit">
                                    <p className="text-xs poppin mt-1.5">{classDescription}</p>
                                </div>
                            }
                            <hr className='w-[80%]  my-1.5 h-0.5 bg-black' />
                            <div className="text-black flex-end  mb-3 flex flex-col h-fit">
                                {/* <h3 className="text-3xl mb-4 font-roboto-bold"> {c?.title.split(' ').slice(0, 2).join(' ')}</h3> */}
                                <p className="text-xl font-roboto-bold"><span className='text-sm'>instructor <br /></span> <span className='text-blue-800'>{instructor}</span></p>
                            </div>
                            <div className="text-white bg-red-600 absolute top-20 right-0 px-1 flex items-center h-fit">
                                {/* <h3 className="text-3xl mb-4 font-roboto-bold"> {c?.title.split(' ').slice(0, 2).join(' ')}</h3> */}
                                {/* <FaDollarSign className='text-xs' /> */}
                                <p className="text-xl font-roboto-bold">৳ {price}</p>

                            </div>
                            <button className={`py-2.5 text-base text-white 
                                ${(isAdmin || isInstructor || (parseInt(availableSeats) === 0)) ? 'cursor-not-allowed bg-gray-200 hover:bg-gray-200 border-0 text-gray-600' : 'cursor-pointer bg-black hover:bg-opacity-60'}
                            `}
                                // disabled={(isAdmin || isInstructor || (parseInt(availableSeats) === 0)) ? true : false}
                                onClick={() => handleSelect(_id)}
                            >Select</button>
                        </div>

                    </div>
                }

            </div>
        </>
    );
};

export default ApprovedClass;