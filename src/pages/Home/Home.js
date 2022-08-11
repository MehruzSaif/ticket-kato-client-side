import React from "react";
import Search from "../Searching/Search";
import Footer from "../shared/Footer";
import Banner from "./Banner";
import Business from "./Business";
import Reviews from "./Reviews";
import Slider from "./Slider";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Offer from "./Offer";
import { BackTop } from "antd";
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Search></Search>
      <Offer></Offer>
      <MessengerCustomerChat
        pageId="104716675672600"
        appId="2208598849306516"
      />
      <Business></Business>
      <Slider></Slider>
      <Reviews></Reviews>
      <BackTop />
      <strong className="site-back-top-basic"> </strong>
      <Footer></Footer>
    </div>
  );
};

export default Home;
