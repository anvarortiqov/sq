import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar'
import Mebel from './componets/Mebel'
import {CartProvider} from 'react-use-cart'
import {Route, Routes} from 'react-router-dom'
import Shop from './componets/Shop'
import Exemple from './componets/Exemple'
function App() {


  return (
    <CartProvider>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Mebel/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/exemple' element={<Exemple/>} />
     </Routes>
  
    </CartProvider>
  )
}

export default App
