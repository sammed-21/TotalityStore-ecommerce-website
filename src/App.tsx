 
import './App.css'
import { createBrowserRouter,RouterProvider,Route ,Outlet} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"


const Layout = () => {
  return (
    <div className="">
    
      <Navbar />
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/products/:id',
        element:<Products/>
      },
      {
        path: '/product/:id',
        element:<Product/>
      },
    ]
  },
 
])

function App() {
 
  
    return (
      <div >
        <RouterProvider router={router}/>
      </div>
    )
 
}

export default App
