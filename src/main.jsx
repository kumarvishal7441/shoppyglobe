import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Notfound from './Pages/Notfound.jsx'
import ProductList from './Components/ProductList.jsx'
import Cart from './Pages/Cart.jsx'

const Routerpath = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Notfound/>,
    children:[
      {
        path:"/",
        element:<ProductList/>
      },
      {
        path:"/Cart",
        element:<Cart/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routerpath}/>
  </StrictMode>,
)
