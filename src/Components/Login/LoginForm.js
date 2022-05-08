import React from 'react'
import { Link } from 'react-router-dom'

import useForm from '../../Hooks/useForm.js'
import { UserContext } from '../../UserContext.js'

import Button from '../Forms/Button.js'
import Input from '../Forms/Input.js'

import Error from '../Helper/Error.js'

const LoginForm = () => {
  const username = useForm(),
        password = useForm(),
        { userLogin, error, load } = React.useContext(UserContext)

  async function handleSubmit(e) {
    e.preventDefault()

    if (username.validade() && password.validade()) userLogin(username.value, password.value)
  }

  return (
    <section className='animeLeft'>
      <h1>Login Form</h1>

      <form action='' onSubmit={ handleSubmit }>
        <Input label='User' type='text' name='username' { ...username }/>
        <Input label='Password' type='password' name='password' { ...password }/>
        { load ? 
          (<button disabled>Carregando...</button>) 
          : 
          (<Button>ENTRAR</Button>)
        }

        <Error error={ error }/>
      </form>
      
      <Link to='/login/perdeu'>Perdeu a senha?</Link>

      <div>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>

        <Link to='/login/create'>Cadastros</Link>
      </div>
    </section>
  )
}

export default LoginForm
