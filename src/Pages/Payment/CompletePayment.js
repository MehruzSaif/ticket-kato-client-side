import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import './Payment.css'
// import CheckoutFormNew from './CheckoutFormNew'; 
import Pay from './Pay';
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const CompletePayment = () => {
    const [user, loading] = useAuthState(auth)
    console.log(user)
    const location = useLocation();
    console.log(location)
    const [seats, setSeats] = useState(location.state.selectSeats)
    const [fromDate, setFromDate] = useState(location.state.travelDate)
    const [busPro, setBusPro] = useState(location.state.busProfile)
    return (
        <div className='completePayment'>
            <div className='text-center py-5'>

            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center  px-5">
                <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                    <div className="card-body carddd">
                        <p className="text-success font-bold">Hello, {user?.displayName}</p>
                        <h2 className="card-title">Please Pay for {busPro.route} Ticket</h2>
                        <p className="font-semibold text-green-500">
                            Bus Name: {busPro.operator_name}
                        </p>
                        <p className="font-semibold text-indigo-500">
                            Ticket Quantity Selected: {seats.length}
                        </p>
                        <p className="font-semibold text-orange-500">
                            Your Total Price: ${busPro.price * seats.length}
                        </p>

                        <p className="font-semibold text-indigo-500">
                            Selected Seats:{" "}
                            {seats.map((seat) => (
                                <span className="seatId text-red-400">{seat.slice(0, 1)}</span>
                            ))}
                        </p>
                    </div>
                </div>
                <div className="flex-1">

                    <div className="card w-96 bg-base-100 shadow-xl ml-10">
                        <p className='stripePay text-center'>Pay with Stripe</p>
                        <div className="card-body">
                            {/* <Elements stripe={stripePromise}>
                                <CheckoutFormNew
                                    ticketPriceNow={busPro.price * seats.length} />
                            </Elements> */}
                            <Pay ticketPriceNow={busPro.price * seats.length}>

                            </Pay>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompletePayment;