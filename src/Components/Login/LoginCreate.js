import React from 'react'
import { USER_POST } from '../../api.js'

import useFetch from '../../Hooks/useFetch.js'
import Error from '../Helper/Error.js'

import useForm from '../../Hooks/useForm.js'
import UserContext from '../../UserContext.js'

import Button from '../Forms/Button.js'
import Input from '../Forms/Input.js'

const LoginCreate = () => {
  const username = useForm(),
        email = useForm('email'),
        password = useForm('password')

  const { userLogin } = React.useContext(UserContext),
        { loading, error, request } = useFetch()

  async function handleSubmit(e) {
    e.preventDefault()

    const {url, options} = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,      
    })
    
    const { response } = await request(url, options)

    if (response.ok) userLogin(username.value, password.value)
  } 

  return (
    <section>
      <h1>Cadastre-se</h1>

      <form onSubmit={ handleSubmit }>
        <Input label='User' type='text' name='username' {...username}/>
        <Input label='Email' type='email' name='email' {...email}/>
        <Input label='Senha' type='password' name='password' {...password}/>

        { loading ? 
        (<Button disabled>Cadastrando...</Button>) 
        : 
        (<Button>Cadastrar</Button>) }

        <Error error={error}/>
      </form>
    </section>
  )
}

export default LoginCreate
