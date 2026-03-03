import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Notfound from './Pages/Notfound.jsx'
import ProductItem from './Components/ProductItem.jsx'
import ProductList from './Components/ProductList.jsx'

const Routerpath = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Notfound/>,
    children:[
      {
        path:"/",
        element:<ProductList/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routerpath}/>
  </StrictMode>,
)
