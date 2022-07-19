import React from 'react';
import "./Slider.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import  img1 from'./images/1649696504.jpg';
import img2 from './images/istockphoto-135327019-612x612.jpg'
import img3 from'./images/1649696504.jpg'
import img4 from'./images/Mayanmi.jpg'
import img5 from'./images/train.jpg'

const Slider = () => {
    return (
        <div className='owl-slider'>
            <div className='slidr-dev'>
        <OwlCarousel className='owl-theme'
          items='4'
          autoplay
          dots
         loop margin={10} nav>
    <div class='item'>
        <img src={img1} alt=""  />
        <h2>Find Biman Bangladesh Airlines Ticket and Schedule on ShareTrip</h2>
    </div>
    <div class='item'>
    <img src={img2} alt=""  />
    <h2>Find Biman Bangladesh Airlines Ticket and Schedule on ShareTrip</h2>
    </div>
    <div class='item'>
    <img src={img3} alt=""  />
    <h2>Find Biman Bangladesh Airlines Ticket and Schedule on ShareTrip</h2>
    </div>
    <div class='item'>
    <img src={img4} alt=""  />
    <h2>Find Biman Bangladesh Airlines Ticket and Schedule on ShareTrip</h2>
    </div>
    <div class='item'>
    <img src={img5} alt=""  />
    <h2>Find Biman Bangladesh Airlines Ticket and Schedule on ShareTrip</h2>
    </div>
    <div class='item'>
    <img src={img1} alt=""  />
    <h2>Find Biman Bangladesh Airlines Ticket and Schedule on ShareTrip</h2>
    </div>
    <div class='item'>
    <img src={img2} alt=""  />
    <h2>Find Biman Bangladesh Airlines Ticket and Schedule on ShareTrip</h2>
    </div>
    <div class='item'>
    <img src={img3} alt=""  />
    <h2>Find Biman Bangladesh Airlines Ticket and Schedule on ShareTrip</h2>
    </div>
    <div class='item'>
    <img src={img4} alt=""  />
    <h2>Find Biman Bangladesh Airlines Ticket and Schedule on ShareTrip</h2>
    </div>
    <div class='item'>
    <img src={img5} alt=""  />
    <h2>Find Biman Bangladesh Airlines Ticket and Schedule on ShareTrip</h2>
    </div>
    <div class='item'>
    <img src={img1} alt=""  />
    <h2>Find Biman Bangladesh Airlines Ticket and Schedule on ShareTrip</h2>
    </div>
    <div class='item'>
    <img src={img2} alt=""  />
    <h2>Find Biman Bangladesh Airlines Ticket and Schedule on ShareTrip</h2>
    </div>
</OwlCarousel>
</div>
</div>
    );
};

export default Slider;