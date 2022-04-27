import React from 'react'

const TokenPost = () => {
  const [username, setUsername] = React.useState(''),
        [password, setPassword] = React.useState(''),
        [token, setToken] = React.useState('')

  function handleSubmit(e) {
    e.preventDefault()

    console.log(username, password, token)

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        username,
        password,
      }),
    })
    
    .then(response => {
      return response.json()
    })

    .then(json => {
      setToken(json.token)
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
        placeholder='password'

        name={ password }
        onChange={ ({ target }) => setPassword(target.value) }
      />

      <button>Enviar</button>
      <p style={{ wordBreak: 'break-all' }}>{ token }</p>
    </form>
  )
}

export default TokenPost