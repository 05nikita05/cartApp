import React from 'react'
import MarketPlace from './components/MarketPlace'
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    
    <div className='min-h-screen w-screen bg-slate-300'>
     <nav className='flex px-4 h-[100px] bg-gray-400 items-center justify-between'>
     <Link to='/'>
     <h1 className='text-4xl text-center uppercase underline'>shopping factory</h1>
     </Link>
     <Link to='/cart'>
<h4 className='text-2xl bg-blue-600 text-white px-4 py-2 capitalize rounded-lg '>cart</h4>
     </Link>
     </nav>
     <Routes>
          <Route path="/" element={<MarketPlace />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App