import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
   
   Outlet,
 } from "react-router-dom";
import Footer from "./components/Footer/Footer";
 import Navbar from "./components/Navbar/Navbar";
 import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import {  useEffect } from 'react';
import { useRecoilState } from "recoil";
import { productListState } from "./state/atoms/atoms";
import CheckOut from "./pages/CheckOut/CheckOut";
   
 

const Layout = () => {
  return (
   
    <div  >
    <Navbar />
    <div  >
      <Outlet />
    </div>
    <Footer />
  </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:title",
        element: <Products />,
      },
      
      {
        path: "/product/:title",
        element: <Product  />,
      },
      {
        path: "/checkout",
        element:<CheckOut/>
        
      }
     
    ],
  },
]);

function App() {
  const [, setProducts] = useRecoilState(productListState);

  useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data)); 
    } catch (err) {
      console.log(err);
    }
  }, []);
   
  return (
 
    <div>
        <RouterProvider router={router} />
       
    </div>
    
  );
}

export default App;
 