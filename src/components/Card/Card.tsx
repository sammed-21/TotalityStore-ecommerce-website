
// import React from "react";
// import { Link } from "react-router-dom";

// import { ProductInterface } from"../../utils/types"

// const Card: React.FC<ProductInterface> = ({ id, image, title, oldPrice, price }) => {
//   return (
//     <Link to={`/product/${id}`}>
//       <div className="max-w-[300px] gap-10 max-md:max-w-[200px] mx-auto bg-white shadow-lg  overflow-hidden">
//         <div className="max-h-40 object-cover  overflow-hidden ">
//           <img
//             src={image}
             
//             alt="Product"
//             className="object-cover w-full h-full"
//           />
          
//         </div>
//         <div className="p-4">
//           <h2 className="text-xl font-semibold">{title}</h2>
//           <div className="flex justify-between mt-2">
//             <div className="text-gray-600 line-through">${oldPrice}</div>
//             <div className="text-green-600">${price}</div>
//           </div>
//         </div><div className="flex-end items-end justify-end w-full">
          
//         <button className="py-2 px-2 text-bold border-2  border-black">Add to Cart</button>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Card;
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ProductInterface } from "../../utils/types";
import { useRecoilState, useRecoilValue } from "recoil";
import { productListState, shoppingCartState } from "../../state/atoms/atoms";
import { AiFillDelete, AiOutlineShoppingCart } from "react-icons/ai";
 
const Card: React.FC<ProductInterface> = ({  image, title, oldPrice, price }) => {
  // const handleClick = () => {
  //   dispatch({type:"ADD_TO_CART",payload:product})
  // }  
  const productState = useRecoilValue(productListState);
  
  // const productState: ProductInterface[] = []; // Your product data here
  const [addCartButton, setAddCartButton] = useState(false);
  const [cart, setCart] = useRecoilState(shoppingCartState)
  const addToCart = (title:string) => {
    console.log(title)
   let newcart =  productState.find(product => product.title === title)
   setCart((prev) => (newcart ? [...prev, newcart] : prev))
    // setAddCartButton(true);
    // setCart((prevCart: any) => [...prevCart, item]);
  };
  const handleDeleteItem = (title: string) => {
    // Remove the item with the specified title from the shopping cart
    setCart((prevCart) =>
      prevCart.filter((item) => item.title !== title)
    );
    // setAddCartButton(false)
  };
  if (cart.find((item) => item.title === title)) {
    setAddCartButton(true);
  }
  return (
    <div className="w-64 relative h-[400px] flex justify-between flex-col   bg-white shadow-lg overflow-hidden">
    <Link to={`/product/${title.trim()}`}>
      <div> {/* Set fixed dimensions for the card */}
        <div className="h-52 object-center overflow-hidden">  
          <img
            src={image}
            alt="Product"
            className="object-center w-full h-full"
            />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold">{title.substring(0,40)}</h2>
          <div className="flex justify-between mt-2">
            <div className="text-gray-600 line-through">${oldPrice|| Number(price+40)}</div>
            <div className="text-green-600">${price}</div>
          </div>
        </div>
      </div>
      </Link>
      <div className="w-full ">

    {
      addCartButton ?<button  onClick={()=>handleDeleteItem(title)} className={`  w-64 py-2 bg-red-600 text-white flex items-center   cursor-pointer justify-center`}>
              <AiFillDelete /> Remove from Cart
            </button>:
        <button   onClick={()=>addToCart(title)} className={`  w-64 py-2 bg-blue-600 text-white flex items-center gap-10 cursor-pointer justify-center`}>
          <AiOutlineShoppingCart /> Add To Cart
        </button>
        }
        </div>
            </div>
  );
};

export default Card;
