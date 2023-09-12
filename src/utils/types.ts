 export interface ProductInterface {
    id: number;
    image: string;
    title: string;
   oldPrice: number;
   
   price: number;
   category?: string;
   description?: string;
}
 export interface ShoppingInterface {
    id: number;
    image: string;
    title: string;
   oldPrice?: number;  
   quantity?: number;
   price: number;
   category?: string;
   description?: string;
}
 
export interface UserProfile {
   name?: string;
   email?: string;
   picture?: string;
   
 }
 
