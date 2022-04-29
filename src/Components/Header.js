import React from 'react'
import styles from './css/Header.module.css'

import { Link } from 'react-router-dom'
import { ReactComponent as Car } from '../Assets/car.svg'
import { UserContext } from '../UserContext.js'

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext)

  return (
    <header>
      <nav className={`${styles.nav} container`}>
        <Link className={ styles.logo } to='/' aria-label='Car - Home'>
          InstaCar
          <Car/>
        </Link>

        { data ? (
          <Link to='/conta' className={ styles.login }> 
            {data.nome}
            <button onClick={ userLogout }>Sair</button>
          </Link>) 
            : 
          <Link to='/login' className={ styles.login }> 
          Login / Criar</Link>}
      </nav>
    </header>
  )
}

export default Header
