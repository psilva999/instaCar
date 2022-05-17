import React, { useState } from 'react'
import { COMMENT_POST } from '../../Api'
import Error from '../Helper/Error'

import { ReactComponent as Enviar } from '../../Assets/car.svg'
import useFetch from '../../Hooks/useFetch'

const PhotoCommentsForm = ({ id, setComments }) => {
const [comment, setComment] = useState(''),
        { request, error } = useFetch()
  
  async function handleSubmit(e) {
    e.preventDefault()

    const {url, options} = COMMENT_POST(id, { comment }),
          { response, json } = await request(url, options)

    if (response.ok) {
      setComment('')
      setComments(comments => [...comments, json])
      alert('oi')
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <textarea 
        id='comment'
        name='comment'
        placeHolder='Comente...'
        value={ comment } 
        onChange={({ target }) => setComment(target.value) }/>

      <button type='submit'><Enviar/></button>
      <Error error={error}/>
    </form>
  )
}

export default PhotoCommentsForm
