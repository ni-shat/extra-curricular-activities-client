import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const FeeadBackModal = ({ id, refetch, cls, setSelectedRow }) => {

    console.log(id, cls.classTitle)

    const [axiosSecure] = useAxiosSecure();
    const [textareaValue, setTextareaValue] = useState('');

    const handleClick = async () => {

        const saveFeedback = { textareaValue };


        try {

            axiosSecure.post(`/classes/feedback/${id}`, saveFeedback)
                .then(data => {
                    console.log('after posting feedback', data.data)
                    if (data.data.modifiedCount) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'feedback is sent.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

        } catch (error) {
            console.error('error in feedback ', error);
        }


    };

    const handleCross = () => {
        setSelectedRow(false);
    }


    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal whitespace-normal">
                <div className="modal-box bg-white text-black  h-[400px] relative ">

                    <button onClick={handleCross}><label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label></button>
                    <div className=' h-fit px-8 pt-2 top-60 left-0 right-0 ml-auto mr-auto rounded-lg  '>


                        <div className="form-control">
                            <label className="label">
                                <span className="text-black font-bold text-xl">Feedback</span>
                            </label>
                            <textarea
                                onChange={(e) => setTextareaValue(e.target.value)}
                                className="textarea textarea-bordered border-black h-40 font-normal" name="description" placeholder="description"></textarea>
                        </div>

                        <button className="btn w-full hover:bg-gray-200 mt-8 px-10 bg-yellow-50 text-yellow-800 font-extrabold border-2 border-yellow-600 "
                            onClick={handleClick}
                        >
                            Done
                        </button>

                    </div>

                </div>
            </div>
        </>
    );
};

export default FeeadBackModal;