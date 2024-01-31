import React from "react";
import Apple from '../assets/img/apple.avif'

const Card = () => {
  return (
    <div className="border p-4 rounded shadow-2xl w-[80%] max-w-[500px]">
      <div className="relative h-60 mb-4">
        <img className="absolute w-full h-full object-cover rounded" src={Apple} />
      </div>
      <div>
        <p className="font-semibold">Apple Headphone</p>
        <p className="text-sm pb-2">Price: $254</p>
        <p className="font-thin">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          hic, similique est laudantium natus accusamus sed optio sunt porro ad?
        </p>
      </div>
    </div>
  );
};

export default Card;
