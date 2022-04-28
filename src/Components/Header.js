import React from 'react'
import { Link } from 'react-router-dom'

import styles from './css/Header.module.css'
import { ReactComponent as Car } from '../Assets/car.svg'

const Header = () => {
  return (
    <header>
      <nav className={`${styles.nav} container`}>
        <Link className={ styles.logo } to='/' aria-label='Car - Home'>
          InstaCar
          <Car/>
        
        </Link>

        <Link to='/login' className={ styles.login }>Login / Criar</Link>
      </nav>
    </header>
  )
}

export default Header
