import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './Components/Header.js'
import Home from './Components/Home.js'

import Login from './Components/Login/Login.js'
import Footer from './Components/Footer.js'

import { UserStorage } from './UserContext.js'
import User from './Components/User/User.js'
import ProtectedRoute from './Components/Helper/ProtectedRoute'

function App() { 
  return (
    <div> 
      <BrowserRouter>
        <UserStorage>
          <Header/>

          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='login/*' element={ <Login/> }></Route>


            <Route path='conta/*' 
            element={ 
              <ProtectedRoute>
                <User/>
              </ProtectedRoute> }/>
          </Routes>
          <Footer/>
          
        </UserStorage>
      </BrowserRouter>
    </div>
    ) 
  }

export default App
