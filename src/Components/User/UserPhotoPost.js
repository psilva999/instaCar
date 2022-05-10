import React, { useState, useEffect } from 'react'
import styles from './UserPhotoPost.module.css'

import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'

import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helper/Error'

import { PHOTO_POST } from '../../Api'
import { useNavigate } from 'react-router'

const UserPhotoPost = () => {
  const marca = useForm(),
        anoLancamento = useForm('number')

  const [img, setImg] = useState({}),
        { data, error, loading, request } = useFetch()
               
  let navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('marca', marca.value)
    formData.append('anoLancamento', anoLancamento.value)
    
    const token = window.localStorage.getItem('token'), 
          { url, options } = PHOTO_POST(formData, token)

    request(url, options)
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }

  useEffect(() => {
    if (data) navigate("/conta") 
  }, [data, navigate])

  function accountNavigate() {
    if (img.raw && marca.value && anoLancamento.value) navigate('/conta') 
  }
 
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={ handleSubmit }>
        <Input 
          label='Marca' 
          type='text' 
          name='marca' 
          {...marca}/>

        <Input 
          label='Ano de lançamento' 
          type='number' 
          name='anoLancamento'
          {...anoLancamento}/>

        <Input 
          className={ styles.file }
          name='img' 
          id='img' 
          type='file'
          onChange={ handleImgChange }
          />
        
        { 
          loading ? 
          (<Button disabled>Enviando...</Button>)
          :
          (<Button onClick={ accountNavigate }>Enviar</Button>) 
        }
        <Error error={ error }/>
      </form>

      <article>
        {img.preview && (
          <div 
            className={ styles.preview } 
            style={{ backgroundImage: `url('${img.preview}')` 
          }}>
          </div>
        )}
      </article>
    </section>
  )
}

export default UserPhotoPost
