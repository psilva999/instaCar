import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './Components/Header.js'
import Home from './Components/Home.js'

import Login from './Components/Login/Login.js'
import Footer from './Components/Footer.js'

function App() { 
  return (
    <div> 
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/login/*' element={ <Login/> }></Route>
        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
    ) 
  }

export default App
