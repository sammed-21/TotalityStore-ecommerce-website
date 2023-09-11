import { selector } from "recoil";

import { productListState, shoppingCartState } from "../atoms/atoms";
import { ProductInterface } from "../../utils/types";

export const getAllProducts = selector({
    key: "productListStateAll",
    get: ({ get }) => {
        const productList = get(productListState);
        return productList;
    }
})
export const productsByCategorySelector = selector({
    key: 'productsByCategorySelector',
    get: ({ get }) => {
        const productList = get(productListState);

        const selectedCategory = "men's clothing";

        const filterProducts = productList.filter(product => product.category === selectedCategory);
        return filterProducts;
    }
})

export const getNumberOfCart = selector({
    key: 'getNumberOfCart',
    get: ({ get }) => {
        const CartList = get(shoppingCartState)
        return CartList.length;
        
    }
})

export const getTotalCartPrice = selector({
    key: 'getTotalCartPrice',
    get: ({ get }) => {
        const price = get(shoppingCartState)
        let initialValue = 0;
        const totalPrice = price.reduce((accumulator, currentValue) => accumulator + (currentValue.price * (currentValue.quantity || 1)), initialValue);
        return totalPrice;
    
    }
})
 
 