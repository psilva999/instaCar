import React from 'react'

const types = {
  email: { 
    regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    message: 'E-mail inválido'
  },

  password: {
    regex: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/,
    message: 'Escolha uma senha com pelo menos 6 caracteres'
  }
}

const useForm = type => {
  const [value, setValue] = React.useState(''),
        [error, setError] = React.useState(null)

  function validate(value) {
    if(types === false) return true
    
    if (value.length === 0) { 
      setError('Coloque algum valor')
      return false
    }

    else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    }

    else {
      setError(null)
      return true
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value)

    setValue(target.value)
  }

  return {
    value, 
    setValue,

    onChange,
    error,

    validade: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm
