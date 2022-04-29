import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './Components/Header.js'
import Home from './Components/Home.js'

import Login from './Components/Login/Login.js'
import Footer from './Components/Footer.js'
import { UserStorage } from './UserContext.js'

function App() { 
  return (
    <div> 
      <BrowserRouter>
        <UserStorage>
          <Header/>

          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/login/*' element={ <Login/> }></Route>
          </Routes>
          <Footer/>
          
        </UserStorage>
      </BrowserRouter>
    </div>
    ) 
  }

export default App
