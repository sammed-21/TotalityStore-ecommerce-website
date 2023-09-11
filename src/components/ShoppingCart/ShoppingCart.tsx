import React,{Fragment} from "react";
// import { shoppingcart, ProductInterface } from '../../utils/types';
import { shoppingCartState, } from "../../state/atoms/atoms";
import { AiFillDelete } from "react-icons/ai";
import { getTotalCartPrice }from '../../state/selectors/selectors'
  import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { ShoppingInterface } from "../../utils/types";
const ShoppingCart = () => {
  // const shoppingCart = useRecoilValue(shoppingCartState)
  // const totalPrice = useRecoilValue(getTotalCartPrice)
  // const handleDeleteItem = (title: string) => {
    
  //   useRecoilState(shoppingCartState)
  //   console.log(title)
  // };
  const [shoppingCart, setShoppingCart] = useRecoilState<ShoppingInterface[]>(
    shoppingCartState
  );
  const totalPrice = useRecoilValue(getTotalCartPrice);

  const handleDeleteItem = (title: string) => {
    // Remove the item with the specified title from the shopping cart
    setShoppingCart((prevCart) =>
      prevCart.filter((item) => item.title !== title)
    );
  };

  return (
    
    <div className="fixed right-5 top-20 overflow-y-auto h-[80vh] shadow-xl z-20 bg-white p-5">
      <h1 className="mb-5 text-gray-500 text-xl">Products in your cart</h1>
      {shoppingCart.length !== 0 ? (
        <Fragment>
          {shoppingCart.map((item) => (
            <div className="flex   items-center justify-between gap-10 mb-5 " key={item.id}>
                <Link to={`/product/${item.title.trim()}`} className="flex w-full gap-10 justify-center items-center" >
                <img
                  src={item.image}
                  className="w-20 h-24 object-cover"
                  alt=""
                />
                <div className="justify-start flex flex-col">
                  <h1>{item.title.substring(0, 30).concat("...")}</h1>
                  <p className="text-gray-500 mb-4 text-md"></p>
                  <div className="text-blue-500">
                    ${item.price}
                  </div>
                  <h3>Quantity:{item.quantity || 1}</h3>
                </div>
                  </Link>
              <div>
                <button
                
                  onClick={() => handleDeleteItem(item.title)}
                >

                  <AiFillDelete
                    size={20}
                    className="text-red-500"
                    />
                    </button>
                </div>
              </div>
          ))}
        </Fragment>
 /* {shoppingCart.length !==0?(
        <Fragment>
          {shoppingCart.map((item) => (
          <Link to={`/product/${item.title.trim()}`} key={item.id}>
            <div className="flex items-center justify-between gap-10 mb-5 " >
              <img
                src={item.image}
                className="w-20 h-24 object-cover"
                alt=""
                />
              <div className="justify-start flex flex-col">
                <h1>{item.title.substring(0,30).concat('...')}</h1>
                <p className="text-gray-500 mb-4 text-md">
                 </p>
                <div className="text-blue-500">
                  1 x ${item.price}
                </div>
              </div>
              <div className="">

              <AiFillDelete
                size={20}
                className="text-red-500"
                onClick = {()=>handleDeleteItem(item.title)}
                 />
                </div>
            </div>
          </Link>
          ))}
        </Fragment> */
      ) : (
        <div>Your cart is empty.</div>
      )}

    <div className="flex justify-between font-medium  mb-3">
      <span>SUBTOTAL</span>
        <span>(${totalPrice})</span>
      </div>
      {/* {state.shoppingCart.length &&  */}
    <button  className="w-30 p-3 bg-blue-600 text-white flex items-center gap-10 cursor-pointer justify-center">PROCEED TO CHECKOUT</button>
      {/* } */}
    <span className="text-red-600 font-sm" >
      Reset Cart
    </span>
  </div>
  );
};

export default ShoppingCart;
