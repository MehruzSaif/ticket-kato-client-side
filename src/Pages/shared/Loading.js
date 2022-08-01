import React from 'react';
import { Circles } from "react-loader-spinner";

const Loading = () => {
   return (
     <div className="my-5 d-flex justify-content-center align-items-center ">
       <Circles
         className="d-flex justify-content-center align-items-center"
         color="#00BFFF"
         height={180}
         width={180}
       />
     </div>
   );
};

export default Loading;