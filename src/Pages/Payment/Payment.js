
import React, { useState } from 'react';
import './Payment.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import useFetch from '../../hooks/useFetch';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Payment = () => {
    const [user, loading] = useAuthState(auth)
    console.log(user)
    const location = useLocation();
    const [selectSeats, setSelectSeats] = useState(location.state.selectSeats)
    const [travelDate, setTravelDate] = useState(location.state.goingDate)
    const [busProfile, setBusProfile] = useState(location.state.busItem)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [gender, setGender] = useState()

    console.log(selectSeats.length)
    const navigate = useNavigate();
    const handlePayment = () => {
        navigate("/CompletePayment", { state: { selectSeats, travelDate, busProfile } });
    }

    return (
        <div>
            <div className='journeyInfo'>
                <div>
                    <div className='journeyDetails'>
                        <p className='jTitle text-center'>Journey Details</p>

                        <div className='jContainer'>
                            <p className='text-center jOperator'>{busProfile.operator_name}</p>
                            <p className='route'>{busProfile.route}</p>

                            <p className='jDep'>Travel Date:{`${format(travelDate, "dd-MM-yyyy")}`} </p>
                            <p className='jDate jCoa'>Departure Time:{busProfile.departure_time} </p>
                            <p className='jArr'>Arrival Time:{busProfile.arrival_time}</p>

                            <p className='jArr'>Coach Number:{busProfile.coach_number}
                            </p>
                            <p className='jTic'>Tickets:</p>
                            {
                                selectSeats.map((seat) =>
                                    <span className='seatId'>{seat.slice(0, 2)}</span>
                                )
                            }

                            <p className='jp '>Total Price:{busProfile.price * selectSeats.length}<small className='ml-3 jp2'>Tk</small></p>


                        </div>

                    </div>
                </div>

                <div className='passengerDetails'>
                    <p className='pTitle'>Passenger Information</p>
                    <form onSubmit={handlePayment} className='text-center'>
                        <label>Name</label><br></br>
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} disabled placeholder={user?.displayName} class="nameField mb-4 mx-4" name='name' /><br></br>
                        <label>Email</label><br></br>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} disabled placeholder={user?.email} class="nameField mb-4 mx-4" name='email' /><br></br>
                        <label>Gender</label><br></br>
                        <input type="text" onChange={(e) => setGender(e.target.value)} value={gender} placeholder=" Your Gender" class="nameField mb-4 mx-4" name='description' required /><br></br>
                        <label>Phone</label><br></br>
                        <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Phone" class="nameField mb-4 mx-4" name='phone' /><br></br>
                        <input type="submit" value="Pay with Stripe" className='stripePay border-0 bg-cyan-500 mb-4 mt-1' required />
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Payment;
