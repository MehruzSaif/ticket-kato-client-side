import React from 'react';
import './Reviews.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import arnob from '../Home/images/arnob2.jfif'
import mehedi from '../Home/images/mehedi.jpg'
import daniel from '../Home/images/daniel.jfif'
import sajib from '../Home/images/sojib.jfif'
import shahria from '../Home/images/shahria.jpg'
import nargis from '../Home/images/nargis.jpg'
const Comment = () => {
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
                        // items='3'
                        // autoplay
                        // dots
                        // loop margin={10} nav
                        margin={10}
                        {...options}
                    >
                        <div className='col-sm-12 col-md-6 col-lg-4 text-center review w-100 mt-5'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img className='' src='https://i.ibb.co/jzrvcHD/8872153b230eb0da2fd6e26d1f7b1d8e.jpg' alt="" />
                                    </div>
                                    <h2 className='mt-2 name'>Marong lee</h2>
                                    <div className='mb-2'>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStarHalfAlt className='star'></FaStarHalfAlt>
                                    </div>
                                    <h5 class="card-title">This is such a very useful application! Lorem ipsum dolor sit.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, harum!</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 text-center w-100 mt-5 review'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='reviewImg'>
                                        <img className='' src='https://i.ibb.co/2321j2k/gettyimages-465470375.jpg' alt="" />
                                    </div>
                                    <h2 className='mt-2 name'>Jhoe Biden</h2>
                                    <div className='mb-2'>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                    </div>
                                    <h5 class="card-title">Your management system is organised! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sapiente quibusdam. Maiores, itaque similique.</h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-12 col-md-6 col-lg-4 text-center w-100 mt-5 review'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img className='' src='https://i.ibb.co/S56kBdG/louise-loe-profile-image.jpg' alt="" />
                                    </div>
                                    <h2 className='mt-2 name'>Leo Marie</h2>
                                    <div className='mb-2'>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                    </div>
                                    <h5 class="card-title">This is such a very useful application! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quod dolor architecto quos esse praesentium!</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 text-center w-100 review mt-5'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img className='' src={arnob} alt="" />
                                    </div>
                                    <h2 className='mt-2 name'>Mehruz Saif</h2>
                                    <div className='mb-2'>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                    </div>
                                    <h5 class="card-title">This is such a very useful application! Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, harum!</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 text-center w-100 review mt-5'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img className='' src={mehedi} alt="" />
                                    </div>
                                    <h2 className='mt-2 name'>Mehedi Hassan</h2>
                                    <div className='mb-2'>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                    </div>
                                    <h5 class="card-title">Your management system is organised! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sapiente quibusdam. Maiores, itaque similique.</h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-12 col-md-6 col-lg-4 text-center w-100 review mt-5'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img className='' src={shahria} alt="" />
                                    </div>
                                    <h2 className='mt-2 name'>MH Shaharia</h2>
                                    <div className='mb-2'>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                    </div>
                                    <h5 class="card-title">This is such a very useful application! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quod dolor architecto quos esse praesentium!</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 text-center w-100 review mt-5'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img className='' src={daniel} alt="" />
                                    </div>
                                    <h2 className='mt-2 name'>Daniel Newaz</h2>
                                    <div className='mb-2'>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStarHalfAlt className='star'></FaStarHalfAlt>
                                    </div>
                                    <h5 class="card-title">This is such a very useful application! Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, harum!</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 text-center w-100 review mt-5'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img className='' src={sajib} alt="" />
                                    </div>
                                    <h2 className='mt-2 name'>Hadiuzzaman</h2>
                                    <div className='mb-2'>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                    </div>
                                    <h5 class="card-title">Your management system is organised! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sapiente quibusdam. Maiores, itaque similique.</h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-12 col-md-6 col-lg-4 text-center w-100 review mt-5'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img src={nargis} alt="" />
                                    </div>
                                    <h2 className='mt-2 name'>Farhana Riya</h2>
                                    <div className='mb-2'>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                        <FaStar className='star'></FaStar>
                                    </div>
                                    <h5 class="card-title">This is such a very useful application! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quod dolor architecto quos esse praesentium!</h5>
                                </div>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>
            </div>
            <div className='text-center'>
                <button className='addReview'>Add Your Review</button>
            </div>
        </div>
    );
};

export default Comment;