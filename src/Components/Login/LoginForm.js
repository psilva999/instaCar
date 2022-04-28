import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm.js'

import Button from '../Forms/Button.js'
import Input from '../Forms/Input.js'

const LoginForm = () => {
  // const [username, setUsername] = React.useState(''),
  //       [password, setPassword] = React.useState('')
  
  const username = useForm(),
        password = useForm()

function handleSubmit(e) {
  e.preventDefault()

  if (username.validate() && password.validate()) {
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json'
    },

      body: JSON.stringify()
    })

    .then(response => {
      console.log(response)

      return response.json()
    })

    .then(json => console.log(json))
  } 
}

return (
    <section>
      <h1>Login Form</h1>

      <form action='' onSubmit={ handleSubmit }>
        <Input label='User' type='text' name='username' { ...username }/>
        <Input label='Password' type='password' name='password' { ...password }/>

        {/* <input 
          type='text' 
          value={ username }
          onChange={({target}) => setUsername(target.value)}
        />

        <input 
          type='text' 
          value={ password }
          onChange={({target}) => setPassword(target.value)}
        /> */}

        <Button>ENTRAR</Button>
      </form>

      <Link to='/login/create'>Cadastros</Link>
    </section>
  )
}

export default LoginForm
