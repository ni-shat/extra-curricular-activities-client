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

const ApprovedClass = ({ cls, isInstructor, isAdmin, refetch }) => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log("im in approved class")
    const { availableSeats, classImage, classTitle, email, instructor, instructorImage, price, total_enrolled, _id } = cls;

    const [axiosSecure] = useAxiosSecure();


    const handleSelect = async (classId) => {
        if (!user) {
            Swal.fire({
                position: 'top-middle',
                icon: 'info',
                title: 'You need to login first',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/login');
        }
        else {
            const saveClass = {
                classId: classId,
                instructorEmail: email,
                classImage,
                classTitle,
                price,
                status: "selected",
                instructorImage
            }
            try {
                axiosSecure.post(`/selected-classes/${classId}?email=${user?.email}`, saveClass)
                    .then(data => {
                        console.log('after posting feedback', data.data)
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

                        // successfully inserted, now do patch
                        try {

                            axiosSecure.patch(`/all-approved-classes/seats/${classId}`)
                                .then(data => {
                                    console.log('after changing seats', data)
                                    if (data.data.modifiedCount) {
                                        refetch();
                                        Swal.fire({
                                            position: 'top-end',
                                            icon: 'success',
                                            title: 'seats are changed.',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                    }
                                })
                
                        } catch (error) {
                            console.error('error in feedback ', error);
                        }
                        // end patch
                    })
            } catch (error) {
                console.error('error in post hook', error);
            }
        }
    }


    return (
        <>
            <div className='text-black'>
                {
                    cls.status !== 'denied' && <div >
                        <div className={`relative border  h-[500px] flex flex-col border-transparent w-[1/4]`}>

                            <img className="w-full h-[300px] object-cover  cursor-pointer  bg-gradient-to-b from-transparent to-black mix-blend-multiply" src={classImage} alt="" />
                            <div className='absolute top-10 right-0 bg-white text-xl font-bold px-0.5'>
                                {availableSeats} seats available
                            </div>

                            <div className="text-black flex-grow  flex flex-col h-fit">
                                {/* <h3 className="text-3xl mb-4 font-roboto-bold"> {c?.title.split(' ').slice(0, 2).join(' ')}</h3> */}
                                <p className="text-3xl font-roboto-extrabold mt-1.5">{classTitle}</p>
                            </div>
                            <hr className='w-[80%]  mb-1 h-0.5 bg-black' />
                            <div className="text-black flex-end  mb-3 flex flex-col h-fit">
                                {/* <h3 className="text-3xl mb-4 font-roboto-bold"> {c?.title.split(' ').slice(0, 2).join(' ')}</h3> */}
                                <p className="text-xl font-roboto-bold"><span className='text-sm'>instructor <br /></span> <span className='text-blue-800'>{instructor}</span></p>
                            </div>
                            <div className="text-white bg-red-600 absolute top-20 right-0 px-1 flex items-center h-fit">
                                {/* <h3 className="text-3xl mb-4 font-roboto-bold"> {c?.title.split(' ').slice(0, 2).join(' ')}</h3> */}
                                <FaDollarSign className='text-xs' />
                                <p className="text-xl font-roboto-bold">{price}</p>

                            </div>
                            <button className='btn text-white disabled:bg-opacity-10 disabled:bg-black disabled:text-gray-600'
                                disabled={(isAdmin || isInstructor || (parseInt(availableSeats) === 0)) ? true : false}
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