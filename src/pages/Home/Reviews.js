import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { Link } from "react-router-dom";
import Review from "./Review";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";

const Comment = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://hidden-stream-11117.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="review-container">
      <div>
        <h2 className="text-center text-light fs-1">
          See, What Our Clients Are Saying!
        </h2>
      </div>
      {/* <div className="owl-slider">
        <div className="slider-div">
          <OwlCarousel
            className="owl-theme"
            // items='3'
            // autoplay
            // dots
            // loop margin={10} nav
            margin={10}
            {...options}
          >
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </OwlCarousel>
        </div>
      </div>
      <div className="text-center">
        <Link to="/addReview" className="addReview">
          Add Your Review
        </Link>
      </div> */}

      {/* <div class="card" style={{ width: "18rem" }}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </div> */}

      <div className="flex flex-col items-center justify-center mb-3">
        <h1 className="lg:text-4xl text-3xl font-bold text-center text-primary">
          Hear From Our Clients
        </h1>
      </div>
      {/* <div>
        <Slider {...settings}>
          {reviews
            .slice(-6)
            .reverse()
            .map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
        </Slider>
      </div> */}
      <div>
        <Carousel
          className="w-full"
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={2000}
          containerClass=""
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {reviews
            .slice(-6)
            .reverse()
            .map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
        </Carousel>
      </div>
      <div className="text-center mt-4">
        <Link to="/addReview" className="addReview">
          Add Your Review
        </Link>
      </div>
    </div>
  );
};

export default Comment;
