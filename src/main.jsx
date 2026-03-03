import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Notfound from './Pages/Notfound.jsx'
const Home = lazy(()=>import('./Pages/Home.jsx'));
const Notfound = lazy(()=> import('./Pages/Notfound.jsx'));
const ProductDetail = lazy(()=> import ('./Pages/ProductDetail.jsx'));
const Cart = lazy(()=>import('./Pages/Cart.jsx'));
const Checkout = lazy(()=>import('./Pages/Checkout.jsx'));

const Routerpath = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Notfound/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Cart",
        element:<Cart/>
      },
      {
        path:"/Product/:id",
        element:<ProductDetail/>
      },
      {
        path:"/Checkout",
        element:<Checkout/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routerpath}/>
  </StrictMode>,
)
