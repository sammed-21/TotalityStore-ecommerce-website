 
import React from "react";
import { useRecoilValue } from 'recoil';
import { productsByCategorySelector } from '../../state/selectors/selectors'; // Import your selector

import Card from "../Card/Card";
 
interface ProductName {
  featuredName: string;
}

const FeaturedProduct: React.FC<ProductName> = ({ featuredName }) => {
  // Use useRecoilValue to get the filtered products based on the selector
  const filteredProducts = useRecoilValue(productsByCategorySelector);

  return (
    <div className="w-full md:px-[10rem] flex flex-col px-10 gap-10 max-md:items-center">
      <div className="flex max-md:flex-col justify-between ">
        <h1 className="text-xl flex-1 md:text-2xl capitalize font-bold">
          {featuredName}
        </h1>
        <p className="flex-2 w-1/2 max-sm:w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quam
          asperiores numquam debitis officia facere a tenetur! Quia, placeat ut.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {filteredProducts.map((product) => (
          <Card
            key={product.id} // Use product.id as the key
            id={product.id}
            image={product.image}
            title={product.title}
            oldPrice={product.oldPrice}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
