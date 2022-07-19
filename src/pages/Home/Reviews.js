import React, { useState, useEffect } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState()
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='text-danger text-center'>Customer Review!</h1>
            {/* {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            } */}
        </div>
    );
};

export default Reviews;