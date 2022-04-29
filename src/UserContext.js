import React from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api.js'
import { useNavigate } from 'react-router-dom'

export const UserContext = React.createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null),
        [login, setLogin] = React.useState(null),

        [load, setLoad] = React.useState(false),
        [error, setError] = React.useState(null)
    
  const navigate = useNavigate()

  const userLogout = React.useCallback(async () => {
    setData(null)
    setError(null)
    setLoad(false)

    setLogin(false)
    window.localStorage.removeItem("token")
    navigate('/login')
  }, [navigate],)

  async function getUser(token) {
    const {url, options} = USER_GET(token),
          response = await fetch(url, options),
          json = await response.json()

    setData(json)
    setLogin(true)
  }

  async function userLogin(username, password) {
    try {
      setError(null)
      setLoad(true)

      const {url, options} = TOKEN_POST({username, password}),
            tokenRes = await fetch(url, options)

      if (!tokenRes.ok) throw new Error(`Error: usuário ou senha inválida`)

      const { token } = await tokenRes.json()
      
      window.localStorage.setItem("token", token)
      await getUser(token) 

      navigate('/conta')
    }

    catch (err) {
      setError(err.message)
      setLogin(false)
    }

    finally {
      setLoad(false)
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token')

      if (token) { 
        try {
          setError(null)
          setLoad(true)

          const { url, options } = TOKEN_VALIDATE_POST(token),
                response = await fetch(url, options)

          if(!response.ok) throw new Error("Token inválido")

          await getUser(token)

          const json = await response.json()
          console.log(json)
        }

        catch(err) {
          userLogout()
        }

        finally {
          setLoad(false)
        }

      }
    }

    autoLogin()
  }, [userLogout])

  return (
    <UserContext.Provider value={{ userLogin, userLogout, data, error, load, login }}>{ children }</UserContext.Provider>
  )  
}

export default UserContext
