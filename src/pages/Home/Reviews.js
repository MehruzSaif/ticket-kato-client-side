import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { Link } from "react-router-dom";
import Review from "./Review";

const Comment = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://intense-dawn-70089.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

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
            <p className="text-base leading-6 mt-4 text-center text-secondary 2xl:w-2/5 ">
              Here is what are our clients have to say about our product's and
              service
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews
              .slice(-6)
              .reverse()
              .map((review) => (
                <Review key={review._id} review={review}></Review>
              ))}
          </div>
          <div className="text-center">
            <Link to="/addReview" className="addReview">
              Add Your Review
            </Link>
          </div>
        </div>
  );
};

export default Comment;
