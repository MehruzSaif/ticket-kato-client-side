import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footers'>
            <div className='bg-dark text-white pt-5 pb-4'>
                <div className='container text-center text-md-left'>
                    <div className='row text-center text-md-left'>
                        <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                            <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Ticket Kato</h5>
                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum sit amet,ital consectetuer lorem ipsum dolor sit amet adipisicing elit</p>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                            <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Products</h5>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>The Providers</a>
                            </p>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>Creativity</a>
                            </p>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>Source Files</a>
                            </p>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>Bootstrap 5 alpha</a>
                            </p>
                        </div>

                        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                            <h5 className='text-text-uppercase mb-4 font-weight-bold text-warning '>Useful Links</h5>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>Your Account</a>
                            </p>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>Become an Affiliates</a>
                            </p>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>Shipping Rates</a>
                            </p>
                            <p>
                                <a href='#' className='text-white text-decoration-none'>Help</a>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
                            <h5 className='text-upperacse mb-4 font-weight-bold text-warning'>Contact</h5>
                            <p>
                                <i className='fas fa-home mr-3'></i>New York, NY 2333, US
                            </p>
                            <p>
                                <i className='fas fa-home mr-3'></i>danielnwz420@gmail.com
                            </p>
                            <p>
                                <i className='fas fa-home mr-3'></i>01785989199
                            </p>
                            <p>
                                <i className='fas fa-home mr-3'></i>08163320
                            </p>
                        </div>

                        <hr className='mb-4'/>
                        
                        <div className='row align-items-center'>
                            <div className='col-md-6 col-lg-12'>
                                <p>Copyright  Ⓒ 2022 all right reserved by :
                                <a href='#'  className='text-decoration-none'>
                                    <strong className='text-warning text-decoration-none'>  Ticket Kato</strong>
                                </a>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;