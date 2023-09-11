// import { StateInterface, ActionInterface, ProductInterface } from "../utils/types";

// export const initialState: StateInterface = {
//     products: [],
//     shoppingCart:[]
// }
// export const reducerFn = (state: StateInterface, action: ActionInterface):StateInterface => {
   
//     const { type, payload } = action
//       switch (type) {
//         case "ADD_PRODUCT":
          
//             return { 
//                 ...state,
//                 products:payload as ProductInterface[]
//               }
//           case "ADD_TO_CART":
//               let newCart = state.shoppingCart
//               newCart.push(payload as ProductInterface)
//               return {
//                   ...state,
//                   shoppingCart: newCart
//               }
          
//         default:return state
//    }
   
   
   
   
   
    
// }