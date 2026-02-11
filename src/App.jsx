import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Services } from './pages/Services'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu'

function App() {


  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
