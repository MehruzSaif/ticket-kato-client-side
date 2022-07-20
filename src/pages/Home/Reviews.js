import React, { useState, useEffect } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='p-5 text-center bg-secondary'>
            {/* <h1 className='text-primary text-center mb-5'>Customer Review!</h1> */}
            <div className='row gy-3 my-5'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
            <button type="button" class="btn btn-warning">Add Your Review</button>
        </div>
    );
};

export default Reviews;