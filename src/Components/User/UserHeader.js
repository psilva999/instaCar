import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const UserHeader = () => {
  const [title, setTitle] = React.useState(''),
        location = useLocation()

  React.useEffect(() => {
    const { pathname } = location

    switch(pathname) {
      case '/conta/postar': 
        setTitle('Postar')
        break

      case '/conta/estatisticas': 
        setTitle('Estatísticas')
        break

      default:
        setTitle('Minha Conta')
    }
  }, [location])

  return (
    <article className={ styles.grid }> 
      <h1>{ title }</h1>

      <UserHeaderNav/>
    </article>
  )
}

export default UserHeader
