import React from 'react';
import Footer from '../shared/Footer';
import Banner from './Banner';
import Business from './Business';
import Reviews from './Reviews';
import Slider from './Slider';
import MessengerCustomerChat from "react-messenger-customer-chat";


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Slider></Slider>
        <MessengerCustomerChat
          pageId="104716675672600"
          appId="2208598849306516"
        />
        <Business></Business>
        <Reviews></Reviews>       
        <Footer></Footer>
      </div>
    );
};

export default Home;