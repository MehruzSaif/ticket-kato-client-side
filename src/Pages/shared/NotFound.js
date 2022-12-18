import React from "react";
import Lottie from "react-lottie";
import notFound from "../../assests/404.json";

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie
        className="mx-3 mb-3"
        options={defaultOptions}
        height={700}
        width={700}
      />
      <div className="flex justify-center">
        <Link
          to="/"
          className="px-5 py-3 w-1/5 text-center rounded-full bg-primary text-white font-semibold"
        >
          Back To Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
