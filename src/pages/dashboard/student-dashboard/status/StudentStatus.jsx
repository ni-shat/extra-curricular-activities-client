import React, { useEffect } from 'react';
import { render } from 'react-dom';


const StudentStatus = () => {

    const storedReqStatus = localStorage.getItem('userStatus'); //object of local storage
    const reqData = {
        reqToBecomeTeacherStat: true
    };


    return (
        <div className='pt-32 h-full px-5'>
            <div className='flex gap-6 h-2/4'>
                {
                    storedReqStatus &&
                    <div className='rounded-xl w-2/4 px-4 py-4 h-full bg-yellow-100 shadow-md shadow-black'>

                        <div className="stack">
                            <div className="card shadow-md bg-blue-500 text-white-content font-semibold">
                                <div className="card-body">
                                    <h2 className="card-title mb-2 text-2xl">Instructor Enrollment Request Sent.</h2>
                                    <h2 className="card-title mb-2">Thank You for Applying!</h2>
                                    <p className='font-medium mr-12'>Your request to enroll as an instructor has been received. Our team will evaluate your qualifications, and we'll keep you informed about the progress.</p>
                                </div>
                            </div>
                            <div className="card shadow bg-blue-500 text-white-content font-semibold">
                                <div className="card-body">
                                    <h2 className="card-title mb-2 text-2xl">Instructor Enrollment Request Sent.</h2>
                                    <h2 className="card-title mb-2">Thank You for Applying!</h2>
                                    <p className='font-medium mr-12'>Your request to enroll as an instructor has been received. Our team will evaluate your qualifications, and we'll keep you informed about the progress.</p>
                                </div>
                            </div>
                            <div className="card shadow-sm bg-blue-500 text-white-content font-semibold">
                                <div className="card-body">
                                    <h2 className="card-title mb-2 text-2xl">Instructor Enrollment Request Sent.</h2>
                                    <h2 className="card-title mb-2">Thank You for Applying!</h2>
                                    <p className='font-medium mr-12'>Your request to enroll as an instructor has been received. Our team will evaluate your qualifications, and we'll keep you informed about the progress.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className='rounded-xl w-2/4 px-4 py-4 h-full bg-yellow-100 shadow-md shadow-black'>

                </div>
            </div>
            <div></div>
        </div>
    );
};

export default StudentStatus;