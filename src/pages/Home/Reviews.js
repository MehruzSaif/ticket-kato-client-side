import React from 'react';
import './Reviews.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'

const Comment = () => {
    return (
        <div className='review-container'>
            <div className='owl-slider'>
                <div className='slider-div'>
                    <OwlCarousel className='owl-theme'
                        items='3'
                        autoplay
                        dots
                        loop margin={10} nav>
                        <div className='col-sm-12 col-md-6 col-lg-4 text-center review w-100 mt-5'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img className='' src='https://i.ibb.co/jzrvcHD/8872153b230eb0da2fd6e26d1f7b1d8e.jpg' alt="" />
                                    </div>
                                    <h2 className='mt-2'>Marong lee</h2>
                                    <div className='mb-2'>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStarHalf}></FontAwesomeIcon>
                                    </div>
                                    <h5 class="card-title">This is such a very useful application! Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, harum!</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 text-center w-100 mt-5 review'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img className='' src='https://i.ibb.co/2321j2k/gettyimages-465470375.jpg' alt="" />
                                    </div>
                                    <h2 className='mt-2'>Jhoe Biden</h2>
                                    <div className='mb-2'>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
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
                                    <h2 className='mt-2'>Leo Marie</h2>
                                    <div className='mb-2'>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                    </div>
                                    <h5 class="card-title">This is such a very useful application! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quod dolor architecto quos esse praesentium!</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 text-center w-100 review mt-5'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img className='' src='https://i.ibb.co/jzrvcHD/8872153b230eb0da2fd6e26d1f7b1d8e.jpg' alt="" />
                                    </div>
                                    <h2 className='mt-2'>Marong lee</h2>
                                    <div className='mb-2'>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStarHalf}></FontAwesomeIcon>
                                    </div>
                                    <h5 class="card-title">This is such a very useful application! Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, harum!</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 text-center w-100 review mt-5'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img className='' src='https://i.ibb.co/2321j2k/gettyimages-465470375.jpg' alt="" />
                                    </div>
                                    <h2 className='mt-2'>Jhoe Biden</h2>
                                    <div className='mb-2'>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                    </div>
                                    <h5 class="card-title">Your management system is organised! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sapiente quibusdam. Maiores, itaque similique.</h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-12 col-md-6 col-lg-4 text-center w-100 review mt-5'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img className='' src='https://i.ibb.co/S56kBdG/louise-loe-profile-image.jpg' alt="" />
                                    </div>
                                    <h2 className='mt-2'>Leo Marie</h2>
                                    <div className='mb-2'>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                    </div>
                                    <h5 class="card-title">This is such a very useful application! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et quod dolor architecto quos esse praesentium!</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 text-center w-100 review mt-5'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img className='' src='https://i.ibb.co/jzrvcHD/8872153b230eb0da2fd6e26d1f7b1d8e.jpg' alt="" />
                                    </div>
                                    <h2 className='mt-2'>Marong lee</h2>
                                    <div className='mb-2'>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStarHalf}></FontAwesomeIcon>
                                    </div>
                                    <h5 class="card-title">This is such a very useful application! Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, harum!</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4 text-center w-100 review mt-5'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img className='' src='https://i.ibb.co/2321j2k/gettyimages-465470375.jpg' alt="" />
                                    </div>
                                    <h2 className='mt-2'>Jhoe Biden</h2>
                                    <div className='mb-2'>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                    </div>
                                    <h5 class="card-title">Your management system is organised! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quo sapiente quibusdam. Maiores, itaque similique.</h5>
                                </div>
                            </div>
                        </div>

                        <div className='col-sm-12 col-md-6 col-lg-4 text-center w-100 review mt-5'>
                            <div class="card reviews">
                                <div class="card-body">
                                    <div className='w-100 reviewImg'>
                                        <img className='' src='https://i.ibb.co/S56kBdG/louise-loe-profile-image.jpg' alt="" />
                                    </div>
                                    <h2 className='mt-2'>Leo Marie</h2>
                                    <div className='mb-2'>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='star' icon={faStar}></FontAwesomeIcon>
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