import React from 'react'

const UserPost = () => {
  const [username, setUsername] = React.useState(''),
        [email, setEmail] =  React.useState(''),
        [password, setPassword] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()

    console.log(username, email, password)

    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        username,
        email,
        password,
      }),
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
        placeholder='username'

        value={ username } 
        onChange={({ target }) => setUsername(target.value)}
      />

      <input
        type='text'
        placeholder='email'

        name={ email }
        onChange={ ({ target }) => setEmail(target.value) }
      />

      <input
        type='text'
        placeholder='password'

        name={ password }
        onChange={ ({ target }) => setPassword(target.value) }
      />

      <button>Enviar</button>
    </form>
  )
}

export default UserPost
