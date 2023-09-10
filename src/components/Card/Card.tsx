
import React from "react";
import { Link } from "react-router-dom";

import { CardProps } from"../../utils/types"

const Card: React.FC<CardProps> = ({ id, img, title, oldPrice, price }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="max-w-[300px] gap-10 max-md:max-w-[200px] mx-auto bg-white shadow-lg  overflow-hidden">
        <div className="  overflow-hidden ">
          <img
            src={img}
            alt="Product"
            className="object-cover w-full h-full"
          />
          
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="flex justify-between mt-2">
            <div className="text-gray-600 line-through">${oldPrice}</div>
            <div className="text-green-600">${price}</div>
          </div>
        </div>
        <button className="py-2 px-2 text-bold border-2 border-black">Add to Cart</button>
      </div>
    </Link>
  );
};

export default Card;
