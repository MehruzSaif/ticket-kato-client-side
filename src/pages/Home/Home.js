import React from 'react';
import Footer from '../shared/Footer';
import Banner from './Banner';
import Business from './Business';
import Contact from './Contact';
import Reviews from './Reviews';
import Slider from './Slider';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <Business></Business>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;