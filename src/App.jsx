import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import ProductItem from './Components/ProductItem'

function App() {
  return (
    <>
    <Provider store={store}>
    <Header/>
    <Outlet/>
    </Provider>
    </>
  )
}

export default App