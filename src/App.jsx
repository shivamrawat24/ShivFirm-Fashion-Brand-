// import { useState } from 'react'

import './App.css'
import Cart from './Hero/Cart/Cart'
import Home from './Hero/Home/Home'
import Product from './Hero/Product/Product'
import Service from './Hero/Services/Service'
import UserLogin from './Hero/UserLogin/UserLogin'
// import Connector from './Connector'
import Pant from './spair/Footer/Pant'
import System from './spair/Header/System'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <header>
      <System/>
    </header>
    <main>
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/product' element ={<Product/>}/>
          <Route path='/service' element ={<Service/>}></Route>
          <Route path='/userlogin' element={<UserLogin/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    </main>
    <footer>
      <Pant/>
    </footer>
      
    </>
  )
}

export default App
