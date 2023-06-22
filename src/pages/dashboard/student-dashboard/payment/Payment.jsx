import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const { id } = useParams();
    console.log("params in payment", id);
    const [axiosSecure] = useAxiosSecure();
    const { data: selected_Cls = [] } = useQuery(['selected_cls_'], async () => {
        const res = await axiosSecure.get(`/payment-selected-classes/${id}`)
        return res.data;
    })
    // console.log(selected_Cls)

    return (
        <div>
            <h2>Payment</h2>

            <Elements stripe={stripePromise}>
                <CheckOutForm
                    price={parseFloat(selected_Cls.price)}
                    classTitle={selected_Cls.classTitle}
                    instructorName={selected_Cls.instructorName}
                    classImage={selected_Cls.classImage} 
                    _id={selected_Cls._id}
                    classId={selected_Cls.classId}
                
                ></CheckOutForm>
        </Elements>
        </div >
    );
};

export default Payment;