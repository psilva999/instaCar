import React from 'react'

const PhotoGet = () => {
  const [id, setId] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()

    fetch(`https://www.dogsapi.origamid.dev/json/api/photo/${id}`)
    .then(response => {
      return response.json()
    })

    .then(json => {
      return json
    })
  }

  return (
    <form onSubmit={ handleSubmit }>
      
      <input type='text' value={ id } 
        onChange={({ target }) => setId(target.value)}
      />

      <button>Enviar</button>
    </form>
  )
}

export default PhotoGet
