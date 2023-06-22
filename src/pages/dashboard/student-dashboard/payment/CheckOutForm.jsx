import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAllClasses from '../../../../hooks/useApprovedClasses';

const CheckOutForm = ({ price , classTitle, instructorName, classImage , _id, classId }) => {

    const [ , refetch] = useAllClasses();

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    //I only need to fix price, setClientSecret would be same. 

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])
    // empty array diba


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
            // console.log('payment method', paymentMethod)
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                className: classTitle,
                instructorName: instructorName,
                classImage: classImage

            }
            axiosSecure.post(`/payment-transaction/${_id}`, payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.modifiedCount) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment successful.',
                            showConfirmButton: false,
                            timer: 1500
                        })

                        //seats reduce,
                        // successfully inserted, now do patch
                        try {

                            axiosSecure.patch(`/all-approved-classes/seats/${classId}`)
                                .then(data => {
                                    console.log('after changing seats', data)
                                    if (data.data.modifiedCount) {
                                        refetch();
                                    }
                                })
                                //class er id

                        } catch (error) {
                            console.error('error in feedback ', error);
                        }
                        // end 

                        // enrolled increase
                        try {

                            axiosSecure.patch(`/all-approved-classes/total-enrolled/${classId}`)
                                .then(data => {
                                    console.log('after changing seats', data)
                                    if (data.data.modifiedCount) {
                                        refetch();
                                    }
                                })
                                //class er id

                        } catch (error) {
                            console.error('error in feedback ', error);
                        }

                    }
                })
        }


    }



    return (
        <>
            <form className="w-2/3 mx-auto relative mt-32" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckOutForm;