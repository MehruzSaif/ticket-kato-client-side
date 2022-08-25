import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const AddBuses = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleAddReview = event => {
        event.preventDefault();
        const busInfo = {
            operator_name: event.target.operator_name.value,
            bus_type: event.target.bus_type.value,
            bus_class: event.target.bus_class.value,
            coach_number: event.target.coach_number.value,
            route: event.target.route.value,
            departure_city: event.target.departure_city.value,
            arrival_city: event.target.arrival_city.value,
            departure_time: event.target.departure_time.value,
            arrival_time: event.target.arrival_time.value,
            photos: event.target.photos.value,
            available_seats: event.target.available_seats.value,
            boarding_point: event.target.boarding_point.value,
            dropping_point: event.target.dropping_point.value,
            price: event.target.price.value,
            rating: event.target.rating.value,
            featured: event.target.featured.value,
        }
console.log(busInfo)
        fetch('http://localhost:5000/buses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(busInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("New Bus added Successfully!");
                    event.target.operator_name.value = ''
                    event.target.bus_type.value = ''
                    event.target.bus_class.value = ''
                    event.target.coach_number.value = ''
                    event.target.route.value = ''
                    event.target.departure_city.value = ''
                    event.target.arrival_city.value = ''
                    event.target.departure_time.value = ''
                    event.target.arrival_time.value = ''
                    event.target.photos.value = ''
                    event.target.available_seats.value = ''
                    event.target.boarding_point.value = ''
                    event.target.dropping_point.value = ''
                    event.target.price.value = ''
                    event.target.rating.value = ''
                    event.target.featured.value = ''
                    
                }
                else {
                    toast.error("Failed to add Bus!");
                }
            });
    }
    return (
<div className='flex justify-center items-center my-6 lg:mx-0 mx-4'>
            <div class="card pr-8 lg:w-3/5 shadow-xl text-center bg-slate-300">
                <h1 className='text-3xl text-slate-700 my-4 font-bold'>Add a new Bus</h1>
                <form onSubmit={handleAddReview} className='text-center'>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Operator Name</span>
                    </label>
                    <input type="text" class="input input-bordered input-lg w-full mb-4 mx-4" name='operator_name' required placeholder='Enter Operator Name'/>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Bus Type</span>
                    </label>
                    <input type="text" class="input input-bordered input-lg w-full mb-4 mx-4" name='bus_type' required placeholder='Enter Bus Type'/>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Bus Class</span>
                    </label>
                    <input type="text" class="input input-bordered input-lg w-full mb-4 mx-4" name='bus_class' required placeholder='Enter Bus Class'/>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Coach Number</span>
                    </label>
                    <input type="number" class="input input-bordered input-lg w-full mb-4 mx-4" name='coach_number' required placeholder='Enter Coach Number'/>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Route</span>
                    </label>
                    <input type="text" class="input input-bordered input-lg w-full mb-4 mx-4" name='route' required placeholder='Enter Route'/>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Departure City</span>
                    </label>
                    <input type="text" class="input input-bordered input-lg w-full mb-4 mx-4" name='departure_city' required placeholder='Enter Departure City'/>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Arrival City</span>
                    </label>
                    <input type="text" class="input input-bordered input-lg w-full mb-4 mx-4" name='arrival_city' required placeholder='Enter Arrival City'/>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Departure Time</span>
                    </label>
                    <input type="text" class="input input-bordered input-lg w-full mb-4 mx-4" name='departure_time' required placeholder='Enter Departure Time'/>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Arrival Time</span>
                    </label>
                    <input type="text" class="input input-bordered input-lg w-full mb-4 mx-4" name='arrival_time' required placeholder='Enter Operator Name'/>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Photo URL</span>
                    </label>
                    <input type="text" class="input input-bordered input-lg w-full mb-4 mx-4" name='photos' required placeholder='Enter Photos'/>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Available Seats</span>
                    </label>
                    <input type="number" class="input input-bordered input-lg w-full mb-4 mx-4" name='available_seats' required placeholder='Enter Available Seats'/>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Boarding Point</span>
                    </label>
                    <input type="text" class="input input-bordered input-lg w-full mb-4 mx-4" name='boarding_point' required placeholder='Enter Boarding Point'/>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Dropping Point</span>
                    </label>
                    <input type="text" class="input input-bordered input-lg w-full mb-4 mx-4" name='dropping_point' required placeholder='Enter Dropping Point'/>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Price</span>
                    </label>
                    <input type="number" class="input input-bordered input-lg w-full mb-4 mx-4" name='price' required placeholder='Enter Price'/>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Ratings</span>
                    </label>
                    <input type="number" class="input input-bordered input-lg w-full mb-4 mx-4" name='rating' required placeholder='Enter Rating'/>
                    <label className="label ml-6">
                        <span className="label-text text-lg">Features</span>
                    </label>
                    <input type="boolean" class="input input-bordered input-lg w-full mb-4 mx-4" name='featured' placeholder='Enter Features'/>
                    
                    <input type="submit" value="Add Bus" className='btn border-0 bg-cyan-500 mb-4' required />
                </form>
            </div>
        </div>
    );
};

export default AddBuses;