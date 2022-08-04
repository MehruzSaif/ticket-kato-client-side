import React from 'react';
import Search from '../Searching/Search';
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
            <Search></Search>
            <Slider></Slider>
            <Business></Business>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;