 
import React  from "react";
import { Link } from "react-router-dom";

import { ProductInterface } from "../../utils/types";
import { useRecoilState, useRecoilValue } from "recoil";
import { productListState, shoppingCartState } from "../../state/atoms/atoms";
import { AiFillDelete, AiOutlineShoppingCart } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';

const Card: React.FC<ProductInterface> = ({  image, title, oldPrice, price }) => {
  // const handleClick = () => {
  //   dispatch({type:"ADD_TO_CART",payload:product})
  // }  
  const productState = useRecoilValue(productListState);
  
  // const productState: ProductInterface[] = []; // Your product data here
  
  const [cart, setCart] = useRecoilState(shoppingCartState)
  // const addToCart = (title:string) => {
   
  //  let newcart =  productState.find(product => product.title === title)
  //  setCart((prev) => (newcart ? [...prev, newcart] : prev))
  //   // setAddCartButton(true);
  //   // setCart((prevCart: any) => [...prevCart, item]);
  // };

 
  const addToCart = (title: string) => {
    const existingCartItem = cart.find((item) => item.title === title);
    toast.success('addcart',{duration: 1000,})
    if (existingCartItem) {
      // If the item already exists in the cart, update its quantity
      setCart((prevCart) =>
      prevCart.map((item) =>
      item.title === title
      ? { ...item, quantity: (item.quantity || 0) + 1 }
      : item
      )
      );
    } else {
      // If the item does not exist in the cart, add it with quantity 1
      const newcart = productState.find(
        (product) => product.title === title
        );
        
        if (newcart) {
          setCart((prev) => (newcart ? [...prev, newcart] : prev))      }
        }
      };
      const handleDeleteItem = (title: string) => {
        // Remove the item with the specified title from the shopping cart
        toast.error('delete cart.',{duration: 1000,})
        setCart((prevCart) =>
        prevCart.filter((item) => item.title !== title)
        );
        // setAddCartButton(false)
      };
      const isItemInCart = cart.some((item) => item.title === title);
   

  return (
    <div className="w-64 relative h-[400px] flex justify-between flex-col   bg-white shadow-lg overflow-hidden">
    <Link to={`/product/${title.trim()}`}>
      <div> {/* Set fixed dimensions for the card */}
        <div className="h-52 object-cover overflow-hidden">  
          <img
            src={image}
            alt="Product"
            className="object-cover w-full h-full"
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
      isItemInCart ?<button  onClick={()=>handleDeleteItem(title)} className={`  w-64 py-2 bg-red-600 text-white flex items-center   cursor-pointer justify-center`}>
              <AiFillDelete /> Remove from Cart
            </button>:
        <button   onClick={()=>addToCart(title)} className={`  w-64 py-2 bg-blue-600 text-white flex items-center gap-10 cursor-pointer justify-center`}>
          <AiOutlineShoppingCart /> Add To Cart
        </button>
        }
      </div>
      <Toaster />
            </div>
  );
};

export default Card;
