import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LoginForm from './LoginForm.js'
import LoginCreate from './LoginCreate.js'

import LostPassword from './LostPassword.js'
import ResetPassword from './ResetPassword.js'

const Login = () => {
  return (
    <section>
      <Routes>
        <Route path='/' element={ <LoginForm/> }/>
        <Route path='create' element={ <LoginCreate/> }/>

        <Route path='LostPassword' element={ <LostPassword/> }/>
        <Route path='Reset' element={ <ResetPassword/> }/>
      </Routes>
    </section>
  )
}

export default Login
