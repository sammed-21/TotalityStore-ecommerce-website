import React, { useEffect, useState } from "react";
import { ProductInterface } from "../../utils/types";
import { AiFillDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { productListState, shoppingCartState } from "../../state/atoms/atoms";


const ProductCard: React.FC = () => {
  const { title } = useParams<{ title: string }>(); // Get the title from the URL
   const productList = useRecoilValue<ProductInterface[]>(productListState);
 
  const selectedItem = productList.find((item) => item.title.trim() === title);

  const [quntity, setQunitiy] = useState(1);
  const [cart, setCart] = useRecoilState(shoppingCartState);
  
  const [disableAddCart, setDisableAddCart] = useState(false)
  if (cart.length > 0 && cart.find(i => i.title === title)){
    setDisableAddCart(prev =>!prev);
    console.log(disableAddCart)
  }
  const handleQuantityChange = (title: string, newQuantity: number) => {
    let newQuantitys = newQuantity < 0 ? 1 : newQuantity;
    setQunitiy(newQuantity);
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.title === title ? { ...item, quantity: newQuantitys } : item
      )
    );
  };

  const addToCart = (title: string) => {
    const existingCartItem = cart.find((item) => item.title === title);
  
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
      const newcart = productList.find(
        (product) => product.title === title
      );
  
      if (newcart) {
        setCart((prev) => (newcart ? [...prev, newcart] : prev))      }
    }
  };
  useEffect(() => {
    
  })

 
  return (
    <div className="w-full flex p-5 max-md:flex-col gap-12">
      {/* left */}
      {selectedItem && (
        <>
          <div className="flex-1 items-center justify-center flex gap-10">
            <div className="flex-5    min-h-52">
              <img
                src={selectedItem.image}
                // src={images[selectImg]}
                height={50}
                className="w-full max-h-[300px] items-center  object-cover"
                alt=""
              />
            </div>
          </div>
          {/* right */}
          <div className="flex-1 flex flex-col gap-2">
            <h1 className="font-bold text-2xl">{selectedItem.title}</h1>
            <span className="text-blue-500  text-xl font-bold ">
              ${selectedItem.price}
            </span>
            <p className=" font-normal text-justify">
              {selectedItem.description}
            </p>

            <div className="flex gap-4 cursor-pointer items-center">
              <button
                type="button"
                className="px-4 py-2 bg-slate-400 "
                onClick={() =>
                  handleQuantityChange(
                    selectedItem.title,
                    quntity < 2 ? 1 : quntity - 1
                  )
                }
              >
                -
              </button>
              <span>{quntity}</span>
              <button
                className="px-4 py-2 bg-slate-400 "
                onClick={() =>
                  handleQuantityChange(selectedItem.title, quntity + 1)
                }
              >
                +
              </button>
            </div>
          
        <button  disabled={disableAddCart}  onClick={()=>addToCart(selectedItem.title)} className={`  w-64 py-2   bg-blue-500 text-white flex items-center gap-10 cursor-pointer justify-center`}>
          <AiOutlineShoppingCart /> Add To Cart
        </button>
        
                 
            <div className="flex flex-col gap-3 text-gray-400 mt-8">
              <span>Vendor: Sam</span>
              <span>Product Type : T-shirt</span>
              <span>Tag: T-shirt , Women ,Top</span>
              <hr />
              <div>
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
