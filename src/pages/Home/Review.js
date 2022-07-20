import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 text-center'>
            <div class="card">
                <div class="card-body">
                    <div className='w-100'>
                        <img className='reviewImg' src={review.photoUrl} alt="" />
                    </div>
                    <h2 className='mt-2'>{review.name}</h2>
                    <h5 class="card-title">{review?.comment}</h5>
                    <p class="card-text">{review?.ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;