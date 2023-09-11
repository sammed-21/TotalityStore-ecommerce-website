import { atom } from "recoil";
import { ProductInterface,ShoppingInterface } from "../../utils/types";
export const productListState = atom<ProductInterface[]>({
  key:'productListState',
  default: [], // Initialize with an empty array
});

export const shoppingCartState = atom<ShoppingInterface[]>({
  key:'shoppingCartState',
  default: [], // Initialize with an empty array
});