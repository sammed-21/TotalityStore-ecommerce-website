import React from "react";
 
import Card from "../Card/Card";
import { data } from "../../utils/types";
interface ProductName {
  featuredName: string;
}
// interface CardProps {
//     id: string,
//     img: string,
//     title: string,
//     oldPrice: number,
//     price: number

// }
// interface CardData{
//     Cards:CardProps[]
// }
const FeaturedProduct: React.FC<ProductName> = ({ featuredName }) => {

  return (
    <div className="w-full md:px-[10rem] flex flex-col px-10 gap-10 max-md:items-center">
      <div className="flex max-md:flex-col justify-between ">
        {" "}
        <h1 className="text-xl flex-1 md:text-2xl capitalize font-bold ">
          {featuredName}
        </h1>
        <p className="flex-2 w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quam
          asperiores numquam debitis officia facere a tenetur! Quia, placeat ut.
        </p>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"></div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {data.map((item) => (
          <Card
                key={item.id}
                id={item.id}
            img={item.img}
            title={item.title}
            oldPrice={item.oldPrice}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
