import React from 'react';
// import { Circles } from "react-loader-spinner"; 
import Lottie from "react-lottie";
import loader from "../../assests/loader.json"


const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
   return (
     <div className="flex items-center justify-center ">
       {/* <Circles
         className="d-flex my-5 justify-content-center align-items-center"
         color="#00BFFF"
         height={180}
         width={180}
       /> */}
       <Lottie
         className="flex items-center justify-center"
         options={defaultOptions}
         height={300}
         width={300}
       />
     </div>
   );
};

export default Loading;