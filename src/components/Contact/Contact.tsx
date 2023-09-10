// import React from 'react'
// import { AiFillInstagram } from "react-icons/ai"
// import { FaXTwitter } from "react-icons/fa6"
// import { AiFillYoutube }from 'react-icons/ai'
// import { AiFillFacebook }from 'react-icons/ai'
// const Contact = () => {
//   return (
//       <div className="bg-blue-600 h-auto py-2 justify-around text-white flex gap-4 ">
//           <span className="text-xl font-semibold">Be in Touch </span>
//           <div className="">
//               <input type="text" placeholder="enter your email" className='p-3'/>
//               <button type="button" className='w-fit p-3 bg-gray-600 text-sm '>Join Us</button>
//           </div>
//           <div className="flex">
//               <AiFillInstagram />
//               <FaXTwitter />
//               <AiFillFacebook />
//               <AiFillYoutube/>
//           </div>

//     </div>
//   )
// }

// export default Contact
import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="bg-blue-600 h-auto py-4 px-4 flex items-center justify-around text-white">
      <div className="flex flex-col">
        <span className="text-xl font-semibold mb-2">Be in Touch</span>
      </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-3 mr-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
          />
          <button
            type="button"
            className="p-3 bg-gray-600 text-sm rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
          >
            Join Us
          </button>
        </div>
      <div className="flex gap-4">
        <AiFillInstagram className="text-2xl" />
        <FaXTwitter className="text-2xl" />
        <AiFillFacebook className="text-2xl" />
        <AiFillYoutube className="text-2xl" />
      </div>
    </div>
  );
};

export default Contact;
