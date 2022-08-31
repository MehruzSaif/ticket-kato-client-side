import React, { useState } from 'react';
import {
  ChatAlt2Icon,
  PhoneIcon,
  MailIcon,
  HomeIcon,
  ClockIcon,
} from "@heroicons/react/solid";
import { Link } from "react-router-dom";



const Faq = () => {
   const [isFAQ, setIsFAQ] = useState(true)

  const faq = [
    {
      number:1,
      question:"Where is Your Company Located?",
      answer:"Our company is located in Dhanmondi, Road No. 15, Dhaka."
    },
    {
      number:2,
      question:"Do you have any refund policy?",
      answer:"Yes, we do have a refund policy with some condition. You can check our refund policy in the refund policy section."
    },
    {
      number:3,
      question:"Where is the payment system?",
      answer:"Our company offers international card payment system as well as local payment systems like Bkash, Nagad etc."
    },
    {
      number:4,
      question:"Do you guys offer plane tickets?",
      answer:"Our company is working on this service. Customers can book plane tickets too in near future."
    },
  ]
   return (
     <div className="w-full bg-gray-50">
       {/* :HEADER */}
       <div className="w-full pt-2 bg-indigo-400 text-center text-white">
         {/* ::Brand */}
         <h2 className="p-5 text-5xl sm:text-6xl font-semibold tracking-wider text-red-500">
           Want To Know More About Us?
         </h2>
         {/* ::Menu */}
         <div className="mx-auto p-2 max-w-4xl w-full flex text-lg font-semibold space-x-2">
           <span className="w-1/2 pb-2 px-5 bg-gray-900 bg-opacity-70 hover:bg-opacity-80">
             <button
               className={`my-1 p-1 w-full ${
                 isFAQ && "border-b-2 border-orange-600 text-white"
               } `}
               onClick={() => setIsFAQ(true)}
             >
               FAQ
             </button>
           </span>
           <span className="w-1/2 pb-2 px-5 bg-gray-900 bg-opacity-70 hover:bg-opacity-80">
             <button
               className={`my-1 p-1 w-full ${
                 !isFAQ && "border-b-2 border-orange-600 text-white"
               } `}
               onClick={() => setIsFAQ(false)}
             >
               Contact
             </button>
           </span>
         </div>
         {/* ::Bottom separation */}
         <div className="mt-5 mx-auto p-5 w-5/6 bg-gray-50">
           <span className="block w-full h-3 bg-red-500" />
         </div>
       </div>

       {/* :CONTAINER DISPLAY */}
       <div className="w-full h-full text-gray-700">
         {isFAQ ? (
           <>
             {/* ::FAQ Page */}
             <div className="mx-auto max-w-8xl">
               {/* :::Title */}
               <h2 className="mx-auto py-4 w-5/6 text-center text-3xl sm:text-4xl lg:text-5xl font-semibold">
                 FAQ
               </h2>
               {/* :::Accordion Panel */}
               <dl className="my-5 sm:my-10 p-3 w-full grid grid-cols-2 gap-10">
                 {faq.map((faq) => (
                   <div
                     key={faq.number}
                     className="col-span-2 lg:col-span-1 flex flex-col"
                   >
                     <dt className="p-2 inline-flex items-center border-l-4 border-red-500 bg-gray-200">
                       <span className="px-2 text-4xl text-red-500">Q.</span>
                       <span className="px-2 text-lg font-semibold">
                         {faq.question}
                       </span>
                     </dt>
                     <dd className="p-2 inline-flex items-center border-l-4 border-gray-400 bg-white">
                       <span className="px-2 text-4xl text-gray-400">A.</span>
                       <span className="px-2 text-sm">{faq.answer}</span>
                     </dd>
                   </div>
                 ))}
               </dl>
             </div>
           </>
         ) : (
           <>
             {/* ::CONTACT Page */}
             <div className="mx-auto max-w-6xl">
               {/* :::Title */}
               <h2 className="mx-auto py-4 w-5/6 flex flex-col items-center text-center">
                 <span className="text-base sm:text-2xl lg:text-3xl text-red-600 font-semibold">
                   You haven't found what you looking for?
                 </span>
                 <span className="text-2xl sm:text-4xl lg:text-5xl font-semibold">
                   Don't worry ! Contact Us.
                 </span>
               </h2>
               {/* :::Contact Informations */}
               <div className="my-5 sm:my-10 p-3">
                 {/* Chat / Email / Phone */}
                 <div className="mx-auto max-w-3xl w-full flex justify-evenly items-center">
                   <Link
                     to="/contactus"
                     className="group mx-1 p-5 w-32 sm:w-48 inline-flex flex-col items-center border-2 border-red-500 rounded-xl hover:bg-red-500"
                   >
                     <span className="text-2xl font-semibold group-hover:text-white">
                       Chat
                     </span>
                     <ChatAlt2Icon className="text-red-500 w-10 sm:w-20 group-hover:text-white" />
                   </Link>
                   <a
                     href="mailto:mehedihypernova@gmail.com"
                     target="_blank"
                     className="group mx-1 p-5 w-32 sm:w-48 inline-flex flex-col items-center border-2 border-red-500 rounded-xl hover:bg-red-500"
                   >
                     <span className="text-2xl font-semibold group-hover:text-white">
                       Email
                     </span>
                     <MailIcon className="text-red-500 w-10 sm:w-20 group-hover:text-white" />
                   </a>
                   <a href="tel:+8801869232760" className="group mx-1 p-5 w-32 sm:w-48 inline-flex flex-col items-center border-2 border-red-500 rounded-xl hover:bg-red-500">
                     <span className="text-2xl font-semibold group-hover:text-white">
                       Call
                     </span>
                     <PhoneIcon className="text-red-500 w-10 sm:w-20 group-hover:text-white" />
                   </a>
                 </div>
                 {/* Address & Opening hours */}
                 <div className="mt-20 mx-auto p-5 w-full max-w-3xl flex flex-wrap justify-around border-2 border-gray-500 rounded-2xl">
                   <div className="my-2 w-full sm:w-1/2">
                     <h4 className="inline-flex items-center text-xl font-bold">
                       <HomeIcon className="mr-2 w-5 h-5" /> Office Address
                     </h4>
                     <p className="my-2">
                       Dhanmondi <br /> Road No. 15, Opposite of Noir, Dhaka
                     </p>
                     <span className="inline-flex items-center">
                       <img
                         src="https://fancytailwind.com/static/google-maps-1c2415cebe5a6bf92b994b100b6fc66e.png"
                         alt=""
                         className="w-12 h-12"
                       />
                       <a
                         href="#link"
                         className="no-underline hover:underline hover:text-red-500"
                       >
                         Show me on the map
                       </a>
                     </span>
                   </div>
                   <div className="my-2 w-full sm:w-1/2">
                     <h4 className="flex items-center text-xl font-bold">
                       <ClockIcon className="mr-2 w-5 h-5" /> Opening Hours
                     </h4>
                     <p className="my-2 space-y-2 flex flex-col">
                       <span>
                         <b>&gt; Mon - Fri:</b> 08:00 - 19:00
                       </span>
                       <span>
                         <b>&gt; Sat:</b> 08:00 - 12:30
                       </span>
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </>
         )}
       </div>
     </div>
   );
};

export default Faq;