import React, { useState, useEffect } from 'react';
import './Reviews.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import Review from './Review';
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://intense-dawn-70089.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        // smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                dots: false,

            },
            400: {
                items: 1,
                dots: false,
            },
            600: {
                items: 2,
                dots: true,
            },
            700: {
                items: 2,
                dots: true,
            },
            1000: {
                items: 3,
                dots: true,

            }
        },
    }
    return (
        <div className='review-container'>
            <div className='owl-slider'>
                <div className='slider-div'>
                    <OwlCarousel className='owl-theme'
                        margin={10}
                        {...options}
                    >
                        {
                            reviews.map(review => <Review key={review._id} review={review}></Review>)
                        }
                    </OwlCarousel>
                </div>
            </div>
            <div className='text-center'>
                <Link to='/addReview' className='addReview'>Add Your Review</Link>
            </div>
        </div>
    );
};

export default Reviews;