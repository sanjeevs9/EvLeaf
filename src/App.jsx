import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Bus from './components/Bus'
import Solar from './components/Solar'
import Wind from './components/Wind'
import Test from './components/test'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <Test/>
      <Wind/>
      <Bus/>
      <Solar/>
      <Footer/>
    </>
  )
}

export default App
