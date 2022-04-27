import React from 'react'
import UserPost from './endpoints/UserPost.js'
import TokenPost from './endpoints/TokenPost.js'

import PhotoPost from './endpoints/PhotoPost.js'
import PhotoGet from './endpoints/PhotoGet.js'

const Api = () => {
  return (
    <div>
      <h1>Teste de api</h1>
      <UserPost/>

      <h2>Token post</h2>
      <TokenPost/>

      <h3>Photo post</h3>
      <PhotoPost/>

      <h1>PhotoGet</h1>
      <PhotoGet/>
    </div>
  )
}

export default Api
