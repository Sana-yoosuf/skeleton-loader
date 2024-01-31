import React from "react";

const Skeleton = () => {
  return (
    <div className="border p-4 rounded shadow-2xl w-[80%] max-w-[500px]">
      <div className="relative h-60 mb-4 flex justify-center items-center  bg-gray-300 animate-pulse">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path
            fill="#777"
            d="M283,28.75c0,-0.69 -0.56,-1.25 -1.25,-1.25l-183.5,0c-0.69,0 -1.25,0.56 -1.25,1.25l0,2.5c0,0.69 0.56,1.25 1.25,1.25l183.5,0c0.69,0 1.25,-0.56 1.25,-1.25l0,-2.5Z"
          />
        </svg>
      </div>
      <div className="h-4 bg-gray-300 rounded-full mb-5"></div>
      <div className="h-3 bg-gray-300 rounded-full mb-3"></div>
      <div className="h-3 bg-gray-300 rounded-full mb-3"></div>
      
     
    </div>
  );
};

export default Skeleton;
