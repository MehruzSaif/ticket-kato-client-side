import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const AddReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleAddReview = event => {
        event.preventDefault();
        const review = {
            email: user.email,
            name: user.displayName,
            photo:user.photoURL,
            rating: event.target.ratings.value,
            review: event.target.description.value,
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Review added Successfully!");
                    event.target.ratings.value = ''
                    event.target.description.value = ''
                }
                else {
                    toast.error("Failed to add review!");
                }
            });
    }
    return (
<div className='flex justify-center items-center my-6 lg:mx-0 mx-4'>
            <div class="card pr-8 lg:w-3/5 shadow-xl text-center bg-slate-300">
                <h1 className='text-3xl text-slate-700 my-4 font-bold'>Add Your Review</h1>
                <form onSubmit={handleAddReview} className='text-center'>
                    <input type="text" disabled value={user?.displayName || ''} class="input input-bordered input-lg w-full mb-4 mx-4" name='name' />
                    <input type="text" disabled value={user?.email || ''} class="input input-bordered input-lg w-full mb-4 mx-4" name='email' />
                    <input type="number" placeholder="Rating ( Max Star 5)" class="iinput input-bordered input-lg w-full mb-4 mx-4" name='ratings' required />
                    <textarea type="text" placeholder="You Comment!" class="input input-bordered input-lg w-full h-36 mb-4 mx-4" name='description' required />
                    <input type="submit" value="Add Review" className='btn border-0 bg-cyan-500 mb-4' required />
                </form>
            </div>
        </div>
    );
};

export default AddReview;