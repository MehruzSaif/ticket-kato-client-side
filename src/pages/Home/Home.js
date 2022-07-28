import React from 'react';
import Footer from '../shared/Footer';
import Banner from './Banner';
import Business from './Business';
import Reviews from './Reviews';
import Slider from './Slider';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <Business></Business>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;