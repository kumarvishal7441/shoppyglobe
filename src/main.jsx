import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Notfound from './Pages/Notfound.jsx'
import Cart from './Pages/Cart.jsx'
import Checkout from './Pages/Checkout.jsx'
import Home from './Pages/Home.jsx'
import ProductDetail from './Pages/ProductDetail.jsx'

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
