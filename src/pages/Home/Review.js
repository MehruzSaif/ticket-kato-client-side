import React from 'react';

const Review = ({ review }) => {
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{review?.comment}</h5>
                    <p class="card-text">{review?.ratings}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;