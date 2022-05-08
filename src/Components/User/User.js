import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHeader from './UserHeader'

import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

const User = () => {
  return (
    <section>
        <UserHeader/>

        <Routes>
          <Route path='/' element={ <Feed/> }/>
          <Route path='posta' element={ <UserPhotoPost/> }/>
          <Route path='estatisticas' element={ <UserStats/> }/>
        </Routes>
    </section>
  )
}

export default User