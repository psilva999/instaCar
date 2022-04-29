import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import LoginForm from './LoginForm.js'
import LoginCreate from './LoginCreate.js'

import LostPassword from './LostPassword.js'
import ResetPassword from './ResetPassword.js'

import UserContext from '../../UserContext.js'

const Login = () => {
  const { login } = React.useContext(UserContext) 

  if(login === true) return <Navigate to='/conta'/>

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
