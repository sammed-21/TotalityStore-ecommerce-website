// import React, { useState,useContext } from "react";

// // import { ctx } from '../../context/index';

// import Card from "../Card/Card";
// import { data1, ListProps  } from "../../utils/types";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { productListState } from "../../state/atoms/atoms";

// const List:React.FC<ListProps> = ({catId,maxPrice,sort}) => {
//   console.log(catId);
//   console.log(maxPrice);
//   console.log(sort)
//   // const state = useContext(ctx);
//   // console.log(state?.products)
//   // console.log('hi')
//   const productState = useRecoilValue(productListState)

//   return (
//     <div className="w-full h-auto ">
//        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//         {productState?.map((item) => (
//           <Card
//   title={item.title}
//   //     key={item.id}
//   //     id={item.}
//   // image={item.image}
//   // title={item.title}
//   // oldPrice={item.oldPrice}
//   // price={item.price}
// />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default List
// import React from "react";
// import Card from "../Card/Card";
// import { ListProps } from "../../utils/types";
// import { useRecoilValue } from "recoil";
// import { productListState } from "../../state/atoms/atoms";

// const List: React.FC<ListProps> = ({ catId, maxPrice, sort }) => {
//   // Use useRecoilValue to retrieve the productListState
//   console.log(catId);
//     console.log(maxPrice);
//     console.log(sort)
//   const productState = useRecoilValue(productListState);
// console.log(productState[0]);
//   return (
//     <div className="w-full h-auto">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//         {
//           productState.length && (
//             productState?.map((item) => (
//               <Card

//                   key={item.id}
//                   id={item.id}
//               image={item.image}
//               title={item.title}
//               oldPrice={item.oldPrice}
//               price={item.price}

//               />
//             ))
//           )
//        }
//       </div>
//     </div>
//   );
// };

// export default List;

import React from "react";
import Card from "../Card/Card";
import { ProductInterface } from "../../utils/types";
import { useRecoilValue } from "recoil";
import { productListState } from "../../state/atoms/atoms";
type ListProps = {
  catId: number;
  selectedCategories: string[]; // Add the selectedCategories prop
  maxPrice: number | null;
  sort: string | null;
};

const List: React.FC<ListProps> = ({
   
  selectedCategories,
  maxPrice,
  sort,
}) => {
  const productState = useRecoilValue<ProductInterface[]>(productListState);
  console.log(selectedCategories);
  // Filter products based on category
  const filteredProducts = productState.filter((product) => {
    // If no categories are selected, include all products
    if (selectedCategories.length === 0) return true;

     
    // Check if the product's category is in the selected categories
    return selectedCategories.includes(product?.category || ""); // Use optional chaining and provide a fallback value
  });

  // Filter products based on maxPrice
  const maxPriceFilteredProducts = maxPrice
    ? filteredProducts.filter((product) => product.price <= maxPrice)
    : filteredProducts;

  // Sort products based on the selected sorting criteria
  const sortedProducts =
    sort === "asc"
      ? maxPriceFilteredProducts.sort((a, b) => a.price - b.price)
      : sort === "desc"
      ? maxPriceFilteredProducts.sort((a, b) => b.price - a.price)
      : maxPriceFilteredProducts;

  return (
    <div className="w-full h-auto">
      <div className="grid items-center justify-center  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
        {sortedProducts.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            oldPrice={item.oldPrice}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
