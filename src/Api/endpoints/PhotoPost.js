import React from 'react'

const PhotoPost = () => {
  const [token, setToken] = React.useState(''),
        [marca, setMarca] = React.useState(''),

        [cor, setCor] =  React.useState(''),
        [idade, setIdade] = React.useState(''),
        [img, setImg] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData()
    formData.append('img', img)
    formData.append('marca', marca)

    formData.append('cor', cor)
    formData.append('idade', idade)

    alert(img)

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      
      headers: {
        Authorization: 'Bearer' + token,
      },

      body: formData,
    })
    
    .then(response => {
      return response.json()
    })

    .then(json => {
      return json
    })
  } 

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type='text'
        placeholder='token'
        value={ token }
        onChange={({ target }) => setToken(target.value)}
      />

      <input
        type='text'
        placeholder='marca'
        value={ marca }
        onChange={({ target }) => setMarca(target.value)}
      />

      <input
        type='text'
        placeholder='cor'
        value={ cor }
        onChange={({ target }) => setCor(target.value)}
      />

      <input
        type='text'
        placeholder='idade'
        value={ idade }
        onChange={({ target }) => setIdade(target.value)}
      />

      <input
        type='file'
        onChange={({ target }) => setImg(target.files[0])}
      />

      <button>Enviar</button>
    </form>
  )
}

export default PhotoPost
