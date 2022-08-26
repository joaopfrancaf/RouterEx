import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Pricing from './page/pricing/Pricing'

function App() {

  return (
    <>
      <Navbar/>
      <div className='container'>
        <Pricing/>
      </div>
    </>
  )
}

export default App