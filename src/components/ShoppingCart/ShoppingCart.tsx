import { Fragment } from "react";

import { shoppingCartState } from "../../state/atoms/atoms";
import toast, { Toaster } from 'react-hot-toast';

import {
  
  getTotalCartPrice,
} from "../../state/selectors/selectors";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { ShoppingInterface, UserProfile } from "../../utils/types";
  
import { AiFillDelete } from "react-icons/ai";

interface SlideOverProps {
  isOpen: boolean;
  onClose: () => void;
  userProfile: UserProfile | null;
}

const ShoppingCart: React.FC<SlideOverProps> = ({ isOpen, onClose, userProfile }) => {
  const [shoppingCart, setShoppingCart] = useRecoilState<ShoppingInterface[]>(
    shoppingCartState
  );
  // const totalItems = useRecoilValue(getNumberOfCart);
  const totalPrice = useRecoilValue(getTotalCartPrice);

  const handleDeleteItem = (title: string) => {
    // Remove the item with the specified title from the shopping cart
    if (shoppingCart.length<1) {
      onClose()
    }
    toast.error('Item removed from Cart')
    setShoppingCart((prevCart) =>
      prevCart.filter((item) => item.title !== title)
    );
  };
 
  
  const handleMultipleActions = () => {
    onClose()
    console.log('clicked')
    if (userProfile) {
      console.log(userProfile)
       
    }

 

}
  return (
    <div
      className={`relative z-10 ${isOpen ? "block" : "hidden"}`}
      aria-labelledby="slide-over-title"
      
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={onClose}
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {shoppingCart.length !== 0 ? (
                          <Fragment>
                            {shoppingCart.map((item) => (
                              <div
                                className="flex   items-center justify-between gap-10 mb-5 "
                                key={item.id}
                                
                              >
                                <Link
                                  to={`/product/${item.title.trim()}`} 
                                  className="flex w-full gap-10 justify-center items-center"
                                >
                                  <img
                                    src={item.image}
                                    className="w-20 h-24 object-cover"
                                    alt=""
                                    onClick={onClose}
                                  />
                                  <div className="justify-start flex flex-col">
                                    <h1>
                                      {item.title
                                        .substring(0, 30)
                                        .concat("...")}
                                    </h1>
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
                                    <Toaster/>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </Fragment>
                        ) : (
                          <div>Your cart is empty.</div>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${totalPrice}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <Link to="/checkout" className="mt-6">
                    <button
                      onClick={handleMultipleActions }
                       
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                    >
                      Checkout
                     
                    </button>
                  </Link>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <Link to={"/"}>
                        <button
                          type="button"
                          className="font-medium text-blue-600 hover:text-blue-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </Link>
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
